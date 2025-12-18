import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Phone, MapPin, ChevronDown, FileText, ChevronRight, User, LogOut, LayoutDashboard
} from 'lucide-react';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";

import FichaCadastral from './FichaCadastral';
import PrivacyPolicy from './PrivacyPolicy';
import Guidelines from './Guidelines';
import Sitemap from './Sitemap';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import DashboardAdmin from './DashboardAdmin';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const userMenuRef = useRef(null);

  const ADMIN_UID = "y17dw4ERemT0vJTnlEyDaW4y4a93";

  const menuItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'A Clínica', id: 'clinica' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Gestão SST', id: 'gestao' },
    { label: 'eSocial', id: 'socialegestaosst' },
    { label: 'Cadastro', id: 'cadastro' },
    { label: 'Contato', id: 'contato' }
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadingAuth(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!loadingAuth && user && currentPage === 'login') {
      setCurrentPage('dashboard');
    }
  }, [user, currentPage, loadingAuth]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userMenuRef]);

  const handleLoginSuccess = (loggedInUser) => {
    setUser(loggedInUser);
    setCurrentPage('dashboard');
    window.scrollTo(0, 0);
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      setCurrentPage('home');
      window.scrollTo(0, 0);
    });
  };

  useEffect(() => {
    const linkFont = document.createElement('link');
    linkFont.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap";
    linkFont.rel = "stylesheet";
    document.head.appendChild(linkFont);

    const linkIcons = document.createElement('link');
    linkIcons.href = "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css";
    linkIcons.rel = "stylesheet";
    document.head.appendChild(linkIcons);

    return () => {
      document.head.removeChild(linkFont);
      document.head.removeChild(linkIcons);
    };
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    
    if (id === 'home') {
      setCurrentPage('home');
      window.scrollTo(0, 0);
      return;
    }

    if (id === 'politicadeprivacidade') {
      setCurrentPage('politicadeprivacidade');
      window.scrollTo(0, 0);
      return;
    }

    if (id === 'diretrizes') {
      setCurrentPage('diretrizes');
      window.scrollTo(0, 0);
      return;
    }

    if (id === 'sitemap') {
      setCurrentPage('sitemap');
      window.scrollTo(0, 0);
      return;
    }

    if (id === 'dashboard') {
      if (user) {
        setCurrentPage('dashboard');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('login');
        window.scrollTo(0, 0);
      }
      return;
    }

    if (id === 'login') {
      setCurrentPage('login');
      window.scrollTo(0, 0);
      return;
    }

    if (id === 'cadastro-ficha') {
      setCurrentPage('cadastro-ficha');
      window.scrollTo(0, 0);
      return;
    }

    const scrollWithOffset = () => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 115; // Compensação para o header fixo
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        scrollWithOffset();
      }, 100);
    } else {
      scrollWithOffset();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700" style={{ fontFamily: '"Inter", sans-serif' }}>
      
      {/* --- HEADER --- */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="hidden md:block bg-white text-[#0F2C4A] text-xs py-1 border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center gap-3 font-medium">
              <button onClick={() => scrollToSection('politicadeprivacidade')} className="hover:text-[#0F2C4A] transition-colors">Política de Privacidade</button>
            </div>
            <div className="hidden md:flex items-center gap-4 font-medium">
              <a href="https://wa.me/5571983156060" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#0F2C4A] transition-colors"><Phone size={12} className="text-[#0F2C4A]" /> (71) 98315-6060</a>
              <span className="flex items-center gap-1"><MapPin size={12} className="text-[#0F2C4A]" /> Av. Tancredo Neves, 2539 - Caminho das Árvores, Salvador - BA CEP: 41.820-021</span>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="5473 6038 504 506" 
              className="h-12 w-auto"
              style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}
            >
              <defs>
                <linearGradient id="crossGradient" gradientUnits="userSpaceOnUse" x1="5548" y1="6290.5" x2="5903" y2="6290.5" gradientTransform="rotate(125, 5725.5, 6290.5)">
                  <stop offset="0%" stopColor="#D1D5DB" />
                  <stop offset="50%" stopColor="#FFFFFF" />
                  <stop offset="100%" stopColor="#D1D5DB" />
                </linearGradient>
              </defs>
              <rect fill="#0F2C4A" x="5473" y="6038" width="504" height="506" rx="59" ry="59"/>
              <polygon fill="url(#crossGradient)" points="5718,6123 5663,6123 5663,6228 5548,6228 5548,6283 5663,6283 5718,6283 5718,6228 "/>
              <polygon fill="url(#crossGradient)" points="5733,6123 5788,6123 5788,6228 5903,6228 5903,6283 5788,6283 5733,6283 5733,6228 "/>
              <polygon fill="url(#crossGradient)" points="5733,6458 5788,6458 5788,6353 5903,6353 5903,6298 5788,6298 5733,6298 5733,6353 "/>
              <polygon fill="url(#crossGradient)" points="5718,6458 5663,6458 5663,6353 5548,6353 5548,6298 5663,6298 5718,6298 5718,6353 "/>
            </svg>
            <div className="flex items-center gap-2">
              <h1 className="text-6xl font-black text-[#0F2C4A] leading-none" style={{ WebkitTextStroke: '1.5px #0F2C4A' }}>HCO</h1>
              <div className="flex flex-col text-[13px] font-bold text-[#A6A6A6] leading-tight tracking-wider">
                <span>MEDICINA</span>
                <span>E SEGURANÇA</span>
                <span>DO TRABALHO</span>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {menuItems.map((item) => (
              <button 
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-[#0F2C4A] transition-colors uppercase text-xs font-bold tracking-wide flex items-center gap-1"
              >
                {item.label}
                {item.icon && <ChevronDown size={14} />}
              </button>
            ))}
            {loadingAuth ? (
              <div className="w-24 h-10 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-[#0F2C4A] border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : user ? (
              <div className="relative" ref={userMenuRef}>
                <button 
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className={`flex items-center gap-2 p-1 rounded-full border-2 transition-colors ${isUserMenuOpen ? 'border-slate-200' : 'border-transparent'}`}
                >
                  <img src={user.photoURL} alt={user.displayName} className="w-8 h-8 rounded-full" />
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {isUserMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-lg ring-1 ring-slate-100 z-10 animate-in fade-in zoom-in-95 duration-200">
                    <div className="p-2">
                      <div className="px-3 py-2 border-b border-slate-100">
                        <p className="text-sm font-bold text-slate-800 truncate">{user.displayName}</p>
                        <p className="text-xs text-slate-500 truncate">{user.email}</p>
                      </div>
                      <button onClick={() => { scrollToSection('dashboard'); setIsUserMenuOpen(false); }} className="w-full text-left flex items-center gap-2 px-3 py-2 mt-1 text-sm text-slate-600 hover:bg-slate-50 rounded-md font-semibold">
                        <LayoutDashboard size={16} /> Dashboard
                      </button>
                      <button onClick={() => { handleLogout(); setIsUserMenuOpen(false); }} className="w-full text-left flex items-center gap-2 px-3 py-2 mt-1 text-sm text-red-600 hover:bg-red-50 rounded-md font-semibold">
                        <LogOut size={16} /> Sair
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button onClick={() => scrollToSection('login')} className="bg-[#0F2C4A] text-white px-5 py-2 rounded-full hover:bg-[#0A1F35] transition font-bold shadow-lg shadow-slate-300 flex items-center gap-2">
                <User size={16} /> Login
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-slate-700 z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="9" x2="20" y2="9" />
                <line x1="4" y1="15" x2="20" y2="15" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        <div className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)} />
        
        <div className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                    <span className="font-bold text-[#0F2C4A] text-lg">Menu</span>
                    <button onClick={() => setIsMenuOpen(false)} className="text-slate-400 hover:text-red-500 transition-colors">
                        <X size={24} />
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto py-2">
                    {menuItems.map((item) => (
                <button 
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-6 py-4 text-slate-600 font-semibold hover:bg-slate-50 hover:text-[#0F2C4A] border-b border-slate-50 transition-colors flex items-center justify-between group"
                >
                  {item.label}
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-[#0F2C4A] transition-colors" />
                </button>
              ))}
                    <div className="p-6 mt-4">
                        <a href="https://sistema.soc.com.br/WebSoc/" target="_blank" rel="noopener noreferrer" className="w-full bg-[#0F2C4A] text-white px-5 py-3 rounded-lg hover:bg-[#0A1F35] transition font-bold shadow-lg flex items-center justify-center gap-2">
                            <FileText size={18} />
                            Portal Exames
                        </a>
                    </div>
                </div>
            </div>
          </div>
      </header>

      {currentPage === 'cadastro-ficha' && (
        <FichaCadastral onBack={() => {
          setCurrentPage(user ? 'dashboard' : 'home');
          window.scrollTo(0, 0);
        }} />
      )}

      {currentPage === 'home' && (
        <Home onNavigate={scrollToSection} />
      )}

      {/* --- PÁGINA DE DASHBOARD --- */}
      {currentPage === 'dashboard' && user && (
        user.uid === ADMIN_UID ? (
          <DashboardAdmin user={user} onNavigate={scrollToSection} />
        ) : (
          <Dashboard user={user} onNavigate={scrollToSection} />
        )
      )}

      {/* --- PÁGINA DE LOGIN --- */}
      {currentPage === 'login' && !user && (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}

      {/* --- PÁGINA DE POLÍTICA DE PRIVACIDADE --- */}
      {currentPage === 'politicadeprivacidade' && (
        <PrivacyPolicy onNavigate={scrollToSection} />
      )}

      {/* --- PÁGINA DIRETRIZES --- */}
      {currentPage === 'diretrizes' && (
        <Guidelines onNavigate={scrollToSection} />
      )}

      {/* --- PÁGINA SITEMAP --- */}
      {currentPage === 'sitemap' && (
        <Sitemap onNavigate={scrollToSection} />
      )}

      {/* --- FOOTER --- */}
      <Footer onNavigate={scrollToSection} />
      
      {/* --- WHATSAPP FLOATING BUTTON --- */}
      <a
        href="https://wa.me/5571983156060?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20HCO."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-[#25D366] text-white px-4 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#20bd5a] transition-colors shadow-none"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        Atendimento
      </a>

    </div>
  );
}