import React from 'react';
import { AbsoluteFill, Series } from 'remotion';
import { Scene1 } from './scenes/Scene1';
import { Scene2 } from './scenes/Scene2';
import { Scene3 } from './scenes/Scene3';
import { Scene4 } from './scenes/Scene4';
import { Scene5 } from './scenes/Scene5';

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#FFF0E5' }}>
      <Series>
        {/* Scene 1: Transisi ke Medan Perang (7.0s = 210 frames | 6.43s VO + 0.57s Pause) */}
        <Series.Sequence durationInFrames={210}>
          <Scene1 />
        </Series.Sequence>

        {/* Scene 2: Para Petarung Memasuki Arena (10.0s = 300 frames | 9.25s VO + 0.75s Pause) */}
        <Series.Sequence durationInFrames={300}>
          <Scene2 />
        </Series.Sequence>

        {/* Scene 3: Ronde Pertama - Ksatria Kalah (12.0s = 360 frames | 11.08s VO + 0.92s Pause) */}
        <Series.Sequence durationInFrames={360}>
          <Scene3 />
        </Series.Sequence>

        {/* Scene 4: Ronde Kedua - Taktik Aturan 2 Menit (13.0s = 390 frames | 12.12s VO + 0.88s Pause) */}
        <Series.Sequence durationInFrames={390}>
          <Scene4 />
        </Series.Sequence>

        {/* Scene 5: Penaklukan & Call to Action (8.0s = 240 frames | 7.55s VO + 0.45s Pause) */}
        <Series.Sequence durationInFrames={240}>
          <Scene5 />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};