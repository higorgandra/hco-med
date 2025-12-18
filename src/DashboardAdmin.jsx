import React, { useState, useEffect } from 'react';
import { 
  Users, FileText, Calendar, AlertCircle, 
  Activity, Clock, CheckCircle, BarChart2, Download, Plus, Shield, Lock,
  FilePlus, User as UserIcon, MapPin, Briefcase, Building as BuildingIcon, Search, Database
} from 'lucide-react';
import { db } from './firebase';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';

export default function DashboardAdmin({ user, onNavigate }) {
  const [recentRecords, setRecentRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const q = query(collection(db, "funcionarios"), orderBy("createdAt", "desc"), limit(5));
        const querySnapshot = await getDocs(q);
        const records = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setRecentRecords(records);
      } catch (error) {
        console.error("Erro ao buscar registros:", error);
      }
    };

    fetchRecords();
  }, []);

  return (
    <div className="pt-36 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Welcome Section - Admin Style */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#0F2C4A] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide flex items-center gap-1">
                <Shield size={12} /> Administrador
              </span>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide flex items-center gap-1">
                <Lock size={12} /> Ambiente Seguro
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F2C4A]">
              Painel Administrativo
            </h2>
            <p className="text-slate-500">Visão geral e gerenciamento do sistema.</p>
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
                  { label: 'Gerenciar Usuários', icon: Users },
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

            {/* Database Management */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-[#0F2C4A] flex items-center gap-2">
                  <Database size={20} />
                  Base de Dados
                </h3>
                <div className="relative hidden sm:block">
                  <input 
                    type="text" 
                    placeholder="Buscar registro..." 
                    className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0F2C4A] w-64"
                  />
                  <Search size={16} className="absolute left-3 top-2.5 text-slate-400" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-slate-100 rounded-xl hover:border-blue-500 hover:shadow-md transition cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                      <UserIcon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Funcionários</h4>
                      <p className="text-xs text-slate-500">Dados pessoais e documentos</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-slate-100 rounded-xl hover:border-orange-500 hover:shadow-md transition cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition">
                      <BuildingIcon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Empresas & Unidades</h4>
                      <p className="text-xs text-slate-500">Gestão de locais de trabalho</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-slate-100 rounded-xl hover:border-green-500 hover:shadow-md transition cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Contratos</h4>
                      <p className="text-xs text-slate-500">Cargos, funções e admissões</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-slate-100 rounded-xl hover:border-purple-500 hover:shadow-md transition cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Documentação</h4>
                      <p className="text-xs text-slate-500">ASOs, PGR, PCMSO e Laudos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Records Table */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-lg font-bold text-[#0F2C4A]">Últimos Cadastros</h3>
                <button className="text-sm text-blue-600 hover:underline font-medium">Ver todos</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-600 font-bold">
                    <tr>
                      <th className="px-6 py-3">Funcionário</th>
                      <th className="px-6 py-3">Empresa</th>
                      <th className="px-6 py-3">Cargo</th>
                      <th className="px-6 py-3">Data</th>
                      <th className="px-6 py-3">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {recentRecords.map((record) => (
                      <tr key={record.id} className="hover:bg-slate-50 transition">
                        <td className="px-6 py-4 font-medium text-slate-800">{record.nomeFuncionario}</td>
                        <td className="px-6 py-4 text-slate-600">{record.nomeUnidade || record.razaoSocial || '-'}</td>
                        <td className="px-6 py-4 text-slate-600">{record.cargo}</td>
                        <td className="px-6 py-4 text-slate-500">{record.createdAt ? new Date(record.createdAt.seconds * 1000).toLocaleDateString('pt-BR') : '-'}</td>
                        <td className="px-6 py-4">
                          <button className="text-blue-600 hover:text-blue-800 font-medium">Editar</button>
                        </td>
                      </tr>
                    ))}
                    {recentRecords.length === 0 && (
                      <tr>
                        <td colSpan="5" className="px-6 py-8 text-center text-slate-500">
                          Nenhum registro encontrado.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
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