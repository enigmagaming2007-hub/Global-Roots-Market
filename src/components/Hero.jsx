import React from 'react';
import { ShieldCheck, HeartHandshake, Sprout, ArrowRight, Award } from 'lucide-react';
import { CATEGORIES } from '../data/marketData';

export default function Hero({ activeCategory, onSelectCategory }) {
  return (
    <section style={{
      position: 'relative',
      minHeight: '520px',
      display: 'flex',
      alignItems: 'center',
      padding: '4rem 0 3rem 0',
      overflow: 'hidden',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      {/* Background Graphic Visual */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/hero_banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.38) contrast(1.15)',
        zIndex: 0
      }} />

      {/* Gradient Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(7, 21, 14, 0.4) 0%, rgba(7, 21, 14, 0.95) 100%)',
        zIndex: 1
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '780px' }}>
          {/* Tagline Badge */}
          <div className="badge badge-gold" style={{ marginBottom: '1.25rem' }}>
            <Award size={14} /> Direct-Trade Heirloom Goods & Rare Culinary Treasures
          </div>

          {/* Main Title */}
          <h1 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
            fontWeight: '700',
            lineHeight: 1.15,
            color: '#ffffff',
            marginBottom: '1.25rem',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)'
          }}>
            Rooted in Earth. <br />
            <span style={{
              background: 'linear-gradient(90deg, var(--color-gold) 0%, var(--color-terracotta) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Crafted by Generations.
            </span>
          </h1>

          <p style={{
            fontSize: '1.15rem',
            color: 'var(--text-muted)',
            marginBottom: '2rem',
            maxWidth: '640px',
            lineHeight: 1.6
          }}>
            Connect directly with smallholder ethical farmers, indigenous cooperatives, and master spice artisans. We deliver single-origin coffee, ancient saffron, and wild-harvested botanicals straight from source to table.
          </p>

          {/* Trust Value Props */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#ffffff', fontSize: '0.9rem', fontWeight: '600' }}>
              <ShieldCheck size={20} color="var(--color-gold)" />
              <span>100% Certified Direct Trade</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#ffffff', fontSize: '0.9rem', fontWeight: '600' }}>
              <Sprout size={20} color="#6edba0" />
              <span>Wild & Organic Cultivation</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#ffffff', fontSize: '0.9rem', fontWeight: '600' }}>
              <HeartHandshake size={20} color="var(--color-terracotta)" />
              <span>3x Fair Income to Farmers</span>
            </div>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div style={{
          marginTop: '1rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.15)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          overflowX: 'auto',
          paddingBottom: '0.5rem'
        }}>
          <span style={{
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--color-gold)',
            fontWeight: '700',
            whiteSpace: 'nowrap',
            marginRight: '0.5rem'
          }}>
            Explore Categories:
          </span>
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  border: isSelected ? '1px solid var(--color-gold)' : '1px solid rgba(255, 255, 255, 0.2)',
                  background: isSelected ? 'var(--color-gold)' : 'rgba(14, 36, 25, 0.65)',
                  color: isSelected ? '#07150e' : '#ffffff',
                  fontWeight: isSelected ? '700' : '500',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  backdropFilter: 'blur(8px)',
                  transition: 'var(--transition)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
