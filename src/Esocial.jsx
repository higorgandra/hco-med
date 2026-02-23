import React from 'react';
import { 
  Monitor, AlertTriangle, Stethoscope, Activity, Truck, CheckCircle, ChevronRight 
} from 'lucide-react';

export default function Esocial({ onNavigate }) {
  return (
    <div className="pt-36 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            
            {/* Breadcrumb de Navegação */}
            <div className="mb-8 flex justify-center">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <button onClick={() => onNavigate('home')} className="hover:text-[#0F2C4A] transition-colors">Home</button>
                  <ChevronRight size={16} className="text-slate-400" />
                  <span className="font-semibold text-slate-700">eSocial e Gestão SST</span>
                </div>
            </div>

            {/* Conteúdo Principal */}
            <div className="mb-16 text-center">
              <span className="text-[#0F2C4A] font-bold tracking-wider text-sm block mb-2">OBRIGATORIEDADE</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F2C4A] mb-4">eSocial e Gestão SST</h2>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                Entenda as obrigações e evite multas. O não cumprimento pode gerar penalidades de <span className="text-red-600 font-bold">R$ 402,53 a R$ 181.284,63</span>.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mb-12">
                <div className="w-14 h-14 bg-[#0F2C4A] text-white rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <Monitor size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#0F2C4A] mb-4">O que é o eSocial?</h3>
                <p className="text-slate-700 mb-4 leading-relaxed">O <strong>eSocial</strong> (Sistema de Escrituração Digital das Obrigações Fiscais, Previdenciárias e Trabalhistas) é uma plataforma digital que unifica o envio de informações pelo empregador em relação aos seus empregados.</p>
                <p className="text-slate-700 leading-relaxed">Em relação à <strong>Saúde e Segurança do Trabalho (SST)</strong>, o eSocial exige o envio de diversos eventos que comprovam a conformidade legal da empresa.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                
                {/* Card S-2210 */}
                <div className="flex gap-4 p-6 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition bg-white">
                    <div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <AlertTriangle size={24} />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold px-2 py-0.5 rounded bg-red-50 text-red-600">S-2210</span>
                            <h4 className="font-bold text-slate-800">Comunicação de Acidente de Trabalho (CAT)</h4>
                        </div>
                        <p className="text-sm text-slate-500 mb-2"><span className="font-semibold">Prazo:</span> Até o 1º dia útil seguinte ao acidente</p>
                    </div>
                </div>

                {/* Card S-2220 */}
                <div className="flex gap-4 p-6 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition bg-white">
                    <div className="w-12 h-12 bg-[#0F2C4A]/10 text-[#0F2C4A] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Stethoscope size={24} />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#0F2C4A]/10 text-[#0F2C4A]">S-2220</span>
                            <h4 className="font-bold text-slate-800">Monitoramento da Saúde (ASO)</h4>
                        </div>
                        <p className="text-sm text-slate-500 mb-2"><span className="font-semibold">Prazo:</span> Até o dia 15 do mês seguinte ao exame</p>
                    </div>
                </div>

                {/* Card S-2240 */}
                <div className="flex gap-4 p-6 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition bg-white">
                    <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Activity size={24} />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold px-2 py-0.5 rounded bg-orange-50 text-orange-600">S-2240</span>
                            <h4 className="font-bold text-slate-800">Condições Ambientais do Trabalho</h4>
                        </div>
                        <p className="text-sm text-slate-500 mb-2"><span className="font-semibold">Prazo:</span> Até o dia 15 do mês seguinte à admissão</p>
                    </div>
                </div>

                {/* Card S-2221 */}
                <div className="flex gap-4 p-6 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition bg-white">
                    <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Truck size={24} />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold px-2 py-0.5 rounded bg-purple-50 text-purple-600">S-2221</span>
                            <h4 className="font-bold text-slate-800">Exames Toxicológicos (Motoristas)</h4>
                        </div>
                        <p className="text-sm text-slate-500 mb-2"><span className="font-semibold">Prazo:</span> Até o dia 15 do mês seguinte ao exame</p>
                    </div>
                </div>

              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Como a HCO Ajuda?</h3>
                <ul className="space-y-4">
                  {[
                    "Garantia de envio correto de todos os eventos XML.",
                    "Sistema integrado que automatiza o processo.",
                    "Monitoramento em tempo real de pendências.",
                    "Equipe técnica especializada em medicina e engenharia.",
                    "Auditoria de dados antes do envio ao Governo.",
                    "Redução de custos com gestão preventiva de afastamentos.",
                    "Atendimento personalizado com gestor de conta dedicado.",
                    "Integração direta com os principais softwares de folha."
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-700">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-[#0F2C4A] rounded-xl p-8 text-center text-white shadow-lg esocial-cta">
                <div className="cta-content max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold mb-3">Precisa de ajuda com o eSocial?</h3>
                    <p className="text-slate-200 mb-6">Nossa equipe está pronta para garantir a conformidade da sua empresa</p>
                    <button onClick={() => onNavigate('cadastro')} className="bg-white text-[#0F2C4A] font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition shadow-md inline-block">
                        Solicitar Orçamento
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
