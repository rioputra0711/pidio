import React from 'react';
import { Composition } from 'remotion';
import { MainVideo } from './MainVideo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="KsatriaVsMonster"
        component={MainVideo}
        durationInFrames={1500}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};