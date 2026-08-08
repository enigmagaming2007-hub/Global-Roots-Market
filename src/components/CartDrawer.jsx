import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, CheckCircle2, Sparkles } from 'lucide-react';
import { CURRENCIES } from '../data/marketData';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  currency
}) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isOpen) return null;

  const currObj = CURRENCIES[currency] || CURRENCIES.USD;

  const subtotalUSD = cartItems.reduce((acc, item) => acc + item.priceUSD * item.quantity, 0);
  const discountUSD = subtotalUSD * (discountPercent / 100);
  const shippingUSD = subtotalUSD > 75 || cartItems.length === 0 ? 0 : 9.50;
  const finalUSD = Math.max(0, subtotalUSD - discountUSD + shippingUSD);

  const formatPrice = (valUSD) => (valUSD * currObj.rate).toFixed(2);

  const handleApplyPromo = () => {
    setPromoError('');
    setPromoSuccess('');
    if (promoCode.trim().toUpperCase() === 'ROOTS10') {
      setDiscountPercent(10);
      setPromoSuccess('10% Earth Day discount applied!');
    } else if (promoCode.trim().toUpperCase() === 'HERITAGE20') {
      setDiscountPercent(20);
      setPromoSuccess('20% Artisan VIP discount applied!');
    } else {
      setPromoError('Invalid code. Try "ROOTS10" or "HERITAGE20"');
    }
  };

  const handleSimulatePayment = (e) => {
    e.preventDefault();
    setOrderComplete(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{ justifyContent: 'flex-end', padding: 0 }}>
      <div
        className="animate-slide-left"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '480px',
          height: '100vh',
          background: 'var(--bg-surface)',
          borderLeft: '1px solid var(--border-subtle)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '1.5rem',
          boxShadow: 'var(--shadow-md)'
        }}
      >
        {/* Drawer Header */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '1rem',
            borderBottom: '1px solid var(--border-subtle)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <ShoppingBag size={22} color="var(--color-gold)" />
              <h2 style={{ fontSize: '1.25rem', fontWeight: '700' }}>Your Ethical Cart</h2>
              <span className="badge badge-gold">{cartItems.length}</span>
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer'
              }}
            >
              <X size={24} />
            </button>
          </div>

          {/* Shipping Progress */}
          <div style={{
            margin: '1rem 0',
            padding: '0.75rem',
            borderRadius: 'var(--radius-sm)',
            background: 'rgba(212, 175, 55, 0.08)',
            border: '1px solid var(--border-subtle)',
            fontSize: '0.825rem'
          }}>
            {subtotalUSD >= 75 ? (
              <div style={{ color: '#6edba0', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={16} /> You unlocked Free Global Express Shipping!
              </div>
            ) : (
              <div style={{ color: 'var(--text-muted)' }}>
                Add <strong>{currObj.symbol}{formatPrice(75 - subtotalUSD)}</strong> more for free express shipping.
              </div>
            )}
          </div>
        </div>

        {/* Cart Item List */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          margin: '0.5rem 0 1rem 0',
          paddingRight: '0.25rem'
        }}>
          {cartItems.length === 0 ? (
            <div style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              color: 'var(--text-muted)',
              gap: '1rem'
            }}>
              <ShoppingBag size={48} strokeWidth={1} color="var(--border-subtle)" />
              <p style={{ fontSize: '1rem', fontWeight: '600' }}>Your cart is empty.</p>
              <p style={{ fontSize: '0.85rem' }}>Explore single-origin coffee, rare saffron, and direct-trade olive oil.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '0.85rem 0',
                  borderBottom: '1px solid var(--border-subtle)',
                  alignItems: 'center'
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: 'var(--radius-sm)',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '0.925rem', fontWeight: '700', lineHeight: 1.25, marginBottom: '2px' }}>
                    {item.name}
                  </h4>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-gold)' }}>
                    {item.originCountry}
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: '700', marginTop: '4px' }}>
                    {currObj.symbol}{formatPrice(item.priceUSD)}
                  </div>
                </div>

                {/* Quantity + Remove */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    style={{ background: 'none', border: 'none', color: '#ff6b6b', cursor: 'pointer' }}
                    title="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--border-subtle)',
                    padding: '2px 6px'
                  }}>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      style={{ background: 'none', border: 'none', color: 'var(--text-main)', width: '20px', cursor: 'pointer' }}
                    >
                      -
                    </button>
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', padding: '0 4px' }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      style={{ background: 'none', border: 'none', color: 'var(--text-main)', width: '20px', cursor: 'pointer' }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Promo Code & Subtotal Footer */}
        {cartItems.length > 0 && (
          <div style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '1rem'
          }}>
            {/* Promo Input */}
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
              <div style={{ flex: 1, position: 'relative' }}>
                <Tag size={14} style={{ position: 'absolute', left: '10px', top: '10px', color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  placeholder="Promo Code (e.g. ROOTS10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.5rem 0.5rem 2rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-main)',
                    fontSize: '0.85rem'
                  }}
                />
              </div>
              <button
                onClick={handleApplyPromo}
                className="btn btn-outline"
                style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
              >
                Apply
              </button>
            </div>

            {promoError && <div style={{ fontSize: '0.75rem', color: '#ff6b6b', marginBottom: '0.5rem' }}>{promoError}</div>}
            {promoSuccess && <div style={{ fontSize: '0.75rem', color: '#6edba0', marginBottom: '0.5rem' }}>{promoSuccess}</div>}

            {/* Calculations */}
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Subtotal</span>
                <span style={{ color: 'var(--text-main)' }}>{currObj.symbol}{formatPrice(subtotalUSD)}</span>
              </div>
              {discountPercent > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#6edba0' }}>
                  <span>Discount ({discountPercent}%)</span>
                  <span>-{currObj.symbol}{formatPrice(discountUSD)}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Shipping</span>
                <span style={{ color: 'var(--text-main)' }}>
                  {shippingUSD === 0 ? 'FREE' : `${currObj.symbol}${formatPrice(shippingUSD)}`}
                </span>
              </div>
              <div style={{
                display: 'flex',
                justify: 'space-between',
                fontSize: '1.2rem',
                fontWeight: '700',
                color: 'var(--color-gold-bright)',
                paddingTop: '0.5rem',
                borderTop: '1px dashed var(--border-subtle)'
              }}>
                <span>Total ({currency})</span>
                <span>{currObj.symbol}{formatPrice(finalUSD)}</span>
              </div>
            </div>

            <button
              onClick={() => setIsCheckingOut(true)}
              className="btn btn-gold"
              style={{ width: '100%', padding: '0.85rem' }}
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Simulated Checkout Modal */}
      {isCheckingOut && (
        <div className="modal-overlay" style={{ zIndex: 3000 }}>
          <div className="glass-panel animate-fade-in" style={{
            maxWidth: '500px',
            width: '90%',
            padding: '2rem',
            background: 'var(--bg-surface)'
          }}>
            {!orderComplete ? (
              <form onSubmit={handleSimulatePayment}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '700' }}>Direct Trade Checkout</h3>
                  <button type="button" onClick={() => setIsCheckingOut(false)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                    <X size={20} />
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Full Name</label>
                    <input required type="text" defaultValue="Elena Rostova" style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-subtle)', color: '#fff' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Shipping Address</label>
                    <input required type="text" defaultValue="742 Evergreen Terrace, Sector 4" style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-subtle)', color: '#fff' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Payment Card (Demo)</label>
                    <input required type="text" defaultValue="•••• •••• •••• 4242" style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-subtle)', color: '#fff' }} />
                  </div>
                </div>

                <div style={{
                  padding: '1rem',
                  background: 'rgba(16, 66, 41, 0.3)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.85rem',
                  color: '#6edba0',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <ShieldCheck size={20} />
                  <span>Your order directly pays $ {formatPrice(finalUSD * 0.7)} directly to smallholder farming cooperatives.</span>
                </div>

                <button type="submit" className="btn btn-gold" style={{ width: '100%', padding: '0.85rem' }}>
                  Pay {currObj.symbol}{formatPrice(finalUSD)} & Place Order
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <CheckCircle2 size={54} color="var(--color-gold)" style={{ margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '0.5rem' }}>Order Confirmed!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  Thank you for supporting smallholder artisans. Your tracking code is <strong style={{ color: 'var(--color-gold)' }}>#GRM-2026-8941</strong>.
                </p>
                <button
                  onClick={() => {
                    setOrderComplete(false);
                    setIsCheckingOut(false);
                    onClearCart();
                    onClose();
                  }}
                  className="btn btn-gold"
                  style={{ padding: '0.75rem 2rem' }}
                >
                  Return to Marketplace
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
