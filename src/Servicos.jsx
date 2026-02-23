import React from 'react';
import { 
  ClipboardList, Shield, Stethoscope, FileText, Activity, BookOpen, 
  FileCheck, Gavel, AlertTriangle, Users, Beaker, HardHat, Zap, 
  Package, Settings, Thermometer, User, Flame, Minimize2, ArrowUpCircle 
} from 'lucide-react';

export default function Servicos() {
  return (
    <div className="pt-36 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          
          {/* Header da Página */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-[#0F2C4A] mb-4">Nossos Serviços</h2>
            <p className="text-slate-600 mt-2">A HCO oferece um portfólio completo de soluções em Medicina e Segurança do Trabalho, garantindo conformidade legal e promovendo a saúde dos seus colaboradores.</p>
          </div>

          {/* Grupo 1: Gestão Técnica e Documental */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-[#0F2C4A]/10 text-[#0F2C4A] rounded-xl"><ClipboardList size={28} /></div>
              <h3 className="text-2xl font-bold text-[#0F2C4A]">Gestão Técnica e Documental</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "PGR", desc: "O Programa de Gerenciamento de Riscos (PGR) visa à melhoria contínua das condições da exposição dos trabalhadores por meio de ações multidisciplinares e sistematizadas.", icon: Shield },
                { title: "PCMSO", desc: "Programa de Controle Médico de Saúde Ocupacional. Previne e diagnostica precocemente danos à saúde decorrentes do trabalho. Elaborado exclusivamente por médicos do trabalho.", icon: Stethoscope },
                { title: "LTCAT", desc: "Laudo Técnico das Condições do Ambiente de Trabalho. Avalia a exposição a agentes insalubres e perigosos para fins previdenciários.", icon: FileText },
                { title: "Gestão eSocial", desc: "Envio dos eventos SST (S-2210, S-2220, S-2240). Garantimos a conformidade com o governo federal, evitando multas e passivos trabalhistas.", icon: Activity },
                { title: "PPP", desc: "Perfil Profissiográfico Previdenciário. Histórico laboral do trabalhador, essencial para requerimento de aposentadoria especial junto ao INSS.", icon: BookOpen },
                { title: "Laudos Técnicos", desc: "Laudos de Insalubridade e Periculosidade exigidos pelo Ministério do Trabalho para verificação de condições de risco e adicionais salariais.", icon: FileCheck },
                { title: "Perícias Trabalhistas", desc: "Assistência técnica em processos judiciais para esclarecer questões relacionadas ao ambiente de trabalho e saúde ocupacional.", icon: Gavel },
                { title: "Plano de Emergência (PAE)", desc: "Diretrizes técnicas e administrativas para atuação em situações de emergência, preservando vidas e patrimônio.", icon: AlertTriangle },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-slate-100 flex flex-col">
                  <div className="mb-6 text-[#0F2C4A] bg-[#0F2C4A]/10 w-14 h-14 rounded-lg flex items-center justify-center">
                    <item.icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-[#0F2C4A] mb-3">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Grupo 2: Medicina e Diagnóstico */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-green-100 text-green-600 rounded-xl"><Stethoscope size={28} /></div>
              <h3 className="text-2xl font-bold text-[#0F2C4A]">Medicina e Diagnósticos</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-slate-100">
                <div className="flex items-start gap-6">
                  <div className="text-green-600 bg-green-50 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0F2C4A] mb-4">Atendimento Clínico e Exames</h4>
                    <p className="text-slate-600 text-sm mb-4">Emissão de ASO (Atestado de Saúde Ocupacional) e realização de exames complementares completos:</p>
                    <ul className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Exames Laboratoriais</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Audiometria</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Raio-X</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Eletroencefalograma</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Eletrocardiograma</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Espirometria</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Acuidade Visual</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Teste Ergométrico</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-slate-100">
                <div className="flex items-start gap-6">
                  <div className="text-green-600 bg-green-50 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Beaker size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0F2C4A] mb-4">Medições Ambientais</h4>
                    <p className="text-slate-600 text-sm mb-4">Avaliações quantitativas com equipamentos calibrados para mensurar a exposição dos trabalhadores a agentes nocivos.</p>
                    <p className="text-slate-600 text-sm">Essenciais para LTCAT, PGR e Laudos de Insalubridade. Realizamos medições de:</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {['Ruído', 'Calor', 'Vibrações', 'Poeiras', 'Fumos Metálicos', 'Vapores Químicos'].map(tag => (
                        <span key={tag} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grupo 3: Treinamentos */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-orange-100 text-orange-600 rounded-xl"><HardHat size={28} /></div>
              <h3 className="text-2xl font-bold text-[#0F2C4A]">Treinamentos Normativos (NRs)</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { nr: "NR-06", title: "EPI - Equipamentos de Proteção", icon: Shield },
                { nr: "NR-10", title: "Segurança em Eletricidade", icon: Zap },
                { nr: "NR-11", title: "Transporte e Movimentação", icon: Package },
                { nr: "NR-12", title: "Máquinas e Equipamentos", icon: Settings },
                { nr: "NR-13", title: "Caldeiras e Vasos de Pressão", icon: Thermometer },
                { nr: "NR-17", title: "Ergonomia", icon: User },
                { nr: "NR-20", title: "Inflamáveis e Combustíveis", icon: Flame },
                { nr: "NR-33", title: "Espaços Confinados", icon: Minimize2 },
                { nr: "NR-35", title: "Trabalho em Altura", icon: ArrowUpCircle },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-orange-400 hover:shadow-md transition group flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-orange-500 group-hover:text-white transition duration-300 flex-shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-orange-600 block mb-1">{item.nr}</span>
                    <h4 className="font-bold text-slate-800 text-sm leading-tight">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}