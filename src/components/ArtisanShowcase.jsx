import React from 'react';
import { ARTISANS } from '../data/marketData';
import { Heart, MapPin, Award, Users, CheckCircle } from 'lucide-react';

export default function ArtisanShowcase() {
  return (
    <section style={{
      padding: '4rem 0',
      background: 'var(--bg-surface-elevated)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <div className="badge badge-terracotta" style={{ marginBottom: '0.75rem' }}>
            <Users size={14} /> Meet Our Global Partners
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '1rem' }}>
            Behind Every Taste is a Human Story
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
            We bypass industrial commodity brokers to work directly with generational growers and female-led agricultural guilds. 100% of our supply chain is transparent and origin-traced.
          </p>
        </div>

        {/* Artisan Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {ARTISANS.map((artisan) => (
            <div
              key={artisan.id}
              className="glass-panel"
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.25rem'
                }}>
                  <img
                    src={artisan.photo}
                    alt={artisan.name}
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid var(--color-gold)'
                    }}
                  />
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-main)' }}>
                      {artisan.name}
                    </h3>
                    <div style={{
                      fontSize: '0.825rem',
                      color: 'var(--color-gold)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      marginTop: '2px'
                    }}>
                      <MapPin size={14} /> {artisan.region}
                    </div>
                  </div>
                </div>

                <blockquote style={{
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                  color: 'var(--text-main)',
                  lineHeight: 1.5,
                  marginBottom: '1.25rem',
                  paddingLeft: '1rem',
                  borderLeft: '3px solid var(--color-terracotta)'
                }}>
                  "{artisan.quote}"
                </blockquote>
              </div>

              <div style={{
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-subtle)',
                fontSize: '0.85rem',
                color: '#6edba0',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <CheckCircle size={18} />
                <span>{artisan.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
