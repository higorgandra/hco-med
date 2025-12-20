import React, { useState, useEffect, useRef } from 'react';
import { 
  LayoutDashboard, FileText, DollarSign, CreditCard, ArrowRightLeft, 
  Database, BarChart, Settings, LogOut, Menu, Search, Bell, User, 
  Printer, Plus, Filter, Trash2, FileSpreadsheet, Building, Truck, 
  Briefcase, AlertCircle, ChevronDown
} from 'lucide-react';
import { db } from './firebase';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';

export default function DashboardAdmin({ user, onNavigate }) {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => window.innerWidth >= 1024);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [recentRecords, setRecentRecords] = useState([]);
  const userMenuRef = useRef(null);

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

  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userMenuRef]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (isUserMenuOpen) {
          setIsUserMenuOpen(false);
        } else if (isSidebarOpen) {
          setIsSidebarOpen(false);
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isUserMenuOpen, isSidebarOpen]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardSection recentRecords={recentRecords} />;
      case 'propostas':
        return <PropostasSection />;
      case 'receber':
        return <ReceberSection />;
      case 'pagar':
        return <PagarSection />;
      case 'fluxo':
        return <FluxoSection />;
      case 'cadastros':
        return <CadastrosSection />;
      case 'relatorios':
        return <RelatoriosSection />;
      case 'configuracoes':
        return <ConfiguracoesSection />;
      default:
        return <DashboardSection recentRecords={recentRecords} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans">
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 bg-[#0F2C4A] text-white transition-all duration-300 ease-in-out lg:static ${
          isSidebarOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full lg:w-0 lg:overflow-hidden'
        }`}
      >
        <div className="flex items-center justify-between px-4 h-20 border-b border-slate-700 bg-[#0A1F35] overflow-hidden">
          <h2 className="text-xl font-bold tracking-wider whitespace-nowrap">HCO Financeiro</h2>
          <button onClick={toggleSidebar} className="p-2 text-slate-300 hover:bg-white/10 rounded-lg" title="Recolher Menu">
            <Menu size={20} />
          </button>
        </div>
        
        <nav className="mt-6 px-4 space-y-2">
          <NavItem id="dashboard" icon={LayoutDashboard} label="Dashboard" active={activeSection === 'dashboard'} onClick={() => setActiveSection('dashboard')} />
          <NavItem id="propostas" icon={FileText} label="Propostas" active={activeSection === 'propostas'} onClick={() => setActiveSection('propostas')} />
          <NavItem id="receber" icon={DollarSign} label="Contas a Receber" active={activeSection === 'receber'} onClick={() => setActiveSection('receber')} />
          <NavItem id="pagar" icon={CreditCard} label="Contas a Pagar" active={activeSection === 'pagar'} onClick={() => setActiveSection('pagar')} />
          <NavItem id="fluxo" icon={ArrowRightLeft} label="Fluxo de Caixa" active={activeSection === 'fluxo'} onClick={() => setActiveSection('fluxo')} />
          <NavItem id="cadastros" icon={Database} label="Cadastros" active={activeSection === 'cadastros'} onClick={() => setActiveSection('cadastros')} />
          <NavItem id="relatorios" icon={BarChart} label="Relatórios" active={activeSection === 'relatorios'} onClick={() => setActiveSection('relatorios')} />
          <NavItem id="configuracoes" icon={Settings} label="Configurações" active={activeSection === 'configuracoes'} onClick={() => setActiveSection('configuracoes')} />
        </nav>
      </aside>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="bg-white shadow-sm z-30 h-20 flex items-center justify-between px-6 lg:px-8">
          <button onClick={toggleSidebar} className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
            <Menu size={24} />
          </button>
          
          <div className="flex-1 max-w-xl mx-4 hidden md:block">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                <Search size={20} />
              </span>
              <input 
                type="text" 
                placeholder="Buscar clientes, propostas, contas..." 
                className="w-full py-2 pl-10 pr-4 text-slate-700 bg-slate-100 border-none rounded-lg focus:ring-2 focus:ring-[#0F2C4A] focus:bg-white transition-colors"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="relative" ref={userMenuRef}>
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-3 pl-4 border-l border-slate-200 hover:bg-slate-50 transition-colors p-2 rounded-lg"
              >
                <div className="text-right hidden md:block">
                  <p className="text-sm font-bold text-slate-700">{user?.displayName || 'Admin'}</p>
                  <p className="text-xs text-slate-500">Administrador</p>
                </div>
                <div className="w-10 h-10 bg-[#0F2C4A] text-white rounded-full flex items-center justify-center font-bold text-lg overflow-hidden">
                  {user?.photoURL ? <img src={user.photoURL} alt="User" className="w-full h-full object-cover" /> : (user?.displayName?.charAt(0) || 'A')}
                </div>
                <ChevronDown size={16} className={`text-slate-400 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-2 animate-in fade-in zoom-in-95">
                  <button onClick={() => onNavigate('home')} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 font-medium">
                    <LogOut size={16} /> Sair
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-8">
          {renderSection()}
        </div>
      </main>
    </div>
  );
}

