import React from 'react';
import {
  AbsoluteFill,
  Audio,
  Easing,
  interpolate,
  Sequence,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { Rio as BackgroundArenaOtak } from '../background-arena-otak';
import { Rio as KsatriaPrefrontal } from '../ksatria-prefrontal';
import { Rio as PropsKoleksi } from '../props-koleksi';

export const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. Camera Panning upward toward #bg-gunung-otak summit (Frames 0-75)
  const cameraPanY = interpolate(frame, [0, 75], [0, 360], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const cameraScale = interpolate(frame, [0, 75], [1, 1.12], {
    easing: Easing.out(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // 2. Flag Planting & Continuous Wave Skew (Frames 35-240)
  const flagScale =
    frame >= 35
      ? spring({
          frame: frame - 35,
          fps,
          config: { damping: 90, mass: 0.6 },
        })
      : 0;
  const flagWaveSkew = Math.sin(frame * 0.25) * 4.5;
  const swordArmRot = interpolate(frame, [20, 50], [-38, 0], {
    easing: Easing.out(Easing.back(1.6)),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // 3. Call to Action 3D Typography Pop-up (Frames 85-240)
  const ctaLine1Scale =
    frame >= 85
      ? spring({
          frame: frame - 85,
          fps,
          config: { damping: 95, mass: 0.7 },
        })
      : 0;
  const ctaLine2Scale =
    frame >= 115
      ? spring({
          frame: frame - 115,
          fps,
          config: { damping: 95, mass: 0.7 },
        })
      : 0;
  const ctaPulse =
    frame >= 150 ? 1 + Math.sin((frame - 150) * 0.18) * 0.03 : 1;

  return (
    <AbsoluteFill style={{ overflow: 'hidden', backgroundColor: '#FFF0E5' }}>
      {/* Voice Over Babak 5 */}
      <Audio src={staticFile('scene5.mp3')} volume={1} />

      {/* SFX Babak 5: Bendera Ditancapkan & Simbal Kemenangan */}
      <Sequence from={35} durationInFrames={140}>
        <Audio src={staticFile('sfx_flag_flap.wav')} volume={0.65} />
      </Sequence>
      <Sequence from={42} durationInFrames={160}>
        <Audio src={staticFile('sfx_victory_cymbal.wav')} volume={0.7} />
      </Sequence>

      <style>{`
        .scene5-knight #ekspresi-gagah {
          display: inline !important;
        }
        .scene5-knight #ekspresi-kaget,
        .scene5-knight #ekspresi-tidur {
          display: none !important;
        }
        .scene5-knight #pedang-cahaya {
          opacity: 1 !important;
        }
        .scene5-knight #lengan-kanan-pedang {
          transform-box: fill-box;
          transform-origin: top right;
          transform: rotate(${swordArmRot}deg);
        }

        /* Isolate #prop-bendera-kemenangan from PropsKoleksi */
        .scene5-flag #prop-tumpukan-buku-berat,
        .scene5-flag #prop-kertas-2-menit,
        .scene5-flag #prop-meja-laptop {
          display: none !important;
        }
        .scene5-flag #prop-bendera-kemenangan {
          transform-box: fill-box;
          transform-origin: bottom left;
          transform: skewY(${flagWaveSkew}deg);
        }
      `}</style>

      {/* Camera Pan Rig Focused on Brain Mountain Peak */}
      <AbsoluteFill
        style={{
          transform: `translateY(${cameraPanY}px) scale(${cameraScale})`,
          transformOrigin: 'center center',
        }}
      >
        <BackgroundArenaOtak width="100%" height="100%" />

        {/* Ksatria Prefrontal Standing Victorious on #bg-gunung-otak Summit */}
        <div
          className="scene5-knight"
          style={{
            position: 'absolute',
            left: '50%',
            top: 430,
            width: 520,
            height: 600,
            marginLeft: -290,
          }}
        >
          <KsatriaPrefrontal width="100%" height="100%" />
        </div>

        {/* Victory Flag Planted on Summit (#prop-bendera-kemenangan) */}
        {frame >= 35 && (
          <div
            className="scene5-flag"
            style={{
              position: 'absolute',
              left: '50%',
              top: 230,
              width: 720,
              height: 540,
              marginLeft: -40,
              transform: `scale(${flagScale})`,
              transformOrigin: '20% 90%',
            }}
          >
            <PropsKoleksi width="100%" height="100%" />
          </div>
        )}
      </AbsoluteFill>

      {/* 3D Call to Action Typography Overlay */}
      <AbsoluteFill
        style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingBottom: 220,
          pointerEvents: 'none',
        }}
      >
        {/* Line 1: KALAHKAN MONSTERMU! */}
        <div
          style={{
            transform: `scale(${ctaLine1Scale * ctaPulse})`,
            backgroundColor: '#F6BD60',
            color: '#4A5568',
            padding: '24px 52px',
            borderRadius: 36,
            border: '8px solid #FFFFFF',
            fontFamily: "'Plus Jakarta Sans', 'Fredoka', sans-serif",
            fontWeight: 900,
            fontSize: 66,
            letterSpacing: '-0.02em',
            textAlign: 'center',
            boxShadow: '0 16px 0 #5E4338, 0 28px 40px rgba(94, 67, 56, 0.35)',
            marginBottom: 28,
          }}
        >
          KALAHKAN MONSTERMU!
        </div>

        {/* Line 2: MULAI 2 MENIT PERTAMAMU! */}
        <div
          style={{
            transform: `scale(${ctaLine2Scale * ctaPulse})`,
            backgroundColor: '#84A59D',
            color: '#FFFFFF',
            padding: '22px 48px',
            borderRadius: 32,
            border: '6px solid #FFF0E5',
            fontFamily: "'Plus Jakarta Sans', 'Fredoka', sans-serif",
            fontWeight: 900,
            fontSize: 54,
            letterSpacing: '-0.01em',
            textAlign: 'center',
            textShadow: '0 6px 0 #3D5A53',
            boxShadow: '0 14px 0 #3D5A53, 0 24px 36px rgba(61, 90, 83, 0.35)',
          }}
        >
          🚀 MULAI 2 MENIT PERTAMAMU!
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};