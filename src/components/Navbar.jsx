import React, { useState } from 'react';
import { Globe, ShoppingBag, Search, Sun, Moon, Menu, X, Sparkles, Heart } from 'lucide-react';
import { CURRENCIES } from '../data/marketData';

export default function Navbar({
  cartCount,
  onOpenCart,
  selectedCurrency,
  onChangeCurrency,
  searchQuery,
  onSearchChange,
  theme,
  onToggleTheme,
  activeTab,
  onTabChange
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100 }} className="glass-nav">
      {/* Top Announcement Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #104229 0%, #c85a32 50%, #d4af37 100%)',
        color: '#ffffff',
        fontSize: '0.8rem',
        fontWeight: '600',
        padding: '0.4rem 1rem',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        letterSpacing: '0.03em'
      }}>
        <Sparkles size={14} />
        <span>Direct-Trade Earth Day Special: Free Global Express Shipping on orders over $75</span>
        <Sparkles size={14} />
      </div>

      {/* Main Navbar */}
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '76px',
        gap: '1.5rem'
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => onTabChange('shop')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            cursor: 'pointer'
          }}
        >
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-terracotta) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-glow)'
          }}>
            <Globe size={24} color="#07150e" />
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              fontWeight: '700',
              lineHeight: 1.1,
              color: 'var(--text-main)'
            }}>
              Global Roots
            </div>
            <div style={{
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-gold)'
            }}>
              Ethical Marketplace
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div style={{
          flex: '1',
          maxWidth: '440px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Search size={18} style={{ position: 'absolute', left: '14px', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search rare spices, coffee, olive oils, origins..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{
              width: '100%',
              padding: '0.65rem 1rem 0.65rem 2.6rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(255, 255, 255, 0.07)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-main)',
              fontSize: '0.9rem',
              outline: 'none',
              transition: 'var(--transition)'
            }}
          />
        </div>

        {/* Navigation Tabs */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          fontSize: '0.95rem',
          fontWeight: '600'
        }} className="desktop-nav">
          <button
            onClick={() => onTabChange('shop')}
            style={{
              background: 'none',
              border: 'none',
              color: activeTab === 'shop' ? 'var(--color-gold)' : 'var(--text-main)',
              cursor: 'pointer',
              borderBottom: activeTab === 'shop' ? '2px solid var(--color-gold)' : '2px solid transparent',
              paddingBottom: '4px',
              transition: 'var(--transition)'
            }}
          >
            Marketplace
          </button>
          <button
            onClick={() => onTabChange('artisans')}
            style={{
              background: 'none',
              border: 'none',
              color: activeTab === 'artisans' ? 'var(--color-gold)' : 'var(--text-main)',
              cursor: 'pointer',
              borderBottom: activeTab === 'artisans' ? '2px solid var(--color-gold)' : '2px solid transparent',
              paddingBottom: '4px',
              transition: 'var(--transition)'
            }}
          >
            Producers & Artisans
          </button>
          <button
            onClick={() => onTabChange('recipes')}
            style={{
              background: 'none',
              border: 'none',
              color: activeTab === 'recipes' ? 'var(--color-gold)' : 'var(--text-main)',
              cursor: 'pointer',
              borderBottom: activeTab === 'recipes' ? '2px solid var(--color-gold)' : '2px solid transparent',
              paddingBottom: '4px',
              transition: 'var(--transition)'
            }}
          >
            Culinary Recipes
          </button>
        </nav>

        {/* Actions & Currency Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Currency Dropdown */}
          <select
            value={selectedCurrency}
            onChange={(e) => onChangeCurrency(e.target.value)}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-main)',
              padding: '0.45rem 0.75rem',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.85rem',
              fontWeight: '600',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            {Object.keys(CURRENCIES).map((curr) => (
              <option key={curr} value={curr} style={{ background: '#0b2318', color: '#ffffff' }}>
                {CURRENCIES[curr].label}
              </option>
            ))}
          </select>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-main)',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'var(--transition)'
            }}
            title="Toggle Light / Dark Mode"
          >
            {theme === 'dark' ? <Sun size={18} color="var(--color-gold)" /> : <Moon size={18} />}
          </button>

          {/* Cart Icon Button */}
          <button
            onClick={onOpenCart}
            className="btn btn-gold"
            style={{ padding: '0.55rem 1.1rem', position: 'relative' }}
          >
            <ShoppingBag size={18} />
            <span>Cart</span>
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-6px',
                right: '-6px',
                background: 'var(--color-terracotta)',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: '700',
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)'
              }}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
