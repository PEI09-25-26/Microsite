import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const baseUrl = useBaseUrl('/img/Sueca.png');
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
          <img src={baseUrl} alt="Sueca logo" className={styles.logo} />
        </div>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <p style={{ maxWidth: 800, margin: '1rem auto', fontSize: '1.05rem' }}>
          Sueca is a traditional Portuguese card game for four players in teams of two.
          This project creates a mobile application that acts as a smart player - it
          uses computer vision to recognise cards and AI to decide plays, and provides
          game management tools such as automated scorekeeping, tournament creation
          and game analytics.
        </p>

        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/Milestones">
            View Project Documentation
          </Link>
          <Link
            className="button button--primary button--lg"
            style={{ marginLeft: 12 }}
            to="/Calendar">
            Open Calendar
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Sueca Application with Virtual Player - project microsite">
      <HomepageHeader />
      <main>
        <HomepageFeatures />


        <div className="section-divider" aria-hidden="true" />

        <section className="tired-section" style={{ padding: '3rem 0' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center' }}>Tired of the usual problems?</h2>
            <p style={{ textAlign: 'center', maxWidth: 800, margin: '0.5rem auto 1.5rem', color: 'var(--ifm-font-color-base)' }}>
              If organising or finding players is a headache, or keeping score during
              a Sueca match is cumbersome, our mobile app offers a simple, modern
              solution: a virtual player and game manager that helps you play more, faster.
            </p>

            <div className="tired-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', alignItems: 'start' }}>
              <div className="card tired-card">
                <div style={{ width: '100%', height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--ifm-card-background-color)', borderRadius: 8, padding: 8 }}>
                  <img src={useBaseUrl('/img/problems/tired1.png')} alt="Not enough players" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 6 }} />
                </div>
                <h3 style={{ marginTop: 12 }}>Tired of not having enough players to play Sueca?</h3>
                <p style={{ marginTop: 6, color: 'var(--ifm-font-color-base)', opacity: 0.9 }}>Find players, schedule games and organise meetups directly from the app.</p>
              </div>

              <div className="card tired-card">
                <div style={{ width: '100%', height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--ifm-card-background-color)', borderRadius: 8, padding: 8 }}>
                  <img src={useBaseUrl('/img/problems/tired2.png')} alt="Difficulty keeping score" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 6 }} />
                </div>
                <h3 style={{ marginTop: 12 }}>Tired of managing the game and keeping track of points?</h3>
                <p style={{ marginTop: 6, color: 'var(--ifm-font-color-base)', opacity: 0.9 }}>Automatic scorekeeping and in-game assistance mean no more lost rounds or disputes.</p>
              </div>

              <div className="card tired-card">
                <div style={{ width: '100%', height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--ifm-card-background-color)', borderRadius: 8, padding: 8 }}>
                  <img src={useBaseUrl('/img/problems/tired3.png')} alt="Organising tournaments" style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 6 }} />
                </div>
                <h3 style={{ marginTop: 12 }}>Tired of the difficulty of organising Sueca tournaments?</h3>
                <p style={{ marginTop: 6, color: 'var(--ifm-font-color-base)', opacity: 0.9 }}>Tournament tools, brackets and scheduling simplify running events for any group size.</p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '1.75rem' }}>
              <h3>Then try our Sueca application</h3>
              <p style={{ maxWidth: 720, margin: '0.5rem auto 1rem', color: 'var(--ifm-font-color-base)' }}>
                Sueca: Mobile application of the traditional Sueca card game featuring a virtual player and game manager.
              </p>
              <div>
                <Link className="button button--primary" to="/docs/Milestones">Get Started</Link>
                <Link className="button button--secondary" style={{ marginLeft: 12 }} to="/Calendar">See Calendar</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section" style={{ padding: '3rem 0' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center' }}>Key Features</h2>
            <p style={{ textAlign: 'center', maxWidth: 800, margin: '0.5rem auto 1.25rem', color: 'var(--ifm-font-color-base)' }}>
              The app is designed to make playing Sueca easier and more fun - whether you
              lack a fourth player, want to automate scoring, or run tournaments.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <div className="card">
                <div className="card__body">
                  <h3>Virtual Player (AI + CV)</h3>
                  <p>Computer-vision-assisted virtual player recognises cards and selects plays using AI strategies - a drop-in teammate when someone is missing.</p>
                </div>
              </div>

              <div className="card">
                <div className="card__body">
                  <h3>Automatic Score & Turn Tracking</h3>
                  <p>Automatic tracking of points, turns and game variables - no manual bookkeeping needed.</p>
                </div>
              </div>

              <div className="card">
                <div className="card__body">
                  <h3>Tournament Manager</h3>
                  <p>Create and manage tournaments mixing real and virtual players, with brackets and scheduling support.</p>
                </div>
              </div>

              <div className="card">
                <div className="card__body">
                  <h3>Game Analytics</h3>
                  <p>Visualise wins, defeats, points and other metrics to learn and improve over time.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer style={{ padding: '3rem 0', borderTop: '1px solid rgba(0,0,0,0.06)', marginTop: '2rem' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Developers</h2>
          <p style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--ifm-font-color-base)' }}>The team behind the Sueca Application</p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            alignItems: 'start'
          }}>
            {/* Lucas Ruivo */}
            <div className="card" style={{ textAlign: 'center' }}>
              <img src={useBaseUrl('/img/developers/lucas.png')} alt="Lucas Ruivo" style={{ width: 96, height: 96, borderRadius: 9999, objectFit: 'cover', margin: '0 auto 0.5rem' }} />
              <strong>Lucas Ruivo</strong>
              <div style={{ fontSize: '0.95rem', opacity: 0.85 }}>Computer Vision and AI Integration Developer</div>
            </div>

            {/* Gonçalo Calvo */}
            <div className="card" style={{ textAlign: 'center' }}>
              <img src={useBaseUrl('/img/developers/goncalo.png')} alt="Gonçalo Calvo" style={{ width: 96, height: 96, borderRadius: 9999, objectFit: 'cover', margin: '0 auto 0.5rem' }} />
              <strong>Gonçalo Calvo</strong>
              <div style={{ fontSize: '0.95rem', opacity: 0.85 }}>Computer Vision and AI Integration Developer</div>
            </div>

            {/* Tiago Mendes */}
            <div className="card" style={{ textAlign: 'center' }}>
              <img src={useBaseUrl('/img/developers/tiago.png')} alt="Tiago Mendes" style={{ width: 96, height: 96, borderRadius: 9999, objectFit: 'cover', margin: '0 auto 0.5rem' }} />
              <strong>Tiago Mendes</strong>
              <div style={{ fontSize: '0.95rem', opacity: 0.85 }}>Backend Developer</div>
            </div>

            {/* Cátia Lopes */}
            <div className="card" style={{ textAlign: 'center' }}>
              <img src={useBaseUrl('/img/developers/catia.png')} alt="Cátia Lopes" style={{ width: 96, height: 96, borderRadius: 9999, objectFit: 'cover', margin: '0 auto 0.5rem' }} />
              <strong>Cátia Lopes</strong>
              <div style={{ fontSize: '0.95rem', opacity: 0.85 }}>Frontend Developer</div>
            </div>

            {/* Pedro Marques */}
            <div className="card" style={{ textAlign: 'center' }}>
              <img src={useBaseUrl('/img/developers/pedro.png')} alt="Pedro Marques" style={{ width: 96, height: 96, borderRadius: 9999, objectFit: 'cover', margin: '0 auto 0.5rem' }} />
              <strong>Pedro Marques</strong>
              <div style={{ fontSize: '0.95rem', opacity: 0.85 }}>Frontend Developer</div>
            </div>

            {/* Daniel Martins */}
            <div className="card" style={{ textAlign: 'center' }}>
              <img src={useBaseUrl('/img/developers/daniel.png')} alt="Daniel Martins" style={{ width: 96, height: 96, borderRadius: 9999, objectFit: 'cover', margin: '0 auto 0.5rem' }} />
              <strong>Daniel Martins</strong>
              <div style={{ fontSize: '0.95rem', opacity: 0.85 }}>Backend Developer</div>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
