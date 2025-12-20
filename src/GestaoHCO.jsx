import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import DashboardAdmin from './DashboardAdmin';
import { AlertCircle, Loader2, ArrowLeft } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

export default function GestaoHCO() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    setError('');
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Erro login:", err);
      setError('Erro ao fazer login com Google. Tente novamente.');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erro logout:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-10 w-10 animate-spin text-[#0F2C4A]" />
          <p className="text-slate-500 font-medium">Carregando sistema...</p>
        </div>
      </div>
    );
  }

  if (user) {
    // Se estiver logado, renderiza o DashboardAdmin
    // Passamos handleLogout para a prop onNavigate para que o botão "Sair" funcione
    return <DashboardAdmin user={user} onNavigate={handleLogout} />;
  }

  // Se não estiver logado, renderiza a tela de login
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F2C4A] sm:p-4 font-sans">
      <div className="bg-white w-full min-h-screen sm:min-h-0 sm:rounded-2xl sm:shadow-2xl sm:max-w-md overflow-hidden flex flex-col justify-center sm:block">
        <div className="p-8 bg-slate-50 border-b border-slate-100 text-center">
          <div className="flex items-center justify-center gap-2 cursor-pointer mb-6" onClick={() => window.location.href = '/'}>
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
              <div className="flex flex-col text-[13px] font-bold text-[#A6A6A6] leading-tight tracking-wider text-left">
                <span>MEDICINA</span>
                <span>E SEGURANÇA</span>
                <span>DO TRABALHO</span>
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-[#0F2C4A]">HCO Financeiro</h1>
          <p className="text-slate-500 text-sm">Sistema de Gestão Financeira</p>
        </div>

        <div className="p-8">
          {error && (
            <div className="bg-red-50 border border-red-100 text-red-600 p-3 rounded-lg text-sm flex items-center gap-2 mb-6 animate-in fade-in slide-in-from-top-2">
              <AlertCircle size={16} className="shrink-0" />
              {error}
            </div>
          )}

          <button
            onClick={handleLogin}
            className="w-full bg-white border border-slate-300 text-slate-700 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-3 hover:bg-slate-50 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#0F2C4A] shadow-sm"
          >
            <FcGoogle size={24} />
            Entrar com Google
          </button>

          <div className="text-center mt-6">
            <a href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#0F2C4A] transition-colors">
              <ArrowLeft size={16} /> Voltar ao Site
            </a>
          </div>
        </div>
        
        <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400">
            Acesso restrito &copy; HCO Healthcare Occupational
          </p>
        </div>
      </div>
    </div>
  );
}