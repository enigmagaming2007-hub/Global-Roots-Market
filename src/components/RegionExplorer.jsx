import React from 'react';
import { REGIONS } from '../data/marketData';
import { Globe, Compass, Mountain, Sun, Flame, Feather } from 'lucide-react';

const ICON_MAP = {
  Globe: Globe,
  Mountain: Mountain,
  Sun: Sun,
  Flame: Flame,
  Compass: Compass,
  Feather: Feather
};

export default function RegionExplorer({ selectedRegion, onSelectRegion }) {
  return (
    <section style={{
      padding: '2.5rem 0',
      background: 'var(--bg-surface)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '1.75rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <div style={{
              fontSize: '0.8rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--color-gold)',
              marginBottom: '0.25rem'
            }}>
              Global Origins
            </div>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--text-main)', fontWeight: '700' }}>
              Filter by Regional Heritage & Soil
            </h2>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', maxWidth: '480px' }}>
            Every ecosystem imparts distinct terroir, climate notes, and ancestral harvest traditions to its products.
          </p>
        </div>

        {/* Region Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
          gap: '1rem'
        }}>
          {REGIONS.map((region) => {
            const isSelected = selectedRegion === region.id;
            const IconComponent = ICON_MAP[region.icon] || Globe;

            return (
              <div
                key={region.id}
                onClick={() => onSelectRegion(region.id)}
                style={{
                  padding: '1.25rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  background: isSelected 
                    ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.18) 0%, rgba(200, 90, 50, 0.18) 100%)' 
                    : 'var(--bg-primary)',
                  border: isSelected ? '1.5px solid var(--color-gold)' : '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  boxShadow: isSelected ? 'var(--shadow-glow)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
                className="region-card"
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: isSelected ? 'var(--color-gold)' : 'rgba(255,255,255,0.06)',
                    color: isSelected ? '#07150e' : 'var(--color-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <IconComponent size={20} />
                  </div>
                  {isSelected && (
                    <span className="badge badge-gold" style={{ fontSize: '0.65rem' }}>Active</span>
                  )}
                </div>

                <div>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: isSelected ? 'var(--color-gold-bright)' : 'var(--text-main)',
                    marginBottom: '0.35rem'
                  }}>
                    {region.name}
                  </h3>
                  <p style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.4,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {region.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
