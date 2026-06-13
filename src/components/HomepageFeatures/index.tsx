import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Modern, custom SVG icons with gradients and glowing effects
const RefereeIcon = () => (
  <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.featureSvg}>
    <defs>
      <linearGradient id="refereeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <path d="M50 10 L15 25 V50 C15 70 30 85 50 95 C70 85 85 70 85 50 V25 L50 10 Z" fill="url(#refereeGrad)" filter="url(#glow)" opacity="0.9" />
    <path d="M40 50 L47 57 L60 40" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="50" cy="50" r="35" stroke="white" strokeWidth="3" opacity="0.4" strokeDasharray="6 6" />
  </svg>
);

const SmartPlayerIcon = () => (
  <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.featureSvg}>
    <defs>
      <linearGradient id="aiGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <rect x="20" y="20" width="60" height="60" rx="15" fill="url(#aiGrad)" opacity="0.9" filter="url(#glow)" />
    <path d="M50 35 V65 M35 50 H65" stroke="white" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
    <circle cx="50" cy="50" r="12" fill="white" />
    <circle cx="50" cy="50" r="4" fill="url(#aiGrad)" />
    <path d="M10 30 H20 M10 70 H20 M80 30 H90 M80 70 H90 M30 10 V20 M70 10 V20 M30 80 V90 M70 80 V90" stroke="url(#aiGrad)" strokeWidth="6" strokeLinecap="round" />
  </svg>
);

const StatisticsIcon = () => (
  <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.featureSvg}>
    <defs>
      <linearGradient id="statGrad" x1="100%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
    </defs>
    <path d="M15 85 H85" stroke="url(#statGrad)" strokeWidth="6" strokeLinecap="round" />
    <rect x="25" y="55" width="12" height="25" rx="3" fill="url(#statGrad)" opacity="0.7" />
    <rect x="45" y="35" width="12" height="45" rx="3" fill="url(#statGrad)" opacity="0.85" />
    <rect x="65" y="15" width="12" height="65" rx="3" fill="url(#statGrad)" />
    <path d="M25 45 L45 20 L65 5" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)" />
    <circle cx="25" cy="45" r="4" fill="white" />
    <circle cx="45" cy="20" r="4" fill="white" />
    <circle cx="65" cy="5" r="4" fill="white" />
  </svg>
);


type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Automatic Referee',
    Svg: RefereeIcon,
    description: (
      <>
        Play without worrying about mistakes or cheating. The automatic referee 
        enforces all Sueca rules in real-time, ensuring a fair game.
      </>
    ),
  },
  {
    title: 'Smart Player',
    Svg: SmartPlayerIcon,
    description: (
      <>
        Our app features an AI-powered virtual player utilizing computer vision 
        that aims to replace a missing member in any Sueca game.
      </>
    ),
  },
  {
    title: 'View Statistics',
    Svg: StatisticsIcon,
    description: (
      <>
        Analyze your gameplay with detailed statistics and insights. 
        Track wins, defeats, points and learn how to improve.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('text--center', styles.featureCard)}>
        <div className={styles.iconWrapper}>
          <Svg />
        </div>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
