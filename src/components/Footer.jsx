import React, { useState } from 'react';
import { Globe, Heart, Send, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer style={{
      background: '#040d08',
      color: 'var(--text-muted)',
      padding: '4rem 0 2rem 0',
      borderTop: '1px solid var(--border-subtle)'
    }}>
      <div className="container">
        {/* Value Guarantee Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          paddingBottom: '3rem',
          marginBottom: '3rem',
          borderBottom: '1px solid rgba(255,255,255,0.08)'
        }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <ShieldCheck size={32} color="var(--color-gold)" />
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '700' }}>Direct Trade Guarantee</h4>
              <p style={{ fontSize: '0.8rem' }}>100% origin traceable supply chain</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Truck size={32} color="var(--color-gold)" />
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '700' }}>Eco Global Express</h4>
              <p style={{ fontSize: '0.8rem' }}>Carbon neutral climate shipping</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <RefreshCw size={32} color="var(--color-gold)" />
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '700' }}>Harvest Freshness</h4>
              <p style={{ fontSize: '0.8rem' }}>Direct from current season harvest</p>
            </div>
          </div>
        </div>

        {/* Footer Main Links */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          {/* Brand Col */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-terracotta) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Globe size={20} color="#07150e" />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: '700', color: '#ffffff' }}>
                Global Roots Market
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '380px', marginBottom: '1.5rem' }}>
              A global ethical commerce platform celebrating smallholder farmers, traditional artisans, and heirloom culinary traditions across 6 continents.
            </p>

            {/* Newsletter */}
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '0.9rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                Join the Global Harvest Dispatch
              </h4>
              {!subscribed ? (
                <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem', maxWidth: '380px' }}>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      flex: 1,
                      padding: '0.6rem 1rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid var(--border-subtle)',
                      color: '#ffffff',
                      fontSize: '0.85rem'
                    }}
                  />
                  <button type="submit" className="btn btn-gold" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                    <Send size={14} /> Subscribe
                  </button>
                </form>
              ) : (
                <div style={{ color: '#6edba0', fontSize: '0.85rem', fontWeight: '600' }}>
                  ✓ Thank you! You're subscribed to seasonal harvest releases.
                </div>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '700', marginBottom: '1rem' }}>Market Regions</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>East African Highlands</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Mediterranean Basin</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>South Asian Spice Belt</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Latin America & Andes</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>East Asian Terraces</a></li>
            </ul>
          </div>

          {/* Ethics & Impact */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '700', marginBottom: '1rem' }}>Ethical Impact</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Direct-Trade Standards</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Farmer Profit Sharing</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Biodiversity & Heirloom Seeds</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Zero-Plastic Packaging</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          fontSize: '0.8rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            © {new Date().getFullYear()} Global Roots Market Inc. All Rights Reserved. Crafted with <Heart size={12} color="var(--color-terracotta)" style={{ display: 'inline' }} /> for global communities.
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Supplier Code of Ethics</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
