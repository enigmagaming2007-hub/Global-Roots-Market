import React, { useState } from 'react';
import { 
  ShieldCheck, AlertTriangle, CheckCircle2, XCircle, Award, 
  TrendingUp, Users, HeartHandshake, FileCheck, Layers, Eye
} from 'lucide-react';

export default function AdminPanelModule({ products }) {
  const [pendingQueue, setPendingQueue] = useState([
    {
      id: "pending-1",
      name: "Authentic Bhuj Bandhani Silk Dupatta",
      artisan: "Kutch Mahila Artisan Cooperative",
      region: "Bhuj, Gujarat",
      giTagCode: "GI-IN-0144",
      aiQualityScore: 97.2,
      confidence: 99.1,
      flagReason: "Pending Government GI Registry Certificate Hash Verification",
      priceInr: 6500,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: "pending-2",
      name: "Kumbakonam Pure Brass Temple Lamp (Kuthuvilakku)",
      artisan: "Senthil Metal Craftsmen Guild",
      region: "Kumbakonam, Tamil Nadu",
      giTagCode: "GI-IN-0210",
      aiQualityScore: 98.8,
      confidence: 98.5,
      flagReason: "High Value Artcraft Audit Threshold (>₹15,000)",
      priceInr: 18500,
      image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=400&q=80"
    }
  ]);

  const handleApprove = (id) => {
    setPendingQueue(pendingQueue.filter(item => item.id !== id));
  };

  const handleReject = (id) => {
    setPendingQueue(pendingQueue.filter(item => item.id !== id));
  };

  return (
    <div className="animate-fade-in space-y-8">
      {/* Header Banner */}
      <div className="glass-card p-6 peacock-gradient text-white gold-border rounded-3xl space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold">
          <ShieldCheck className="w-4 h-4 text-amber-300" /> Platform Compliance & Verification Control Room
        </div>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-100">
          Global Administrative Panel & Quality Integrity Monitor
        </h2>
        <p className="text-amber-100/90 text-xs md:text-sm">
          Auditing GI Tag authenticity, enforcing 88%+ direct artisan payouts, and approving AI-digitized product submissions.
        </p>
      </div>

      {/* Impact Scorecard & Platform Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="glass-card p-5 space-y-2 border-l-4 border-amber-500">
          <div className="flex justify-between items-center text-slate-500 text-xs font-bold uppercase">
            <span>Verified Artisans</span>
            <Users className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-2xl font-serif font-bold text-slate-900">14,250</div>
          <p className="text-[11px] text-amber-700 font-semibold">Across 320 rural village clusters</p>
        </div>

        <div className="glass-card p-5 space-y-2 border-l-4 border-emerald-500">
          <div className="flex justify-between items-center text-slate-500 text-xs font-bold uppercase">
            <span>Artisan Payout Share</span>
            <HeartHandshake className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-serif font-bold text-emerald-800">91.4%</div>
          <p className="text-[11px] text-emerald-700 font-semibold">Platform Commission capped at 8.6%</p>
        </div>

        <div className="glass-card p-5 space-y-2 border-l-4 border-purple-500">
          <div className="flex justify-between items-center text-slate-500 text-xs font-bold uppercase">
            <span>GI-Tagged Products</span>
            <Award className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-2xl font-serif font-bold text-purple-950">85.2%</div>
          <p className="text-[11px] text-purple-700 font-semibold">Government Certified Authenticity</p>
        </div>

        <div className="glass-card p-5 space-y-2 border-l-4 border-indigo-500">
          <div className="flex justify-between items-center text-slate-500 text-xs font-bold uppercase">
            <span>Female Empowerment</span>
            <TrendingUp className="w-4 h-4 text-indigo-600" />
          </div>
          <div className="text-2xl font-serif font-bold text-indigo-950">68%</div>
          <p className="text-[11px] text-indigo-700 font-semibold">Women Artisan-Led Collectives</p>
        </div>
      </div>

      {/* AI Verification Queue Section */}
      <div className="glass-card p-6 space-y-5">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-serif font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" /> Human-in-the-Loop AI Verification Queue
            </h3>
            <p className="text-xs text-slate-500">Listings flagged by Vision AI for final compliance review</p>
          </div>
          <span className="badge-ai-score">
            {pendingQueue.length} Pending Approval
          </span>
        </div>

        {pendingQueue.length === 0 ? (
          <div className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <p className="text-sm font-bold text-emerald-900">All AI Submissions Approved & Verified!</p>
            <p className="text-xs text-emerald-700">No pending items in queue.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pendingQueue.map((item) => (
              <div key={item.id} className="p-4 rounded-2xl bg-amber-50/70 border border-amber-300 space-y-4">
                <div className="flex items-start gap-3">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
                  <div className="flex-1 min-w-0">
                    <span className="badge-gi text-[10px] py-0.5 mb-1">{item.giTagCode}</span>
                    <h4 className="font-serif font-bold text-sm text-slate-900 truncate">{item.name}</h4>
                    <p className="text-xs text-slate-600">{item.artisan} • {item.region}</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-white border border-amber-200 text-xs space-y-1">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>AI Quality Score:</span>
                    <span className="text-purple-700">{item.aiQualityScore}/100</span>
                  </div>
                  <div className="text-[11px] text-amber-800">
                    <strong>Flag Reason:</strong> {item.flagReason}
                  </div>
                </div>

                <div className="flex gap-2 pt-1">
                  <button
                    onClick={() => handleApprove(item.id)}
                    className="flex-1 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-all"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" /> Approve & Publish
                  </button>
                  <button
                    onClick={() => handleReject(item.id)}
                    className="py-2 px-3 bg-red-100 hover:bg-red-200 text-red-700 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-all"
                  >
                    <XCircle className="w-3.5 h-3.5" /> Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Fair-Trade Compliance Inspector */}
      <div className="glass-card p-6 space-y-4">
        <h3 className="text-lg font-serif font-bold text-slate-900 flex items-center gap-2">
          <FileCheck className="w-5 h-5 text-emerald-600" /> Platform Fair-Trade Margin Inspector
        </h3>
        <p className="text-xs text-slate-600">
          Strictly monitoring platform margins across all active categories to prevent exploitative pricing.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-900 text-white space-y-1">
            <span className="text-amber-400 font-bold">Handloom Sarees Category</span>
            <div className="flex justify-between text-slate-300 text-[11px]">
              <span>Artisan Payout:</span>
              <span className="font-bold text-emerald-400">92.0%</span>
            </div>
            <div className="flex justify-between text-slate-300 text-[11px]">
              <span>Platform Operation Fee:</span>
              <span>8.0%</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900 text-white space-y-1">
            <span className="text-amber-400 font-bold">Organic Spices Category</span>
            <div className="flex justify-between text-slate-300 text-[11px]">
              <span>Farmer Payout:</span>
              <span className="font-bold text-emerald-400">90.5%</span>
            </div>
            <div className="flex justify-between text-slate-300 text-[11px]">
              <span>Platform Operation Fee:</span>
              <span>9.5%</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900 text-white space-y-1">
            <span className="text-amber-400 font-bold">Woodcraft & Carvings</span>
            <div className="flex justify-between text-slate-300 text-[11px]">
              <span>Artisan Payout:</span>
              <span className="font-bold text-emerald-400">91.8%</span>
            </div>
            <div className="flex justify-between text-slate-300 text-[11px]">
              <span>Platform Operation Fee:</span>
              <span>8.2%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
