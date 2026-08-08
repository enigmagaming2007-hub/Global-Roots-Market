import React from 'react';
import { Star, ShoppingBag, MapPin, Eye, Check } from 'lucide-react';
import { CURRENCIES } from '../data/marketData';

export default function ProductCard({
  product,
  currency,
  onAddToCart,
  onOpenDetail,
  isInCart
}) {
  const currObj = CURRENCIES[currency] || CURRENCIES.USD;
  const convertedPrice = (product.priceUSD * currObj.rate).toFixed(2);

  return (
    <div
      className="glass-panel animate-fade-in"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        transition: 'var(--transition)',
        cursor: 'pointer'
      }}
      onClick={() => onOpenDetail(product)}
    >
      {/* Product Image Banner */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '230px',
        overflow: 'hidden',
        background: '#07150e'
      }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
          className="product-img"
        />

        {/* Overlay Badges */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          zIndex: 2
        }}>
          {product.badges.slice(0, 2).map((b, idx) => (
            <span
              key={idx}
              className={idx === 0 ? 'badge badge-gold' : 'badge badge-terracotta'}
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
            >
              {b}
            </span>
          ))}
        </div>

        {/* Origin Pill */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          left: '12px',
          background: 'rgba(7, 21, 14, 0.85)',
          backdropFilter: 'blur(6px)',
          padding: '4px 10px',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.75rem',
          fontWeight: '600',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          border: '1px solid rgba(255,255,255,0.15)'
        }}>
          <MapPin size={12} color="var(--color-gold)" />
          <span>{product.originCountry} • {product.originRegion}</span>
        </div>
      </div>

      {/* Product Body */}
      <div style={{
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between'
      }}>
        <div>
          {/* Rating & Reviews */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '0.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Star size={14} fill="var(--color-gold)" color="var(--color-gold)" />
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-main)' }}>
                {product.rating}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                ({product.reviewsCount})
              </span>
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-gold)', fontWeight: '600' }}>
              {product.producer}
            </span>
          </div>

          {/* Title */}
          <h3 style={{
            fontSize: '1.1rem',
            fontWeight: '700',
            color: 'var(--text-main)',
            lineHeight: 1.3,
            marginBottom: '0.5rem'
          }}>
            {product.name}
          </h3>

          {/* Short Desc */}
          <p style={{
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            lineHeight: 1.45,
            marginBottom: '1rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {product.shortDesc}
          </p>

          {/* Flavor Notes Tags */}
          {product.flavorNotes && (
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '4px',
              marginBottom: '1.25rem'
            }}>
              {product.flavorNotes.slice(0, 3).map((note, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.7rem',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  {note}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer Price & Add Button */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '0.75rem',
          borderTop: '1px solid var(--border-subtle)'
        }}>
          <div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              {product.weight}
            </div>
            <div style={{
              fontSize: '1.3rem',
              fontWeight: '700',
              color: 'var(--color-gold-bright)',
              fontFamily: 'var(--font-heading)'
            }}>
              {currObj.symbol}{convertedPrice}
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className={isInCart ? 'btn btn-outline' : 'btn btn-gold'}
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.85rem',
              borderRadius: 'var(--radius-full)'
            }}
          >
            {isInCart ? (
              <>
                <Check size={16} color="var(--color-gold)" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag size={16} />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
