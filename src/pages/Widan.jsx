import React from 'react';
import { Link } from 'react-router-dom'; // Jangan lupa import ini!

const ProfileWidan = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 font-sans">
      
      {/* Tombol Kembali */}
      <div className="max-w-4xl mx-auto mb-4">
        <Link 
          to="/" 
          className="inline-block bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded-lg shadow-sm transition duration-200"
        >
          ⬅️ Kembali ke Halaman Utama
        </Link>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        {/* Banner Atas (Background) */}
        <div className="h-48 bg-gradient-to-r from-blue-700 to-blue-500"></div>
        
        <div className="px-8 pb-8">
          {/* Foto Profil */}
          <div className="relative -mt-20 mb-4">
            {/* Pastikan nama file fotonya sesuai sama yang lu taruh di folder public */}
            <img 
              className="w-36 h-36 rounded-full border-4 border-white bg-gray-300 object-cover shadow-sm" 
              src="/Dansz.jpeg" 
              alt="Foto Profil Widan" 
            />
          </div>

          {/* Info Utama */}
          <div className="mb-6 border-b border-gray-200 pb-6">
            <h1 className="text-3xl font-extrabold text-gray-900">Widan Ababil Yudhodjuwono</h1>
            <p className="text-lg text-gray-700 font-medium mt-1">
              Mahasiswa D3 Teknologi Informasi | Universitas Brawijaya
            </p>
            <div className="flex gap-6 mt-3 text-sm text-gray-500 font-medium">
              <span>📍 Domisili: Malang Kota</span>
              <span>📚 Kelas: T2B</span>
            </div>
          </div>

          {/* Section Tentang Diri */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Tentang Diri</h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-700 leading-relaxed text-justify">
              <p>
                Halo, perkenalkan nama saya Widan Ababil Yudhodjuwono. Saat ini saya adalah mahasiswa program studi D3 Teknologi Informasi di Universitas Brawijaya. Saya memiliki ketertarikan yang besar di dunia web development, khususnya dalam merancang antarmuka yang interaktif menggunakan teknologi seperti HTML, CSS, JavaScript, TypeScript, hingga framework modern seperti React dan Next.js.
              </p>
              <p className="mt-3">
                Selain fokus di perkuliahan dan mengerjakan project coding, saya juga sedang mempersiapkan diri secara konsisten untuk mengikuti tes PNS. Di waktu luang, saya sangat menikmati bermain game untuk melepas penat, terutama Minecraft Java Edition—saat ini saya sedang seru-serunya merancang dan membangun mega project sky base! Saya juga suka bermain Raft bersama teman-teman. Saya adalah tipe orang yang suka belajar hal baru, beradaptasi dengan teknologi terkini, dan bereksperimen dengan berbagai tools kreatif. Harapannya, ilmu dan pengalaman yang saya kumpulkan saat ini bisa menjadi fondasi yang kuat untuk karir saya di masa depan.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProfileWidan;