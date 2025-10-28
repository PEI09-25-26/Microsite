import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Tournament Management',
    Svg: require('@site/static/img/Trophy.svg').default,
    description: (
      <>
        Easily create and manage tournaments with our intuitive interface. Track
        scores, cheating, and player statistics all in one place. 
      </>
    ),
  },
  {
    title: 'Smart player',
    Svg: require('@site/static/img/Bot.svg').default,
    description: (
      <>
        Our app will have an AI-powered virtual player that aims to replace a
        missing member in a Sueca game.
      </>
    ),
  },
  {
    title: 'View statistics',
    Svg: require('@site/static/img/statistics.svg').default,
    description: (
      <>
        Analyze your gameplay with detailed statistics and insights. 
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
