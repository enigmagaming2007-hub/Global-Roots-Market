import React, { useState } from 'react';
import { 
  X, ShoppingBag, Trash2, Heart, ShieldCheck, 
  CreditCard, CheckCircle2, MapPin, Eye, Sparkles
} from 'lucide-react';

export function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, currency }) {
  const [tipAmount, setTipAmount] = useState(100);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen) return null;

  const subtotalInr = cartItems.reduce((acc, item) => acc + (item.basePriceInr * item.quantity), 0);
  const subtotalUsd = cartItems.reduce((acc, item) => acc + (item.basePriceUsd * item.quantity), 0);

  const totalInr = subtotalInr + tipAmount;
  const totalUsd = subtotalUsd + Math.round(tipAmount / 80);

  const directArtisanShareInr = Math.round(subtotalInr * 0.914) + tipAmount;

  const handleCheckout = () => {
    setCheckoutComplete(true);
    setTimeout(() => {
      setCheckoutComplete(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-sm animate-fade-in flex justify-end">
      <div className="w-full max-w-md bg-slate-50 h-full shadow-2xl flex flex-col justify-between overflow-hidden border-l border-amber-300">
        {/* Cart Header */}
        <div className="p-5 peacock-gradient text-white flex justify-between items-center gold-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-300" />
            <h3 className="font-serif font-bold text-lg text-amber-100">Your Heritage Cart</h3>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-lg text-slate-300 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {checkoutComplete ? (
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center space-y-4 bg-emerald-50">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 animate-bounce" />
            <h3 className="text-2xl font-serif font-bold text-emerald-950">Dhanyawad! (धन्यवाद!)</h3>
            <p className="text-sm font-semibold text-emerald-800">
              Your order has been sent directly to the artisan's rural village workshop!
            </p>
            <div className="p-4 rounded-xl bg-white border border-emerald-200 text-xs space-y-1 text-slate-700 w-full text-left">
              <p className="font-bold text-emerald-900">Direct Impact Summary:</p>
              <p>• ₹{directArtisanShareInr.toLocaleString('en-IN')} transferred directly to artisan wallet via UPI.</p>
              <p>• Micro-Hub Delhivery shipping dispatch initiated.</p>
            </div>
          </div>
        ) : (
          <>
            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto" />
                  <p className="text-slate-600 font-semibold text-sm">Your cart is currently empty</p>
                  <p className="text-xs text-slate-400">Explore authentic sarees, ceramics, and organic farm harvests!</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="p-3 rounded-2xl bg-white border border-amber-200 flex gap-3 shadow-sm">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <h4 className="font-bold text-xs text-slate-900 truncate">{item.name}</h4>
                        <p className="text-[10px] text-amber-700 font-semibold">{item.artisanName}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-serif font-bold text-sm text-slate-900">
                          {currency === 'USD' ? `$${item.basePriceUsd}` : `₹${item.basePriceInr.toLocaleString('en-IN')}`}
                        </span>
                        <div className="flex items-center gap-2 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200 text-xs">
                          <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="font-bold text-slate-700 px-1">-</button>
                          <span className="font-bold text-slate-900">{item.quantity}</span>
                          <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="font-bold text-slate-700 px-1">+</button>
                        </div>
                      </div>
                    </div>
                    <button onClick={() => onRemoveItem(item.id)} className="text-slate-400 hover:text-red-500 self-start p-1">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}

              {/* Direct Artisan Tip Selector */}
              {cartItems.length > 0 && (
                <div className="p-4 rounded-2xl bg-amber-100/70 border border-amber-300 space-y-2 text-xs">
                  <div className="flex items-center justify-between font-bold text-amber-950">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-red-500 fill-red-500" /> Direct Village Artisan Tip
                    </span>
                    <span className="text-amber-800">100% Goes to Village</span>
                  </div>
                  <p className="text-[11px] text-slate-700">Add a gesture of appreciation directly to the maker's family wallet.</p>
                  <div className="flex gap-2 pt-1">
                    {[50, 100, 200, 500].map((amt) => (
                      <button
                        key={amt}
                        onClick={() => setTipAmount(amt)}
                        className={`flex-1 py-1.5 rounded-lg font-bold border text-xs transition-all ${
                          tipAmount === amt
                            ? 'saffron-gradient text-white border-amber-500 shadow-sm'
                            : 'bg-white text-slate-800 border-amber-300 hover:bg-amber-50'
                        }`}
                      >
                        +₹{amt}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Cart Footer & Checkout */}
            {cartItems.length > 0 && (
              <div className="p-5 bg-white border-t border-amber-200 space-y-4 shadow-lg">
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Products Subtotal:</span>
                    <span className="font-serif font-bold text-slate-900">
                      {currency === 'USD' ? `$${subtotalUsd}` : `₹${subtotalInr.toLocaleString('en-IN')}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Direct Artisan Tip:</span>
                    <span>+₹{tipAmount}</span>
                  </div>
                  <div className="flex justify-between font-bold text-slate-900 text-sm pt-2 border-t border-slate-100">
                    <span>Total Amount Payable:</span>
                    <span className="text-amber-800 text-base font-serif">
                      {currency === 'USD' ? `$${totalUsd}` : `₹${totalInr.toLocaleString('en-IN')}`}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="btn-primary w-full py-3 font-bold text-sm"
                >
                  <CreditCard className="w-4 h-4" /> Pay via UPI / Cards & Empower Artisan
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export function StoryModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm animate-fade-in flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-amber-300 relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 bg-slate-900/60 text-white p-1.5 rounded-full hover:bg-slate-900"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-64 bg-slate-900">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex items-end p-6">
            <div>
              <span className="badge-gi mb-2">{product.giTagCode}</span>
              <h2 className="text-2xl font-serif font-bold text-white">{product.name}</h2>
              <p className="text-amber-300 font-serif text-sm">{product.hindiName}</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-5 text-slate-800">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-amber-50 border border-amber-200">
            <img src={product.artisanAvatar} alt={product.artisanName} className="w-14 h-14 rounded-full object-cover border-2 border-amber-400" />
            <div>
              <h4 className="font-serif font-bold text-slate-900 text-base">{product.artisanName}</h4>
              <p className="text-xs text-amber-800 flex items-center gap-1 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-amber-600" /> {product.region}
              </p>
            </div>
          </div>

          <div className="space-y-2 text-xs leading-relaxed text-slate-700">
            <h5 className="font-serif font-bold text-sm text-slate-900">Heritage Lineage & Craft Technique</h5>
            <p>{product.artisanStory}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs pt-2 border-t border-amber-100">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] text-slate-500 font-bold block uppercase">Craft Time</span>
              <span className="font-bold text-slate-900">{product.craftTimeHours || 80} Hours Labor</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] text-slate-500 font-bold block uppercase">AI Quality Grade</span>
              <span className="font-bold text-purple-700">{product.aiGrade || "Grade S+"}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] text-slate-500 font-bold block uppercase">Verified Wage</span>
              <span className="font-bold text-emerald-700">100% Fair Wage Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ArViewModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/85 backdrop-blur-md animate-fade-in flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl border border-amber-400/40 relative space-y-4 p-6">
        <div className="flex justify-between items-center pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-amber-400" />
            <h3 className="font-serif font-bold text-lg text-amber-200">WebXR 3D / AR Living Room View</h3>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 3D AR Camera Preview Simulation */}
        <div className="relative h-80 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center group">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" 
            alt="Living Room Background" 
            className="w-full h-full object-cover opacity-50"
          />
          {/* Overlay projected product */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400 animate-pulse">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs text-slate-200 flex justify-between items-center">
            <span>Scale: 1:1 True-to-Size Room Projection</span>
            <span className="text-amber-400 font-bold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> AR Active
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-400 text-center">
          Point your smartphone camera at your wall or table to view real-size handloom texture & craftsmanship.
        </p>
      </div>
    </div>
  );
}
