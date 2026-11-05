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
import { Rio as MonsterLimbik } from '../monster-limbik';
import { Rio as PropsKoleksi } from '../props-koleksi';
import { Rio as AsetTambahan } from '../aset-tambahan';

export const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isRewinding = frame < 75;
  const isMonsterAsleep = frame >= 235;
  const isSwordIgnited = frame >= 305 || frame < 35;

  // 1. Rewind Recovery (Frames 0-75)
  const rewindRotation = interpolate(frame, [0, 65], [-78, 0], {
    easing: Easing.inOut(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const rewindY = interpolate(frame, [0, 65], [95, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // 2. Ksatria Position (Sneaky Tiptoe 145-225 & Victory Walk-Past 315-375)
  const tiptoeX = interpolate(frame, [145, 225], [-220, -40], {
    easing: Easing.inOut(Easing.quad),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const walkPastX = interpolate(frame, [315, 375], [0, 560], {
    easing: Easing.inOut(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const knightX = frame < 145 ? -220 : tiptoeX + walkPastX;

  // Walk cycle leg alternation during tiptoe (145-225) & walk-past (315-375)
  const isWalking =
    (frame >= 145 && frame <= 225) || (frame >= 315 && frame <= 375);
  const leftLegY = isWalking ? Math.max(0, Math.sin(frame * 0.55) * -22) : 0;
  const rightLegY = isWalking
    ? Math.max(0, Math.sin(frame * 0.55 + Math.PI) * -22)
    : 0;
  const bodySneakTilt =
    frame >= 145 && frame <= 225 ? Math.sin(frame * 0.28) * 4 + 6 : 0;

  // 3. 2-Minute Paper Reveal (#prop-kertas-2-menit) at Frame 160+
  const showPaper = frame >= 160 && frame <= 325;
  const paperScale =
    frame >= 160
      ? spring({
          frame: frame - 160,
          fps,
          config: { damping: 130, mass: 0.6 },
        })
      : 0;

  // 4. Floating Zzz Animation (Frames 240+)
  const zzzCycle = Math.max(0, (frame - 240) % 60);
  const zzzY = interpolate(zzzCycle, [0, 60], [0, -70], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const zzzOpacity = interpolate(zzzCycle, [0, 15, 45, 60], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill style={{ overflow: 'hidden', backgroundColor: '#FFF0E5' }}>
      {/* Voice Over Babak 4 */}
      <Audio src={staticFile('scene4.mp3')} volume={1} />

      {/* SFX Babak 4: VCR Rewind, Langkah Mengendap Tiptoe, Menguap & Mendengkur */}
      <Sequence from={0} durationInFrames={75}>
        <Audio src={staticFile('sfx_vcr_rewind.wav')} volume={0.65} />
      </Sequence>
      <Sequence from={145} durationInFrames={80}>
        <Audio src={staticFile('sfx_tiptoe.wav')} volume={0.6} />
      </Sequence>
      <Sequence from={235} durationInFrames={55}>
        <Audio src={staticFile('sfx_cute_yawn.wav')} volume={0.65} />
      </Sequence>
      <Sequence from={275} durationInFrames={115}>
        <Audio src={staticFile('sfx_snoring.wav')} volume={0.5} />
      </Sequence>

      <style>{`
        /* Ksatria State & Walk Cycle */
        .scene4-knight #ekspresi-gagah {
          display: ${frame < 30 ? 'none' : 'inline'} !important;
        }
        .scene4-knight #ekspresi-kaget {
          display: none !important;
        }
        .scene4-knight #ekspresi-tidur {
          display: ${frame < 30 ? 'inline' : 'none'} !important;
        }
        .scene4-knight #pedang-cahaya {
          opacity: ${isSwordIgnited ? 1 : 0.2} !important;
        }
        .scene4-knight #kaki-kiri {
          transform-box: fill-box;
          transform-origin: top center;
          transform: translateY(${leftLegY}px);
        }
        .scene4-knight #kaki-kanan {
          transform-box: fill-box;
          transform-origin: top center;
          transform: translateY(${rightLegY}px);
        }

        /* Monster State Toggles */
        .scene4-monster #ekspresi-nyengir {
          display: ${!isMonsterAsleep ? 'inline' : 'none'} !important;
        }
        .scene4-monster #ekspresi-panik {
          display: none !important;
        }
        .scene4-monster #ekspresi-menguap-tidur {
          display: ${isMonsterAsleep ? 'inline' : 'none'} !important;
        }
        .scene4-monster #bantal-rebahan {
          display: ${isMonsterAsleep ? 'inline' : 'none'} !important;
        }
        .scene4-monster #lengan-kiri-hp,
        .scene4-monster #lengan-kanan-joystick {
          display: ${isMonsterAsleep ? 'none' : 'inline'} !important;
        }

        /* Isolate #prop-tumpukan-buku-berat behind Ksatria */
        .scene4-hidden-books #prop-kertas-2-menit,
        .scene4-hidden-books #prop-bendera-kemenangan,
        .scene4-hidden-books #prop-meja-laptop {
          display: none !important;
        }

        /* Isolate #prop-kertas-2-menit */
        .scene4-paper #prop-tumpukan-buku-berat,
        .scene4-paper #prop-bendera-kemenangan,
        .scene4-paper #prop-meja-laptop {
          display: none !important;
        }

        /* Isolate #patch-efek-zzz & #patch-lengan-tidur-monster */
        .scene4-sleep-patches #patch-pedang-padam,
        .scene4-sleep-patches #patch-tameng-lepas {
          display: none !important;
        }
        .scene4-sleep-patches #patch-efek-zzz {
          transform-box: fill-box;
          transform-origin: center;
          transform: translateY(${zzzY}px);
          opacity: ${zzzOpacity};
        }
      `}</style>

      <BackgroundArenaOtak width="100%" height="100%" />

      {/* Top Strategy Banner */}
      <div
        style={{
          position: 'absolute',
          top: 150,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: isRewinding ? '#4A5568' : '#84A59D',
            color: '#FFFFFF',
            padding: '18px 46px',
            borderRadius: 999,
            fontFamily: "'Plus Jakarta Sans', 'Fredoka', sans-serif",
            fontWeight: 900,
            fontSize: 42,
            letterSpacing: isRewinding ? '0.12em' : '-0.01em',
            boxShadow: '0 10px 0 #5D7D75',
          }}
        >
          {isRewinding
            ? '◀◀ REWIND: PUTAR ULANG!'
            : '💡 TAKTIK SAINS: ATURAN 2 MENIT'}
        </div>
      </div>

      {/* Monster Limbik (Right Arena) */}
      <div
        className="scene4-monster"
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 250,
          width: 580,
          height: 580,
          marginLeft: -290,
          transform: `translate(210px, ${isMonsterAsleep ? 35 : 0}px)`,
        }}
      >
        <MonsterLimbik width="100%" height="100%" />
      </div>

      {/* Sleeping Monster Arms & Floating Zzz (#patch-lengan-tidur-monster + #patch-efek-zzz) */}
      {isMonsterAsleep && (
        <div
          className="scene4-sleep-patches"
          style={{
            position: 'absolute',
            left: '50%',
            bottom: 240,
            width: 720,
            height: 540,
            marginLeft: 10,
            pointerEvents: 'none',
          }}
        >
          <AsetTambahan width="100%" height="100%" />
        </div>
      )}

      {/* Ksatria Prefrontal + Hidden Heavy Books Behind Back */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          bottom: 240,
          width: 560,
          height: 650,
          marginLeft: -280,
          transform: `translate(${knightX}px, ${rewindY}px) rotate(${rewindRotation + bodySneakTilt}deg)`,
          transformOrigin: 'center 80%',
          zIndex: 5,
        }}
      >
        {/* Heavy Books Hidden Behind Ksatria's Back (Frames 75-315) */}
        {frame >= 75 && frame <= 315 && (
          <div
            className="scene4-hidden-books"
            style={{
              position: 'absolute',
              left: -130,
              top: 180,
              width: 520,
              height: 390,
              transform: 'scale(0.65) rotate(-18deg)',
              zIndex: -1,
              opacity: 0.92,
            }}
          >
            <PropsKoleksi width="100%" height="100%" />
          </div>
        )}

        <div className="scene4-knight" style={{ width: '100%', height: '100%' }}>
          <KsatriaPrefrontal width="100%" height="100%" />
        </div>

        {/* 2-Minute Light Paper Extended Forward (#prop-kertas-2-menit) */}
        {showPaper && (
          <div
            className="scene4-paper"
            style={{
              position: 'absolute',
              right: -240,
              top: 170,
              width: 600,
              height: 450,
              transform: `scale(${paperScale * 0.85})`,
              transformOrigin: 'center center',
            }}
          >
            <PropsKoleksi width="100%" height="100%" />
          </div>
        )}
      </div>

      {/* VHS Rewind Scanline Overlay (Frames 0-75) */}
      {isRewinding && (
        <AbsoluteFill
          style={{
            background:
              'repeating-linear-gradient(0deg, rgba(255,255,255,0.0) 0px, rgba(255,255,255,0.0) 6px, rgba(74,85,104,0.18) 7px, rgba(74,85,104,0.18) 10px)',
            pointerEvents: 'none',
            zIndex: 20,
          }}
        />
      )}
    </AbsoluteFill>
  );
};