// Helper Components
const NavItem = ({ icon: Icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex items-center w-full gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors overflow-hidden ${
      active 
        ? 'bg-white/10 text-white shadow-sm' 
        : 'text-slate-400 hover:bg-white/5 hover:text-white'
    }`}
  >
    <Icon size={20} />
    <span className="whitespace-nowrap">{label}</span>
  </button>
);

const KPICard = ({ icon: Icon, label, value, trend, colorClass, bgClass }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
    <div className={`p-3 rounded-lg ${bgClass} ${colorClass}`}>
      <Icon size={24} />
    </div>
    <div>
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <h3 className="text-2xl font-bold text-slate-800 mt-1">{value}</h3>
      <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
        <AlertCircle size={12} /> {trend}
      </p>
    </div>
  </div>
);

// Sections
const DashboardSection = ({ recentRecords }) => (
  <div className="space-y-8">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <h1 className="text-2xl font-bold text-[#0F2C4A] flex items-center gap-2">
        <LayoutDashboard className="text-[#0F2C4A]" /> Dashboard Financeiro
      </h1>
      <div className="flex gap-2">
        <select className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0F2C4A]">
          <option value="30">Últimos 30 dias</option>
          <option value="90">Últimos 90 dias</option>
          <option value="180">Últimos 6 meses</option>
          <option value="365">Último ano</option>
        </select>
        <button className="px-4 py-2 bg-[#0F2C4A] text-white rounded-lg text-sm font-medium hover:bg-[#0A1F35] flex items-center gap-2">
          <Printer size={16} /> Imprimir
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <KPICard icon={DollarSign} label="Receitas do Mês" value="R$ 0,00" trend="Dados do mês atual" colorClass="text-green-600" bgClass="bg-green-50" />
      <KPICard icon={CreditCard} label="Despesas do Mês" value="R$ 0,00" trend="Dados do mês atual" colorClass="text-red-600" bgClass="bg-red-50" />
      <KPICard icon={BarChart} label="Lucro do Mês" value="R$ 0,00" trend="Dados do mês atual" colorClass="text-blue-600" bgClass="bg-blue-50" />
      <KPICard icon={Briefcase} label="Saldo em Caixa" value="R$ 0,00" trend="Atualizado agora" colorClass="text-orange-600" bgClass="bg-orange-50" />
    </div>

    <div className="grid lg:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-[#0F2C4A] mb-4 flex items-center gap-2">
          <BarChart size={20} /> Receitas vs Despesas
        </h3>
        <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400">
          Gráfico de Receitas vs Despesas (Placeholder)
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-[#0F2C4A] mb-4 flex items-center gap-2">
          <BarChart size={20} /> Receitas por Serviço
        </h3>
        <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400">
          Gráfico de Receitas por Serviço (Placeholder)
        </div>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-[#0F2C4A] mb-4 flex items-center gap-2">
          <FileText size={20} /> Propostas
        </h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-slate-50 rounded-lg">
            <span className="block text-sm text-slate-500 mb-1">Pendentes</span>
            <span className="text-xl font-bold text-yellow-600">0</span>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
            <span className="block text-sm text-slate-500 mb-1">Aprovadas</span>
            <span className="text-xl font-bold text-green-600">0</span>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
            <span className="block text-sm text-slate-500 mb-1">Vencidas</span>
            <span className="text-xl font-bold text-red-600">0</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-[#0F2C4A] mb-4 flex items-center gap-2">
          <AlertCircle size={20} /> Alertas
        </h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-sm text-slate-600 p-3 bg-yellow-50 rounded-lg border border-yellow-100">
            <AlertCircle size={16} className="text-yellow-600" /> 5 contas a vencer nos próximos 7 dias
          </li>
          <li className="flex items-center gap-3 text-sm text-slate-600 p-3 bg-red-50 rounded-lg border border-red-100">
            <AlertCircle size={16} className="text-red-600" /> 2 pagamentos em atraso
          </li>
          <li className="flex items-center gap-3 text-sm text-slate-600 p-3 bg-blue-50 rounded-lg border border-blue-100">
            <AlertCircle size={16} className="text-blue-600" /> 3 propostas aguardando aprovação
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const PropostasSection = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold text-[#0F2C4A] flex items-center gap-2">
        <FileText /> Propostas Comerciais
      </h1>
      <button className="px-4 py-2 bg-[#0F2C4A] text-white rounded-lg text-sm font-medium hover:bg-[#0A1F35] flex items-center gap-2">
        <Plus size={16} /> Nova Proposta
      </button>
    </div>
    
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-wrap gap-4 items-end">
      <div className="flex-1 min-w-[200px]">
        <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
        <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0F2C4A]">
          <option value="">Todos</option>
          <option value="pendente">Pendente</option>
          <option value="aprovada">Aprovada</option>
          <option value="rejeitada">Rejeitada</option>
        </select>
      </div>
      <div className="flex-1 min-w-[200px]">
        <label className="block text-sm font-medium text-slate-700 mb-1">Período</label>
        <div className="flex gap-2">
          <input type="date" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" />
          <input type="date" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" />
        </div>
      </div>
      <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 flex items-center gap-2">
        <Filter size={16} /> Filtrar
      </button>
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      <table className="w-full text-sm text-left">
        <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-100">
          <tr>
            <th className="px-6 py-4">Nº Proposta</th>
            <th className="px-6 py-4">Cliente</th>
            <th className="px-6 py-4">Data</th>
            <th className="px-6 py-4">Validade</th>
            <th className="px-6 py-4">Valor Total</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr>
            <td colSpan="7" className="px-6 py-8 text-center text-slate-500">Nenhuma proposta encontrada.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const ReceberSection = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold text-[#0F2C4A] flex items-center gap-2">
        <DollarSign /> Contas a Receber
      </h1>
      <button className="px-4 py-2 bg-[#0F2C4A] text-white rounded-lg text-sm font-medium hover:bg-[#0A1F35] flex items-center gap-2">
        <Plus size={16} /> Novo Recebimento
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        <h4 className="text-sm font-medium text-slate-500">Total a Receber</h4>
        <p className="text-xl font-bold text-blue-600 mt-1">R$ 0,00</p>
      </div>
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        <h4 className="text-sm font-medium text-slate-500">Vencidos</h4>
        <p className="text-xl font-bold text-red-600 mt-1">R$ 0,00</p>
      </div>
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        <h4 className="text-sm font-medium text-slate-500">Vence Hoje</h4>
        <p className="text-xl font-bold text-yellow-600 mt-1">R$ 0,00</p>
      </div>
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        <h4 className="text-sm font-medium text-slate-500">Recebido no Mês</h4>
        <p className="text-xl font-bold text-green-600 mt-1">R$ 0,00</p>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      <table className="w-full text-sm text-left">
        <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-100">
          <tr>
            <th className="px-6 py-4">Nº Documento</th>
            <th className="px-6 py-4">Cliente</th>
            <th className="px-6 py-4">Descrição</th>
            <th className="px-6 py-4">Vencimento</th>
            <th className="px-6 py-4">Valor</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr>
            <td colSpan="7" className="px-6 py-8 text-center text-slate-500">Nenhum recebimento encontrado.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const PagarSection = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold text-[#0F2C4A] flex items-center gap-2">
        <CreditCard /> Contas a Pagar
      </h1>
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-[#0F2C4A] text-white rounded-lg text-sm font-medium hover:bg-[#0A1F35] flex items-center gap-2">
          <Plus size={16} /> Novo Pagamento
        </button>
        <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 flex items-center gap-2">
          <Trash2 size={16} /> Zerar
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        <h4 className="text-sm font-medium text-slate-500">Total a Pagar</h4>
        <p className="text-xl font-bold text-blue-600 mt-1">R$ 0,00</p>
      </div>
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        <h4 className="text-sm font-medium text-slate-500">Vencidos</h4>
        <p className="text-xl font-bold text-red-600 mt-1">R$ 0,00</p>
      </div>
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        <h4 className="text-sm font-medium text-slate-500">Vence Hoje</h4>
        <p className="text-xl font-bold text-yellow-600 mt-1">R$ 0,00</p>
      </div>
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
        <h4 className="text-sm font-medium text-slate-500">Pago no Mês</h4>
        <p className="text-xl font-bold text-green-600 mt-1">R$ 0,00</p>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      <table className="w-full text-sm text-left">
        <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-100">
          <tr>
            <th className="px-6 py-4">Nº Documento</th>
            <th className="px-6 py-4">Fornecedor</th>
            <th className="px-6 py-4">Categoria</th>
            <th className="px-6 py-4">Vencimento</th>
            <th className="px-6 py-4">Valor</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr>
            <td colSpan="7" className="px-6 py-8 text-center text-slate-500">Nenhuma conta encontrada.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const FluxoSection = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold text-[#0F2C4A] flex items-center gap-2">
        <ArrowRightLeft /> Fluxo de Caixa
      </h1>
      <div className="flex gap-2">
        <select className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0F2C4A]">
          <option value="diario">Diário</option>
          <option value="semanal">Semanal</option>
          <option value="mensal" selected>Mensal</option>
        </select>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 flex items-center gap-2">
          <FileSpreadsheet size={16} /> Exportar
        </button>
        <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 flex items-center gap-2">
          <Trash2 size={16} /> Zerar
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
        <div className="p-3 bg-green-100 text-green-600 rounded-full">
          <ArrowRightLeft className="rotate-90" size={24} />
        </div>
        <div>
          <h4 className="text-sm font-medium text-slate-500">Entradas</h4>
          <p className="text-2xl font-bold text-green-600">R$ 0,00</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
        <div className="p-3 bg-red-100 text-red-600 rounded-full">
          <ArrowRightLeft className="-rotate-90" size={24} />
        </div>
        <div>
          <h4 className="text-sm font-medium text-slate-500">Saídas</h4>
          <p className="text-2xl font-bold text-red-600">R$ 0,00</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
        <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
          <DollarSign size={24} />
        </div>
        <div>
          <h4 className="text-sm font-medium text-slate-500">Saldo</h4>
          <p className="text-2xl font-bold text-blue-600">R$ 0,00</p>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
      <h3 className="text-lg font-bold text-[#0F2C4A] mb-4 flex items-center gap-2">
        <BarChart size={20} /> Fluxo de Caixa Mensal
      </h3>
      <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400">
        Gráfico de Fluxo de Caixa (Placeholder)
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h3 className="text-lg font-bold text-[#0F2C4A]">Movimentações Recentes</h3>
      </div>
      <table className="w-full text-sm text-left">
        <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-100">
          <tr>
            <th className="px-6 py-4">Data</th>
            <th className="px-6 py-4">Tipo</th>
            <th className="px-6 py-4">Descrição</th>
            <th className="px-6 py-4">Categoria</th>
            <th className="px-6 py-4">Entrada</th>
            <th className="px-6 py-4">Saída</th>
            <th className="px-6 py-4">Saldo</th>
            <th className="px-6 py-4">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          <tr>
            <td colSpan="8" className="px-6 py-8 text-center text-slate-500">Nenhuma movimentação encontrada.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const CadastrosSection = () => {
  const [activeTab, setActiveTab] = useState('clientes');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#0F2C4A] flex items-center gap-2">
          <Database /> Cadastros
        </h1>
      </div>

      <div className="flex gap-2 border-b border-slate-200">
        <button 
          onClick={() => setActiveTab('clientes')}
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'clientes' ? 'border-[#0F2C4A] text-[#0F2C4A]' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          <Building className="inline-block mr-2" size={16} /> Clientes
        </button>
        <button 
          onClick={() => setActiveTab('fornecedores')}
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'fornecedores' ? 'border-[#0F2C4A] text-[#0F2C4A]' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          <Truck className="inline-block mr-2" size={16} /> Fornecedores
        </button>
        <button 
          onClick={() => setActiveTab('servicos')}
          className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'servicos' ? 'border-[#0F2C4A] text-[#0F2C4A]' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          <Briefcase className="inline-block mr-2" size={16} /> Serviços
        </button>
      </div>

      {activeTab === 'clientes' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-slate-800">Clientes</h2>
            <button className="px-4 py-2 bg-[#0F2C4A] text-white rounded-lg text-sm font-medium hover:bg-[#0A1F35] flex items-center gap-2">
              <Plus size={16} /> Novo Cliente
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4">CNPJ</th>
                  <th className="px-6 py-4">Razão Social</th>
                  <th className="px-6 py-4">Responsável</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Telefone</th>
                  <th className="px-6 py-4">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center text-slate-500">Nenhum cliente cadastrado.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'fornecedores' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-slate-800">Fornecedores</h2>
            <button className="px-4 py-2 bg-[#0F2C4A] text-white rounded-lg text-sm font-medium hover:bg-[#0A1F35] flex items-center gap-2">
              <Plus size={16} /> Novo Fornecedor
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4">CNPJ/CPF</th>
                  <th className="px-6 py-4">Nome/Razão Social</th>
                  <th className="px-6 py-4">Categoria</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Telefone</th>
                  <th className="px-6 py-4">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center text-slate-500">Nenhum fornecedor cadastrado.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'servicos' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-slate-800">Tabela de Serviços e Preços</h2>
            <button className="px-4 py-2 bg-[#0F2C4A] text-white rounded-lg text-sm font-medium hover:bg-[#0A1F35] flex items-center gap-2">
              <Plus size={16} /> Novo Serviço
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-100">
                <tr>
                  <th className="px-6 py-4">Código</th>
                  <th className="px-6 py-4">Serviço</th>
                  <th className="px-6 py-4">Descrição</th>
                  <th className="px-6 py-4">Valor Unitário</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td colSpan="6" className="px-6 py-8 text-center text-slate-500">Nenhum serviço cadastrado.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

const RelatoriosSection = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold text-[#0F2C4A] flex items-center gap-2">
        <BarChart /> Relatórios
      </h1>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: "DRE - Demonstração de Resultado", desc: "Receitas, despesas e resultado do exercício", icon: FileText },
        { title: "Faturamento por Serviço", desc: "Análise de receitas por tipo de serviço", icon: BarChart },
        { title: "Lucratividade por Cliente", desc: "Margem de lucro por cliente", icon: DollarSign },
        { title: "Ranking de Clientes", desc: "Maiores clientes por faturamento", icon: Building },
        { title: "Relatório de Impostos", desc: "Impostos pagos e a pagar", icon: FileText },
        { title: "Análise de Margem", desc: "Margem bruta e líquida por período", icon: BarChart },
      ].map((report, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
          <div className="w-12 h-12 bg-[#0F2C4A]/10 text-[#0F2C4A] rounded-lg flex items-center justify-center mb-4">
            <report.icon size={24} />
          </div>
          <h3 className="text-lg font-bold text-slate-800 mb-2">{report.title}</h3>
          <p className="text-sm text-slate-500 mb-4">{report.desc}</p>
          <button className="w-full px-4 py-2 bg-[#0F2C4A] text-white rounded-lg text-sm font-medium hover:bg-[#0A1F35]">
            Gerar Relatório
          </button>
        </div>
      ))}
    </div>
  </div>
);

const ConfiguracoesSection = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold text-[#0F2C4A] flex items-center gap-2">
        <Settings /> Configurações
      </h1>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-bold text-[#0F2C4A] mb-4 flex items-center gap-2">
          <Building size={20} /> Dados da Empresa
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Razão Social</label>
            <input type="text" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" value="HCO Healthcare Occupational" readOnly />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">CNPJ</label>
            <input type="text" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" value="64.023.730/0001-90" readOnly />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">PIX (CNPJ)</label>
            <input type="text" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" value="64.023.730/0001-90" readOnly />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Banco</label>
            <input type="text" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" value="C6 Bank S.A." readOnly />
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-[#0F2C4A] mb-4 flex items-center gap-2">
            <User size={20} /> Usuários e Permissões
          </h3>
          <p className="text-sm text-slate-500 mb-4">Gerencie usuários com acesso ao sistema</p>
          <button className="px-4 py-2 bg-[#0F2C4A] text-white rounded-lg text-sm font-medium hover:bg-[#0A1F35] flex items-center gap-2">
            <Plus size={16} /> Adicionar Usuário
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-[#0F2C4A] mb-4 flex items-center gap-2">
            <Database size={20} /> Backup de Dados
          </h3>
          <p className="text-sm text-slate-500 mb-4">Última cópia: <strong>Nunca</strong></p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 flex items-center gap-2">
              <ArrowRightLeft className="rotate-90" size={16} /> Fazer Backup
            </button>
            <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg text-sm font-medium hover:bg-yellow-700 flex items-center gap-2">
              <ArrowRightLeft className="-rotate-90" size={16} /> Restaurar
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold text-[#0F2C4A] mb-4 flex items-center gap-2">
            <Trash2 size={20} /> Reset Total do Sistema
          </h3>
          <p className="text-sm text-red-600 font-bold mb-2">⚠️ ATENÇÃO: Esta ação é IRREVERSÍVEL!</p>
          <p className="text-sm text-slate-500 mb-4">Apaga TODOS os dados do sistema (propostas, contas, histórico, clientes).</p>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 flex items-center gap-2">
            <AlertCircle size={16} /> Zerar Todos os Dados
          </button>
        </div>
      </div>
    </div>
  </div>
);