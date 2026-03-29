import { Link } from "react-router";

function App() {
  const teamMembers = [
    {
      name: "Widan Ababil Y.",
      role: "Front-end Developer",
      path: "/widan-ababil",
      color: "from-blue-600 to-blue-400",
      avatar: "WA",
    },
    {
      name: "Indah Brilliant",
      role: "UI/UX Designer",
      path: "/indah-brilliant",
      color: "from-red-600 to-rose-400",
      avatar: "IB",
    },
    {
      name: "Fauzi Ahmad Zaki",
      role: "Web Developer",
      path: "/fauzi-ahmad-zaki",
      color: "from-indigo-600 to-fuchsia-500",
      avatar: "FZ",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 relative overflow-hidden font-sans flex flex-col justify-center py-16 px-4 sm:px-6 lg:px-8">
      {/* Decorative background blur */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-rose-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Project Based Task - Pemrograman Web
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-6 tracking-tight">
            Meet Our Awesome Team
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
            Kami adalah kelompok mahasiswa yang bersemangat dalam membangun antarmuka web modern yang menginspirasi. Kenali setiap anggota lebih dekat!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Link
              key={index}
              to={member.path}
              className="group relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-slate-800/50 transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20 flex flex-col items-center text-center"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${member.color} transition-opacity duration-500`}></div>
              
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500`}></div>
                <div className={`w-28 h-28 rounded-full bg-slate-800 border-[4px] border-slate-900 flex items-center justify-center text-3xl font-black text-white relative z-10 bg-gradient-to-br ${member.color} shadow-lg group-hover:scale-105 transition-transform duration-500`}>
                  {member.avatar}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                {member.name}
              </h3>
              <p className="text-slate-400 mb-6 font-medium">
                {member.role}
              </p>

              <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-white bg-white/5 py-2 px-5 rounded-full border border-white/5 group-hover:border-white/20 transition-all duration-300">
                Lihat Profil
                <svg className="group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
