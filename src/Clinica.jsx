import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

export default function Clinica({ onNavigate }) {
  return (
    <section className="pt-36 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="relative h-64 bg-[#0F2C4A] flex items-center justify-center overflow-hidden">
            <div className="absolute w-96 h-96 bg-white/5 rounded-full -top-20 -left-20 blur-3xl"></div>
            <div className="absolute w-96 h-96 bg-blue-400/10 rounded-full -bottom-20 -right-20 blur-3xl"></div>
            <div className="relative z-10 text-center px-4">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">A Clínica</h2>
              <p className="text-blue-100 text-lg font-medium max-w-2xl mx-auto">Excelência e Inovação em Saúde Ocupacional</p>
            </div>
          </div>
          
          <div className="p-8 md:p-16">
            <div className="max-w-3xl mx-auto space-y-8 text-lg text-slate-600 leading-relaxed text-justify">
              <p><strong className="text-[#0F2C4A]">A HCO – Healthcare Occupational</strong> tem a honra de apresentar esta proposta comercial, desenvolvida para atender empresas que buscam excelência em Medicina e Segurança do Trabalho. Atuamos com foco estratégico na saúde do trabalhador, na redução de riscos operacionais e no rigoroso cumprimento das Normas Regulamentadoras, garantindo segurança jurídica e eficiência operacional aos nossos clientes.</p>
              <p>Nossa metodologia integra tecnologia, agilidade e padrões clínicos de alta qualidade, assegurando processos mais organizados, diagnósticos precisos e acompanhamento contínuo. Trabalhamos para que sua empresa esteja sempre em conformidade, evitando multas, reduzindo passivos trabalhistas e fortalecendo a cultura de prevenção.</p>
              <p>Oferecemos soluções completas: gestão de exames ocupacionais, implementação de programas legais, avaliação de riscos, treinamentos obrigatórios, laudos técnicos e consultoria especializada para apoiar decisões estratégicas. Cada serviço é pensado para proporcionar tranquilidade, proteção e resultados concretos.</p>
              <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-[#0F2C4A] mt-8">
                <p className="font-medium text-slate-700 italic">"Com a HCO, sua empresa recebe um parceiro comprometido com segurança, transparência e responsabilidade. Nosso propósito é cuidar das pessoas e elevar o nível de saúde ocupacional do seu negócio, contribuindo para um ambiente de trabalho mais seguro, saudável e produtivo. Estamos prontos para atender com excelência."</p>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto mt-16">
              <div className="bg-white border border-slate-100 rounded-2xl p-8 flex flex-col sm:flex-row items-start gap-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="bg-[#0F2C4A]/10 text-[#0F2C4A] p-4 rounded-xl"><MapPin size={28} /></div>
                <div>
                  <h4 className="text-xl font-bold text-[#0F2C4A] mb-2">Nossa Localização</h4>
                  <p className="text-slate-600 text-base leading-relaxed">Rua Senador Theotônio Vilela, 190 Ed. Convention Center 3º andar</p>
                  <p className="text-slate-600 text-base leading-relaxed">Parque Bela Vista, Salvador - BA, 40279-435</p>
                  <a href="https://www.google.com/maps/search/?api=1&query=Av+Tancredo+Neves,+2539,+Caminho+das+Árvores,+Salvador,+BA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:underline mt-4">Ver no mapa <ArrowRight size={16} /></a>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <button onClick={() => onNavigate('contato')} className="bg-[#0F2C4A] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#0A1F35] transition shadow-lg hover:shadow-xl flex items-center gap-3">
                Fale Conosco <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}