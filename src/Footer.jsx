import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Copyright } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#0F2C4A] text-[#A6A6A6] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Section 1: Logo & About */}
          <div>
            <div className="flex items-center gap-2 cursor-pointer mb-4" onClick={() => onNavigate('home')}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="5473 6038 504 506" 
                className="h-12 w-auto"
                style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}
              >
                <rect fill="#FFFFFF" x="5473" y="6038" width="504" height="506" rx="59" ry="59"/>
                <polygon fill="#0F2C4A" points="5718,6123 5663,6123 5663,6228 5548,6228 5548,6283 5663,6283 5718,6283 5718,6228 "/>
                <polygon fill="#0F2C4A" points="5733,6123 5788,6123 5788,6228 5903,6228 5903,6283 5788,6283 5733,6283 5733,6228 "/>
                <polygon fill="#0F2C4A" points="5733,6458 5788,6458 5788,6353 5903,6353 5903,6298 5788,6298 5733,6298 5733,6353 "/>
                <polygon fill="#0F2C4A" points="5718,6458 5663,6458 5663,6353 5548,6353 5548,6298 5663,6298 5718,6298 5718,6353 "/>
              </svg>
              <div className="flex items-center gap-2">
                <h1 className="text-5xl font-black text-white leading-none" style={{ WebkitTextStroke: '1px #ffffff' }}>HCO</h1>
                <div className="flex flex-col text-[10px] font-bold text-[#A6A6A6] leading-tight tracking-wider">
                  <span>MEDICINA</span>
                  <span>E SEGURANÇA</span>
                  <span>DO TRABALHO</span>
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">Medicina do Trabalho com excelência, cuidando da saúde dos seus colaboradores e da conformidade legal da sua empresa.</p>
          </div>
          
          {/* Section 2: Serviços */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Serviços</h4>
            <ul className="space-y-2 text-sm">
            <li><button onClick={() => onNavigate('orientacoes')} className="hover:text-white transition text-left">Dicas e Orientações</button></li>
              <li><button onClick={() => onNavigate('socialegestaosst')} className="hover:text-white transition text-left">eSocial e Gestão SST</button></li>
              <li><button onClick={() => onNavigate('gestao')} className="hover:text-white transition text-left">Gestão de Saúde</button></li>
            <li><button onClick={() => onNavigate('cadastro')} className="hover:text-white transition text-left">Cadastro</button></li>
            </ul>
          </div>
          
          {/* Section 3: Links Úteis */}
          <div>
             <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Links Úteis</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.gov.br/pt-br/categorias/trabalho-e-previdencia" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Ministério do Trabalho</a></li>
              <li><a href="https://www.gov.br/esocial" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">eSocial</a></li>
              <li><a href="https://www.cfm.org.br" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Conselho Federal de Medicina</a></li>
              <li><a href="https://www.anamt.org.br" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">ANAMT</a></li>
            </ul>
          </div>

          {/* Section 4: Redes Sociais */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 bg-[#0A1F35] rounded-full flex items-center justify-center hover:bg-white hover:text-[#0F2C4A] transition duration-300"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/clinicahco" aria-label="Instagram" className="w-10 h-10 bg-[#0A1F35] rounded-full flex items-center justify-center hover:bg-white hover:text-[#0F2C4A] transition duration-300"><Instagram size={20} /></a>
              <a href="https://www.linkedin.com/in/clinica-hco-medicina-e-seguran%C3%A7a-do-trabalho-19a958399/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 bg-[#0A1F35] rounded-full flex items-center justify-center hover:bg-white hover:text-[#0F2C4A] transition duration-300"><Linkedin size={20} /></a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 bg-[#0A1F35] rounded-full flex items-center justify-center hover:bg-white hover:text-[#0F2C4A] transition duration-300"><Youtube size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 text-sm">
            <div className="text-center md:text-left">
              <p>© 2025 HCO - HealthyCare Occupational. Todos os direitos reservados.</p>
              <p className="text-slate-500 mt-1">Desenvolvido com foco em gestão e saúde ocupacional.</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 text-sm">
            <a href="#" className="hover:text-white transition">Termos de Uso</a>
            <span className="text-slate-600">|</span>
            <button onClick={() => onNavigate('politicadeprivacidade')} className="hover:text-white transition">Política de Privacidade</button>
            <span className="text-slate-600">|</span>
            <a href="#" className="hover:text-white transition">LGPD</a>
            <span className="text-slate-600">|</span>
            <button onClick={() => onNavigate('diretrizes')} className="hover:text-white transition">Diretrizes</button>
            <span className="text-slate-600">|</span>
            <button onClick={() => onNavigate('sitemap')} className="hover:text-white transition">Mapa do Site</button>
            </div>
          </div>
          
          <div className="text-xs text-slate-600 text-center md:text-left leading-relaxed">
            <p className="flex items-start justify-center md:justify-start gap-2">
              <Copyright size={14} className="mt-0.5 flex-shrink-0" />
              <span>
                Marca registrada HCO - HealthyCare Occupational. 
                O uso não autorizado do conteúdo, logotipo e materiais deste site é estritamente proibido e pode resultar em ações legais. 
                Todos os direitos de propriedade intelectual são reservados.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}