import React from 'react';
import { 
  Users, FileText, Calendar, AlertCircle, 
  Activity, Clock, CheckCircle, BarChart2, Download, Plus, FilePlus
} from 'lucide-react';

export default function Dashboard({ user, onNavigate }) {
  return (
    <div className="pt-36 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Welcome Section */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F2C4A]">
              Olá, {user.displayName?.split(' ')[0] || 'Visitante'}!
            </h2>
            <p className="text-slate-500">Bem-vindo ao seu painel de gestão ocupacional.</p>
          </div>
          <div className="text-sm text-slate-400 font-medium bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100">
            {new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Funcionários Ativos', value: '142', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Exames no Mês', value: '28', icon: Activity, color: 'text-green-600', bg: 'bg-green-50' },
            { label: 'Pendências eSocial', value: '3', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
            { label: 'Documentos Vencendo', value: '5', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content - Recent Activity / Schedule */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-[#0F2C4A] mb-4">Acesso Rápido</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Cadastro', icon: FilePlus, onClick: () => onNavigate('cadastro-ficha') },
                  { label: 'Novo Funcionário', icon: Plus },
                  { label: 'Baixar ASO', icon: Download },
                  { label: 'Relatórios', icon: BarChart2 },
                ].map((action, idx) => (
                  <button key={idx} onClick={action.onClick} className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg border border-slate-100 hover:border-[#0F2C4A] hover:bg-slate-50 transition group">
                    <div className="w-10 h-10 bg-[#0F2C4A]/5 text-[#0F2C4A] rounded-full flex items-center justify-center group-hover:bg-[#0F2C4A] group-hover:text-white transition">
                      <action.icon size={20} />
                    </div>
                    <span className="text-sm font-medium text-slate-600 group-hover:text-[#0F2C4A]">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Upcoming Exams */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-lg font-bold text-[#0F2C4A]">Próximos Exames</h3>
                <button className="text-sm text-blue-600 hover:underline font-medium">Ver todos</button>
              </div>
              <div className="divide-y divide-slate-100">
                {[
                  { name: 'Carlos Silva', type: 'Admissional', date: 'Hoje, 14:00', status: 'Confirmado' },
                  { name: 'Ana Souza', type: 'Periódico', date: 'Amanhã, 09:30', status: 'Pendente' },
                  { name: 'Roberto Santos', type: 'Demissional', date: '15/10, 10:00', status: 'Confirmado' },
                  { name: 'Mariana Lima', type: 'Retorno ao Trabalho', date: '16/10, 15:45', status: 'Aguardando' },
                ].map((exam, idx) => (
                  <div key={idx} className="p-4 flex items-center justify-between hover:bg-slate-50 transition">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-sm">
                        {exam.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">{exam.name}</p>
                        <p className="text-xs text-slate-500">{exam.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-slate-700">{exam.date}</p>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        exam.status === 'Confirmado' ? 'bg-green-100 text-green-700' : 
                        exam.status === 'Pendente' ? 'bg-yellow-100 text-yellow-700' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {exam.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar - Notifications & Status */}
          <div className="space-y-8">
            
            {/* Status Card */}
            <div className="bg-[#0F2C4A] text-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-lg mb-2">Status eSocial</h3>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-blue-100">Sistema Operacional</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm border-b border-blue-800 pb-2">
                  <span className="text-blue-200">Eventos Enviados</span>
                  <span className="font-bold">1.240</span>
                </div>
                <div className="flex justify-between text-sm border-b border-blue-800 pb-2">
                  <span className="text-blue-200">Processados</span>
                  <span className="font-bold">1.238</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-200">Erros</span>
                  <span className="font-bold text-red-300">2</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-white/10 hover:bg-white/20 text-white text-sm font-bold py-2 rounded-lg transition">
                Ver Relatório Detalhado
              </button>
            </div>

            {/* Notifications */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-[#0F2C4A] mb-4">Avisos Importantes</h3>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <AlertCircle size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-slate-700">PCMSO Vencendo</p>
                    <p className="text-xs text-slate-500">O programa da unidade Matriz vence em 15 dias.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <FileText size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-slate-700">Novos Laudos Disponíveis</p>
                    <p className="text-xs text-slate-500">LTCAT atualizado foi publicado no sistema.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-slate-700">Fatura Paga</p>
                    <p className="text-xs text-slate-500">Confirmação de pagamento da fatura #4092.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}