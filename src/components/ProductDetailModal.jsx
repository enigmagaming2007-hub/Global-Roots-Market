import React, { useState } from 'react';
import { X, Star, MapPin, Calendar, Package, Heart, ShoppingBag, ShieldCheck, Award } from 'lucide-react';
import { CURRENCIES } from '../data/marketData';

export default function ProductDetailModal({
  product,
  currency,
  onClose,
  onAddToCart
}) {
  const [quantity, setQuantity] = useState(1);
  if (!product) return null;

  const currObj = CURRENCIES[currency] || CURRENCIES.USD;
  const totalPrice = (product.priceUSD * quantity * currObj.rate).toFixed(2);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-panel animate-fade-in"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '860px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: 'var(--radius-lg)',
          padding: '0',
          position: 'relative',
          background: 'var(--bg-surface)'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(0, 0, 0, 0.6)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#ffffff',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
        }}>
          {/* Left Column: Image & Badges */}
          <div style={{
            position: 'relative',
            background: '#07150e',
            minHeight: '360px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '480px',
                objectFit: 'cover'
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              right: '16px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px'
            }}>
              {product.badges.map((b, idx) => (
                <span key={idx} className="badge badge-gold">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Information & Controls */}
          <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {/* Origin Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.85rem',
                color: 'var(--color-gold)',
                fontWeight: '600',
                marginBottom: '0.5rem'
              }}>
                <MapPin size={16} />
                <span>{product.originCountry} — {product.originRegion}</span>
              </div>

              <h2 style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: 'var(--text-main)',
                lineHeight: 1.25,
                marginBottom: '0.75rem'
              }}>
                {product.name}
              </h2>

              {/* Rating & Producer */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.25rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid var(--border-subtle)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Star size={16} fill="var(--color-gold)" color="var(--color-gold)" />
                  <span style={{ fontWeight: '700', fontSize: '0.95rem' }}>{product.rating}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>({product.reviewsCount} reviews)</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Producer: <strong style={{ color: '#ffffff' }}>{product.producer}</strong>
                </div>
              </div>

              {/* Description */}
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.95rem',
                lineHeight: 1.6,
                marginBottom: '1.25rem'
              }}>
                {product.longDesc}
              </p>

              {/* Flavor Profile */}
              {product.flavorNotes && (
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--color-gold)', fontWeight: '700', marginBottom: '0.5rem' }}>
                    Tasting & Terroir Notes:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {product.flavorNotes.map((note, idx) => (
                      <span key={idx} style={{
                        padding: '4px 10px',
                        background: 'rgba(212, 175, 55, 0.1)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.8rem',
                        color: 'var(--text-main)'
                      }}>
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Artisan Impact Spotlight */}
              {product.artisanStory && (
                <div style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(200, 90, 50, 0.12)',
                  border: '1px solid rgba(200, 90, 50, 0.3)',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ff9d7a', fontWeight: '700', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                    <Award size={16} /> Direct Impact Spotlight
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                    {product.artisanStory}
                  </p>
                </div>
              )}

              {/* Harvest Metadata */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                marginBottom: '1.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={14} color="var(--color-gold)" />
                  <span>{product.harvestDate}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Package size={14} color="var(--color-gold)" />
                  <span>{product.weight}</span>
                </div>
              </div>
            </div>

            {/* Price & Quantity Selector */}
            <div style={{
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem'
            }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  Total Price ({quantity} {quantity === 1 ? 'item' : 'items'})
                </div>
                <div style={{
                  fontSize: '1.75rem',
                  fontWeight: '700',
                  color: 'var(--color-gold-bright)',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {currObj.symbol}{totalPrice}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {/* Quantity Controls */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-subtle)',
                  padding: '2px'
                }}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-main)',
                      fontSize: '1.2rem',
                      cursor: 'pointer'
                    }}
                  >
                    -
                  </button>
                  <span style={{ width: '28px', textAlign: 'center', fontWeight: '700', fontSize: '0.95rem' }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-main)',
                      fontSize: '1.2rem',
                      cursor: 'pointer'
                    }}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => {
                    onAddToCart(product, quantity);
                    onClose();
                  }}
                  className="btn btn-gold"
                  style={{ padding: '0.75rem 1.5rem' }}
                >
                  <ShoppingBag size={18} />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
