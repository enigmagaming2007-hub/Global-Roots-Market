import React, { useState } from 'react';
import { 
  Truck, Navigation, Thermometer, ShieldCheck, Zap, 
  MapPin, CheckCircle2, RefreshCw, Leaf, Globe, Box, Radio
} from 'lucide-react';
import { LOGISTICS_CARRIERS } from '../data/marketData';

export default function LogisticsModule() {
  const [activeShipmentId, setActiveShipmentId] = useState('SHIP-9021');
  const [sensorStream, setSensorStream] = useState({
    tempC: 18.5,
    humidityPct: 54,
    status: 'Optimal Cold-Chain Safe'
  });

  const activeShipments = [
    {
      id: "SHIP-9021",
      product: "Wayanad Organic High-Altitude Pepper",
      origin: "Wayanad Micro-Hub, Kerala",
      destination: "Bengaluru, Karnataka (Domestic Express)",
      carrier: "BlueDart Cold-Chain Direct",
      status: "In-Transit (Hub Consolidated)",
      tempRequired: true,
      currentTempC: 18.5,
      eta: "Tomorrow, 2:00 PM",
      co2Saved: "0.42 kg"
    },
    {
      id: "SHIP-8840",
      product: "Pure Banarasi Zari Silk Saree",
      origin: "Varanasi Handloom Hub, Uttar Pradesh",
      destination: "London, UK (International)",
      carrier: "DHL Express Worldwide (Air)",
      status: "Customs Paperwork Auto-Cleared",
      tempRequired: false,
      currentTempC: null,
      eta: "Aug 12, 2026",
      co2Saved: "1.20 kg"
    }
  ];

  const currentShipment = activeShipments.find(s => s.id === activeShipmentId) || activeShipments[0];

  return (
    <div className="animate-fade-in space-y-8">
      {/* Header Banner */}
      <div className="glass-card p-6 peacock-gradient text-white gold-border rounded-3xl space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold">
          <Truck className="w-4 h-4 text-amber-300" /> AI Logistics & Cold-Chain Optimization Engine
        </div>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-100">
          Smart Rural Micro-Hub Consolidation & Temperature Logistics
        </h2>
        <p className="text-amber-100/90 text-xs md:text-sm">
          Dynamic route optimization, automated customs documentation, and real-time IoT temperature monitoring for organic harvests.
        </p>
      </div>

      {/* Interactive Logistics Control Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column: Active Shipments */}
        <div className="glass-card p-5 space-y-4">
          <h3 className="text-base font-serif font-bold text-slate-900 flex items-center justify-between">
            <span>Active Managed Shipments</span>
            <span className="text-xs text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full font-bold">
              {activeShipments.length} Live
            </span>
          </h3>

          <div className="space-y-3">
            {activeShipments.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveShipmentId(s.id)}
                className={`w-full p-3.5 rounded-xl border text-left transition-all text-xs space-y-2 ${
                  activeShipmentId === s.id
                    ? 'border-amber-500 bg-amber-50/90 shadow-sm'
                    : 'border-slate-200 bg-white hover:bg-slate-50'
                }`}
              >
                <div className="flex justify-between items-center font-bold">
                  <span className="text-slate-900">{s.id}</span>
                  <span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded text-[10px]">
                    {s.status}
                  </span>
                </div>
                <p className="font-semibold text-amber-900 truncate">{s.product}</p>
                <p className="text-[11px] text-slate-500">{s.carrier}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Middle Column: Route Map & Micro-Hub Consolidation */}
        <div className="glass-card p-6 space-y-5 md:col-span-2">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-serif font-bold text-slate-900 flex items-center gap-2">
              <Navigation className="w-5 h-5 text-amber-600" /> Route Topology & Consolidation Engine
            </h3>
            <span className="text-xs text-emerald-800 font-bold bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300 flex items-center gap-1">
              <Leaf className="w-3.5 h-3.5" /> First-Mile Freight Consolidated (-40% CO2)
            </span>
          </div>

          {/* Route Visualizer Card */}
          <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-4 border border-amber-400/30">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-3 border-b border-slate-800">
              <div>
                <span className="text-xs text-amber-400 font-bold block">Selected Dispatch: {currentShipment.id}</span>
                <h4 className="text-base font-serif font-bold">{currentShipment.product}</h4>
              </div>
              <span className="text-xs bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full border border-amber-400/40">
                ETA: {currentShipment.eta}
              </span>
            </div>

            {/* Visual Route Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-2">
              <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 space-y-1">
                <span className="text-[10px] text-amber-400 uppercase font-bold flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Step 1: Farm / Origin
                </span>
                <p className="font-bold">{currentShipment.origin}</p>
                <p className="text-[10px] text-slate-400">Rural Village Pickup</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-800 border border-amber-500/40 space-y-1">
                <span className="text-[10px] text-emerald-400 uppercase font-bold flex items-center gap-1">
                  <Box className="w-3 h-3" /> Step 2: Micro-Hub AI Merge
                </span>
                <p className="font-bold">Village Cluster Freight Hub</p>
                <p className="text-[10px] text-emerald-300">4 Artisan Orders Consolidated</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-800 border border-slate-700 space-y-1">
                <span className="text-[10px] text-purple-400 uppercase font-bold flex items-center gap-1">
                  <Globe className="w-3 h-3" /> Step 3: Final Delivery
                </span>
                <p className="font-bold">{currentShipment.destination}</p>
                <p className="text-[10px] text-slate-400">Direct Express Delivery</p>
              </div>
            </div>

            {/* IoT Cold Chain Live Telemetry Stream */}
            {currentShipment.tempRequired && (
              <div className="p-4 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                    <Thermometer className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-300 font-bold block flex items-center gap-1">
                      <Radio className="w-3 h-3 text-emerald-400 animate-ping" /> IoT Cold-Chain Live Sensor Stream
                    </span>
                    <span className="text-sm font-bold text-white">
                      Current Temp: {sensorStream.tempC}°C • Humidity: {sensorStream.humidityPct}%
                    </span>
                  </div>
                </div>
                <span className="text-xs text-emerald-400 bg-emerald-900/80 px-2.5 py-1 rounded font-bold">
                  {sensorStream.status}
                </span>
              </div>
            )}
          </div>

          {/* Logistics Carrier Network List */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-bold text-slate-900">
              Integrated Rural Micro-Carrier Dispatch Network
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {LOGISTICS_CARRIERS.map((c, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-amber-50/60 border border-amber-200 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-900">{c.name}</p>
                    <p className="text-[11px] text-slate-500">{c.speed} • CO2: {c.co2PerKg}</p>
                  </div>
                  <span className="font-bold text-amber-800">{c.rating}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
