import React, { useState } from 'react';
import { 
  Sparkles, ShoppingBag, Globe, ShieldCheck, Heart, 
  Layers, UserCheck, Truck, ChevronRight, Menu, X, ArrowRight, Award, MapPin
} from 'lucide-react';
import { INITIAL_PRODUCTS, PLATFORM_STATS } from './data/marketData';
import StorefrontModule from './components/StorefrontModule';
import AIOnboardingModule from './components/AIOnboardingModule';
import SellerDashboardModule from './components/SellerDashboardModule';
import AdminPanelModule from './components/AdminPanelModule';
import LogisticsModule from './components/LogisticsModule';
import { CartDrawer, StoryModal, ArViewModal } from './components/CartDrawerModal';

export default function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [activeTab, setActiveTab] = useState('storefront'); // 'storefront' | 'onboarding' | 'seller' | 'admin' | 'logistics'
  const [currency, setCurrency] = useState('INR'); // 'INR' | 'USD'
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // 'en' | 'hi' | 'ta' | 'bn'
  
  // Cart & Modal state
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [storyModalProduct, setStoryModalProduct] = useState(null);
  const [arModalProduct, setArModalProduct] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handlePublishNewProduct = (newProduct) => {
    setProducts(prev => [newProduct, ...prev]);
    setActiveTab('storefront');
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-sandalwood-50 text-slate-900 selection:bg-amber-400 selection:text-slate-900">
      {/* Top Heritage Festive Announcement Bar */}
      <div className="jaali-bg py-2 px-4 text-center text-xs font-semibold text-amber-200 flex justify-center items-center gap-3 border-b border-amber-500/30">
        <span className="flex items-center gap-1.5 text-amber-300">
          <Sparkles className="w-3.5 h-3.5" /> <strong>Direct Indian Artisan & Organic Farmer Network</strong>
        </span>
        <span className="hidden md:inline text-amber-100/70">• 100% Guaranteed Fair Wage Payouts & Certified GI Tags</span>
        <button 
          onClick={() => setActiveTab('onboarding')} 
          className="underline text-amber-300 hover:text-white font-bold text-[11px]"
        >
          Artisans/Farmers: Digitize with AI →
        </button>
      </div>

      {/* Main Glassmorphic Navigation Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/90 border-b border-amber-400/30 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('storefront')}>
              <div className="w-11 h-11 rounded-2xl saffron-gradient flex items-center justify-center shadow-lg border border-amber-300/40">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-extrabold tracking-tight gold-gradient-text block">
                  Global Roots Market
                </span>
                <span className="text-[11px] font-medium text-amber-300 tracking-wider uppercase block font-serif">
                  ग्लोबल रूट्स मार्केट • Artisan Direct
                </span>
              </div>
            </div>

            {/* Desktop Navigation Tabs */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-amber-400/30">
              <button
                onClick={() => setActiveTab('storefront')}
                className={`nav-tab-btn ${activeTab === 'storefront' ? 'active' : ''}`}
              >
                <ShoppingBag className="w-4 h-4" /> Storefront
              </button>
              <button
                onClick={() => setActiveTab('onboarding')}
                className={`nav-tab-btn ${activeTab === 'onboarding' ? 'active' : ''}`}
              >
                <Sparkles className="w-4 h-4 text-purple-400" /> AI Onboarding
              </button>
              <button
                onClick={() => setActiveTab('seller')}
                className={`nav-tab-btn ${activeTab === 'seller' ? 'active' : ''}`}
              >
                <UserCheck className="w-4 h-4 text-emerald-400" /> Seller Dashboard
              </button>
              <button
                onClick={() => setActiveTab('admin')}
                className={`nav-tab-btn ${activeTab === 'admin' ? 'active' : ''}`}
              >
                <ShieldCheck className="w-4 h-4 text-amber-400" /> Admin & Audit
              </button>
              <button
                onClick={() => setActiveTab('logistics')}
                className={`nav-tab-btn ${activeTab === 'logistics' ? 'active' : ''}`}
              >
                <Truck className="w-4 h-4 text-sky-400" /> AI Logistics
              </button>
            </nav>

            {/* Currency & Language & Cart Bar */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Currency Toggle */}
              <div className="flex bg-slate-900 border border-amber-400/40 rounded-xl p-1 text-xs font-bold">
                <button
                  onClick={() => setCurrency('INR')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    currency === 'INR' ? 'saffron-gradient text-white shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  ₹ INR
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    currency === 'USD' ? 'saffron-gradient text-white shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  $ USD
                </button>
              </div>

              {/* Language Selector */}
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-slate-900 border border-amber-400/40 rounded-xl px-2.5 py-1.5 text-xs font-bold text-amber-200 focus:outline-none"
              >
                <option value="en">🌐 English</option>
                <option value="hi">🇮🇳 हिंदी (Hindi)</option>
                <option value="ta">🇮🇳 தமிழ் (Tamil)</option>
                <option value="bn">🇮🇳 বাংলা (Bengali)</option>
              </select>

              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative btn-gold px-3.5 py-2 text-xs flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Cart</span>
                {totalCartCount > 0 && (
                  <span className="bg-red-600 text-white font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                    {totalCartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative btn-gold p-2 text-xs"
              >
                <ShoppingBag className="w-4 h-4" />
                {totalCartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white font-extrabold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {totalCartCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-amber-200 hover:text-white"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden p-4 bg-slate-900 border-t border-amber-500/30 space-y-2 animate-fade-in text-xs font-bold">
            <button
              onClick={() => { setActiveTab('storefront'); setMobileMenuOpen(false); }}
              className="w-full text-left p-2.5 rounded-xl bg-white/10 text-amber-100 flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" /> Buyer Storefront
            </button>
            <button
              onClick={() => { setActiveTab('onboarding'); setMobileMenuOpen(false); }}
              className="w-full text-left p-2.5 rounded-xl bg-white/10 text-amber-100 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-purple-400" /> AI Onboarding & Quality Digitization
            </button>
            <button
              onClick={() => { setActiveTab('seller'); setMobileMenuOpen(false); }}
              className="w-full text-left p-2.5 rounded-xl bg-white/10 text-amber-100 flex items-center gap-2"
            >
              <UserCheck className="w-4 h-4 text-emerald-400" /> Seller Dashboard
            </button>
            <button
              onClick={() => { setActiveTab('admin'); setMobileMenuOpen(false); }}
              className="w-full text-left p-2.5 rounded-xl bg-white/10 text-amber-100 flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" /> Admin & Compliance Panel
            </button>
            <button
              onClick={() => { setActiveTab('logistics'); setMobileMenuOpen(false); }}
              className="w-full text-left p-2.5 rounded-xl bg-white/10 text-amber-100 flex items-center gap-2"
            >
              <Truck className="w-4 h-4 text-sky-400" /> AI Shipping & Cold-Chain
            </button>
          </div>
        )}
      </header>

      {/* Main Body View Rendering */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'storefront' && (
          <StorefrontModule
            products={products}
            currency={currency}
            onAddToCart={handleAddToCart}
            onOpenStory={(product) => setStoryModalProduct(product)}
            onOpenArModal={(product) => setArModalProduct(product)}
          />
        )}

        {activeTab === 'onboarding' && (
          <AIOnboardingModule
            onPublishProduct={handlePublishNewProduct}
          />
        )}

        {activeTab === 'seller' && (
          <SellerDashboardModule
            products={products}
          />
        )}

        {activeTab === 'admin' && (
          <AdminPanelModule
            products={products}
          />
        )}

        {activeTab === 'logistics' && (
          <LogisticsModule />
        )}
      </main>

      {/* Footer */}
      <footer className="jaali-bg text-amber-100/90 py-12 px-4 border-t border-amber-500/40 mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl saffron-gradient flex items-center justify-center">
                <Globe className="w-4 h-4 text-white" />
              </div>
              <span className="font-serif text-lg font-bold text-amber-200">Global Roots Market</span>
            </div>
            <p className="text-amber-100/70 leading-relaxed">
              Empowering Indian artisans & organic farmers with multimodal AI digitization, transparent fair-trade pricing, and sustainable direct supply chains.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-sm text-amber-300 mb-3">Authenticity Seals</h4>
            <ul className="space-y-2 text-amber-200/80">
              <li>• GI Tagged Government Registry</li>
              <li>• Handloom Mark Certified</li>
              <li>• Organic India Verified</li>
              <li>• India Craft Mark Certified</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-sm text-amber-300 mb-3">Platform Impact</h4>
            <ul className="space-y-2 text-amber-200/80">
              <li>• 14,250+ Rural Artisans & Farmers</li>
              <li>• 91.4% Direct Payout to Village UPI Accounts</li>
              <li>• 320+ Village Micro-Hub Clusters</li>
              <li>• 420 Tons CO2 Carbon Offset</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-sm text-amber-300 mb-3">Regional Support</h4>
            <p className="text-amber-200/80 mb-2">Voice support in 8 Indian regional languages available 24/7 for rural producers.</p>
            <span className="badge-gi">Helpline: 1800-ROOTS-INDIA</span>
          </div>
        </div>
      </footer>

      {/* Slide-Over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        currency={currency}
      />

      {/* Story Modal */}
      <StoryModal
        product={storyModalProduct}
        onClose={() => setStoryModalProduct(null)}
      />

      {/* WebXR 3D / AR Room View Modal */}
      <ArViewModal
        product={arModalProduct}
        onClose={() => setArModalProduct(null)}
      />
    </div>
  );
}
