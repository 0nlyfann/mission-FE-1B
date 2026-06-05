import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

  return (
    <nav className="h-16 bg-[#181A1C] flex items-center justify-between px-4 md:px-10 relative z-50">
      
      {/* KIRI: Logo + Menu Navigasi */}
      <div className="flex gap-4 md:gap-10 items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3 cursor-pointer">
          <img 
            src="/assets/movie-open.png" 
            alt="Logo Icon" 
            className="w-6 h-6 md:w-8 md:h-8 object-contain" 
          />
          <h1 className="text-white font-bold text-xl md:text-2xl tracking-wider">
            CHILL
          </h1>
        </div>

        
        <div className="hidden md:flex gap-8">
          <a href="#" className="text-gray-300 hover:text-white transition font-medium">Series</a>
          <a href="#" className="text-gray-300 hover:text-white transition font-medium">Film</a>
          <a href="#" className="text-gray-300 hover:text-white transition font-medium">Daftar Saya</a>
        </div>

        
        <div className="flex md:hidden gap-4 text-sm">
          <a href="#" className="text-gray-300 font-medium">Series</a>
          <a href="#" className="text-gray-300 font-medium">Film</a>
          <a href="#" className="text-gray-300 font-medium">Daftar Saya</a>
        </div>
      </div>

      
      <div className="relative">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="flex items-center gap-1 md:gap-2 focus:outline-none group"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-500 overflow-hidden border border-gray-600 group-hover:border-white transition">
            <img 
              src="/assets/fotoorang.png" 
              alt="User Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className={`text-white text-[10px] md:text-xs transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
            <img src="/public/assets/Vector.png" alt="" />
          </span>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-3 w-44 bg-[#121821] border border-gray-800 rounded-lg shadow-2xl py-2 overflow-hidden">
            <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-sm text-blue-400 hover:bg-gray-800/50 transition font-medium">
              <span><img src="/public/assets/account.png" alt="" /></span> Profil Saya
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-200 hover:bg-gray-800/50 transition font-medium">
              <span><img src="/public/assets/bintang.png" alt="" /></span> Ubah Premium
            </a>
            <hr className="border-gray-800 my-1" />
            <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:bg-gray-800/50 transition font-medium">
              <span><img src="/public/assets/logout.png" alt="" /></span> Keluar
            </a>
          </div>
        )}
      </div>
      
    </nav>
  );
}

export default Navbar;