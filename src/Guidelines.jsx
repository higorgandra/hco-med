import React from 'react';
import { 
  ChevronRight, ShieldAlert, Heart, TrendingUp, Gavel, 
  FileText as FileTextIcon, BarChart, ArrowRight 
} from 'lucide-react';

export default function Guidelines({ onNavigate }) {
  return (
    <div className="pt-36 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2C4A] mb-4">Diretrizes Essenciais</h2>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
              Nossa atuação é pautada em pilares fundamentais que garantem a excelência na Gestão Ocupacional, integrando segurança, saúde e performance.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mt-3">
              <button onClick={() => onNavigate('home')} className="hover:text-[#0F2C4A] transition-colors">Home</button>
              <ChevronRight size={16} className="text-slate-400" />
              <span className="font-semibold text-slate-700">Diretrizes</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Prevenção de Acidentes",
                subtitle: "e Doenças Ocupacionais",
                icon: ShieldAlert,
                desc: "Atuamos na identificação proativa de riscos e na implementação de barreiras de proteção. Nosso foco é criar uma cultura de segurança onde a prevenção é prioridade, reduzindo drasticamente a incidência de sinistros e afastamentos.",
                color: "text-red-600",
                bg: "bg-red-50"
              },
              {
                title: "Promoção da Saúde",
                subtitle: "e Bem-estar",
                icon: Heart,
                desc: "Vamos além dos exames obrigatórios. Incentivamos programas de qualidade de vida, saúde mental e ergonomia, entendendo que colaboradores saudáveis e valorizados são o maior ativo de qualquer organização.",
                color: "text-pink-600",
                bg: "bg-pink-50"
              },
              {
                title: "Produtividade e Eficiência",
                subtitle: "Operacional",
                icon: TrendingUp,
                desc: "Ambientes seguros reduzem o absenteísmo e o presenteísmo. Otimizamos processos de SST para que a segurança não seja um entrave, mas sim um alavancador de performance e resultados sustentáveis.",
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                title: "Conformidade Legal",
                subtitle: "Gestão SST",
                icon: Gavel,
                desc: "Garantimos o cumprimento rigoroso das Normas Regulamentadoras (NRs) e obrigações do eSocial. Nossa gestão blinda sua empresa contra multas e passivos trabalhistas, assegurando tranquilidade jurídica.",
                color: "text-slate-700",
                bg: "bg-slate-100"
              },
              {
                title: "Gestão Integrada",
                subtitle: "PGR + PCMSO",
                icon: FileTextIcon,
                desc: "Conectamos a engenharia de segurança à medicina do trabalho. O inventário de riscos do PGR orienta precisamente os exames do PCMSO, criando um ciclo de gestão coerente, econômico e eficaz.",
                color: "text-green-600",
                bg: "bg-green-50"
              },
              {
                title: "Monitoramento Contínuo",
                subtitle: "e Indicadores",
                icon: BarChart,
                desc: "Não gerenciamos o que não medimos. Utilizamos indicadores de desempenho (KPIs) para monitorar a saúde da sua empresa em tempo real, permitindo ações corretivas rápidas e melhoria contínua.",
                color: "text-purple-600",
                bg: "bg-purple-50"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-8">
                <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-6`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0F2C4A] leading-tight">
                  {item.title}
                  <span className="block text-sm font-medium text-slate-500 mt-1">{item.subtitle}</span>
                </h3>
                <div className="w-12 h-1 bg-[#0F2C4A]/10 rounded-full my-4"></div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#0F2C4A] rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Compromisso com a Excelência</h3>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8">
                Nossas diretrizes não são apenas palavras, são a base de cada atendimento, laudo e treinamento que realizamos.
              </p>
              <button onClick={() => onNavigate('contato')} className="bg-white text-[#0F2C4A] font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition shadow-lg inline-flex items-center gap-2">
                Fale com um Especialista <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}