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

export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Subtle parallax on neuron network
  const neuronParallaxX = Math.sin(frame * 0.04) * 18;
  const neuronParallaxY = Math.cos(frame * 0.03) * 10;

  // 1. Ksatria Masuk (Frames 0-115): Superhero Landing from left
  const knightJumpSpring = spring({
    frame,
    fps,
    config: { damping: 95, mass: 0.8 },
  });
  const knightX = interpolate(knightJumpSpring, [0, 1], [-650, -210], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const knightArcY = interpolate(frame, [0, 14, 28], [-380, -460, 0], {
    easing: Easing.inOut(Easing.quad),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // 3D Clay Squash & Stretch on Ksatria Landing (around frame 24-52)
  const knightSquash = interpolate(
    frame,
    [24, 30, 42, 52],
    [1.12, 0.82, 1.05, 1.0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );
  const knightStretchX = 1 + (1 - knightSquash) * 0.65;

  // 2. Monster Jatuh Bruk! (Frames 115-195)
  const monsterDropY = interpolate(frame, [115, 132], [-1300, 0], {
    easing: Easing.in(Easing.quad),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Impact Camera Shake (Frames 132-152)
  const shakeDecay = interpolate(frame, [132, 152], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const cameraShakeX =
    frame >= 132 && frame <= 152 ? Math.cos(frame * 2.8) * 16 * shakeDecay : 0;
  const cameraShakeY =
    frame >= 132 && frame <= 152 ? Math.sin(frame * 3.2) * 24 * shakeDecay : 0;

  // Monster Squash & Stretch on impact (frame 132+)
  const monsterImpactSpring = spring({
    frame: Math.max(0, frame - 132),
    fps,
    config: { damping: 80, mass: 0.6 },
  });
  const monsterScaleY =
    frame < 132
      ? 1.1
      : interpolate(monsterImpactSpring, [0, 0.35, 1], [0.72, 1.08, 1.0], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        });
  const monsterScaleX = 1 + (1 - monsterScaleY) * 0.65;

  // 3. Gestur Monster Meremehkan (Frames 195-300)
  const armBobDeg =
    frame >= 145 ? Math.sin((frame - 145) * 0.25) * 10 : 0;
  const knightIdleY = frame >= 55 ? Math.sin(frame * 0.12) * 6 : 0;

  // Fighter Name Badges
  const knightBadgeScale = spring({
    frame: Math.max(0, frame - 32),
    fps,
    config: { damping: 110, mass: 0.6 },
  });
  const monsterBadgeScale =
    frame >= 135
      ? spring({
          frame: frame - 135,
          fps,
          config: { damping: 110, mass: 0.6 },
        })
      : 0;

  return (
    <AbsoluteFill style={{ overflow: 'hidden', backgroundColor: '#FFF0E5' }}>
      {/* Voice Over Babak 2 */}
      <Audio src={staticFile('scene2.mp3')} volume={1} />

      {/* SFX Babak 2: Superhero Landing, Monster Heavy Drop & Camera Shake */}
      <Sequence from={22} durationInFrames={65}>
        <Audio src={staticFile('sfx_superhero_land.wav')} volume={0.65} />
      </Sequence>
      <Sequence from={126} durationInFrames={65}>
        <Audio src={staticFile('sfx_heavy_drop.wav')} volume={0.75} />
      </Sequence>
      <Sequence from={132} durationInFrames={55}>
        <Audio src={staticFile('sfx_camera_shake.wav')} volume={0.65} />
      </Sequence>

      <style>{`
        .scene2-bg #bg-jaringan-neuron {
          transform: translate(${neuronParallaxX}px, ${neuronParallaxY}px);
        }
        /* Ksatria Expressions & Props */
        .scene2-knight #ekspresi-gagah {
          display: inline !important;
        }
        .scene2-knight #ekspresi-kaget,
        .scene2-knight #ekspresi-tidur {
          display: none !important;
        }
        .scene2-knight #pedang-cahaya {
          opacity: 1 !important;
        }
        /* Monster Expressions & Distraction Arms */
        .scene2-monster #bantal-rebahan {
          display: none !important;
        }
        .scene2-monster #ekspresi-nyengir {
          display: inline !important;
        }
        .scene2-monster #ekspresi-panik,
        .scene2-monster #ekspresi-menguap-tidur {
          display: none !important;
        }
        .scene2-monster #badan-monster {
          transform-box: fill-box;
          transform-origin: bottom center;
          transform: scale(${monsterScaleX}, ${monsterScaleY});
        }
        .scene2-monster #lengan-kiri-hp {
          transform-box: fill-box;
          transform-origin: center;
          transform: rotate(${armBobDeg}deg);
        }
        .scene2-monster #lengan-kanan-joystick {
          transform-box: fill-box;
          transform-origin: center;
          transform: rotate(${-armBobDeg}deg);
        }
      `}</style>

      {/* Scene Container with Camera Shake */}
      <AbsoluteFill
        style={{
          transform: `translate(${cameraShakeX}px, ${cameraShakeY}px)`,
        }}
      >
        <div className="scene2-bg" style={{ width: '100%', height: '100%' }}>
          <BackgroundArenaOtak width="100%" height="100%" />
        </div>

        {/* VS Header Banner */}
        <div
          style={{
            position: 'absolute',
            top: 150,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            gap: 28,
            alignItems: 'center',
          }}
        >
          <div
            style={{
              transform: `scale(${knightBadgeScale})`,
              backgroundColor: '#84A59D',
              color: '#FFFFFF',
              padding: '16px 34px',
              borderRadius: 24,
              fontFamily: "'Plus Jakarta Sans', 'Fredoka', sans-serif",
              fontWeight: 900,
              fontSize: 34,
              boxShadow: '0 8px 0 #5D7D75',
            }}
          >
            🛡️ KSATRIA PREFRONTAL
          </div>

          {frame >= 135 && (
            <div
              style={{
                transform: `scale(${monsterBadgeScale})`,
                backgroundColor: '#F28482',
                color: '#FFFFFF',
                padding: '16px 34px',
                borderRadius: 24,
                fontFamily: "'Plus Jakarta Sans', 'Fredoka', sans-serif",
                fontWeight: 900,
                fontSize: 34,
                boxShadow: '0 8px 0 #9E3B39',
              }}
            >
              👾 MONSTER LIMBIK
            </div>
          )}
        </div>

        {/* Ksatria Prefrontal (Left Arena) */}
        <div
          className="scene2-knight"
          style={{
            position: 'absolute',
            left: '50%',
            bottom: 240,
            width: 560,
            height: 650,
            marginLeft: -280,
            transform: `translate(${knightX}px, ${knightArcY + knightIdleY}px) scale(${knightStretchX}, ${knightSquash})`,
            transformOrigin: 'bottom center',
          }}
        >
          <KsatriaPrefrontal width="100%" height="100%" />
        </div>

        {/* Monster Limbik (Right Arena) */}
        {frame >= 115 && (
          <div
            className="scene2-monster"
            style={{
              position: 'absolute',
              left: '50%',
              bottom: 250,
              width: 580,
              height: 580,
              marginLeft: -290,
              transform: `translate(220px, ${monsterDropY}px)`,
              transformOrigin: 'bottom center',
            }}
          >
            <MonsterLimbik width="100%" height="100%" />
          </div>
        )}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};