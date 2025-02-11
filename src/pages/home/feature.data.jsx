import React from 'react';
import {
  DevelopmentIcon,
  EasyIcon,
  EcosystemIcon,
  StableIcon,
  StreamingIcon,
  UnifiedIcon,
} from './FeatureIcon';

export const featureCardStyle = {
  development: {
    style: {
      '--feature-icon-color': 'rgb(65, 146, 246)',
      '--feature-icon-shadow': 'rgba(65, 146, 246, 0.2)',
      '--animation-delay': '0ms',
    },
    icon: <DevelopmentIcon />,
  },
  streaming: {
    style: {
      '--feature-icon-color': 'rgb(173, 103, 247)',
      '--feature-icon-shadow': 'rgba(173, 103, 247, 0.2)',
      '--animation-delay': '1s',
    },
    icon: <StreamingIcon />,
  },
  unified: {
    style: {
      '--feature-icon-color': 'rgb(119, 216, 128)',
      '--feature-icon-shadow': 'rgba(119, 216, 128, 0.2)',
      '--animation-delay': '1.8s',
    },
    icon: <UnifiedIcon />,
  },
  ecosystem: {
    style: {
      '--feature-icon-color': 'rgb(255, 193, 7)',
      '--feature-icon-shadow': 'rgba(255, 193, 7, 0.2)',
      '--animation-delay': '2.4s',
    },
    icon: <EcosystemIcon />,
  },
  easy: {
    style: {
      '--feature-icon-color': 'rgb(76, 175, 80)',
      '--feature-icon-shadow': 'rgba(76, 175, 80, 0.2)',
      '--animation-delay': '3s',
    },
    icon: <EasyIcon />,
  },
  stable: {
    style: {
      '--feature-icon-color': 'rgb(244, 67, 54)',
      '--feature-icon-shadow': 'rgba(244, 67, 54, 0.2)',
      '--animation-delay': '3.8s',
    },
    icon: <StableIcon />,
  },
};
