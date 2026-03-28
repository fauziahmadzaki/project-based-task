const profileImg = "/brill.jpeg";

export default function IndahPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-black flex items-center justify-center p-5">
      
      {/* Card Putih */}
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-md w-full text-center transition duration-500 hover:scale-105 hover:shadow-red-900/40">
        
        {/* Foto Profil */}
        <div className="relative w-fit mx-auto">
          <img
            src={profileImg}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-red-800 shadow-lg"
          />
          <div className="absolute inset-0 rounded-full border-2 border-red-400 animate-pulse"></div>
        </div>

        {/* Nama */}
        <h1 className="text-2xl font-bold mt-5 bg-gradient-to-r from-red-800 to-rose-500 text-transparent bg-clip-text">
          Indah Brilliant
        </h1>

        {/* Info */}
        <div className="mt-3 space-y-1 text-sm">
          <p className="text-gray-700">📚 Kelas: T2B</p>
          <p className="text-gray-700">🎓 Prodi: Teknologi Informasi</p>
          <p className="text-gray-700">📍 Domisili: Kota Malang</p>
        </div>

        {/* Divider */}
        <div className="w-16 h-1 bg-gradient-to-r from-red-700 to-rose-400 mx-auto my-4 rounded-full"></div>

        {/* Tentang Diri */}
        <div className="text-gray-800 text-sm text-justify leading-relaxed">
          <p>
            Saya merupakan mahasiswa Program Studi Teknologi Informasi yang memiliki minat besar dalam bidang pengembangan teknologi digital, khususnya pada pengembangan website dan desain antarmuka pengguna. Saya tertarik mempelajari berbagai tools dan framework modern seperti React dan Tailwind CSS untuk menciptakan tampilan yang menarik serta responsif.

            Selain itu, saya juga memiliki ketertarikan dalam bidang UI/UX karena saya percaya bahwa pengalaman pengguna merupakan aspek penting dalam sebuah aplikasi. Dalam keseharian, saya aktif mengembangkan kemampuan melalui berbagai tugas dan proyek kecil, baik secara individu maupun dalam tim.

            Saya memiliki semangat belajar yang tinggi dan selalu berusaha mengikuti perkembangan teknologi terbaru. Harapan saya ke depan adalah dapat menjadi seorang profesional di bidang teknologi informasi yang mampu menciptakan solusi digital yang inovatif, bermanfaat, serta memberikan dampak positif bagi masyarakat luas.
          </p>
        </div>

      </div>
    </div>
  );
}