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
import { Rio as EfekSinarDopamin } from '../efek-sinar-dopamin';
import { Rio as PropsKoleksi } from '../props-koleksi';
import { Rio as AsetTambahan } from '../aset-tambahan';

export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Impact Freeze Frame (0.1s = frames 245-248)
  const isFlashFrame = frame >= 245 && frame <= 248;
  const effectiveFrame = isFlashFrame ? 245 : frame;

  // 1. Serangan Ksatria (Frames 0-95): Lunge & Throw #prop-tumpukan-buku-berat
  const knightLunge = interpolate(
    effectiveFrame,
    [0, 28, 45, 245, 280],
    [-210, -70, -140, -140, -250],
    {
      easing: Easing.inOut(Easing.cubic),
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );
  const knightSquashY = interpolate(
    effectiveFrame,
    [0, 18, 32, 50],
    [1, 0.86, 1.12, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );
  const knightStretchX = 1 + (1 - knightSquashY) * 0.6;

  // Heavy Book Pile Projectile (Frames 28-115)
  const showBooks = effectiveFrame >= 28 && effectiveFrame <= 115;
  const bookProgress = interpolate(effectiveFrame, [28, 92], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const bookX = interpolate(bookProgress, [0, 1], [-120, 160], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const bookArcY = interpolate(bookProgress, [0, 0.5, 1], [-60, -280, -40], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const bookRotation = interpolate(bookProgress, [0, 1], [-15, 25], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // 2. Reaksi Monster Panik (Frames 92-255)
  const isMonsterPanicking = effectiveFrame >= 92 && effectiveFrame < 255;
  const isMonsterChilling = effectiveFrame >= 255;
  const panicShakeX =
    effectiveFrame >= 92 && effectiveFrame < 165
      ? Math.sin(effectiveFrame * 3.8) * 10
      : 0;

  // 3. Serangan Balik Sinar Dopamin (Frames 165-255)
  const showLaser = effectiveFrame >= 165 && effectiveFrame <= 255;
  const beamScaleX =
    effectiveFrame >= 165
      ? spring({
          frame: effectiveFrame - 165,
          fps,
          config: { damping: 85, mass: 0.5 },
        })
      : 0;
  const iconFloatY = Math.sin(effectiveFrame * 0.35) * 18;
  const iconSpin = (effectiveFrame - 165) * 4;

  // 4. Hit Impact & Ksatria KO (Frames 245-360)
  const isKnightShocked = effectiveFrame >= 240 && effectiveFrame < 275;
  const isKnightSleeping = effectiveFrame >= 275;
  const isKnightKO = effectiveFrame >= 245;

  const knightFallRotation = interpolate(effectiveFrame, [248, 285], [0, -78], {
    easing: Easing.out(Easing.bounce),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const knightFallY = interpolate(effectiveFrame, [248, 285], [0, 95], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Detached Shield Flying Off (Frames 245-305)
  const shieldFlyProgress = interpolate(effectiveFrame, [245, 305], [0, 1], {
    easing: Easing.out(Easing.quad),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const shieldFlyX = interpolate(shieldFlyProgress, [0, 1], [-110, -680], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const shieldFlyY = interpolate(
    shieldFlyProgress,
    [0, 0.4, 1],
    [-120, -420, 200],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );
  const shieldFlyRot = interpolate(shieldFlyProgress, [0, 1], [0, -540], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Camera Shake on Laser Impact (Frames 245-268)
  const hitShakeDecay = interpolate(frame, [245, 268], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const hitShakeX =
    frame >= 245 && frame <= 268 ? Math.sin(frame * 3.5) * 24 * hitShakeDecay : 0;
  const hitShakeY =
    frame >= 245 && frame <= 268 ? Math.cos(frame * 3.1) * 18 * hitShakeDecay : 0;

  return (
    <AbsoluteFill style={{ overflow: 'hidden', backgroundColor: '#FFF0E5' }}>
      {/* Voice Over Babak 3 */}
      <Audio src={staticFile('scene3.mp3')} volume={1} />

      {/* SFX Babak 3: Lempar Buku Berat, Sirine Panik, Laser Pew, Notif Spam, Hit Impact & Power Down */}
      <Sequence from={28} durationInFrames={65}>
        <Audio src={staticFile('sfx_heavy_throw.wav')} volume={0.65} />
      </Sequence>
      <Sequence from={92} durationInFrames={75}>
        <Audio src={staticFile('sfx_siren_panic.wav')} volume={0.55} />
      </Sequence>
      <Sequence from={165} durationInFrames={85}>
        <Audio src={staticFile('sfx_laser_pew.wav')} volume={0.65} />
      </Sequence>
      <Sequence from={170} durationInFrames={80}>
        <Audio src={staticFile('sfx_notif_spam.wav')} volume={0.6} />
      </Sequence>
      <Sequence from={245} durationInFrames={60}>
        <Audio src={staticFile('sfx_hit_impact.wav')} volume={0.8} />
      </Sequence>
      <Sequence from={252} durationInFrames={85}>
        <Audio src={staticFile('sfx_power_down.wav')} volume={0.65} />
      </Sequence>

      <style>{`
        /* Ksatria State Toggles */
        .scene3-knight #ekspresi-gagah {
          display: ${!isKnightShocked && !isKnightSleeping ? 'inline' : 'none'} !important;
        }
        .scene3-knight #ekspresi-kaget {
          display: ${isKnightShocked ? 'inline' : 'none'} !important;
        }
        .scene3-knight #ekspresi-tidur {
          display: ${isKnightSleeping ? 'inline' : 'none'} !important;
        }
        .scene3-knight #pedang-cahaya {
          opacity: ${isKnightKO ? 0 : 1} !important;
        }
        .scene3-knight #tameng-todo {
          display: ${isKnightKO ? 'none' : 'inline'} !important;
        }

        /* Monster State Toggles */
        .scene3-monster #ekspresi-nyengir {
          display: ${!isMonsterPanicking ? 'inline' : 'none'} !important;
        }
        .scene3-monster #ekspresi-panik {
          display: ${isMonsterPanicking ? 'inline' : 'none'} !important;
        }
        .scene3-monster #ekspresi-menguap-tidur {
          display: none !important;
        }
        .scene3-monster #bantal-rebahan {
          display: ${isMonsterChilling ? 'inline' : 'none'} !important;
        }

        /* Isolate #prop-tumpukan-buku-berat from PropsKoleksi */
        .scene3-books #prop-kertas-2-menit,
        .scene3-books #prop-bendera-kemenangan,
        .scene3-books #prop-meja-laptop {
          display: none !important;
        }

        /* Isolate #patch-tameng-lepas from AsetTambahan */
        .scene3-flying-shield #patch-pedang-padam,
        .scene3-flying-shield #patch-lengan-tidur-monster,
        .scene3-flying-shield #patch-efek-zzz {
          display: none !important;
        }

        /* Dopamine Icons Floating */
        .scene3-laser #ikon-like,
        .scene3-laser #ikon-video,
        .scene3-laser #ikon-game {
          transform-box: fill-box;
          transform-origin: center;
          transform: translateY(${iconFloatY}px) rotate(${iconSpin}deg);
        }
      `}</style>

      <AbsoluteFill
        style={{
          transform: `translate(${hitShakeX}px, ${hitShakeY}px)`,
        }}
      >
        <BackgroundArenaOtak width="100%" height="100%" />

        {/* Status HUD */}
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
              backgroundColor: isKnightKO
                ? '#4A5568'
                : isMonsterPanicking
                ? '#B82525'
                : '#F6BD60',
              color: '#FFFFFF',
              padding: '18px 44px',
              borderRadius: 999,
              fontFamily: "'Plus Jakarta Sans', 'Fredoka', sans-serif",
              fontWeight: 900,
              fontSize: 40,
              boxShadow: '0 10px 0 rgba(0,0,0,0.22)',
            }}
          >
            {isKnightKO
              ? '💥 LOGIKA K.O. = PROKRASTINASI!'
              : isMonsterPanicking
              ? '🚨 MONSTER PANIK: SINAR DOPAMIN!'
              : '📚 SERANGAN TUGAS BERAT!'}
          </div>
        </div>

        {/* Ksatria Prefrontal */}
        <div
          className="scene3-knight"
          style={{
            position: 'absolute',
            left: '50%',
            bottom: 240,
            width: 560,
            height: 650,
            marginLeft: -280,
            transform: `translate(${knightLunge}px, ${knightFallY}px) rotate(${knightFallRotation}deg) scale(${knightStretchX}, ${knightSquashY})`,
            transformOrigin: 'center 80%',
          }}
        >
          <KsatriaPrefrontal width="100%" height="100%" />
        </div>

        {/* Monster Limbik */}
        <div
          className="scene3-monster"
          style={{
            position: 'absolute',
            left: '50%',
            bottom: 250,
            width: 580,
            height: 580,
            marginLeft: -290,
            transform: `translate(${220 + panicShakeX}px, 0px)`,
          }}
        >
          <MonsterLimbik width="100%" height="100%" />
        </div>

        {/* Thrown Heavy Book Pile (#prop-tumpukan-buku-berat) */}
        {showBooks && (
          <div
            className="scene3-books"
            style={{
              position: 'absolute',
              left: '50%',
              bottom: 520,
              width: 680,
              height: 510,
              marginLeft: -180,
              transform: `translate(${bookX}px, ${bookArcY}px) rotate(${bookRotation}deg) scale(0.95)`,
              pointerEvents: 'none',
            }}
          >
            <PropsKoleksi width="100%" height="100%" />
          </div>
        )}

        {/* Detached Shield Knockback (#patch-tameng-lepas) */}
        {isKnightKO && effectiveFrame <= 315 && (
          <div
            className="scene3-flying-shield"
            style={{
              position: 'absolute',
              left: '50%',
              bottom: 480,
              width: 650,
              height: 480,
              marginLeft: -325,
              transform: `translate(${shieldFlyX}px, ${shieldFlyY}px) rotate(${shieldFlyRot}deg)`,
              pointerEvents: 'none',
            }}
          >
            <AsetTambahan width="100%" height="100%" />
          </div>
        )}

        {/* Dopamine Laser Beam (#sinar-dopamin-root) */}
        {showLaser && (
          <div
            className="scene3-laser"
            style={{
              position: 'absolute',
              left: '50%',
              bottom: 430,
              width: 780,
              height: 340,
              marginLeft: -390,
              transform: `scaleX(${beamScaleX})`,
              transformOrigin: 'right center',
              pointerEvents: 'none',
            }}
          >
            <EfekSinarDopamin width="100%" height="100%" />
          </div>
        )}
      </AbsoluteFill>

      {/* 0.1s Impact White Flash Frame (Frames 245-248) */}
      {isFlashFrame && (
        <AbsoluteFill
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.88)',
            pointerEvents: 'none',
          }}
        />
      )}
    </AbsoluteFill>
  );
};