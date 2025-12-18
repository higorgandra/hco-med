import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from './firebase';
import { FcGoogle } from 'react-icons/fc';

export default function Login({ onLoginSuccess }) {

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (onLoginSuccess) {
        onLoginSuccess(user);
      }
    } catch (error) {
      console.error("Erro no login com Google: ", error.message);
      alert(`Ocorreu um erro ao tentar fazer login: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 pt-36 pb-20">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-md w-full text-center border border-slate-200">
        <div className="flex justify-center mb-6">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="5473 6038 504 506" 
              className="h-16 w-auto"
              style={{ shapeRendering: 'geometricPrecision' }}
            >
              <rect fill="#0F2C4A" x="5473" y="6038" width="504" height="506" rx="59" ry="59"/>
              <polygon fill="#FFFFFF" points="5718,6123 5663,6123 5663,6228 5548,6228 5548,6283 5663,6283 5718,6283 5718,6228 "/>
              <polygon fill="#FFFFFF" points="5733,6123 5788,6123 5788,6228 5903,6228 5903,6283 5788,6283 5733,6283 5733,6228 "/>
              <polygon fill="#FFFFFF" points="5733,6458 5788,6458 5788,6353 5903,6353 5903,6298 5788,6298 5733,6298 5733,6353 "/>
              <polygon fill="#FFFFFF" points="5718,6458 5663,6458 5663,6353 5548,6353 5548,6298 5663,6298 5718,6298 5718,6353 "/>
            </svg>
        </div>
        <h2 className="text-2xl font-bold text-[#0F2C4A] mb-2">Acesso Restrito</h2>
        <p className="text-slate-500 mb-8">Faça login para acessar a área do cliente.</p>
        
        <button 
          onClick={handleGoogleLogin}
          className="w-full bg-white border border-slate-300 text-slate-700 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-3 hover:bg-slate-50 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#0F2C4A]"
        >
          <FcGoogle size={24} />
          Entrar com Google
        </button>

        <p className="text-xs text-slate-400 mt-8">
          Ao continuar, você concorda com nossos <button onClick={() => {}} className="underline hover:text-[#0F2C4A]">Termos de Serviço</button> e <button onClick={() => {}} className="underline hover:text-[#0F2C4A]">Política de Privacidade</button>.
        </p>
      </div>
    </div>
  );
}