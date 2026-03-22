import { Link } from "react-router";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Halaman Utama Tim
      </h1>

      {/* Tombol ke profil Widan */}
      <Link
        to="/widan-ababil"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
      >
        Lihat Profil Widan
      </Link>

      {/* tinggal nambahin tombol kalian di bawah sini */}
    </div>
  );
}

export default App;
