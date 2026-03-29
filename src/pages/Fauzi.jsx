import React from "react";
import { Link } from "react-router";

export default function FauziPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-10 px-4 font-sans relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="fixed top-[-10%] left-[-10%] w-96 h-96 bg-indigo-600/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto mb-8 relative z-10 w-full">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-slate-300 backdrop-blur-md font-medium py-2.5 px-5 rounded-full shadow-sm transition-all duration-300 hover:-translate-x-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Kembali
        </Link>
      </div>

      <div className="max-w-4xl mx-auto bg-slate-900/60 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/10 relative z-10 hover:shadow-indigo-500/10 transition-shadow duration-500">
        {/* Header Cover */}
        <div className="h-64 bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Abstract pattern overlaid on header */}
          <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] mix-blend-overlay"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
        </div>

        <div className="px-8 pb-10 sm:px-12">
          {/* Avatar & Header Section */}
          <div className="relative flex flex-col sm:flex-row items-center sm:items-end gap-6 -mt-24 mb-10">
            <div className="relative group">
              <div className="absolute inset-0 bg-indigo-500 rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="w-36 h-36 rounded-full border-[5px] border-slate-900 bg-slate-800 flex items-center justify-center text-4xl font-black bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-xl relative z-10 text-center shrink-0 tracking-wider">
                FAZ
              </div>
            </div>
            
            <div className="flex-1 text-center sm:text-left mb-2">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
                Fauzi Ahmad Zaki
              </h1>
              <p className="text-lg sm:text-xl text-indigo-300 font-medium">
                Web Developer & Tech Enthusiast
              </p>
            </div>

            <div className="flex gap-3 mb-2">
               <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-slate-300 transition-colors border border-white/10 group">
                 <svg className="group-hover:text-indigo-400 transition-colors" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
               </a>
               <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-slate-300 transition-colors border border-white/10 group">
                 <svg className="group-hover:text-purple-400 transition-colors" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
               </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column - Stats & Info */}
            <div className="space-y-6 flex flex-col justify-start">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] transition-colors">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">Informasi Dasar</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-slate-300 text-sm">
                    <span className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    </span>
                    Bojonegoro, Indonesia
                  </li>
                  <li className="flex items-center gap-4 text-slate-300 text-sm">
                    <span className="p-2.5 bg-purple-500/10 text-purple-400 rounded-xl border border-purple-500/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                    </span>
                    Universitas Brawijaya
                  </li>
                  <li className="flex items-center gap-4 text-slate-300 text-sm">
                    <span className="p-2.5 bg-fuchsia-500/10 text-fuchsia-400 rounded-xl border border-fuchsia-500/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                    </span>
                    Sistem Informasi
                  </li>
                </ul>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] transition-colors">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">Keahlian</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Tailwind', 'JavaScript', 'HTML5', 'CSS3'].map((skill, index) => (
                    <span key={index} className="px-3 py-1.5 bg-white-5 border border-white/10 rounded-lg text-xs font-medium text-slate-300 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-300 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - About Content */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 relative overflow-hidden group h-full hover:bg-white/[0.05] transition-colors">
                <div className="absolute top-0 right-0 p-8 opacity-5 text-indigo-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-10 h-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-full inline-block"></span>
                  Tentang Saya
                </h2>
                
                <div className="space-y-5 text-slate-300/90 leading-relaxed font-light">
                  <p>
                    Halo! Saya <span className="text-white font-medium">Fauzi Ahmad Zaki</span>, seorang mahasiswa dengan ketertarikan mendalam pada pengembangan web. Saya senang membangun antarmuka pengguna yang indah, interaktif, dan modern, dengan selalu mengedepankan pengalaman serta estetika.
                  </p>
                  <p>
                    Saya menguasai berbagai teknologi front-end modern seperti <span className="text-indigo-400">React</span>, <span className="text-indigo-400">Tailwind CSS</span>, dan <span className="text-indigo-400">Next.js</span>. Selalu antusias mempelajari tren desain terbaru dan berusaha mengimplementasikannya dalam setiap karya saya, memastikan setiap baris kode yang ditulis tidak hanya berfungsi dengan baik, tetapi juga terlihat luar biasa.
                  </p>
                  <p>
                    Selain coding, saya memiliki minat pada desain UI/UX dan suka mengeksplorasi cara-cara baru untuk membuat website yang terasa hidup. Bergabung dengan komunitas dan belajar hal baru adalah hal yang sangat saya nikmati!
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-indigo-400/80 font-medium italic text-lg text-center font-serif">
                    "Menciptakan pengalaman digital yang luar biasa, satu baris kode setiap saat."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
