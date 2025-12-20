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

  // Lista de IDs de usuários permitidos (Administradores)
  const ADMIN_UIDS = [
    "y17dw4ERemT0vJTnlEyDaW4y4a93",
    "c9Y86COT6PdEiqBxenHkNY6268y2"
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        if (ADMIN_UIDS.includes(currentUser.uid)) {
          setUser(currentUser);
        } else {
          await signOut(auth);
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    setError('');
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      if (!ADMIN_UIDS.includes(result.user.uid)) {
        await signOut(auth);
        setError('Acesso negado. Apenas administradores podem acessar este painel.');
      }
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
    <div className="min-h-screen flex items-center justify-center bg-[#0F2C4A] p-4 font-sans">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        <div className="p-8 bg-slate-50 border-b border-slate-100 text-center">
          <div className="w-20 h-20 bg-white rounded-xl shadow-sm mx-auto mb-4 flex items-center justify-center p-2">
             <img src="https://www.genspark.ai/api/files/s/9C1YzsKA" alt="HCO" className="w-full h-full object-contain" />
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