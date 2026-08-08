import React, { useState } from 'react';
import { 
  UserCheck, Wallet, PackageCheck, Sparkles, TrendingUp, Mic, 
  ArrowUpRight, Clock, ShieldAlert, CheckCircle, RefreshCw, Layers, Bell, Leaf
} from 'lucide-react';

export default function SellerDashboardModule({ products }) {
  const [activePersona, setActivePersona] = useState('artisan'); // 'artisan' | 'farmer' | 'cooperative'
  const [payoutTriggered, setPayoutTriggered] = useState(false);
  const [voiceQueryActive, setVoiceQueryActive] = useState(false);
  const [voiceQueryText, setVoiceQueryText] = useState('आज मेरा कुल कितना पेआउट (Payout) ट्रांसफर होगा?');

  const handleTriggerPayout = () => {
    setPayoutTriggered(true);
    setTimeout(() => setPayoutTriggered(false), 4000);
  };

  const personaConfig = {
    artisan: {
      title: "Master Artisan Portal (रेशम / हस्तशिल्प पोर्टल)",
      name: "Pandit Rameshwar Weaver",
      location: "Varanasi, UP",
      earningsInr: 148500,
      pendingPayoutInr: 32400,
      activeOrders: 6,
      aiTrustScore: 99
    },
    farmer: {
      title: "Organic Farmer & Spices Hub (जैविक किसान डैशबोर्ड)",
      name: "Kurichiya Farmer Collective",
      location: "Wayanad, Kerala",
      earningsInr: 89200,
      pendingPayoutInr: 18500,
      activeOrders: 12,
      aiTrustScore: 98
    },
    cooperative: {
      title: "Village Craft Cooperative Manager (ग्राम सहकारी संघ)",
      name: "Jaipur Artisan Self-Help Group",
      location: "Jaipur, Rajasthan",
      earningsInr: 412000,
      pendingPayoutInr: 94000,
      activeOrders: 28,
      aiTrustScore: 100
    }
  };

  const currentConfig = personaConfig[activePersona];

  return (
    <div className="animate-fade-in space-y-8">
      {/* Persona Switcher Bar */}
      <div className="glass-card p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-amber-600" /> Role-Based Seller Portal
          </h2>
          <p className="text-xs text-slate-500 font-medium">Switch view to test different seller roles</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActivePersona('artisan')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activePersona === 'artisan'
                ? 'saffron-gradient text-white shadow-md'
                : 'bg-amber-100/60 text-slate-800 hover:bg-amber-200'
            }`}
          >
            🧵 Artisan Weaver View
          </button>
          <button
            onClick={() => setActivePersona('farmer')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activePersona === 'farmer'
                ? 'bg-emerald-700 text-white shadow-md'
                : 'bg-emerald-100/60 text-emerald-900 hover:bg-emerald-200'
            }`}
          >
            🌱 Organic Farmer View
          </button>
          <button
            onClick={() => setActivePersona('cooperative')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activePersona === 'cooperative'
                ? 'peacock-gradient text-white shadow-md'
                : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
            }`}
          >
            🏛️ Village Co-Op Leader
          </button>
        </div>
      </div>

      {/* Main Seller Summary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="glass-card p-5 space-y-2 border-l-4 border-amber-500">
          <span className="text-xs font-bold text-slate-500 uppercase">Total Lifetime Sales</span>
          <div className="text-2xl font-serif font-bold text-slate-900">
            ₹{currentConfig.earningsInr.toLocaleString('en-IN')}
          </div>
          <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
            <ArrowUpRight className="w-3.5 h-3.5" /> +18.4% this month
          </span>
        </div>

        <div className="glass-card p-5 space-y-2 border-l-4 border-emerald-500">
          <span className="text-xs font-bold text-slate-500 uppercase">Cleared UPI Pending Payout</span>
          <div className="text-2xl font-serif font-bold text-emerald-800">
            ₹{currentConfig.pendingPayoutInr.toLocaleString('en-IN')}
          </div>
          <button
            onClick={handleTriggerPayout}
            disabled={payoutTriggered}
            className="text-xs text-white bg-emerald-600 hover:bg-emerald-700 font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all"
          >
            <Wallet className="w-3.5 h-3.5" /> 
            {payoutTriggered ? "Instant UPI Transfer Initiated!" : "Withdraw Now to UPI"}
          </button>
        </div>

        <div className="glass-card p-5 space-y-2 border-l-4 border-purple-500">
          <span className="text-xs font-bold text-slate-500 uppercase">Active Orders Pending Shipping</span>
          <div className="text-2xl font-serif font-bold text-purple-950">
            {currentConfig.activeOrders} Shipments
          </div>
          <span className="text-[11px] text-purple-700 font-medium">Pickup scheduled by Delhivery</span>
        </div>

        <div className="glass-card p-5 space-y-2 border-l-4 border-indigo-500">
          <span className="text-xs font-bold text-slate-500 uppercase">AI Craft & Quality Trust Index</span>
          <div className="text-2xl font-serif font-bold text-indigo-950 flex items-center gap-2">
            {currentConfig.aiTrustScore}/100 <Sparkles className="w-4 h-4 text-amber-500" />
          </div>
          <span className="text-[11px] text-indigo-700 font-semibold">Tier 1 Verified Producer</span>
        </div>
      </div>

      {/* Voice Assistant & AI Sales Co-Pilot Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Hands-Free Voice Assistant */}
        <div className="glass-card p-6 space-y-4 peacock-gradient text-white gold-border rounded-3xl">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-serif font-bold text-amber-200 flex items-center gap-2">
              <Mic className="w-5 h-5 text-amber-400 animate-pulse" /> Hands-Free Voice Co-Pilot (वाणी सहायक)
            </h3>
            <span className="text-[10px] bg-white/10 px-2.5 py-1 rounded-full border border-white/20 text-amber-300">
              Hindi / Regional Speech Engine
            </span>
          </div>

          <p className="text-xs text-amber-100/90 leading-relaxed">
            Designed for hands-free operation while working at the loom or farm. Speak your query to hear audio responses in Hindi or English.
          </p>

          <div className="p-3 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-amber-100 italic">
            "{voiceQueryText}"
          </div>

          <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-400/30 text-xs text-amber-200 space-y-1">
            <span className="font-bold text-amber-300 block">AI Voice Response:</span>
            <p>
              "आपका ₹{currentConfig.pendingPayoutInr.toLocaleString('en-IN')} का पेआउट आज शाम 5 बजे सीधे आपके रजिस्टर्ड बैंक खाते में UPI द्वारा ट्रांसफर कर दिया जाएगा।"
            </p>
          </div>

          <button
            onClick={() => {
              setVoiceQueryActive(!voiceQueryActive);
              setVoiceQueryText('आज मेरे कितने ऑर्डर डिलीवर हुए हैं? (How many orders delivered today?)');
            }}
            className="btn-gold w-full py-2.5 text-xs font-bold"
          >
            <Mic className="w-4 h-4" /> Tap to Speak Query in Hindi
          </button>
        </div>

        {/* AI Recommendations to Boost Sales */}
        <div className="glass-card p-6 space-y-4">
          <h3 className="text-lg font-serif font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" /> AI Sales & Quality Co-Pilot Recommendations
          </h3>

          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-purple-950">Add 1 Workshop Creation Video</p>
                <p className="text-slate-600 mt-0.5">
                  Products with behind-the-scenes craft videos receive <strong className="text-purple-900">+34% higher global buyer conversion</strong>.
                </p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-amber-950">Festive Season Surge Pricing Opportunity</p>
                <p className="text-slate-600 mt-0.5">
                  Handloom sarees are experiencing high demand in North America. Recommended price adjustment: +8%.
                </p>
              </div>
            </div>

            {activePersona === 'farmer' && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                <Leaf className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-emerald-950">Fresh Harvest Countdown Alert</p>
                  <p className="text-slate-600 mt-0.5">
                    Wayanad Pepper batch has 340 days shelf life remaining. Cold-chain storage parameters verified at 20°C.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Active Listings Table */}
      <div className="glass-card p-6 space-y-4">
        <h3 className="text-lg font-serif font-bold text-slate-900">
          Your Digitized Products & Quality Grades
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-amber-200 text-slate-500 font-bold uppercase">
                <th className="pb-3">Product Name</th>
                <th className="pb-3">Category</th>
                <th className="pb-3">AI Quality Score</th>
                <th className="pb-3">Stock Level</th>
                <th className="pb-3">Price (INR)</th>
                <th className="pb-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-100 text-slate-800">
              {products.map((p) => (
                <tr key={p.id} className="hover:bg-amber-50/50">
                  <td className="py-3 font-semibold text-slate-900 flex items-center gap-3">
                    <img src={p.image} alt={p.name} className="w-9 h-9 rounded-lg object-cover" />
                    <div>
                      <p className="font-bold">{p.name}</p>
                      <p className="text-[10px] text-amber-800">{p.hindiName}</p>
                    </div>
                  </td>
                  <td className="py-3">{p.category}</td>
                  <td className="py-3">
                    <span className="badge-ai-score">
                      {p.aiQualityScore}/100
                    </span>
                  </td>
                  <td className="py-3 font-semibold">{p.inStock} Available</td>
                  <td className="py-3 font-bold font-serif">₹{p.basePriceInr.toLocaleString('en-IN')}</td>
                  <td className="py-3 text-right">
                    <button className="text-amber-700 hover:text-amber-900 font-bold underline">
                      Edit Listing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
