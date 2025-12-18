import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Sitemap({ onNavigate }) {
  return (
    <div className="pt-36 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold text-[#0F2C4A] mb-6">Mapa do Site</h2>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mt-3">
              <button onClick={() => onNavigate('home')} className="hover:text-[#0F2C4A] transition-colors">Home</button>
              <ChevronRight size={16} className="text-slate-400" />
              <span className="font-semibold text-slate-700">Mapa do Site</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-[#0F2C4A] mb-4 border-b border-slate-100 pb-2">Institucional</h3>
              <ul className="space-y-3">
                <li><button onClick={() => onNavigate('home')} className="text-slate-600 hover:text-[#0F2C4A] hover:underline transition flex items-center gap-2"><ChevronRight size={14} /> Home</button></li>
                <li><button onClick={() => onNavigate('clinica')} className="text-slate-600 hover:text-[#0F2C4A] hover:underline transition flex items-center gap-2"><ChevronRight size={14} /> A Clínica</button></li>
                <li><button onClick={() => onNavigate('contato')} className="text-slate-600 hover:text-[#0F2C4A] hover:underline transition flex items-center gap-2"><ChevronRight size={14} /> Contato</button></li>
                <li><button onClick={() => onNavigate('cadastro')} className="text-slate-600 hover:text-[#0F2C4A] hover:underline transition flex items-center gap-2"><ChevronRight size={14} /> Cadastre sua Empresa</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#0F2C4A] mb-4 border-b border-slate-100 pb-2">Serviços e Conteúdo</h3>
              <ul className="space-y-3">
                <li><button onClick={() => onNavigate('servicos')} className="text-slate-600 hover:text-[#0F2C4A] hover:underline transition flex items-center gap-2"><ChevronRight size={14} /> Nossos Serviços</button></li>
                <li><button onClick={() => onNavigate('socialegestaosst')} className="text-slate-600 hover:text-[#0F2C4A] hover:underline transition flex items-center gap-2"><ChevronRight size={14} /> eSocial e Gestão SST</button></li>
                <li><button onClick={() => onNavigate('gestao')} className="text-slate-600 hover:text-[#0F2C4A] hover:underline transition flex items-center gap-2"><ChevronRight size={14} /> Gestão de Saúde</button></li>
                <li><button onClick={() => onNavigate('orientacoes')} className="text-slate-600 hover:text-[#0F2C4A] hover:underline transition flex items-center gap-2"><ChevronRight size={14} /> Dicas e Orientações</button></li>
                <li><button onClick={() => onNavigate('diretrizes')} className="text-slate-600 hover:text-[#0F2C4A] hover:underline transition flex items-center gap-2"><ChevronRight size={14} /> Diretrizes Essenciais</button></li>
                <li><button onClick={() => onNavigate('politicadeprivacidade')} className="text-slate-600 hover:text-[#0F2C4A] hover:underline transition flex items-center gap-2"><ChevronRight size={14} /> Política de Privacidade</button></li>
                <li><button onClick={() => onNavigate('sitemap')} className="text-slate-600 hover:text-[#0F2C4A] hover:underline transition flex items-center gap-2"><ChevronRight size={14} /> Mapa do Site</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}