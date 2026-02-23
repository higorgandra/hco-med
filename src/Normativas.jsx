import React from 'react';
import { CheckCircle as CheckCircleIcon, ChevronDown, ExternalLink, ChevronRight } from 'lucide-react';

export default function Normativas({ onNavigate }) {
  return (
    <div className="pt-36 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <button onClick={() => onNavigate('home')} className="hover:text-[#0F2C4A] transition-colors">Home</button>
              <ChevronRight size={16} className="text-slate-400" />
              <span className="font-semibold text-slate-700">Normativas</span>
            </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-extrabold text-[#0F2C4A] mb-4">Normativas Regulamentadoras</h2>
            <p className="text-slate-600 mt-2">Principais NRs que regem a Medicina e Segurança do Trabalho no Brasil</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                nr: "NR-01", 
                badge: "Essencial", 
                title: "Disposições Gerais e Gerenciamento de Riscos", 
                desc: "Estabelece as disposições gerais, o campo de aplicação, os termos e as definições comuns às NRs. Gerenciamento de riscos ocupacionais.",
                topics: ["PGR - Programa de Gerenciamento de Riscos", "Inventário de riscos", "Plano de ação"]
              },
              { 
                nr: "NR-04", 
                badge: "Importante", 
                title: "Serviços Especializados em Segurança e Medicina do Trabalho", 
                desc: "Dimensionamento do SESMT conforme grau de risco e número de empregados. Profissionais especializados.",
                topics: ["Dimensionamento do SESMT", "Profissionais obrigatórios", "Atribuições e responsabilidades"]
              },
              { 
                nr: "NR-05", 
                badge: "Essencial", 
                title: "Comissão Interna de Prevenção de Acidentes - CIPA", 
                desc: "Objetiva a prevenção de acidentes e doenças do trabalho, tornando compatível o trabalho com a preservação da vida e saúde.",
                topics: ["Organização da CIPA", "Processo eleitoral", "Atribuições e treinamento"]
              },
              { 
                nr: "NR-06", 
                badge: "Obrigatório", 
                title: "Equipamentos de Proteção Individual - EPI", 
                desc: "Estabelece os requisitos para uso de EPI, responsabilidades do empregador e empregado, CA (Certificado de Aprovação).",
                topics: ["Obrigações do empregador", "Obrigações do empregado", "Certificado de Aprovação"]
              },
              { 
                nr: "NR-07", 
                badge: "Essencial", 
                title: "Programa de Controle Médico de Saúde Ocupacional - PCMSO", 
                desc: "Estabelece a obrigatoriedade de elaboração e implementação do PCMSO para todos os empregadores. Exames ocupacionais obrigatórios.",
                topics: ["Exames admissional, periódico e demissional", "ASO - Atestado de Saúde Ocupacional", "Monitoramento da saúde"]
              },
              { 
                nr: "NR-09", 
                badge: "Importante", 
                title: "Avaliação e Controle das Exposições Ocupacionais", 
                desc: "Avaliação dos agentes físicos, químicos e biológicos. Complementa o PGR da NR-01.",
                topics: ["Avaliação de agentes nocivos", "Monitoramento de exposições", "Medidas de controle"]
              },
              { 
                nr: "NR-17", 
                badge: "Ergonomia", 
                title: "Ergonomia", 
                desc: "Estabelece parâmetros para adaptação das condições de trabalho às características psicofisiológicas dos trabalhadores.",
                topics: ["Análise Ergonômica do Trabalho", "Mobiliário e postos de trabalho", "Organização do trabalho"]
              },
              { 
                nr: "NR-32", 
                badge: "Específica", 
                title: "Segurança e Saúde no Trabalho em Serviços de Saúde", 
                desc: "Diretrizes para implementação de medidas de proteção à segurança e saúde dos trabalhadores em serviços de saúde.",
                topics: ["Riscos biológicos", "Gestão de resíduos", "EPIs específicos"]
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-slate-100 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-[#0F2C4A] bg-[#0F2C4A]/10 px-3 py-1 rounded">{item.nr}</span>
                  <span className="text-xs font-bold text-white bg-[#0F2C4A] px-2 py-1 rounded-full uppercase tracking-wide">{item.badge}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3 leading-tight">{item.title}</h3>
                <p className="text-slate-600 text-sm mb-4 flex-grow">{item.desc}</p>
                <ul className="space-y-2 mb-4">
                  {item.topics.map((topic, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                      <CheckCircleIcon size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
                <button className="text-[#0F2C4A] font-bold text-sm flex items-center gap-1 hover:underline mt-auto">
                  Ver detalhes <ChevronDown size={14} />
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/ctpp-nrs/normas-regulamentadoras-nrs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0F2C4A] border border-[#0F2C4A] font-bold py-3 px-6 rounded-lg hover:bg-[#0F2C4A] hover:text-white transition shadow-sm"
            >
              <ExternalLink size={18} /> Ver todas as NRs no site do Governo
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}