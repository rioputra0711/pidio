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
import { Rio as ManusiaRebahan } from '../manusia-rebahan';
import { Rio as BackgroundArenaOtak } from '../background-arena-otak';

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // State: 0-80 Santai Scroll | 80-155 Konflik Ingat Tugas | 155-193 Zoom-in Ekstrem | 193-210 Hold
  const isAnxious = frame >= 80;

  // Looping thumb scroll (frames 0-80)
  const thumbY = isAnxious ? 0 : Math.sin(frame * 0.35) * 10;
  const thumbRot = isAnxious ? 0 : Math.sin(frame * 0.35) * 4;

  // Screen glow opacity dimming when conflict triggers at frame 80
  const screenPulse = 0.8 + Math.sin(frame * 0.25) * 0.1;
  const screenDim = interpolate(frame, [80, 120], [0.85, 0.15], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const screenOpacity = isAnxious ? screenDim : screenPulse;

  // Head jolt & anxious shake at frame 80
  const conflictSpring = spring({
    frame: Math.max(0, frame - 80),
    fps,
    config: { damping: 90, mass: 0.6 },
  });
  const anxiousShakeX =
    frame >= 80 && frame <= 115
      ? Math.sin((frame - 80) * 1.8) * 10 * (1 - (frame - 80) / 35)
      : 0;
  const headJumpY =
    frame >= 80 && frame <= 110
      ? interpolate(conflictSpring, [0, 0.5, 1], [0, -14, 0], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        })
      : 0;

  // Extreme Camera Zoom-In to Forehead (#kepala)
  const zoomProgress = interpolate(frame, [155, 193], [0, 1], {
    easing: Easing.inOut(Easing.cubic),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const cameraScale = interpolate(zoomProgress, [0, 1], [1, 18], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const cameraTranslateX = interpolate(zoomProgress, [0, 1], [0, 260], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const cameraTranslateY = interpolate(zoomProgress, [0, 1], [0, 150], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Cross-fade into Brain Arena at the end of the zoom
  const arenaOpacity = interpolate(frame, [168, 193], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Floating task alert badge when conflict hits
  const alertScale =
    frame >= 80
      ? spring({
          frame: frame - 80,
          fps,
          config: { damping: 85, mass: 0.5 },
        })
      : 0;
  const alertOpacity = interpolate(frame, [150, 168], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(180deg, #FFF0E5 0%, #F7D9C4 65%, #E8B89A 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Voice Over Babak 1 */}
      <Audio src={staticFile('scene1.mp3')} volume={1} />

      {/* SFX Babak 1: Transisi Zoom-in Ekstrem ke Dahi */}
      <Sequence from={155} durationInFrames={55}>
        <Audio src={staticFile('sfx_swoosh_fast.wav')} volume={0.7} />
      </Sequence>

      <style>{`
        .scene1-character #alis-tenang,
        .scene1-character #mulut-tenang {
          display: ${isAnxious ? 'none' : 'inline'} !important;
        }
        .scene1-character #alis-cemas,
        .scene1-character #mulut-cemas {
          display: ${isAnxious ? 'inline' : 'none'} !important;
        }
        .scene1-character #jempol-scroll {
          transform-box: fill-box;
          transform-origin: center;
          transform: translateY(${thumbY}px) rotate(${thumbRot}deg);
        }
        .scene1-character #cahaya-layar {
          opacity: ${screenOpacity} !important;
        }
        .scene1-character #kepala {
          transform-box: fill-box;
          transform-origin: center;
          transform: translate(${anxiousShakeX}px, ${headJumpY}px);
        }
      `}</style>

      {/* Camera Rig for Extreme Zoom-in to Forehead */}
      <AbsoluteFill
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          transform: `translate(${cameraTranslateX}px, ${cameraTranslateY}px) scale(${cameraScale})`,
          transformOrigin: '34% 44%',
        }}
      >
        {/* Top Context Pill */}
        <div
          style={{
            position: 'absolute',
            top: 220,
            padding: '18px 42px',
            borderRadius: 999,
            backgroundColor: isAnxious ? '#F28482' : '#84A59D',
            color: '#FFFFFF',
            fontFamily: "'Plus Jakarta Sans', 'Fredoka', sans-serif",
            fontSize: 42,
            fontWeight: 800,
            letterSpacing: '-0.01em',
            boxShadow: '0 10px 0 rgba(74, 85, 104, 0.22)',
            transform: `scale(${isAnxious ? 1.06 : 1})`,
          }}
        >
          {isAnxious ? '⚠️ TUGAS MENUMPUK!' : '📱 Asik Rebahan & Scroll...'}
        </div>

        {/* Exclamation Bubble Above Head on Conflict */}
        {frame >= 80 && (
          <div
            style={{
              position: 'absolute',
              top: 520,
              left: 230,
              opacity: alertOpacity,
              transform: `scale(${alertScale})`,
              backgroundColor: '#F28482',
              color: '#FFF0E5',
              padding: '16px 32px',
              borderRadius: 32,
              fontFamily: "'Plus Jakarta Sans', 'Fredoka', sans-serif",
              fontWeight: 900,
              fontSize: 48,
              boxShadow: '0 10px 0 #9E3B39',
              zIndex: 10,
            }}
          >
            ❗ DEADLINE!
          </div>
        )}

        <div
          className="scene1-character"
          style={{
            width: 1040,
            height: 700,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ManusiaRebahan width="100%" height="100%" />
        </div>
      </AbsoluteFill>

      {/* Cross-fade Transition into Background Arena Otak */}
      <AbsoluteFill
        style={{
          opacity: arenaOpacity,
          pointerEvents: 'none',
        }}
      >
        <BackgroundArenaOtak width="100%" height="100%" />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};