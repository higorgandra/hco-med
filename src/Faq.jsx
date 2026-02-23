import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function Faq({ onNavigate }) {
  const [openAccordion, setOpenAccordion] = useState(null);

  return (
    <div className="pt-36 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <button onClick={() => onNavigate('home')} className="hover:text-[#0F2C4A] transition-colors">Home</button>
              <ChevronRight size={16} className="text-slate-400" />
              <span className="font-semibold text-slate-700">FAQ</span>
            </div>
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F2C4A]">Dúvidas Frequentes (FAQ)</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Quer um PCMSO, PGR e LTCAT prontos e adaptados para sua realidade? Entre em contato agora!
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: "O que é o PGR e para que serve?", a: "O PGR (Programa de Gerenciamento de Riscos) identifica e controla riscos no ambiente de trabalho. Ele é obrigatório para empresas com empregados e substitui o antigo PPRA." },
            { q: "Quem deve fazer o PCMSO?", a: "Toda empresa que tenha pelo menos 1 funcionário registrado no regime CLT deve elaborar o PCMSO, conforme exigido pela NR-7." },
            { q: "O que é LTCAT e quando ele é exigido?", a: "O LTCAT (Laudo Técnico das Condições Ambientais do Trabalho) é exigido para comprovar a exposição a agentes nocivos e é obrigatório para fins previdenciários, como aposentadoria especial." },
            { q: "Qual a diferença entre PGR, PCMSO e LTCAT?", a: "PGR trata dos riscos no ambiente; PCMSO cuida da saúde do trabalhador; LTCAT é usado para comprovação junto ao INSS de condições insalubres ou perigosas." },
            { q: "PGR substitui o PPRA?", a: "Sim. Desde 2022, o PGR substitui o PPRA como exigência legal conforme a nova NR-1." },
            { q: "Quem pode elaborar o PGR?", a: "O PGR deve ser elaborado por profissional habilitado em segurança do trabalho, preferencialmente engenheiro de segurança ou técnico de segurança com qualificação." },
            { q: "Quem assina o LTCAT?", a: "O LTCAT deve ser assinado por um engenheiro de segurança do trabalho ou médico do trabalho com registro no CREA ou CRM." },
            { q: "Quanto tempo vale o PCMSO, PGR e LTCAT?", a: "Todos devem ser atualizados anualmente ou sempre que houver mudanças nos riscos, processos ou quadro de funcionários." },
            { q: "Precisa de visita técnica para emitir esses documentos?", a: "Depende. Em muitos casos, a avaliação pode ser feita online com base em informações e documentos fornecidos pela empresa. Em outros, pode ser necessária visita técnica." },
            { q: "PGR, PCMSO e LTCAT são obrigatórios para MEI?", a: "MEI com funcionário registrado, grau de risco 3 ou 4 precisa dos documentos. Se atua sozinho, em regra, não é obrigado, mas pode ser exigido por clientes, obras ou licitações." }
          ].map((item, index) => (
            <div key={index} className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-md">
              <button
                onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left font-bold text-slate-800 bg-slate-50 hover:bg-slate-100"
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`flex-shrink-0 ${openAccordion === index ? 'rotate-180' : ''}`}
                  size={20}
                />
              </button>
              <div
                className={`overflow-hidden ${openAccordion === index ? 'block' : 'hidden'}`}
              >
                <div className="p-5 text-slate-600 leading-relaxed bg-white border-t border-slate-100" dangerouslySetInnerHTML={{ __html: item.a }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}