import React, { useState } from 'react';
import { 
  Sparkles, Award, MapPin, Info, ShoppingBag, Eye, Heart, 
  TrendingUp, ShieldCheck, DollarSign, RefreshCw, Leaf, CheckCircle2, ChevronRight
} from 'lucide-react';

export default function StorefrontModule({ 
  products, 
  currency, 
  onAddToCart, 
  onOpenStory, 
  onOpenArModal 
}) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [giOnlyFilter, setGiOnlyFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activePriceBreakdown, setActivePriceBreakdown] = useState(null);

  const categories = ['All', 'Handloom & Textiles', 'Organic Produce', 'Woodcraft & Carvings', 'Pottery & Ceramics'];

  const filteredProducts = products.filter(p => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesGi = !giOnlyFilter || p.giTag;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.hindiName.includes(searchQuery) ||
                          p.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.artisanName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesGi && matchesSearch;
  });

  const formatPrice = (priceInr, priceUsd) => {
    if (currency === 'USD') {
      return `$${priceUsd}`;
    }
    return `₹${priceInr.toLocaleString('en-IN')}`;
  };

  return (
    <div className="animate-fade-in space-y-8">
      {/* Hero Announcement Banner for Indian & Global Audience */}
      <div className="relative overflow-hidden rounded-3xl peacock-gradient p-8 md:p-12 text-white shadow-2xl gold-border">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 jaali-bg"></div>
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> 100% Authentic Indian Heritage & Organic Roots
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-amber-100 leading-tight">
            Directly from India's Master Artisans & Organic Farmers
          </h1>
          <p className="text-amber-100/90 text-sm md:text-base leading-relaxed">
            Eliminating middlemen using AI quality verification, transparent fair-trade dynamic pricing, and climate-friendly direct rural fulfillment. Every purchase empowers village families.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 text-xs md:text-sm font-medium">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> GI-Tagged Certified
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <TrendingUp className="w-4 h-4 text-amber-400" /> 91.4% Direct Payout to Villages
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <Sparkles className="w-4 h-4 text-purple-300" /> Vision AI Quality Score Certified
            </span>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar Controls */}
      <div className="glass-card p-5 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                  selectedCategory === cat 
                    ? 'saffron-gradient text-white shadow-md' 
                    : 'bg-amber-100/60 text-slate-800 hover:bg-amber-200/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & GI Filter */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <input
              type="text"
              placeholder="Search saree, spices, artisan, region..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 text-sm rounded-xl border border-amber-300 bg-white/90 focus:outline-none focus:ring-2 focus:ring-amber-500 w-full md:w-64"
            />
            <label className="flex items-center gap-2 cursor-pointer bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-300 text-xs font-bold text-emerald-800 shrink-0">
              <input
                type="checkbox"
                checked={giOnlyFilter}
                onChange={(e) => setGiOnlyFilter(e.target.checked)}
                className="rounded text-emerald-600 focus:ring-emerald-500"
              />
              GI-Tag Only
            </label>
          </div>
        </div>
      </div>

      {/* Product Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="glass-card overflow-hidden flex flex-col group">
            {/* Image Container with Badges */}
            <div className="relative h-64 overflow-hidden bg-slate-100">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                {product.giTag && (
                  <span className="badge-gi">
                    <Award className="w-3 h-3" /> GI Tagged ({product.giTagCode})
                  </span>
                )}
                {product.organicCertified && (
                  <span className="badge-organic">
                    <Leaf className="w-3 h-3" /> Organic India Certified
                  </span>
                )}
              </div>
              <div className="absolute top-3 right-3">
                <span className="badge-ai-score">
                  <Sparkles className="w-3 h-3" /> AI Quality: {product.aiQualityScore}/100
                </span>
              </div>
              <button 
                onClick={() => onOpenArModal(product)}
                className="absolute bottom-3 right-3 bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg backdrop-blur-md flex items-center gap-1.5 border border-white/20"
              >
                <Eye className="w-3.5 h-3.5" /> 3D/AR Room View
              </button>
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-1 text-xs text-amber-800 font-medium mb-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>{product.region}</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-slate-900 leading-snug">
                  {product.name}
                </h3>
                <p className="text-xs font-medium text-amber-700 font-serif">
                  {product.hindiName}
                </p>

                {/* Artisan Profile Preview */}
                <div className="mt-3 p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/70 flex items-center gap-3">
                  <img 
                    src={product.artisanAvatar} 
                    alt={product.artisanName} 
                    className="w-9 h-9 rounded-full object-cover border border-amber-400"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-slate-900 truncate">{product.artisanName}</p>
                    <button 
                      onClick={() => onOpenStory(product)}
                      className="text-[11px] text-amber-700 hover:text-amber-900 underline font-semibold flex items-center gap-0.5"
                    >
                      Read Artisan Lineage Story <ChevronRight className="w-3 h-3 inline" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Price & Dynamic Breakdown */}
              <div className="pt-3 border-t border-amber-200/60 flex flex-col gap-3">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Fair-Trade Dynamic Price</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold font-serif text-slate-900">
                        {formatPrice(product.basePriceInr, product.basePriceUsd)}
                      </span>
                      {product.freshnessDiscount > 0 && (
                        <span className="text-xs text-emerald-600 font-bold bg-emerald-100 px-1.5 py-0.5 rounded">
                          {(product.freshnessDiscount * 100)}% Off (Harvest Fresh)
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => setActivePriceBreakdown(activePriceBreakdown === product.id ? null : product.id)}
                    className="text-xs text-amber-700 hover:text-amber-900 bg-amber-100/80 px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1 border border-amber-300"
                  >
                    <Info className="w-3.5 h-3.5" /> Fair Price Math
                  </button>
                </div>

                {/* Fair Price Breakdown Popover */}
                {activePriceBreakdown === product.id && (
                  <div className="p-3 rounded-xl bg-slate-900 text-slate-100 text-xs space-y-2 animate-fade-in border border-amber-400/40">
                    <div className="font-bold text-amber-300 border-b border-slate-700 pb-1 flex justify-between">
                      <span>AI Fair-Trade Math</span>
                      <span>100% Transparent</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Artisan Labor Wage:</span>
                      <span className="font-medium text-emerald-400">₹{product.artisanFairWageInr}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Raw Materials:</span>
                      <span>₹{product.rawMaterialCostInr}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Craft Complexity Factor:</span>
                      <span>{product.complexityFactor}x</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Market Demand Multiplier:</span>
                      <span>{product.demandMultiplier}x</span>
                    </div>
                    <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800">
                      Guarantees 88%+ directly reaches {product.artisanName}'s village account.
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <button
                  onClick={() => onAddToCart(product)}
                  className="btn-primary w-full py-2.5 text-sm"
                >
                  <ShoppingBag className="w-4 h-4" /> Add to Cart + Direct Tip
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
