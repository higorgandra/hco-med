import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Search, FileText, Activity, AlertTriangle, 
  CheckCircle, Users, Building, Phone, Mail, MapPin, 
  ChevronRight, ArrowRight, Shield, Stethoscope, Eye, 
  Ear, Wind, Beaker, Truck, ClipboardList, BookOpen, ChevronDown,
  HardHat, TrendingUp, Handshake, Facebook, Instagram, Linkedin, Youtube, Copyright,
  Gavel, FileCheck, Flame, Zap, Package, Settings, Thermometer, User, Minimize2, ArrowUpCircle, Clock, Send,
  CalendarCheck, FileText as FileTextIcon, Heart, Activity as ActivityIcon, Eye as EyeIcon, Wind as WindIcon, Truck as TruckIcon, FilePlus, Monitor, Weight, UserCheck as UserCheckIcon, ShieldAlert, Brain, Smile, Users as UsersIcon, ShieldCheck, AlertOctagon,
  Award, RefreshCw, Smartphone, HandCoins, Building as BuildingIcon, Info, MapPin as MapPinIcon, User as UserIcon, Lock, CheckCircle as CheckCircleIcon, Calculator, ExternalLink, BarChart, FolderOpen, GraduationCap, Lightbulb, Percent
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('exames');
  const [activeGestaoTab, setActiveGestaoTab] = useState('programas');
  const [openAccordion, setOpenAccordion] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const linkFont = document.createElement('link');
    linkFont.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap";
    linkFont.rel = "stylesheet";
    document.head.appendChild(linkFont);

    const linkIcons = document.createElement('link');
    linkIcons.href = "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css";
    linkIcons.rel = "stylesheet";
    document.head.appendChild(linkIcons);

    return () => {
      document.head.removeChild(linkFont);
      document.head.removeChild(linkIcons);
    };
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    
    if (id === 'home') {
      setCurrentPage('home');
      window.scrollTo(0, 0);
      return;
    }

    if (id === 'orientacoes') {
      setCurrentPage('orientacoes');
      setActiveTab('exames');
      window.scrollTo(0, 0);
      return;
    }

    if (id === 'servicos') {
      setCurrentPage('servicos');
      window.scrollTo(0, 0);
      return;
    }

    if (id === 'contato') {
      setCurrentPage('contato');
      window.scrollTo(0, 0);
      return;
    }

    if (id === 'cadastro') {
      setCurrentPage('cadastro');
      window.scrollTo(0, 0);
      return;
    }

    if (id === 'socialegestaosst') {
      setCurrentPage('socialegestaosst');
      window.scrollTo(0, 0);
      return;
    }

    if (id === 'normativas') {
      setCurrentPage('normativas');
      window.scrollTo(0, 0);
      return;
    }

    if (id === 'politicadeprivacidade') {
      setCurrentPage('politicadeprivacidade');
      window.scrollTo(0, 0);
      return;
    }

    if (id === 'gestao') {
      setCurrentPage('gestao');
      setActiveGestaoTab('programas');
      window.scrollTo(0, 0);
      return;
    }

    if (id === 'sitemap') {
      setCurrentPage('sitemap');
      window.scrollTo(0, 0);
      return;
    }

    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700" style={{ fontFamily: '"Inter", sans-serif' }}>
      
      {/* --- HEADER --- */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="bg-white text-[#0F2C4A] text-xs py-1 border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center gap-3 font-medium">
              <button onClick={() => scrollToSection('politicadeprivacidade')} className="hover:text-[#0F2C4A] transition-colors">Política de Privacidade</button>
            </div>
            <div className="hidden md:flex items-center gap-4 font-medium">
              <a href="https://wa.me/5571983156060" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#0F2C4A] transition-colors"><Phone size={12} className="text-[#0F2C4A]" /> (71) 98315-6060</a>
              <span className="flex items-center gap-1"><MapPin size={12} className="text-[#0F2C4A]" /> Av. Paulista, 1000</span>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="5473 6038 504 506" 
              className="h-12 w-auto"
              style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }}
            >
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0F2C4A" />
                  <stop offset="100%" stopColor="#527088" />
                </linearGradient>
              </defs>
              <rect fill="url(#logoGradient)" x="5473" y="6038" width="504" height="506" rx="59" ry="59"/>
              <polygon fill="#FEFEFE" points="5718,6123 5663,6123 5663,6228 5548,6228 5548,6283 5663,6283 5718,6283 5718,6228 "/>
              <polygon fill="#FEFEFE" points="5733,6123 5788,6123 5788,6228 5903,6228 5903,6283 5788,6283 5733,6283 5733,6228 "/>
              <polygon fill="#FEFEFE" points="5733,6458 5788,6458 5788,6353 5903,6353 5903,6298 5788,6298 5733,6298 5733,6353 "/>
              <polygon fill="#FEFEFE" points="5718,6458 5663,6458 5663,6353 5548,6353 5548,6298 5663,6298 5718,6298 5718,6353 "/>
            </svg>
            <div className="flex items-center gap-2">
              <h1 className="text-4xl font-extrabold text-[#0F2C4A] leading-none">HCO</h1>
              <div className="flex flex-col text-[10px] font-bold text-[#A6A6A6] leading-tight tracking-wider">
                <span>MEDICINA</span>
                <span>E SEGURANÇA</span>
                <span>DO TRABALHO</span>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {[
              { label: 'Home', id: 'inicio' },
              { label: 'A Clínica', id: 'inicio' },
              { label: 'Nossos Serviços', id: 'servicos' },
              { label: 'Dicas e Orientações', id: 'orientacoes' },
              { label: 'Contato', id: 'contato' }
            ].map((item) => (
              <button 
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-[#0F2C4A] transition-colors uppercase text-xs font-bold tracking-wide flex items-center gap-1"
              >
                {item.label}
                {item.icon && <ChevronDown size={14} />}
              </button>
            ))}
            <a href="https://sistema.soc.com.br/WebSoc/" target="_blank" rel="noopener noreferrer" className="bg-[#0F2C4A] text-white px-5 py-2 rounded-full hover:bg-[#0A1F35] transition font-bold shadow-lg shadow-slate-300 flex items-center gap-2">
              <FileText size={18} />
              Exames
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
            <div className="flex flex-col p-4 gap-4">
              {[
                { label: 'Home', id: 'inicio' },
                { label: 'A Clínica', id: 'inicio' },
                { label: 'Nossos Serviços', id: 'servicos' },
                { label: 'Dicas e Orientações', id: 'orientacoes' },
                { label: 'Contato', id: 'contato' },
                { label: 'Exames', id: 'resultados' }
              ].map((item) => (
                <button 
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left font-semibold text-slate-600 hover:text-[#0F2C4A] py-2 border-b border-slate-50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {currentPage === 'home' && (
        <>
          {/* --- HERO SECTION --- */}
          <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-cover bg-center" style={{backgroundImage: 'url("https://i.postimg.cc/50Wg4vQJ/freepik-expand-40706.png")'}}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2C4A] to-[#527088] opacity-90"></div>
        {/* <img 
          src="https://i.postimg.cc/ZKYSYv6H/eng.png" 
          alt="Engenheiro de Segurança" 
          className="hidden lg:block absolute bottom-0 right-0 lg:right-10 xl:right-32 max-h-[90%] w-auto z-10"
        /> */}
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
              <button onClick={() => scrollToSection('normativas')} className="bg-[#0A7C15] text-white px-5 py-3 rounded-lg font-bold hover:bg-[#0b9e12] transition flex items-center gap-2 shadow-lg hover:shadow-xl">
                <ClipboardList size={20} /> PGR e PCMSO
              </button>
              <button onClick={() => scrollToSection('socialegestaosst')} className="bg-[#0A7C15] text-white border border-[#0EC117] px-5 py-3 rounded-lg font-bold hover:bg-[#0b9e12] transition flex items-center gap-2 shadow-lg hover:shadow-xl">
                <Shield size={20} /> Gestão eSocial
              </button>
              <button onClick={() => scrollToSection('contato')} className="bg-[#0A7C15] text-white border border-[#0EC117] px-5 py-3 rounded-lg font-bold hover:bg-[#0b9e12] transition flex items-center gap-2 shadow-lg hover:shadow-xl">
                <Users size={20} /> Treinamentos
              </button>
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

          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
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

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('contato')}
              className="inline-flex items-center gap-2 text-[#0F2C4A] font-bold hover:text-[#0A1F35] transition hover:underline underline-offset-4 uppercase tracking-wide text-sm"
            >
              Entre em contato conosco <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

        </>
      )}

      {/* --- PÁGINA DE ORIENTAÇÕES --- */}
      {currentPage === 'orientacoes' && (
        <div className="pt-36 pb-20 bg-slate-50 min-h-screen">
          <div className="max-w-6xl mx-auto px-4">
            <div className="w-full mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-extrabold text-[#0F2C4A]">Dicas e Orientações</h2>
                <p className="text-slate-600 mt-2">Orientações especializadas para promover saúde e segurança no ambiente de trabalho</p>
                <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mt-3">
                  <button onClick={() => scrollToSection('inicio')} className="hover:text-[#0F2C4A] transition-colors">Home</button>
                  <ChevronRight size={16} className="text-slate-400" />
                  <span className="font-semibold text-slate-700">Dicas e Orientações</span>
                </div>
              </div>
              
              {/* Tabs Navigation */}
              <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 md:gap-4 mb-8">
                {[
                  { id: 'exames', label: 'Exames', icon: FileTextIcon },
                  { id: 'ergonomia', label: 'Ergonomia', icon: User },
                  { id: 'prevencao', label: 'Prevenção', icon: Shield },
                  { id: 'mental', label: 'Saúde Mental', icon: Brain },
                  { id: 'seguranca', label: 'Segurança', icon: HardHat },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-center gap-2 px-3 py-2 md:px-6 md:py-3 rounded-full font-bold text-sm md:text-base whitespace-nowrap ${
                      activeTab === tab.id 
                        ? 'bg-[#0F2C4A] text-white shadow-lg' 
                        : 'bg-white text-slate-600 border border-slate-200'
                    }`}
                  >
                    <tab.icon size={18} />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="bg-slate-50 rounded-2xl">
                
                {/* Exames Content */}
                {activeTab === 'exames' && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {[
                      { icon: CalendarCheck, title: "Antes do Exame Admissional", desc: "Prepare-se adequadamente para iniciar sua jornada profissional com saúde.", list: ["Tenha uma boa noite de sono (mínimo 7-8 horas)", "Evite bebidas alcoólicas nas 48h anteriores", "Leve documentos: RG, CPF, comprovante de residência", "Informe medicamentos em uso contínuo", "Jejum de 8-12h para exames laboratoriais", "Leve óculos ou aparelho auditivo se usar"] },
                      { icon: Beaker, title: "Exames Laboratoriais", desc: "Cuidados importantes para garantir resultados precisos.", list: ["Jejum de 8-12h (água é permitida)", "Evite atividade física intensa 24h antes", "Não fume pelo menos 2h antes", "Informe uso de medicamentos ao técnico", "Mulheres: informe se está menstruada", "Hidrate-se bem no dia anterior"] },
                      { icon: Heart, title: "Exame Clínico Ocupacional", desc: "O que esperar durante a consulta com o médico do trabalho.", list: ["Chegue 15 minutos antes do horário", "Vista roupas confortáveis e fáceis de remover", "Relate histórico de doenças e cirurgias", "Informe alergias medicamentosas", "Mencione queixas ou sintomas atuais", "Seja honesto sobre hábitos (fumo, álcool)"] },
                      { icon: Ear, title: "Audiometria", desc: "Prepare-se para o exame de avaliação auditiva.", list: ["Repouso auditivo de 14h (sem ruído intenso)", "Evite fones de ouvido no dia anterior", "Não use protetores auriculares antes", "Remova brincos grandes", "Informe histórico de perda auditiva", "Relate exposição a ruídos ocupacionais"] },
                      { icon: WindIcon, title: "Espirometria", desc: "Exame de função pulmonar - como se preparar.", list: ["Evite refeições pesadas 2h antes", "Não fume pelo menos 2h antes", "Suspenda broncodilatadores conforme orientação", "Use roupas que não apertem o tórax", "Informe doenças respiratórias prévias", "Esteja descansado para o exame"] },
                      { icon: EyeIcon, title: "Acuidade Visual", desc: "Teste de visão - orientações importantes.", list: ["Leve óculos ou lentes de contato se usar", "Durma bem na noite anterior", "Evite telas por 1h antes do exame", "Não esfregue os olhos antes do teste", "Informe cirurgias oculares anteriores", "Relate dificuldades visuais percebidas"] },
                      { icon: ActivityIcon, title: "Raio-X de Tórax", desc: "Exame de imagem - preparação necessária.", list: ["Não é necessário jejum", "Remova objetos metálicos (colares, piercings)", "Informe se está ou pode estar grávida", "Use roupa sem botões ou zíperes metálicos", "Relate histórico de doenças pulmonares", "Siga as orientações do técnico"] },
                      { icon: TruckIcon, title: "Exame Toxicológico (Motoristas)", desc: "Obrigatório para motoristas profissionais.", list: ["Necessário para admissão e renovação de CNH", "Detecta uso de substâncias psicoativas", "Janela de detecção: até 90 dias", "Cabelo: mínimo 3cm de comprimento", "Se careca: pelos do corpo podem ser usados", "Resultado em até 15 dias úteis"] },
                      { icon: Thermometer, title: "Cultura de Orofaringe", desc: "Orientações para coleta de secreção.", list: ["O colaborador não deve se alimentar e nem escovar os dentes no dia do atendimento"] },
                      { icon: Brain, title: "Eletroencefalograma", desc: "Orientações para o exame neurológico.", list: ["Não utilizar creme ou gel de cabelo no dia do exame"] },
                      { icon: Beaker, title: "Glicemia", desc: "Jejum necessário para medição de glicose.", list: ["Jejum de no mínimo 08 horas"] },
                      { icon: Search, title: "Micológico de Unhas", desc: "Cuidados prévios com as unhas.", list: ["Unhas sem esmaltar e sem cortar por 48 horas"] },
                      { icon: Activity, title: "PSA", desc: "Preparação para o exame de próstata.", list: ["No mínimo 03 dias de abstinência sexual"] },
                      { icon: Beaker, title: "Sumário de Urina", desc: "Procedimento correto para coleta.", list: ["Descartar o primeiro jato e colocar no coletor o segundo jato", "Obs: Se a colaboradora estiver no período menstrual não trazer amostra"] },
                      { icon: FilePlus, title: "Após os Exames", desc: "O que fazer depois de realizar os exames ocupacionais.", list: ["Aguarde contato sobre os resultados", "ASO é emitido após análise médica", "Guarde cópia do ASO por 20 anos", "Em caso de alterações, siga orientações médicas", "Compareça a retornos solicitados", "Mantenha informações de contato atualizadas"] }
                    ].map((card, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-slate-100">
                        <div className="w-12 h-12 bg-[#0F2C4A]/10 rounded-lg flex items-center justify-center text-[#0F2C4A] mb-4">
                          <card.icon size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-[#0F2C4A] mb-2">{card.title}</h3>
                        <p className="text-slate-600 text-sm mb-4">{card.desc}</p>
                        <ul className="space-y-2">
                          {card.list.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                              <div className="w-1.5 h-1.5 bg-[#0F2C4A] rounded-full mt-1.5 flex-shrink-0"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Ergonomia Content */}
                {activeTab === 'ergonomia' && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {[
                      { icon: Monitor, title: "Postura no Computador", desc: "Mantenha a tela na altura dos olhos, ombros relaxados e cotovelos a 90°. Faça pausas a cada 50 minutos.", list: ["Monitor à altura dos olhos", "Pés apoiados no chão", "Cadeira com suporte lombar", "Teclado e mouse próximos"] },
                      { icon: Weight, title: "Levantamento de Peso", desc: "Técnicas corretas para evitar lesões na coluna ao manusear cargas.", list: ["Dobre os joelhos, não a coluna", "Mantenha a carga próxima ao corpo", "Não torça o tronco", "Peça ajuda para cargas pesadas"] },
                      { icon: UserCheckIcon, title: "Pausas e Alongamento", desc: "Exercícios simples para realizar durante o expediente.", list: ["Ginástica laboral diária", "Alongamento de pescoço e ombros", "Movimentação a cada hora", "Hidratação constante"] }
                    ].map((card, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-slate-100">
                        <div className="w-12 h-12 bg-[#0F2C4A]/10 rounded-lg flex items-center justify-center text-[#0F2C4A] mb-4">
                          <card.icon size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-[#0F2C4A] mb-2">{card.title}</h3>
                        <p className="text-slate-600 text-sm mb-4">{card.desc}</p>
                        <ul className="space-y-2">
                          {card.list.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                              <div className="w-1.5 h-1.5 bg-[#0F2C4A] rounded-full mt-1.5 flex-shrink-0"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Prevenção Content */}
                {activeTab === 'prevencao' && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {[
                      { icon: ShieldAlert, title: "Higiene no Trabalho", desc: "Práticas essenciais para prevenir doenças ocupacionais.", list: ["Lave as mãos regularmente", "Use EPIs adequados", "Mantenha o ambiente limpo", "Ventilação adequada"] },
                      { icon: WindIcon, title: "Saúde Respiratória", desc: "Proteção contra agentes nocivos no ambiente de trabalho.", list: ["Use máscaras quando necessário", "Evite exposição a poeiras", "Ambientes bem ventilados", "Exames periódicos"] },
                      { icon: Heart, title: "Prevenção Cardiovascular", desc: "Cuide da saúde do coração no ambiente corporativo.", list: ["Controle do estresse", "Alimentação saudável", "Atividade física regular", "Check-ups periódicos"] }
                    ].map((card, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-slate-100">
                        <div className="w-12 h-12 bg-[#0F2C4A]/10 rounded-lg flex items-center justify-center text-[#0F2C4A] mb-4">
                          <card.icon size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-[#0F2C4A] mb-2">{card.title}</h3>
                        <p className="text-slate-600 text-sm mb-4">{card.desc}</p>
                        <ul className="space-y-2">
                          {card.list.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                              <div className="w-1.5 h-1.5 bg-[#0F2C4A] rounded-full mt-1.5 flex-shrink-0"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Saúde Mental Content */}
                {activeTab === 'mental' && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {[
                      { icon: Brain, title: "Equilíbrio Trabalho-Vida", desc: "Estratégias para manter a saúde mental em dia.", list: ["Defina limites saudáveis", "Reserve tempo para lazer", "Pratique hobbies", "Valorize o descanso"] },
                      { icon: Smile, title: "Gestão de Estresse", desc: "Técnicas para lidar com pressões do dia a dia.", list: ["Respiração profunda", "Meditação e mindfulness", "Organização de tarefas", "Busque apoio quando necessário"] },
                      { icon: UsersIcon, title: "Relacionamento Interpessoal", desc: "Melhore o ambiente de trabalho com boa comunicação.", list: ["Comunicação assertiva", "Empatia com colegas", "Resolução de conflitos", "Trabalho em equipe"] }
                    ].map((card, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-slate-100">
                        <div className="w-12 h-12 bg-[#0F2C4A]/10 rounded-lg flex items-center justify-center text-[#0F2C4A] mb-4">
                          <card.icon size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-[#0F2C4A] mb-2">{card.title}</h3>
                        <p className="text-slate-600 text-sm mb-4">{card.desc}</p>
                        <ul className="space-y-2">
                          {card.list.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                              <div className="w-1.5 h-1.5 bg-[#0F2C4A] rounded-full mt-1.5 flex-shrink-0"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Segurança Content */}
                {activeTab === 'seguranca' && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {[
                      { icon: ShieldCheck, title: "Uso de EPIs", desc: "Equipamentos de proteção individual adequados.", list: ["Verifique o estado dos EPIs", "Use conforme orientação", "Não compartilhe EPIs", "Reporte danos imediatamente"] },
                      { icon: AlertOctagon, title: "Prevenção de Acidentes", desc: "Mantenha o ambiente seguro para todos.", list: ["Conheça as rotas de fuga", "Sinalize áreas de risco", "Mantenha corredores livres", "Participe de treinamentos"] },
                      { icon: Zap, title: "Segurança Elétrica", desc: "Cuidados com instalações e equipamentos elétricos.", list: ["Não sobrecarregue tomadas", "Verifique cabos danificados", "Desligue equipamentos ao sair", "Chame profissionais qualificados"] }
                    ].map((card, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-slate-100">
                        <div className="w-12 h-12 bg-[#0F2C4A]/10 rounded-lg flex items-center justify-center text-[#0F2C4A] mb-4">
                          <card.icon size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-[#0F2C4A] mb-2">{card.title}</h3>
                        <p className="text-slate-600 text-sm mb-4">{card.desc}</p>
                        <ul className="space-y-2">
                          {card.list.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-500">
                              <div className="w-1.5 h-1.5 bg-[#0F2C4A] rounded-full mt-1.5 flex-shrink-0"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- PÁGINA DE CONTATO --- */}
      {currentPage === 'contato' && (
        <div className="pt-36 pb-20 bg-slate-50 min-h-screen">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-extrabold text-[#0F2C4A] mb-4">Entre em Contato</h2>
              <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-6">
                <button onClick={() => scrollToSection('home')} className="hover:text-[#0F2C4A] transition-colors">Home</button>
                <ChevronRight size={16} className="text-slate-400" />
                <span className="font-semibold text-slate-700">Contato</span>
              </div>
              <p className="text-slate-600 mt-2">Nossa equipe está pronta para atender sua empresa</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#0F2C4A]/10 p-3 rounded-lg text-[#0F2C4A]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">Telefone</h4>
                    <p className="text-slate-600">(71) 98315-6060</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#0F2C4A]/10 p-3 rounded-lg text-[#0F2C4A]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">E-mail</h4>
                    <p className="text-slate-600">contato@hco.com.br</p>
                    <p className="text-slate-600">atendimento@hco.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#0F2C4A]/10 p-3 rounded-lg text-[#0F2C4A]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">Endereço</h4>
                    <p className="text-slate-600">Av. Paulista, 1000</p>
                    <p className="text-slate-600">São Paulo - SP, 01310-100</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#0F2C4A]/10 p-3 rounded-lg text-[#0F2C4A]">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-1">Horário de Atendimento</h4>
                    <p className="text-slate-600">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-slate-600">Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="nome" className="text-sm font-bold text-slate-700">Nome Completo *</label>
                      <input type="text" id="nome" name="nome" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-white" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="empresa" className="text-sm font-bold text-slate-700">Empresa *</label>
                      <input type="text" id="empresa" name="empresa" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-white" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-slate-700">E-mail *</label>
                      <input type="email" id="email" name="email" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-white" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="telefone" className="text-sm font-bold text-slate-700">Telefone *</label>
                      <input type="tel" id="telefone" name="telefone" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-white" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="assunto" className="text-sm font-bold text-slate-700">Assunto *</label>
                    <select id="assunto" name="assunto" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition text-slate-600 bg-white" required>
                      <option value="">Selecione um assunto</option>
                      <option value="exames">Exames Ocupacionais</option>
                      <option value="programas">Programas de SST</option>
                      <option value="treinamentos">Treinamentos</option>
                      <option value="consultoria">Consultoria</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="mensagem" className="text-sm font-bold text-slate-700">Mensagem *</label>
                    <textarea id="mensagem" name="mensagem" rows="5" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-white" required></textarea>
                  </div>

                  <button type="submit" className="w-full bg-[#0F2C4A] text-white font-bold py-4 rounded-lg hover:bg-[#0A1F35] transition shadow-lg flex items-center justify-center gap-2">
                    <Send size={20} /> Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
            </div>
          </div>
        </div>
      )}

      {/* --- PÁGINA DE CADASTRO --- */}
      {currentPage === 'cadastro' && (
        <div className="pt-36 pb-20 bg-slate-50 min-h-screen">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-extrabold text-[#0F2C4A] mb-4">Cadastre sua Empresa</h2>
              <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-6">
                <button onClick={() => scrollToSection('home')} className="hover:text-[#0F2C4A] transition-colors">Home</button>
                <ChevronRight size={16} className="text-slate-400" />
                <span className="font-semibold text-slate-700">Cadastro</span>
              </div>
              <p className="text-slate-600 mt-2">Junte-se às empresas que confiam na HCO para gestão de Saúde Ocupacional</p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { icon: Award, title: "Atendimento Especializado", desc: "Equipe médica qualificada" },
                { icon: RefreshCw, title: "eSocial Automatizado", desc: "Envio automático de eventos" },
                { icon: Smartphone, title: "Plataforma Digital", desc: "Gestão completa online" },
                { icon: HandCoins, title: "Planos Flexíveis", desc: "Soluções para todos os portes" }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm text-center border border-slate-100 hover:shadow-md transition">
                  <div className="w-12 h-12 bg-[#0F2C4A]/10 rounded-full flex items-center justify-center text-[#0F2C4A] mx-auto mb-4">
                    <benefit.icon size={24} />
                  </div>
                  <h4 className="font-bold text-[#0F2C4A] mb-1">{benefit.title}</h4>
                  <p className="text-sm text-slate-600">{benefit.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Formulário de Cadastro */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="bg-[#0F2C4A]/10 p-2 rounded-lg text-[#0F2C4A]">
                    <BuildingIcon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F2C4A]">Cadastro da Empresa</h3>
                    <p className="text-sm text-slate-500">Preencha os dados para criar sua conta</p>
                  </div>
                </div>
                
                <form className="space-y-5">
                  <div className="flex items-center gap-2 text-[#0F2C4A] font-bold text-sm uppercase tracking-wide mb-4">
                    <Info size={16} /> Dados da Empresa
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="razaoSocial" className="block text-sm font-bold text-slate-700 mb-1">Razão Social *</label>
                      <input type="text" id="razaoSocial" name="razaoSocial" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-slate-50 focus:bg-white" required />
                    </div>
                    
                    <div>
                      <label htmlFor="nomeFantasia" className="block text-sm font-bold text-slate-700 mb-1">Nome Fantasia *</label>
                      <input type="text" id="nomeFantasia" name="nomeFantasia" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-slate-50 focus:bg-white" required />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cnpj" className="block text-sm font-bold text-slate-700 mb-1">CNPJ *</label>
                        <input type="text" id="cnpj" name="cnpj" placeholder="00.000.000/0000-00" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-slate-50 focus:bg-white" required maxLength="18" />
                      </div>
                      <div>
                        <label htmlFor="inscricaoEstadual" className="block text-sm font-bold text-slate-700 mb-1">Inscrição Estadual</label>
                        <input type="text" id="inscricaoEstadual" name="inscricaoEstadual" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-slate-50 focus:bg-white" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="setor" className="block text-sm font-bold text-slate-700 mb-1">Setor de Atividade *</label>
                        <select id="setor" name="setor" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-slate-50 focus:bg-white text-slate-600" required>
                          <option value="">Selecione...</option>
                          <option value="industria">Indústria</option>
                          <option value="comercio">Comércio</option>
                          <option value="servicos">Serviços</option>
                          <option value="construcao">Construção Civil</option>
                          <option value="saude">Saúde</option>
                          <option value="educacao">Educação</option>
                          <option value="tecnologia">Tecnologia</option>
                          <option value="transportes">Transportes</option>
                          <option value="outros">Outros</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="numFuncionarios" className="block text-sm font-bold text-slate-700 mb-1">Nº Funcionários *</label>
                        <select id="numFuncionarios" name="numFuncionarios" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-slate-50 focus:bg-white text-slate-600" required>
                          <option value="">Selecione...</option>
                          <option value="1-10">1 a 10</option>
                          <option value="11-50">11 a 50</option>
                          <option value="51-100">51 a 100</option>
                          <option value="101-500">101 a 500</option>
                          <option value="500+">Mais de 500</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-[#0F2C4A] font-bold text-sm uppercase tracking-wide mt-8 mb-4">
                    <MapPinIcon size={16} /> Endereço
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-1/3">
                        <label htmlFor="cep" className="block text-sm font-bold text-slate-700 mb-1">CEP *</label>
                        <input type="text" id="cep" name="cep" placeholder="00000-000" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-slate-50 focus:bg-white" required maxLength="9" />
                      </div>
                      <div className="w-2/3">
                        <label htmlFor="cidade" className="block text-sm font-bold text-slate-700 mb-1">Cidade *</label>
                        <input type="text" id="cidade" name="cidade" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-slate-50 focus:bg-white" required />
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-3/4">
                        <label htmlFor="endereco" className="block text-sm font-bold text-slate-700 mb-1">Endereço Completo *</label>
                        <input type="text" id="endereco" name="endereco" placeholder="Rua, número, complemento" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-slate-50 focus:bg-white" required />
                      </div>
                      <div className="w-1/4">
                        <label htmlFor="estado" className="block text-sm font-bold text-slate-700 mb-1">UF *</label>
                        <input type="text" id="estado" name="estado" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-slate-50 focus:bg-white" required maxLength="2" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-[#0F2C4A] font-bold text-sm uppercase tracking-wide mt-8 mb-4">
                    <UserIcon size={16} /> Responsável
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="nomeResponsavel" className="block text-sm font-bold text-slate-700 mb-1">Nome Completo *</label>
                      <input type="text" id="nomeResponsavel" name="nomeResponsavel" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-slate-50 focus:bg-white" required />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cargoResponsavel" className="block text-sm font-bold text-slate-700 mb-1">Cargo *</label>
                        <input type="text" id="cargoResponsavel" name="cargoResponsavel" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-slate-50 focus:bg-white" required />
                      </div>
                      <div>
                        <label htmlFor="cpfResponsavel" className="block text-sm font-bold text-slate-700 mb-1">CPF *</label>
                        <input type="text" id="cpfResponsavel" name="cpfResponsavel" placeholder="000.000.000-00" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-slate-50 focus:bg-white" required maxLength="14" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="emailResponsavel" className="block text-sm font-bold text-slate-700 mb-1">E-mail *</label>
                        <input type="email" id="emailResponsavel" name="emailResponsavel" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-slate-50 focus:bg-white" required />
                      </div>
                      <div>
                        <label htmlFor="telefoneResponsavel" className="block text-sm font-bold text-slate-700 mb-1">Telefone *</label>
                        <input type="tel" id="telefoneResponsavel" name="telefoneResponsavel" placeholder="(00) 00000-0000" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-slate-50 focus:bg-white" required />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-[#0F2C4A] font-bold text-sm uppercase tracking-wide mt-8 mb-4">
                    <Lock size={16} /> Acesso à Plataforma
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="senhaEmpresa" className="block text-sm font-bold text-slate-700 mb-1">Senha *</label>
                      <input type="password" id="senhaEmpresa" name="senhaEmpresa" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-slate-50 focus:bg-white" required minLength="6" />
                      <small className="text-xs text-slate-500">Mínimo 6 caracteres</small>
                    </div>
                    <div>
                      <label htmlFor="confirmarSenha" className="block text-sm font-bold text-slate-700 mb-1">Confirmar Senha *</label>
                      <input type="password" id="confirmarSenha" name="confirmarSenha" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-slate-50 focus:bg-white" required minLength="6" />
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <label className="flex items-start gap-2 text-sm text-slate-600 cursor-pointer">
                      <input type="checkbox" id="aceitarTermos" name="aceitarTermos" className="mt-1" required />
                      <span>Aceito os <a href="#termos" className="text-[#0F2C4A] hover:underline">Termos de Uso</a> e <a href="#privacidade" className="text-[#0F2C4A] hover:underline">Política de Privacidade</a></span>
                    </label>
                  </div>
                  
                  <button type="submit" className="w-full bg-[#0F2C4A] text-white font-bold py-4 rounded-lg hover:bg-[#0A1F35] transition shadow-lg flex items-center justify-center gap-2 mt-6">
                    <CheckCircleIcon size={20} /> Cadastrar Empresa
                  </button>
                </form>
              </div>
              
              {/* Formulário de Orçamento */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 h-fit">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="bg-[#0F2C4A]/10 p-2 rounded-lg text-[#0F2C4A]">
                    <Calculator size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F2C4A]">Solicitar Orçamento</h3>
                    <p className="text-sm text-slate-500">Receba uma proposta personalizada</p>
                  </div>
                </div>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="empresaOrcamento" className="block text-sm font-bold text-slate-700 mb-1">Nome da Empresa *</label>
                    <input type="text" id="empresaOrcamento" name="empresaOrcamento" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-slate-50 focus:bg-white" required />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cnpjOrcamento" className="block text-sm font-bold text-slate-700 mb-1">CNPJ</label>
                      <input type="text" id="cnpjOrcamento" name="cnpjOrcamento" placeholder="00.000.000/0000-00" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-slate-50 focus:bg-white" maxLength="18" />
                    </div>
                    <div>
                      <label htmlFor="funcOrcamento" className="block text-sm font-bold text-slate-700 mb-1">Nº Funcionários *</label>
                      <select id="funcOrcamento" name="funcOrcamento" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-slate-50 focus:bg-white text-slate-600" required>
                        <option value="">Selecione...</option>
                        <option value="1-10">1 a 10</option>
                        <option value="11-50">11 a 50</option>
                        <option value="51-100">51 a 100</option>
                        <option value="101-500">101 a 500</option>
                        <option value="500+">Mais de 500</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="contatoOrcamento" className="block text-sm font-bold text-slate-700 mb-1">Nome para Contato *</label>
                    <input type="text" id="contatoOrcamento" name="contatoOrcamento" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-slate-50 focus:bg-white" required />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="emailOrcamento" className="block text-sm font-bold text-slate-700 mb-1">E-mail *</label>
                      <input type="email" id="emailOrcamento" name="emailOrcamento" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-slate-50 focus:bg-white" required />
                    </div>
                    <div>
                      <label htmlFor="telefoneOrcamento" className="block text-sm font-bold text-slate-700 mb-1">Telefone *</label>
                      <input type="tel" id="telefoneOrcamento" name="telefoneOrcamento" placeholder="(00) 00000-0000" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-slate-50 focus:bg-white" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Serviços de Interesse * (selecione um ou mais)</label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { val: "exames", label: "Exames Ocupacionais" },
                        { val: "pcmso", label: "PCMSO" },
                        { val: "pgr", label: "PGR" },
                        { val: "ltcat", label: "LTCAT" },
                        { val: "esocial", label: "eSocial" },
                        { val: "treinamentos", label: "Treinamentos" },
                        { val: "cipa", label: "CIPA" },
                        { val: "consultoria", label: "Consultoria" }
                      ].map((service) => (
                        <label key={service.val} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:bg-slate-50 p-1 rounded">
                          <input type="checkbox" name="servicos" value={service.val} className="rounded text-[#0F2C4A] focus:ring-[#0F2C4A]" />
                          <span>{service.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="mensagemOrcamento" className="block text-sm font-bold text-slate-700 mb-1">Mensagem / Detalhes</label>
                    <textarea id="mensagemOrcamento" name="mensagemOrcamento" rows="4" placeholder="Descreva suas necessidades específicas..." className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-slate-50 focus:bg-white"></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="urgenciaOrcamento" className="block text-sm font-bold text-slate-700 mb-1">Urgência *</label>
                    <select id="urgenciaOrcamento" name="urgenciaOrcamento" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-slate-50 focus:bg-white text-slate-600" required>
                      <option value="">Selecione...</option>
                      <option value="imediato">Imediato (em até 24h)</option>
                      <option value="urgente">Urgente (esta semana)</option>
                      <option value="normal">Normal (até 15 dias)</option>
                      <option value="planejamento">Planejamento (mais de 30 dias)</option>
                    </select>
                  </div>
                  
                  <button type="submit" className="w-full bg-[#0F2C4A] text-white font-bold py-4 rounded-lg hover:bg-[#0A1F35] transition shadow-lg flex items-center justify-center gap-2 mt-4">
                    <Send size={20} /> Solicitar Orçamento
                  </button>
                  
                  <p className="text-xs text-center text-slate-500 mt-2 flex items-center justify-center gap-1">
                    <Info size={12} /> Retornaremos em até 24 horas úteis com uma proposta personalizada.
                  </p>
                </form>
              </div>
              
            </div>
            </div>
          </div>
        </div>
      )}

      {/* --- PÁGINA ESOCIAL E GESTÃO SST --- */}
      {currentPage === 'socialegestaosst' && (
        <div className="pt-36 pb-20 bg-slate-50 min-h-screen">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            
            <div className="mb-16 text-center">
              <span className="text-[#0F2C4A] font-bold tracking-wider text-sm block mb-2">OBRIGATORIEDADE</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F2C4A] mb-4">eSocial e Gestão SST</h2>
              <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-6">
                <button onClick={() => scrollToSection('home')} className="hover:text-[#0F2C4A] transition-colors">Home</button>
                <ChevronRight size={16} className="text-slate-400" />
                <span className="font-semibold text-slate-700">eSocial e Gestão SST</span>
              </div>
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
                {[
                  { code: "S-2210", title: "Comunicação de Acidente de Trabalho (CAT)", prazo: "Até o 1º dia útil seguinte ao acidente", icon: AlertTriangle, color: "text-red-600", bg: "bg-red-50" },
                  { code: "S-2220", title: "Monitoramento da Saúde (ASO)", prazo: "Até o dia 15 do mês seguinte ao exame", icon: Stethoscope, color: "text-[#0F2C4A]", bg: "bg-[#0F2C4A]/10" },
                  { code: "S-2240", title: "Condições Ambientais do Trabalho", prazo: "Até o dia 15 do mês seguinte à admissão", icon: Activity, color: "text-orange-600", bg: "bg-orange-50" },
                  { code: "S-2221", title: "Exames Toxicológicos (Motoristas)", prazo: "Até o dia 15 do mês seguinte ao exame", icon: Truck, color: "text-purple-600", bg: "bg-purple-50" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-6 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition bg-white">
                    <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <item.icon size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${item.bg} ${item.color}`}>{item.code}</span>
                        <h4 className="font-bold text-slate-800">{item.title}</h4>
                      </div>
                      <p className="text-sm text-slate-500 mb-2"><span className="font-semibold">Prazo:</span> {item.prazo}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Como a HCO Ajuda?</h3>
                <ul className="space-y-4">
                  {[
                    "Garantia de envio correto de todos os eventos XML.",
                    "Sistema integrado que automatiza o processo.",
                    "Monitoramento em tempo real de pendências.",
                    "Equipe técnica especializada em medicina e engenharia.",
                    "Auditoria de dados antes do envio ao Governo."
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-700">{text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h4 className="font-bold text-slate-800 mb-4">Precisa regularizar sua empresa?</h4>
                  <button onClick={() => scrollToSection('cadastro')} className="w-full bg-[#0F2C4A] text-white font-bold py-3 rounded-lg hover:bg-[#0A1F35] transition flex items-center justify-center gap-2">
                    Solicitar Diagnóstico Gratuito
                  </button>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      )}

      {/* --- PÁGINA DE NORMATIVAS --- */}
      {currentPage === 'normativas' && (
        <div className="pt-36 pb-20 bg-slate-50 min-h-screen">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-extrabold text-[#0F2C4A] mb-4">Normativas Regulamentadoras</h2>
              <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-6">
                <button onClick={() => scrollToSection('home')} className="hover:text-[#0F2C4A] transition-colors">Home</button>
                <ChevronRight size={16} className="text-slate-400" />
                <span className="font-semibold text-slate-700">Normativas</span>
              </div>
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
      )}

      {/* --- PÁGINA DE SERVIÇOS --- */}
      {currentPage === 'servicos' && (
        <div className="pt-36 pb-20 bg-slate-50 min-h-screen">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            
            {/* Header da Página */}
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-extrabold text-[#0F2C4A] mb-4">Nossos Serviços</h2>
              <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-6">
                <button onClick={() => scrollToSection('home')} className="hover:text-[#0F2C4A] transition-colors">Home</button>
                <ChevronRight size={16} className="text-slate-400" />
                <span className="font-semibold text-slate-700">Serviços</span>
              </div>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                A HCO oferece um portfólio completo de soluções em Medicina e Segurança do Trabalho, garantindo conformidade legal e promovendo a saúde dos seus colaboradores.
              </p>
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
      )}

      {/* --- PÁGINA DE POLÍTICA DE PRIVACIDADE --- */}
      {currentPage === 'politicadeprivacidade' && (
        <div className="pt-36 pb-20 bg-slate-50 min-h-screen">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-extrabold text-[#0F2C4A] mb-6">Política de Privacidade</h2>
                <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mt-3">
                  <button onClick={() => scrollToSection('home')} className="hover:text-[#0F2C4A] transition-colors">Home</button>
                  <ChevronRight size={16} className="text-slate-400" />
                  <span className="font-semibold text-slate-700">Política de Privacidade</span>
                </div>
              </div>
              
              <div className="space-y-6 text-slate-600 text-justify leading-relaxed">
                <p>A sua privacidade é importante para nós. É política da HCO respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site HCO, e outros sites que possuímos e operamos.</p>
                <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
                <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
                <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>
                <p>O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>
                <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>
                <p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.</p>
                
                <h3 className="text-xl font-bold text-[#0F2C4A] mt-8">Política de Cookies HCO</h3>
                <p><strong>O que são cookies?</strong><br/>
                Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência. Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou 'quebrar' certos elementos da funcionalidade do site.</p>
                
                <p><strong>Como usamos os cookies?</strong><br/>
                Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies se não tiver certeza se precisa ou não deles, caso sejam usados para fornecer um serviço que você usa.</p>
                
                <p><strong>Desativar cookies</strong><br/>
                Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a Ajuda do navegador para saber como fazer isso). Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de determinadas funcionalidades e recursos deste site. Portanto, é recomendável que você não desative os cookies.</p>
                
                <p><strong>Cookies que definimos</strong></p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Cookies relacionados à conta:</strong> Se você criar uma conta conosco, usaremos cookies para o gerenciamento do processo de inscrição e administração geral. Esses cookies geralmente serão excluídos quando você sair do sistema, porém, em alguns casos, eles poderão permanecer posteriormente para lembrar as preferências do seu site ao sair.</li>
                  <li><strong>Cookies relacionados ao login:</strong> Utilizamos cookies quando você está logado, para que possamos lembrar dessa ação. Isso evita que você precise fazer login sempre que visitar uma nova página. Esses cookies são normalmente removidos ou limpos quando você efetua logout para garantir que você possa acessar apenas a recursos e áreas restritas ao efetuar login.</li>
                  <li><strong>Cookies relacionados a boletins por e-mail:</strong> Este site oferece serviços de assinatura de boletim informativo ou e-mail e os cookies podem ser usados para lembrar se você já está registrado e se deve mostrar determinadas notificações válidas apenas para usuários inscritos / não inscritos.</li>
                  <li><strong>Cookies relacionados a pesquisas:</strong> Periodicamente, oferecemos pesquisas e questionários para fornecer informações interessantes, ferramentas úteis ou para entender nossa base de usuários com mais precisão. Essas pesquisas podem usar cookies para lembrar quem já participou numa pesquisa ou para fornecer resultados precisos após a alteração das páginas.</li>
                  <li><strong>Cookies relacionados a formulários:</strong> Quando você envia dados por meio de um formulário como os encontrados nas páginas de contacto ou nos formulários de comentários, os cookies podem ser configurados para lembrar os detalhes do usuário para correspondência futura.</li>
                  <li><strong>Cookies de preferências do site:</strong> Para proporcionar uma ótima experiência neste site, fornecemos a funcionalidade para definir suas preferências de como esse site é executado quando você o usa. Para lembrar suas preferências, precisamos definir cookies para que essas informações possam ser chamadas sempre que você interagir com uma página for afetada por suas preferências.</li>
                </ul>

                <h3 className="text-xl font-bold text-[#0F2C4A] mt-8">Cookies de Terceiros</h3>
                <p>Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar através deste site.</p>
                <p>Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis da Web, para nos ajudar a entender como você usa o site e como podemos melhorar sua experiência. Esses cookies podem rastrear itens como quanto tempo você gasta no site e as páginas visitadas, para que possamos continuar produzindo conteúdo atraente.</p>
                <p>Para mais informações sobre cookies do Google Analytics, consulte a página oficial do Google Analytics.</p>
                <p>As análises de terceiros são usadas para rastrear e medir o uso deste site, para que possamos continuar produzindo conteúdo atrativo. Esses cookies podem rastrear itens como o tempo que você passa no site ou as páginas visitadas, o que nos ajuda a entender como podemos melhorar o site para você. Periodicamente, testamos novos recursos e fazemos alterações subtis na maneira como o site se apresenta. Quando ainda estamos testando novos recursos, esses cookies podem ser usados para garantir que você receba uma experiência consistente enquanto estiver no site, enquanto entendemos quais otimizações os nossos usuários mais apreciam. À medida que vendemos produtos, é importante entendermos as estatísticas sobre quantos visitantes de nosso site realmente compram e, portanto, esse é o tipo de dados que esses cookies rastrearão. Isso é importante para você, pois significa que podemos fazer previsões de negócios com precisão que nos permitem analizar nossos custos de publicidade e produtos para garantir o melhor preço possível.</p>
                
                <h3 className="text-xl font-bold text-[#0F2C4A] mt-8">Compromisso do Usuário</h3>
                <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que a HCO oferece no site e com caráter enunciativo, mas não limitativo:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
                  <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou casas de apostas, jogos de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
                  <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) da HCO, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
                </ul>

                <h3 className="text-xl font-bold text-[#0F2C4A] mt-8">Mais informações</h3>
                <p>Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</p>
                <p className="mt-4 text-sm text-slate-500">Esta política é efetiva a partir de Set/2022.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- PÁGINA DE GESTÃO --- */}
      {currentPage === 'gestao' && (
        <div className="pt-36 pb-20 bg-slate-50 min-h-screen">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-extrabold text-[#0F2C4A] mb-4">Gestão de Saúde Ocupacional</h2>
              <p className="text-slate-600 mt-2">Ferramentas e recursos para gestores implementarem programas eficientes</p>
              <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mt-3">
                <button onClick={() => scrollToSection('home')} className="hover:text-[#0F2C4A] transition-colors">Home</button>
                <ChevronRight size={16} className="text-slate-400" />
                <span className="font-semibold text-slate-700">Gestão</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
                {[
                  { id: 'programas', label: 'Programas Obrigatórios', icon: ClipboardList },
                  { id: 'indicadores', label: 'Indicadores', icon: BarChart },
                  { id: 'documentos', label: 'Documentos', icon: FolderOpen },
                  { id: 'treinamentos', label: 'Treinamentos', icon: GraduationCap },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveGestaoTab(tab.id)}
                    className={`flex items-center justify-center gap-2 px-3 py-2 md:px-6 md:py-3 rounded-full font-bold text-sm md:text-base whitespace-nowrap ${
                      activeGestaoTab === tab.id 
                        ? 'bg-[#0F2C4A] text-white shadow-lg' 
                        : 'bg-white text-slate-600 border border-slate-200'
                    }`}
                  >
                    <tab.icon size={18} />
                    {tab.label}
                  </button>
                ))}
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 md:p-8">
                {/* Programas Content */}
                {activeGestaoTab === 'programas' && (
                    <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* PGR */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <div className="flex items-center gap-3 mb-4 text-[#0F2C4A]">
                                <Shield size={24} />
                                <h3 className="text-xl font-bold">PGR - Programa de Gerenciamento de Riscos</h3>
                            </div>
                            <p className="text-slate-600 mb-4 text-sm">Documento base que identifica perigos e avalia riscos ocupacionais.</p>
                            <div className="bg-slate-50 p-4 rounded-lg">
                                <h4 className="font-bold text-sm text-[#0F2C4A] mb-2">Componentes Principais:</h4>
                                <ul className="space-y-1 text-sm text-slate-600 mb-3">
                                    <li className="flex items-center gap-2"><ChevronRight size={12} /> Inventário de riscos por setor</li>
                                    <li className="flex items-center gap-2"><ChevronRight size={12} /> Avaliação qualitativa e quantitativa</li>
                                    <li className="flex items-center gap-2"><ChevronRight size={12} /> Plano de ação preventivo</li>
                                    <li className="flex items-center gap-2"><ChevronRight size={12} /> Revisão anual obrigatória</li>
                                </ul>
                                <div className="text-xs font-semibold text-slate-500 border-t border-slate-200 pt-2">
                                    <strong>Prazo:</strong> Revisão anual ou quando houver mudanças significativas
                                </div>
                            </div>
                        </div>
                        {/* PCMSO */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <div className="flex items-center gap-3 mb-4 text-[#0F2C4A]">
                                <Stethoscope size={24} />
                                <h3 className="text-xl font-bold">PCMSO - Programa de Controle Médico</h3>
                            </div>
                            <p className="text-slate-600 mb-4 text-sm">Monitora a saúde dos colaboradores através de exames periódicos.</p>
                            <div className="bg-slate-50 p-4 rounded-lg">
                                <h4 className="font-bold text-sm text-[#0F2C4A] mb-2">Exames Obrigatórios:</h4>
                                <ul className="space-y-1 text-sm text-slate-600 mb-3">
                                    <li className="flex items-center gap-2"><ChevronRight size={12} /> Admissional (antes da contratação)</li>
                                    <li className="flex items-center gap-2"><ChevronRight size={12} /> Periódico (anual ou conforme risco)</li>
                                    <li className="flex items-center gap-2"><ChevronRight size={12} /> Retorno ao trabalho (após 30 dias)</li>
                                    <li className="flex items-center gap-2"><ChevronRight size={12} /> Mudança de função</li>
                                    <li className="flex items-center gap-2"><ChevronRight size={12} /> Demissional</li>
                                </ul>
                                <div className="text-xs font-semibold text-slate-500 border-t border-slate-200 pt-2">
                                    <strong>Responsável:</strong> Médico do Trabalho
                                </div>
                            </div>
                        </div>
                        {/* LTCAT */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <div className="flex items-center gap-3 mb-4 text-[#0F2C4A]">
                                <HardHat size={24} />
                                <h3 className="text-xl font-bold">LTCAT - Laudo Técnico</h3>
                            </div>
                            <p className="text-slate-600 mb-4 text-sm">Identifica agentes nocivos que podem gerar aposentadoria especial.</p>
                            <div className="bg-slate-50 p-4 rounded-lg">
                                <h4 className="font-bold text-sm text-[#0F2C4A] mb-2">Avaliações:</h4>
                                <ul className="space-y-1 text-sm text-slate-600 mb-3">
                                    <li className="flex items-center gap-2"><ChevronRight size={12} /> Agentes físicos (ruído, calor, frio)</li>
                                    <li className="flex items-center gap-2"><ChevronRight size={12} /> Agentes químicos (poeiras, gases)</li>
                                    <li className="flex items-center gap-2"><ChevronRight size={12} /> Agentes biológicos</li>
                                    <li className="flex items-center gap-2"><ChevronRight size={12} /> Caracterização de insalubridade</li>
                                </ul>
                                <div className="text-xs font-semibold text-slate-500 border-t border-slate-200 pt-2">
                                    <strong>Uso:</strong> eSocial e benefícios previdenciários
                                </div>
                            </div>
                        </div>
                        {/* CIPA */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <div className="flex items-center gap-3 mb-4 text-[#0F2C4A]">
                                <Users size={24} />
                                <h3 className="text-xl font-bold">CIPA - Comissão Interna</h3>
                            </div>
                            <p className="text-slate-600 mb-4 text-sm">Comissão de colaboradores focada na prevenção de acidentes.</p>
                            <div className="bg-slate-50 p-4 rounded-lg">
                                <h4 className="font-bold text-sm text-[#0F2C4A] mb-2">Atividades:</h4>
                                <ul className="space-y-1 text-sm text-slate-600 mb-3">
                                    <li className="flex items-center gap-2"><ChevronRight size={12} /> Inspeções periódicas</li>
                                    <li className="flex items-center gap-2"><ChevronRight size={12} /> Investigação de acidentes</li>
                                    <li className="flex items-center gap-2"><ChevronRight size={12} /> Campanhas educativas</li>
                                    <li className="flex items-center gap-2"><ChevronRight size={12} /> Reuniões mensais obrigatórias</li>
                                </ul>
                                <div className="text-xs font-semibold text-slate-500 border-t border-slate-200 pt-2">
                                    <strong>Mandato:</strong> 1 ano com eleição democrática
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Indicadores Content */}
                {activeGestaoTab === 'indicadores' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="mb-6 text-center">
                            <h3 className="text-xl font-bold text-[#0F2C4A]">Principais Indicadores de Saúde e Segurança</h3>
                            <p className="text-slate-600 text-sm">Monitore a performance do seu programa de SST através de métricas essenciais</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: Calculator, title: "Taxa de Frequência", formula: "TF = (Nº Acidentes × 1.000.000) / Horas Trabalhadas", desc: "Mede a quantidade de acidentes por milhão de horas trabalhadas.", meta: "< 5 acidentes/milhão de horas" },
                                { icon: Clock, title: "Taxa de Gravidade", formula: "TG = (Dias Perdidos × 1.000.000) / Horas Trabalhadas", desc: "Indica a gravidade dos acidentes através dos dias perdidos.", meta: "< 100 dias/milhão de horas" },
                                { icon: Activity, title: "Taxa de Absenteísmo", formula: "TA = (Dias Ausentes / Dias Trabalháveis) × 100", desc: "Percentual de faltas e ausências em relação aos dias úteis.", meta: "< 3% ao mês" },
                                { icon: AlertTriangle, title: "Índice de Acidentes com CAT", formula: "ICAT = (Acidentes com CAT / Total Colaboradores) × 100", desc: "Proporção de acidentes com Comunicação de Acidente de Trabalho.", meta: "Zero acidentes" },
                                { icon: Percent, title: "Taxa de Conformidade", formula: "TC = (Exames Realizados / Exames Programados) × 100", desc: "Percentual de exames médicos realizados conforme cronograma.", meta: "100% de conformidade" },
                                { icon: TrendingUp, title: "Custo por Colaborador", formula: "CPC = Custo Total SST / Nº Colaboradores", desc: "Investimento em saúde e segurança por colaborador.", meta: "Comparar com mercado", metaLabel: "Análise:" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <div className="w-10 h-10 bg-[#0F2C4A]/10 rounded-lg flex items-center justify-center text-[#0F2C4A] mb-4">
                                        <item.icon size={20} />
                                    </div>
                                    <h4 className="font-bold text-[#0F2C4A] mb-2">{item.title}</h4>
                                    <p className="text-xs font-mono bg-slate-100 p-2 rounded mb-3 text-slate-600">{item.formula}</p>
                                    <p className="text-sm text-slate-600 mb-4">{item.desc}</p>
                                    <div className="text-xs font-semibold text-slate-500 border-t border-slate-200 pt-2">
                                        <strong>{item.metaLabel || 'Meta:'}</strong> {item.meta}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 bg-blue-50 border border-blue-100 p-4 rounded-xl flex gap-4 items-start">
                            <Lightbulb className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                            <div>
                                <h4 className="font-bold text-blue-800 text-sm">Dica de Gestão</h4>
                                <p className="text-blue-700 text-sm">Mantenha um dashboard atualizado mensalmente com estes indicadores. Utilize-os em reuniões de liderança para tomada de decisões estratégicas.</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Documentos Content */}
                {activeGestaoTab === 'documentos' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="mb-6 text-center">
                            <h3 className="text-xl font-bold text-[#0F2C4A]">Documentação Essencial</h3>
                            <p className="text-slate-600 text-sm">Mantenha sua empresa em conformidade com toda documentação necessária</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { title: "Documentos Obrigatórios", icon: FileText, items: [
                                    { name: "PGR - Programa de Gerenciamento de Riscos", prazo: "Validade: Anual", desc: "Base de todos os programas de SST. Deve conter inventário de riscos e plano de ação." },
                                    { name: "PCMSO - Programa de Controle Médico", prazo: "Validade: Anual", desc: "Elaborado por médico do trabalho, define cronograma de exames médicos." },
                                    { name: "ASO - Atestado de Saúde Ocupacional", prazo: "Por exame realizado", desc: "Atestado individual emitido após cada exame médico ocupacional." },
                                    { name: "LTCAT - Laudo Técnico", prazo: "Quando aplicável", desc: "Caracteriza exposição a agentes nocivos para fins de aposentadoria especial." }
                                ]},
                                { title: "Registros e Controles", icon: ClipboardList, items: [
                                    { name: "Livro de Inspeção do Trabalho", prazo: "Permanente", desc: "Registro de visitas de fiscalização e notificações recebidas." },
                                    { name: "Controle de EPIs", prazo: "Durante uso + 5 anos", desc: "Fichas de entrega de EPIs assinadas pelos colaboradores." },
                                    { name: "CAT - Comunicação de Acidente", prazo: "Prazo: 1 dia útil", desc: "Registro obrigatório de acidentes e doenças ocupacionais." },
                                    { name: "Certificados de Treinamento", prazo: "Conforme NR", desc: "Comprovação de capacitação em segurança do trabalho." }
                                ]},
                                { title: "CIPA e Brigada", icon: Shield, items: [
                                    { name: "Atas de Eleição da CIPA", prazo: "Anual", desc: "Documentação do processo eleitoral e posse dos cipeiros." },
                                    { name: "Atas de Reuniões da CIPA", prazo: "Mensal", desc: "Registro de reuniões ordinárias e extraordinárias." },
                                    { name: "Calendário de Reuniões", prazo: "Anual", desc: "Cronograma aprovado de reuniões mensais." },
                                    { name: "Mapa de Risco", prazo: "Anual", desc: "Representação gráfica dos riscos por ambiente." }
                                ]},
                                { title: "eSocial", icon: Monitor, items: [
                                    { name: "S-2220 - Monitoramento da Saúde", prazo: "Após exames", desc: "Envio de ASOs ao eSocial dentro do prazo legal." },
                                    { name: "S-2240 - Condições Ambientais", prazo: "Admissão/Alteração", desc: "Informações sobre exposição a agentes nocivos." },
                                    { name: "S-2210 - CAT", prazo: "1 dia útil", desc: "Comunicação de acidentes através do eSocial." },
                                    { name: "Relatórios de Conformidade", prazo: "Mensal", desc: "Verificação de pendências e conformidade no sistema." }
                                ]}
                            ].map((cat, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <div className="flex items-center gap-2 mb-4 text-[#0F2C4A] border-b border-slate-100 pb-2">
                                        <cat.icon size={20} />
                                        <h4 className="font-bold">{cat.title}</h4>
                                    </div>
                                    <ul className="space-y-4">
                                        {cat.items.map((item, i) => (
                                            <li key={i}>
                                                <div className="flex justify-between items-start mb-1">
                                                    <strong className="text-sm text-slate-800">{item.name}</strong>
                                                    <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded whitespace-nowrap ml-2">{item.prazo}</span>
                                                </div>
                                                <p className="text-xs text-slate-600">{item.desc}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 bg-red-50 border border-red-100 p-4 rounded-xl flex gap-4 items-start">
                            <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={24} />
                            <div>
                                <h4 className="font-bold text-red-800 text-sm">Atenção aos Prazos</h4>
                                <p className="text-red-700 text-sm">Documentos vencidos podem gerar multas de R$ 402,53 a R$ 4.025,33 por item, conforme a gravidade e tamanho da empresa. Mantenha um calendário de vencimentos atualizado.</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Treinamentos Content */}
                {activeGestaoTab === 'treinamentos' && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="mb-6 text-center">
                            <h3 className="text-xl font-bold text-[#0F2C4A]">Treinamentos Obrigatórios</h3>
                            <p className="text-slate-600 text-sm">Capacitação essencial para colaboradores e gestores</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { badge: "Obrigatório", title: "Integração de SST", icon: GraduationCap, publico: "Todos os colaboradores", carga: "Mínimo 2 horas", periodicidade: "Na admissão", desc: "Apresentação das políticas de segurança, riscos gerais, uso de EPIs e procedimentos de emergência.", topics: ["Política de SST da empresa", "Direitos e deveres", "Riscos do ambiente", "Procedimentos de emergência"] },
                                { badge: "NR-05", title: "CIPA", icon: Users, publico: "Membros da CIPA", carga: "20 horas", periodicidade: "Anual", desc: "Capacitação para membros eleitos e designados da Comissão Interna de Prevenção de Acidentes.", topics: ["Investigação de acidentes", "Inspeções de segurança", "Mapa de riscos", "Legislação trabalhista"] },
                                { badge: "NR-06", title: "Uso de EPIs", icon: ShieldCheck, publico: "Usuários de EPIs", carga: "2-4 horas", periodicidade: "Na admissão e quando necessário", desc: "Treinamento sobre uso correto, conservação e limitações dos equipamentos de proteção individual.", topics: ["Colocação adequada", "Higienização e conservação", "Substituição", "Responsabilidades"] },
                                { badge: "NR-10", title: "Segurança em Eletricidade", icon: Zap, publico: "Eletricistas", carga: "40 horas (básico)", periodicidade: "Bienal (reciclagem)", desc: "Trabalhos em instalações elétricas energizadas e desenergizadas, com requisitos de certificação.", topics: ["Riscos em eletricidade", "Medidas de proteção", "EPIs específicos", "Primeiros socorros"] },
                                { badge: "NR-18", title: "Construção Civil", icon: HardHat, publico: "Trabalhadores da construção", carga: "6 horas", periodicidade: "Na admissão", desc: "Segurança em trabalhos na construção civil, incluindo trabalho em altura e equipamentos.", topics: ["Prevenção de quedas", "Escadas e andaimes", "Máquinas e equipamentos", "Áreas de vivência"] },
                                { badge: "NR-35", title: "Trabalho em Altura", icon: ArrowUpCircle, publico: "Trabalhos acima de 2m", carga: "8 horas", periodicidade: "Bienal", desc: "Para atividades realizadas acima de 2 metros do nível inferior com risco de queda.", topics: ["Análise de risco", "Sistemas de proteção", "Resgate e emergência", "Capacidade física e mental"] },
                                { badge: "Recomendado", title: "Primeiros Socorros", icon: Heart, publico: "Brigadistas", carga: "12-20 horas", periodicidade: "Anual (reciclagem)", desc: "Capacitação em atendimento emergencial até a chegada do socorro especializado.", topics: ["Avaliação da vítima", "RCP (Reanimação Cardiopulmonar)", "Controle de hemorragias", "Fraturas e queimaduras"] },
                                { badge: "Recomendado", title: "Brigada de Incêndio", icon: Flame, publico: "Voluntários", carga: "12 horas", periodicidade: "Anual", desc: "Prevenção e combate a princípios de incêndio, abandono de área e primeiros socorros.", topics: ["Teoria do fogo", "Extintores e hidrantes", "Rotas de fuga", "Evacuação de área"] }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-[#0F2C4A] text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">{item.badge}</div>
                                    <div className="flex items-center gap-2 mb-3 text-[#0F2C4A]">
                                        <item.icon size={20} />
                                        <h4 className="font-bold">{item.title}</h4>
                                    </div>
                                    <div className="text-xs text-slate-500 space-y-1 mb-3 bg-slate-50 p-2 rounded">
                                        <div className="flex justify-between"><strong>Público:</strong> <span>{item.publico}</span></div>
                                        <div className="flex justify-between"><strong>Carga:</strong> <span>{item.carga}</span></div>
                                        <div className="flex justify-between"><strong>Freq:</strong> <span>{item.periodicidade}</span></div>
                                    </div>
                                    <p className="text-xs text-slate-600 mb-3">{item.desc}</p>
                                    <ul className="text-xs text-slate-500 space-y-1">
                                        {item.topics.map((topic, i) => (
                                            <li key={i}>• {topic}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 bg-blue-50 border border-blue-100 p-4 rounded-xl flex gap-4 items-start">
                            <Info className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                            <div>
                                <h4 className="font-bold text-blue-800 text-sm">Importante</h4>
                                <p className="text-blue-700 text-sm">Todos os treinamentos devem ser documentados com lista de presença, conteúdo programático e certificados. Mantenha os registros arquivados por no mínimo 5 anos após o desligamento do colaborador.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-8 bg-[#0F2C4A] rounded-xl p-8 text-center text-white shadow-lg esocial-cta">
                <div className="cta-content max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold mb-3">Precisa de ajuda com o eSocial?</h3>
                    <p className="text-slate-200 mb-6">Nossa equipe está pronta para garantir a conformidade da sua empresa</p>
                    <button onClick={() => scrollToSection('cadastro')} className="bg-white text-[#0F2C4A] font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition shadow-md inline-block">
                        Solicitar Orçamento
                    </button>
                </div>
            </div>

            </div>
          </div>
        </div>
      )}

      {/* --- PÁGINA SITEMAP --- */}
      {currentPage === 'sitemap' && (
        <div className="pt-36 pb-20 bg-slate-50 min-h-screen">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-extrabold text-[#0F2C4A] mb-6">Mapa do Site</h2>
                <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mt-3">
                  <button onClick={() => scrollToSection('home')} className="hover:text-[#0F2C4A] transition-colors">Home</button>
                  <ChevronRight size={16} className="text-slate-400" />
                  <span className="font-semibold text-slate-700">Mapa do Site</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-[#0F2C4A] mb-4 border-b border-slate-100 pb-2">Institucional</h3>
                  <ul className="space-y-3">
                    <li><button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-[#0F2C4A] hover:underline transition flex items-center gap-2"><ChevronRight size={14} /> Home</button></li>
                    <li><button onClick={() => scrollToSection('inicio')} className="text-slate-600 hover:text-[#0F2C4A] hover:underline transition flex items-center gap-2"><ChevronRight size={14} /> A Clínica</button></li>
                    <li><button onClick={() => scrollToSection('contato')} className="text-slate-600 hover:text-[#0F2C4A] hover:underline transition flex items-center gap-2"><ChevronRight size={14} /> Contato</button></li>
                    <li><button onClick={() => scrollToSection('cadastro')} className="text-slate-600 hover:text-[#0F2C4A] hover:underline transition flex items-center gap-2"><ChevronRight size={14} /> Cadastre sua Empresa</button></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0F2C4A] mb-4 border-b border-slate-100 pb-2">Serviços e Conteúdo</h3>
                  <ul className="space-y-3">
                    <li><button onClick={() => scrollToSection('servicos')} className="text-slate-600 hover:text-[#0F2C4A] hover:underline transition flex items-center gap-2"><ChevronRight size={14} /> Nossos Serviços</button></li>
                    <li><button onClick={() => scrollToSection('socialegestaosst')} className="text-slate-600 hover:text-[#0F2C4A] hover:underline transition flex items-center gap-2"><ChevronRight size={14} /> eSocial e Gestão SST</button></li>
                    <li><button onClick={() => scrollToSection('gestao')} className="text-slate-600 hover:text-[#0F2C4A] hover:underline transition flex items-center gap-2"><ChevronRight size={14} /> Gestão de Saúde</button></li>
                    <li><button onClick={() => scrollToSection('orientacoes')} className="text-slate-600 hover:text-[#0F2C4A] hover:underline transition flex items-center gap-2"><ChevronRight size={14} /> Dicas e Orientações</button></li>
                    <li><button onClick={() => scrollToSection('normativas')} className="text-slate-600 hover:text-[#0F2C4A] hover:underline transition flex items-center gap-2"><ChevronRight size={14} /> Normativas (NRs)</button></li>
                    <li><button onClick={() => scrollToSection('politicadeprivacidade')} className="text-slate-600 hover:text-[#0F2C4A] hover:underline transition flex items-center gap-2"><ChevronRight size={14} /> Política de Privacidade</button></li>
                    <li><button onClick={() => scrollToSection('sitemap')} className="text-slate-600 hover:text-[#0F2C4A] hover:underline transition flex items-center gap-2"><ChevronRight size={14} /> Mapa do Site</button></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- FOOTER --- */}
      <footer className="bg-[#0F2C4A] text-[#A6A6A6] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Section 1: Logo & About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-white text-[#0F2C4A] p-1.5 rounded font-bold text-lg">HCO</div>
                <h2 className="text-white font-bold text-lg">HealthyCare Occupational</h2>
              </div>
              <p className="text-sm leading-relaxed mb-4">Medicina do Trabalho com excelência, cuidando da saúde dos seus colaboradores e da conformidade legal da sua empresa.</p>
            </div>
            
            {/* Section 2: Serviços */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Serviços</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('resultados')} className="hover:text-white transition text-left">Resultados de Exames</button></li>
                <li><button onClick={() => scrollToSection('orientacoes')} className="hover:text-white transition text-left">Dicas e Orientações</button></li>
                <li><button onClick={() => scrollToSection('socialegestaosst')} className="hover:text-white transition text-left">eSocial e Gestão SST</button></li>
                <li><button onClick={() => scrollToSection('gestao')} className="hover:text-white transition text-left">Gestão de Saúde</button></li>
                <li><button onClick={() => scrollToSection('normativas')} className="hover:text-white transition text-left">Normativas</button></li>
              <li><button onClick={() => scrollToSection('cadastro')} className="hover:text-white transition text-left">Cadastro</button></li>
              </ul>
            </div>
            
            {/* Section 3: Links Úteis */}
            <div>
               <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Links Úteis</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.gov.br/pt-br/categorias/trabalho-e-previdencia" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Ministério do Trabalho</a></li>
                <li><a href="https://www.gov.br/esocial" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">eSocial</a></li>
                <li><a href="https://www.cfm.org.br" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Conselho Federal de Medicina</a></li>
                <li><a href="https://www.anamt.org.br" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">ANAMT</a></li>
              </ul>
            </div>

            {/* Section 4: Redes Sociais */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" aria-label="Facebook" className="w-10 h-10 bg-[#0A1F35] rounded-full flex items-center justify-center hover:bg-white hover:text-[#0F2C4A] transition duration-300"><Facebook size={20} /></a>
                <a href="#" aria-label="Instagram" className="w-10 h-10 bg-[#0A1F35] rounded-full flex items-center justify-center hover:bg-white hover:text-[#0F2C4A] transition duration-300"><Instagram size={20} /></a>
                <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-[#0A1F35] rounded-full flex items-center justify-center hover:bg-white hover:text-[#0F2C4A] transition duration-300"><Linkedin size={20} /></a>
                <a href="#" aria-label="YouTube" className="w-10 h-10 bg-[#0A1F35] rounded-full flex items-center justify-center hover:bg-white hover:text-[#0F2C4A] transition duration-300"><Youtube size={20} /></a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 text-sm">
              <div className="text-center md:text-left">
                <p>© 2025 HCO - HealthyCare Occupational. Todos os direitos reservados.</p>
                <p className="text-slate-500 mt-1">Desenvolvido com foco em gestão e saúde ocupacional.</p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-2 text-sm">
              <a href="#" className="hover:text-white transition">Termos de Uso</a>
              <span className="text-slate-600">|</span>
              <button onClick={() => scrollToSection('politicadeprivacidade')} className="hover:text-white transition">Política de Privacidade</button>
              <span className="text-slate-600">|</span>
              <a href="#" className="hover:text-white transition">LGPD</a>
              <span className="text-slate-600">|</span>
              <a href="#" className="hover:text-white transition">Direitos Autorais</a>
              <span className="text-slate-600">|</span>
              <button onClick={() => scrollToSection('sitemap')} className="hover:text-white transition">Mapa do Site</button>
              </div>
            </div>
            
            <div className="text-xs text-slate-600 text-center md:text-left leading-relaxed">
              <p className="flex items-start justify-center md:justify-start gap-2">
                <Copyright size={14} className="mt-0.5 flex-shrink-0" />
                <span>
                  Marca registrada HCO - HealthyCare Occupational. 
                  O uso não autorizado do conteúdo, logotipo e materiais deste site é estritamente proibido e pode resultar em ações legais. 
                  Todos os direitos de propriedade intelectual são reservados.
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
      
      {/* --- WHATSAPP FLOATING BUTTON --- */}
      <a
        href="https://wa.me/5571983156060?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20HCO."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-[#25D366] text-white px-4 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#20bd5a] transition-colors shadow-none"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        Atendimento
      </a>

    </div>
  );
}