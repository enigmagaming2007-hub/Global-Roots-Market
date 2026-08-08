import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RegionExplorer from './components/RegionExplorer';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import ArtisanShowcase from './components/ArtisanShowcase';
import RecipeSection from './components/RecipeSection';
import Footer from './components/Footer';

import { PRODUCTS } from './data/marketData';
import { Sparkles, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState([]);
  const [currency, setCurrency] = useState('USD');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [activeTab, setActiveTab] = useState('shop');
  const [theme, setTheme] = useState('dark');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [toastMessage, setToastMessage] = useState(null);

  // Set theme attribute on root body
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Toast handler
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Add item to cart
  const handleAddToCart = (product, qty = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prevCart, { ...product, quantity: qty }];
    });
    triggerToast(`Added ${qty}x ${product.name} to your cart.`);
  };

  // Add multiple items (e.g. from recipe)
  const handleAddMultipleToCart = (products) => {
    products.forEach((prod) => handleAddToCart(prod, 1));
    triggerToast(`Added ${products.length} recipe ingredients to your cart!`);
    setIsCartOpen(true);
  };

  // Update cart item quantity
  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  // Remove item from cart
  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear cart
  const handleClearCart = () => {
    setCart([]);
  };

  // Filter & Sort logic
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesRegion = selectedRegion === 'all' || product.regionId === selectedRegion;
    const matchesSearch =
      searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.originCountry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.producer.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesRegion && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.priceUSD - b.priceUSD;
    if (sortBy === 'price-high') return b.priceUSD - a.priceUSD;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // featured
  });

  const cartTotalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <Navbar
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
        selectedCurrency={currency}
        onChangeCurrency={setCurrency}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        theme={theme}
        onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {activeTab === 'shop' && (
          <>
            {/* Hero Section */}
            <Hero
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />

            {/* Region Explorer */}
            <RegionExplorer
              selectedRegion={selectedRegion}
              onSelectRegion={setSelectedRegion}
            />

            {/* Product Catalog Section */}
            <section style={{ padding: '3.5rem 0', background: 'var(--bg-primary)' }}>
              <div className="container">
                {/* Header & Filter Controls */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '2rem',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}>
                  <div>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--text-main)' }}>
                      Curated Harvest Catalog
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                      Showing {filteredProducts.length} authentic single-origin items
                    </p>
                  </div>

                  {/* Sort Dropdown */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ArrowUpDown size={16} color="var(--color-gold)" />
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-main)',
                        padding: '0.45rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        outline: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="featured" style={{ background: '#0b2318' }}>Featured & Harvest Fresh</option>
                      <option value="rating" style={{ background: '#0b2318' }}>Highest Rated</option>
                      <option value="price-low" style={{ background: '#0b2318' }}>Price: Low to High</option>
                      <option value="price-high" style={{ background: '#0b2318' }}>Price: High to Low</option>
                    </select>
                  </div>
                </div>

                {/* Product Grid */}
                {filteredProducts.length > 0 ? (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '1.75rem'
                  }}>
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        currency={currency}
                        onAddToCart={handleAddToCart}
                        onOpenDetail={setSelectedProduct}
                        isInCart={cart.some((item) => item.id === product.id)}
                      />
                    ))}
                  </div>
                ) : (
                  <div style={{
                    textAlign: 'center',
                    padding: '4rem 1rem',
                    background: 'var(--bg-surface)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px dashed var(--border-subtle)'
                  }}>
                    <p style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                      No items matched your specific query.
                    </p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                      Try resetting your category or region filter.
                    </p>
                    <button
                      onClick={() => {
                        setActiveCategory('all');
                        setSelectedRegion('all');
                        setSearchQuery('');
                      }}
                      className="btn btn-gold"
                    >
                      Reset All Filters
                    </button>
                  </div>
                )}
              </div>
            </section>
          </>
        )}

        {activeTab === 'artisans' && <ArtisanShowcase />}

        {activeTab === 'recipes' && (
          <RecipeSection onAddMultipleToCart={handleAddMultipleToCart} />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          currency={currency}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        currency={currency}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast">
          <Sparkles size={18} color="var(--color-gold)" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
