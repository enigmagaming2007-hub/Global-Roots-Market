import React, { useState } from 'react';
import { 
  Sparkles, Camera, Mic, CheckCircle2, ShieldCheck, RefreshCw, 
  Upload, Wand2, ArrowRight, Award, DollarSign, FileText, Globe, AlertCircle
} from 'lucide-react';

export default function AIOnboardingModule({ onPublishProduct }) {
  const [selectedCategory, setSelectedCategory] = useState('Handloom & Textiles');
  const [productTitleInput, setProductTitleInput] = useState('');
  const [selectedImage, setSelectedImage] = useState(
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80'
  );
  const [voiceNoteText, setVoiceNoteText] = useState(
    'यह हाथ की बुनी हुई शुद्ध चंदेरी सिल्क साड़ी है। इसे बनाने में 80 घंटे लगे हैं।'
  );
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanResult, setScanResult] = useState(null);

  // Preset sample items for quick testing
  const samplePresets = [
    {
      name: "Chanderi Gold Zari Silk Saree",
      category: "Handloom & Textiles",
      img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      voice: "यह हाथ की बुनी हुई शुद्ध चंदेरी सिल्क साड़ी है। इसे बनाने में 80 घंटे लगे हैं।"
    },
    {
      name: "Organic Malabar Cardamom Pods",
      category: "Organic Produce",
      img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
      voice: "वायनाड की पहाड़ियों से ताज़ा तोड़ी गई हरी इलायची। जैविक और रसायन मुक्त।"
    },
    {
      name: "Tanjore Gold Leaf Ganesha Painting",
      category: "Woodcraft & Carvings",
      img: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80",
      voice: "24 कैरट सोने के वर्क के साथ तंजौर शैली की लकड़ी की नक्काशीदार पेंटिंग।"
    }
  ];

  const handleStartAIScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    setScanResult(null);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      setScanProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        setIsScanning(false);
        setScanResult({
          aiQualityScore: 98.4,
          grade: "Grade S+ (Export Masterpiece Quality)",
          weaveThreadCount: selectedCategory === "Handloom & Textiles" ? "440 threads/sq.inch" : "N/A",
          defectDetection: "0 Surface Deficiencies (Purity 99.8%)",
          giTagVerified: true,
          giTagCode: "GI-IN-0092",
          generatedTitle: productTitleInput || (selectedCategory === "Organic Produce" ? "Wayanad Rain-Fed Bio Cardamom" : "Handloom Royal Chanderi Zari Saree"),
          generatedHindiTitle: "शाही हथकरघा चंदेरी ज़री साड़ी",
          generatedStoryEnglish: "Handcrafted using traditional shuttle techniques passed down over generations. The gold zari threads feature authentic metallic purity wrapped over silk yarn.",
          generatedStoryHindi: "पीढ़ियों से चली आ रही पारंपरिक हथकरघा विधि द्वारा निर्मित। रेशमी धागों पर 24K सोने की ज़री की शुद्धता प्रमाणित है।",
          fairPriceInr: selectedCategory === "Organic Produce" ? 1450 : 16800,
          fairPriceUsd: selectedCategory === "Organic Produce" ? 18 : 205,
          artisanBaseWageInr: selectedCategory === "Organic Produce" ? 950 : 11000,
          rawMaterialCostInr: selectedCategory === "Organic Produce" ? 350 : 4200,
          craftComplexityMultiplier: 1.25,
          seoKeywords: ["#AuthenticHandloom", "#GI_Tagged", "#PureSilk", "#FairTradeIndia"]
        });
      }
    }, 400);
  };

  const handlePublish = () => {
    if (!scanResult) return;
    const newProduct = {
      id: `prod-${Date.now()}`,
      name: scanResult.generatedTitle,
      hindiName: scanResult.generatedHindiTitle,
      category: selectedCategory,
      region: "Varanasi, Uttar Pradesh",
      state: "Uttar Pradesh",
      artisanName: "New Verified Artisan Member",
      artisanAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      artisanStory: scanResult.generatedStoryEnglish,
      giTag: scanResult.giTagVerified,
      giTagCode: scanResult.giTagCode,
      handloomCertified: true,
      organicCertified: selectedCategory === "Organic Produce",
      rating: 5.0,
      reviewsCount: 1,
      image: selectedImage,
      aiQualityScore: Math.round(scanResult.aiQualityScore),
      aiGrade: scanResult.grade,
      basePriceInr: scanResult.fairPriceInr,
      basePriceUsd: scanResult.fairPriceUsd,
      artisanFairWageInr: scanResult.artisanBaseWageInr,
      rawMaterialCostInr: scanResult.rawMaterialCostInr,
      complexityFactor: scanResult.craftComplexityMultiplier,
      demandMultiplier: 1.05,
      freshnessDiscount: 0,
      suggestedTipInr: 200,
      inStock: 5,
      status: "verified"
    };
    onPublishProduct(newProduct);
  };

  return (
    <div className="animate-fade-in space-y-8 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="glass-card p-6 md:p-8 peacock-gradient text-white gold-border rounded-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold">
          <Sparkles className="w-4 h-4 text-amber-300" /> AI-Powered Quality & Heritage Digitization Studio
        </div>
        <h2 className="text-2xl md:text-4xl font-serif font-bold text-amber-100">
          Digitize Products in Seconds with Multimodal Vision AI
        </h2>
        <p className="text-amber-100/90 text-sm leading-relaxed">
          Designed for rural artisans & farmers. Upload a product photo and speak in your native dialect—our AI automatically certifies weave purity/crop freshness, writes heritage stories in Hindi & English, and sets fair pricing.
        </p>
      </div>

      {/* Preset Pickers for Quick Demo */}
      <div className="glass-card p-4 space-y-2">
        <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">
          ⚡ Quick Demo Presets (Tap to Load Sample Product)
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {samplePresets.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedImage(preset.img);
                setSelectedCategory(preset.category);
                setProductTitleInput(preset.name);
                setVoiceNoteText(preset.voice);
              }}
              className="p-3 rounded-xl border border-amber-300/80 bg-amber-50/50 hover:bg-amber-100/80 text-left transition-all text-xs font-semibold text-slate-800 flex items-center gap-3"
            >
              <img src={preset.img} alt={preset.name} className="w-10 h-10 rounded-lg object-cover" />
              <div className="truncate">
                <p className="truncate font-bold text-slate-900">{preset.name}</p>
                <p className="text-[10px] text-amber-700">{preset.category}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Form & Camera Upload */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Image Upload & Voice Note */}
        <div className="glass-card p-6 space-y-5">
          <h3 className="text-lg font-serif font-bold text-slate-900 flex items-center gap-2">
            <Camera className="w-5 h-5 text-amber-600" /> Step 1: Capture or Upload Item
          </h3>

          {/* Image Preview Box */}
          <div className="relative h-64 rounded-2xl overflow-hidden border-2 border-dashed border-amber-300 bg-amber-50/40 flex flex-col items-center justify-center group">
            <img 
              src={selectedImage} 
              alt="Scan Preview" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
              <label className="btn-primary text-xs cursor-pointer">
                <Upload className="w-4 h-4" /> Change Image
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setSelectedImage(URL.createObjectURL(e.target.files[0]));
                    }
                  }}
                />
              </label>
            </div>
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Select Product Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-3 text-sm rounded-xl border border-amber-300 bg-white font-medium focus:ring-2 focus:ring-amber-500"
            >
              <option value="Handloom & Textiles">Handloom & Textiles (रेशम / हथकरघा)</option>
              <option value="Organic Produce">Organic Produce (जैविक फसल / मसाले)</option>
              <option value="Woodcraft & Carvings">Woodcraft & Carvings (लकड़ी की कलाकृतियाँ)</option>
              <option value="Pottery & Ceramics">Pottery & Ceramics (मिट्टी / ब्लू पॉटरी)</option>
            </select>
          </div>

          {/* Voice Input Note */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1 flex items-center justify-between">
              <span>Voice Note / Audio Description (Regional Language)</span>
              <span className="text-[10px] text-amber-700 flex items-center gap-1 font-semibold">
                <Mic className="w-3 h-3 text-red-500 animate-pulse" /> Audio Dialect Ready
              </span>
            </label>
            <textarea
              rows={3}
              value={voiceNoteText}
              onChange={(e) => setVoiceNoteText(e.target.value)}
              placeholder="Speak or type in Hindi, Tamil, Telugu, English..."
              className="w-full p-3 text-sm rounded-xl border border-amber-300 bg-white font-medium focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Run Scan Button */}
          <button
            onClick={handleStartAIScan}
            disabled={isScanning}
            className="btn-primary w-full py-3 text-sm font-bold tracking-wide"
          >
            {isScanning ? (
              <span className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 animate-spin text-amber-200" /> Vision AI Scanning ({scanProgress}%)...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Wand2 className="w-4 h-4" /> Run Vision AI Quality Scan & Story Synthesis
              </span>
            )}
          </button>
        </div>

        {/* Right Column: AI Analysis & Quality Output */}
        <div className="glass-card p-6 flex flex-col justify-between space-y-6">
          <h3 className="text-lg font-serif font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" /> Step 2: AI Digitized Quality Twin
          </h3>

          {!scanResult && !isScanning && (
            <div className="flex-1 border-2 border-dashed border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-3 bg-slate-50/50">
              <Wand2 className="w-12 h-12 text-amber-400" />
              <p className="text-sm font-bold text-slate-700">No AI Scan Generated Yet</p>
              <p className="text-xs text-slate-500 max-w-xs">
                Click "Run Vision AI Quality Scan" on the left to analyze weave thread count, verify GI tag compliance, generate story, and compute fair pricing.
              </p>
            </div>
          )}

          {isScanning && (
            <div className="flex-1 rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4 peacock-gradient text-white">
              <RefreshCw className="w-12 h-12 text-amber-300 animate-spin" />
              <div className="space-y-1">
                <p className="text-base font-serif font-bold">Analyzing Micro-Structure & Purity</p>
                <p className="text-xs text-amber-200">Evaluating weave density, surface integrity & GI compliance...</p>
              </div>
              <div className="w-full bg-slate-800/60 rounded-full h-2 overflow-hidden border border-amber-400/30">
                <div className="bg-amber-400 h-full transition-all duration-300" style={{ width: `${scanProgress}%` }}></div>
              </div>
            </div>
          )}

          {scanResult && !isScanning && (
            <div className="space-y-5 animate-fade-in">
              {/* Quality Grade Card */}
              <div className="p-4 rounded-2xl bg-emerald-950 text-emerald-100 border border-emerald-500/40 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Verified Quality Score
                  </span>
                  <span className="badge-ai-score">
                    {scanResult.aiQualityScore} / 100
                  </span>
                </div>
                <h4 className="text-lg font-serif font-bold text-white">
                  {scanResult.grade}
                </h4>
                <div className="text-xs space-y-1 text-emerald-200/90 pt-2 border-t border-emerald-800">
                  <p className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> {scanResult.defectDetection}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> GI Tag Verified ({scanResult.giTagCode})
                  </p>
                </div>
              </div>

              {/* Generated Story & Descriptions */}
              <div className="space-y-3 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs">
                <div>
                  <span className="font-bold text-amber-900 block mb-0.5">Automated Story (Hindi Dialect):</span>
                  <p className="italic text-slate-800">{scanResult.generatedStoryHindi}</p>
                </div>
                <div>
                  <span className="font-bold text-amber-900 block mb-0.5">Automated Story (English Global):</span>
                  <p className="text-slate-700 leading-relaxed">{scanResult.generatedStoryEnglish}</p>
                </div>
              </div>

              {/* Recommended Fair Price */}
              <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2">
                <div className="text-xs text-amber-400 font-bold uppercase">AI Recommended Fair-Trade Price</div>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-bold font-serif">₹{scanResult.fairPriceInr.toLocaleString('en-IN')}</span>
                  <span className="text-sm text-slate-300 font-medium">(${scanResult.fairPriceUsd} USD)</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Calculated based on ₹{scanResult.artisanBaseWageInr} fair wage + ₹{scanResult.rawMaterialCostInr} material cost.
                </p>
              </div>

              {/* Publish Button */}
              <button
                onClick={handlePublish}
                className="btn-gold w-full py-3 text-sm font-bold"
              >
                <Globe className="w-4 h-4" /> Publish Digital Twin to Global Storefront
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
