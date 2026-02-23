import React, { useState } from 'react';
import { 
  FileText, Users, ChevronRight, ChevronLeft, ArrowRight, Shield, 
  ClipboardList, HardHat, TrendingUp, Handshake
} from 'lucide-react';

export default function Home({ onNavigate }) {

  const [currentPilarIndex, setCurrentPilarIndex] = useState(0);

  const pilares = [
    { icon: HardHat, text: "Prevenção de acidentes e doenças ocupacionais" },
    { icon: TrendingUp, text: "Aumento da produtividade e eficiência" },
    { icon: Handshake, text: "Promoção de saúde e bem-estar dos colaboradores" }
  ];

  const nextPilar = () => setCurrentPilarIndex((prev) => (prev + 1) % pilares.length);
  const prevPilar = () => setCurrentPilarIndex((prev) => (prev - 1 + pilares.length) % pilares.length);

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-cover bg-center" style={{backgroundImage: 'url("https://i.postimg.cc/50Wg4vQJ/freepik-expand-40706.png")'}}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2C4A] to-[#527088] opacity-10"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-6 bg-[#0F2C4A]/40 backdrop-blur-md border border-white/10 p-6 md:p-10 rounded-3xl shadow-2xl">
            <span className="bg-[#0F2C4A]/30 text-white border border-white/20 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
              Soluções em Saúde Corporativa
            </span>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
              Medicina do Trabalho <span className="text-[#A6A6A6]">Especializada</span>
            </h2>
            <p className="text-lg text-slate-200 max-w-lg leading-relaxed">
              Soluções completas em Saúde Ocupacional para sua empresa. Gestão eficiente, conformidade legal total com o eSocial e cuidado genuíno com seus colaboradores.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => onNavigate('normativas')} className="bg-[#0A7C15] text-white border border-[#0EC117] px-5 py-3 rounded-lg font-bold hover:bg-[#0b9e12] transition flex items-center gap-2 shadow-lg hover:shadow-xl">
                <ClipboardList size={20} /> PGR e PCMSO
              </button>
              <button onClick={() => onNavigate('esocial')} className="bg-[#0A7C15] text-white border border-[#0EC117] px-5 py-3 rounded-lg font-bold hover:bg-[#0b9e12] transition flex items-center gap-2 shadow-lg hover:shadow-xl">
                <Shield size={20} /> Gestão eSocial
              </button>
              <button onClick={() => onNavigate('contato')} className="bg-[#0A7C15] text-white border border-[#0EC117] px-5 py-3 rounded-lg font-bold hover:bg-[#0b9e12] transition flex items-center gap-2 shadow-lg hover:shadow-xl">
                <Users size={20} /> Treinamentos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONSULTA DE EXAMES --- */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 bg-[#0F2C4A] p-8 md:p-10 rounded-3xl shadow-xl text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
             <div className="relative z-10 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Consulta de Exames</h2>
                <p className="text-blue-100 text-lg">Acesse o sistema SOC para visualizar seus resultados e laudos.</p>
             </div>
             <div className="relative z-10">
                <a 
                  href="https://sistema.soc.com.br/WebSoc/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white text-[#0F2C4A] px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition shadow-lg flex items-center gap-2"
                >
                  <FileText size={20} />
                  Acessar Resultados
                </a>
             </div>
          </div>

          <div className="tipos-exames">
            <h3 className="text-2xl font-bold text-[#0F2C4A] mb-8 text-center">Tipos de Exames Disponíveis</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 exames-grid">
                {[
                    { icon: "fas fa-user-md", title: "Exame Admissional", desc: "Avaliação médica inicial" },
                    { icon: "fas fa-calendar-check", title: "Exame Periódico", desc: "Acompanhamento regular" },
                    { icon: "fas fa-briefcase", title: "Mudança de Função", desc: "Avaliação para nova atividade" },
                    { icon: "fas fa-sign-out-alt", title: "Exame Demissional", desc: "Avaliação de desligamento" },
                    { icon: "fas fa-home", title: "Retorno ao Trabalho", desc: "Após afastamento" },
                    { icon: "fas fa-stethoscope", title: "Exames Complementares", desc: "Laboratoriais e especializados" }
                ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-6 rounded-2xl text-center hover:bg-white hover:shadow-lg transition duration-300 border border-slate-100 group exame-item">
                        <div className="w-12 h-12 mx-auto bg-[#0F2C4A]/10 text-[#0F2C4A] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#0F2C4A] group-hover:text-white transition">
                            <i className={item.icon + " text-xl"}></i>
                        </div>
                        <h4 className="font-bold text-slate-800 text-sm mb-2">{item.title}</h4>
                        <p className="text-xs text-slate-500 leading-tight">{item.desc}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 3 PILARES DA GESTÃO --- */}
      <section id="resultados" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F2C4A]">
              3 Pilares da Gestão Ocupacional
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Nossa metodologia foca no que realmente importa para a saúde da sua empresa e dos seus colaboradores.
            </p>
          </div>

          {/* Desktop View */}
          <div className="hidden md:block bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {/* Pilar 1 */}
              <div className="p-8 md:p-12 text-center group hover:bg-slate-50 transition duration-300">
                <div className="w-20 h-20 mx-auto bg-[#0F2C4A]/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0F2C4A] transition-colors duration-300">
                  <HardHat className="text-[#0F2C4A] group-hover:text-white transition-colors duration-300" size={36} strokeWidth={1.5} />
                </div>
                <p className="text-lg font-bold text-slate-800 leading-snug">
                  Prevenção de acidentes e doenças ocupacionais
                </p>
              </div>

              {/* Pilar 2 */}
              <div className="p-8 md:p-12 text-center group hover:bg-slate-50 transition duration-300">
                <div className="w-20 h-20 mx-auto bg-[#0F2C4A]/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0F2C4A] transition-colors duration-300">
                  <TrendingUp className="text-[#0F2C4A] group-hover:text-white transition-colors duration-300" size={36} strokeWidth={1.5} />
                </div>
                <p className="text-lg font-bold text-slate-800 leading-snug">
                  Aumento da produtividade e eficiência
                </p>
              </div>

              {/* Pilar 3 */}
              <div className="p-8 md:p-12 text-center group hover:bg-slate-50 transition duration-300">
                <div className="w-20 h-20 mx-auto bg-[#0F2C4A]/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0F2C4A] transition-colors duration-300">
                  <Handshake className="text-[#0F2C4A] group-hover:text-white transition-colors duration-300" size={36} strokeWidth={1.5} />
                </div>
                <p className="text-lg font-bold text-slate-800 leading-snug">
                  Promoção de saúde e bem-estar dos colaboradores
                </p>
              </div>
            </div>
          </div>

          {/* Mobile View (Carousel) */}
          <div className="md:hidden bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden p-8">
            <div className="flex items-center justify-between">
              <button onClick={prevPilar} className="p-2 text-[#0F2C4A] hover:bg-slate-50 rounded-full transition-colors" aria-label="Anterior">
                <ChevronLeft size={32} />
              </button>
              
              <div className="flex-1 px-2 text-center">
                <div className="w-20 h-20 mx-auto bg-[#0F2C4A]/5 rounded-full flex items-center justify-center mb-6">
                  {React.createElement(pilares[currentPilarIndex].icon, { className: "text-[#0F2C4A]", size: 36, strokeWidth: 1.5 })}
                </div>
                <p className="text-lg font-bold text-slate-800 leading-snug min-h-[3.5rem] flex items-center justify-center">
                  {pilares[currentPilarIndex].text}
                </p>
              </div>

              <button onClick={nextPilar} className="p-2 text-[#0F2C4A] hover:bg-slate-50 rounded-full transition-colors" aria-label="Próximo">
                <ChevronRight size={32} />
              </button>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {pilares.map((_, idx) => (
                <div key={idx} className={`w-2 h-2 rounded-full transition-all ${idx === currentPilarIndex ? 'bg-[#0F2C4A] w-4' : 'bg-slate-300'}`} />
              ))}
            </div>
          </div>

          
        </div>
      </section>
    </>
  );
}