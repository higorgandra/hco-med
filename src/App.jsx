import React, { useState } from 'react';
import { 
  Menu, X, Search, FileText, Activity, AlertTriangle, 
  CheckCircle, Users, Building, Phone, Mail, MapPin, 
  ChevronRight, ArrowRight, Shield, Stethoscope, Eye, 
  Ear, Wind, Beaker, Truck, ClipboardList, BookOpen, ChevronDown,
  HardHat, TrendingUp, Handshake, Facebook, Instagram, Linkedin, Youtube, Copyright,
  Gavel, FileCheck, Flame, Zap, Package, Settings, Thermometer, User, Minimize2, ArrowUpCircle, Clock, Send
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [openAccordion, setOpenAccordion] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    
    if (id === 'orientacoes') {
      setCurrentPage('orientacoes');
      window.scrollTo(0, 0);
      return;
    }

    if (id === 'servicos') {
      setCurrentPage('servicos');
      window.scrollTo(0, 0);
      return;
    }

    if (id === 'politicadeprivacidade') {
      setCurrentPage('politicadeprivacidade');
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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700">
      
      {/* --- HEADER --- */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="bg-white text-blue-900 text-xs py-1 border-b border-blue-50">
          <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center gap-3 font-medium">
              <button onClick={() => scrollToSection('politicadeprivacidade')} className="hover:text-blue-600 transition-colors">Política de Privacidade</button>
            </div>
            <div className="hidden md:flex items-center gap-4 font-medium">
              <a href="https://wa.me/5571983156060" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 transition-colors"><Phone size={12} className="text-blue-600" /> (71) 98315-6060</a>
              <span className="flex items-center gap-1"><MapPin size={12} className="text-blue-600" /> Av. Paulista, 1000</span>
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
              <rect fill="#0F2946" x="5473" y="6038" width="504" height="506" rx="59" ry="59"/>
              <polygon fill="#FEFEFE" points="5718,6123 5663,6123 5663,6228 5548,6228 5548,6283 5663,6283 5718,6283 5718,6228 "/>
              <polygon fill="#FEFEFE" points="5733,6123 5788,6123 5788,6228 5903,6228 5903,6283 5788,6283 5733,6283 5733,6228 "/>
              <polygon fill="#FEFEFE" points="5733,6458 5788,6458 5788,6353 5903,6353 5903,6298 5788,6298 5733,6298 5733,6353 "/>
              <polygon fill="#FEFEFE" points="5718,6458 5663,6458 5663,6353 5548,6353 5548,6298 5663,6298 5718,6298 5718,6353 "/>
            </svg>
            <div>
              <h1 className="text-xl font-bold text-blue-900 leading-none">HCO - MEDICINA</h1>
              <p className="text-xs text-blue-500 font-semibold tracking-wider">E SEGURANÇA DO TRABALHO</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {[
              { label: 'Home', id: 'inicio' },
              { label: 'A Clínica', id: 'inicio' },
              { label: 'Nossos Serviços', id: 'servicos' },
              { label: 'Orientações para Exames', id: 'orientacoes' },
              { label: 'Contato', id: 'contato' }
            ].map((item) => (
              <button 
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-blue-600 transition-colors uppercase text-xs font-bold tracking-wide flex items-center gap-1"
              >
                {item.label}
                {item.icon && <ChevronDown size={14} />}
              </button>
            ))}
            <a href="https://sistema.soc.com.br/WebSoc/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition font-bold shadow-lg shadow-blue-200 flex items-center gap-2">
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
                { label: 'Orientações para Exames', id: 'orientacoes' },
                { label: 'Contato', id: 'contato' },
                { label: 'Exames', id: 'resultados' }
              ].map((item) => (
                <button 
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left font-semibold text-slate-600 hover:text-blue-600 py-2 border-b border-slate-50"
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
        {/* O valor /80 define a opacidade (80%). Mude para /90 (mais escuro) ou /50 (mais claro) */}
        <div className="absolute inset-0 bg-blue-900/1"></div>
        {/* <img 
          src="https://i.postimg.cc/ZKYSYv6H/eng.png" 
          alt="Engenheiro de Segurança" 
          className="hidden lg:block absolute bottom-0 right-0 lg:right-10 xl:right-32 max-h-[90%] w-auto z-10"
        /> */}
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-6 bg-slate-900/40 backdrop-blur-md border border-white/10 p-6 md:p-10 rounded-3xl shadow-2xl">
            <span className="bg-blue-500/30 text-blue-100 border border-blue-400/30 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
              Soluções em Saúde Corporativa
            </span>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
              Medicina do Trabalho <span className="text-blue-300">Especializada</span>
            </h2>
            <p className="text-lg text-blue-100 max-w-lg leading-relaxed">
              Soluções completas em Saúde Ocupacional para sua empresa. Gestão eficiente, conformidade legal total com o eSocial e cuidado genuíno com seus colaboradores.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollToSection('normativas')} className="bg-[#0A7C15] text-white px-5 py-3 rounded-lg font-bold hover:bg-[#0b9e12] transition flex items-center gap-2 shadow-lg hover:shadow-xl">
                <ClipboardList size={20} /> PGR e PCMSO
              </button>
              <button onClick={() => scrollToSection('esocial')} className="bg-[#0A7C15] text-white border border-[#0EC117] px-5 py-3 rounded-lg font-bold hover:bg-[#0b9e12] transition flex items-center gap-2 shadow-lg hover:shadow-xl">
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
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
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
                <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <HardHat className="text-blue-600 group-hover:text-white transition-colors duration-300" size={36} strokeWidth={1.5} />
                </div>
                <p className="text-lg font-bold text-slate-800 leading-snug">
                  Prevenção de acidentes e doenças ocupacionais
                </p>
              </div>

              {/* Pilar 2 */}
              <div className="p-8 md:p-12 text-center group hover:bg-slate-50 transition duration-300">
                <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <TrendingUp className="text-blue-600 group-hover:text-white transition-colors duration-300" size={36} strokeWidth={1.5} />
                </div>
                <p className="text-lg font-bold text-slate-800 leading-snug">
                  Aumento da produtividade e eficiência
                </p>
              </div>

              {/* Pilar 3 */}
              <div className="p-8 md:p-12 text-center group hover:bg-slate-50 transition duration-300">
                <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Handshake className="text-blue-600 group-hover:text-white transition-colors duration-300" size={36} strokeWidth={1.5} />
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
              className="inline-flex items-center gap-2 text-blue-700 font-bold hover:text-blue-900 transition hover:underline underline-offset-4 uppercase tracking-wide text-sm"
            >
              Entre em contato conosco <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* --- ESOCIAL --- */}
      <section id="esocial" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-wider text-sm">OBRIGATORIEDADE</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2">eSocial e Gestão SST</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Entenda as obrigações e evite multas. O não cumprimento pode gerar penalidades de <span className="text-red-600 font-bold">R$ 402,53 a R$ 181.284,63</span>.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { code: "S-2210", title: "Comunicação de Acidente de Trabalho (CAT)", prazo: "Até o 1º dia útil seguinte ao acidente", icon: AlertTriangle, color: "text-red-600", bg: "bg-red-50" },
                { code: "S-2220", title: "Monitoramento da Saúde (ASO)", prazo: "Até o dia 15 do mês seguinte ao exame", icon: Stethoscope, color: "text-blue-600", bg: "bg-blue-50" },
                { code: "S-2240", title: "Condições Ambientais do Trabalho", prazo: "Até o dia 15 do mês seguinte à admissão", icon: Activity, color: "text-orange-600", bg: "bg-orange-50" },
                { code: "S-2221", title: "Exames Toxicológicos (Motoristas)", prazo: "Até o dia 15 do mês seguinte ao exame", icon: Truck, color: "text-purple-600", bg: "bg-purple-50" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition">
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

            <div className="bg-slate-50 p-8 rounded-2xl">
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
                <button onClick={() => scrollToSection('cadastro')} className="w-full bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition">
                  Solicitar Diagnóstico Gratuito
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DICAS DE SAÚDE --- */}
      <section id="dicas" className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Dicas e Orientações</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Beaker, title: "Exames Laboratoriais", text: "Jejum de 8-12h. Evite álcool e exercícios intensos 24h antes." },
              { icon: Ear, title: "Audiometria", text: "Repouso auditivo de 14h. Evite fones de ouvido no dia anterior." },
              { icon: Wind, title: "Espirometria", text: "Não fume 2h antes. Suspenda broncodilatadores conforme orientação." },
              { icon: Eye, title: "Acuidade Visual", text: "Leve óculos ou lentes de contato. Descanse bem na noite anterior." },
              { icon: Stethoscope, title: "Exame Clínico", text: "Chegue 15min antes. Informe medicamentos em uso e histórico de cirurgias." },
              { icon: Activity, title: "Postura", text: "Monitor na altura dos olhos. Cotovelos a 90°. Pausas a cada 50min." },
              { icon: Truck, title: "Toxicológico", text: "Janela de detecção de 90 dias. Necessário para CNH C, D e E." },
              { icon: UserCheck, title: "Vida Saudável", text: "Hidratação constante, alimentação equilibrada e gestão do estresse." }
            ].map((dica, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300">
                <dica.icon className="text-blue-500 mb-4" size={32} />
                <h4 className="font-bold text-slate-800 mb-2">{dica.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{dica.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NORMATIVAS (NRs) --- */}
      <section id="normativas" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">Normas Regulamentadoras</h2>
              <p className="text-slate-600 mt-2">Principais NRs que regem a segurança no trabalho.</p>
            </div>
            <a href="#" className="text-blue-600 font-bold hover:underline mt-4 md:mt-0">Ver todas no site do Governo &rarr;</a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { nr: "NR-01", title: "Disposições Gerais e PGR", desc: "Gerenciamento de Riscos Ocupacionais, Inventário de riscos e Plano de Ação." },
              { nr: "NR-05", title: "CIPA", desc: "Comissão Interna de Prevenção de Acidentes. Organização, eleições e treinamento." },
              { nr: "NR-06", title: "EPI", desc: "Equipamentos de Proteção Individual. Obrigações, CA e fornecimento gratuito." },
              { nr: "NR-07", title: "PCMSO", desc: "Programa de Controle Médico de Saúde Ocupacional. Exames e ASOs." },
              { nr: "NR-09", title: "Avaliação de Exposições", desc: "Avaliação de agentes físicos, químicos e biológicos complementares ao PGR." },
              { nr: "NR-17", title: "Ergonomia", desc: "Adaptação das condições de trabalho às características psicofisiológicas." },
            ].map((item, idx) => (
              <div key={idx} className="border border-slate-200 p-6 rounded-xl hover:border-blue-300 transition group cursor-default">
                <span className="bg-slate-800 text-white text-xs font-bold px-2 py-1 rounded mb-3 inline-block group-hover:bg-blue-600 transition">
                  {item.nr}
                </span>
                <h4 className="font-bold text-lg text-slate-800 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- GESTÃO & CADASTRO --- */}
      <section id="cadastro" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Form de Cadastro */}
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Cadastro da Empresa</h2>
              <p className="text-slate-600 mb-8">Preencha os dados para criar sua conta ou solicitar proposta.</p>
              
              <form className="bg-white p-8 rounded-2xl shadow-lg space-y-4">
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-800 border-b pb-2">Dados da Empresa</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Razão Social *" className="w-full border p-3 rounded-lg bg-slate-50 focus:bg-white transition outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="Nome Fantasia *" className="w-full border p-3 rounded-lg bg-slate-50 focus:bg-white transition outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="CNPJ *" className="w-full border p-3 rounded-lg bg-slate-50 focus:bg-white transition outline-none focus:ring-2 focus:ring-blue-500" />
                    <select className="w-full border p-3 rounded-lg bg-slate-50 focus:bg-white transition outline-none focus:ring-2 focus:ring-blue-500 text-slate-600">
                      <option>Nº Funcionários *</option>
                      <option>1 a 10</option>
                      <option>11 a 50</option>
                      <option>51 a 100</option>
                      <option>Mais de 500</option>
                    </select>
                  </div>
                  <select className="w-full border p-3 rounded-lg bg-slate-50 focus:bg-white transition outline-none focus:ring-2 focus:ring-blue-500 text-slate-600">
                    <option>Setor de Atividade *</option>
                    <option>Indústria</option>
                    <option>Comércio</option>
                    <option>Serviços</option>
                    <option>Construção Civil</option>
                    <option>Saúde</option>
                    <option>Transportes</option>
                  </select>
                </div>

                <div className="space-y-4 pt-4">
                  <h4 className="font-bold text-slate-800 border-b pb-2">Responsável</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Nome Completo *" className="w-full border p-3 rounded-lg bg-slate-50 focus:bg-white transition outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="Cargo *" className="w-full border p-3 rounded-lg bg-slate-50 focus:bg-white transition outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="email" placeholder="E-mail *" className="w-full border p-3 rounded-lg bg-slate-50 focus:bg-white transition outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="tel" placeholder="Telefone *" className="w-full border p-3 rounded-lg bg-slate-50 focus:bg-white transition outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>

                <div className="pt-6">
                  <button type="button" className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition shadow-lg">
                    Cadastrar / Solicitar Orçamento
                  </button>
                  <p className="text-xs text-center text-slate-500 mt-4">Ao enviar, você concorda com nossos Termos de Uso e Política de Privacidade.</p>
                </div>
              </form>
            </div>

            {/* Informações de Gestão (Lateral) */}
            <div className="space-y-8 lg:pt-20">
              <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Gestão Completa</h3>
                  <p className="text-blue-100 mb-6">Oferecemos todas as ferramentas para a gestão de saúde ocupacional da sua empresa em um só lugar.</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-400 rounded-full"></div> PGR - Gerenciamento de Riscos</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-400 rounded-full"></div> PCMSO - Controle Médico</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-400 rounded-full"></div> LTCAT - Laudo Técnico</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-400 rounded-full"></div> Treinamentos e Palestras</li>
                    <li className="flex items-center gap-2"><div className="w-2 h-2 bg-blue-400 rounded-full"></div> Gestão de Afastados</li>
                  </ul>
                </div>
                {/* Decoration */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-800 rounded-full opacity-50"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-500 rounded-full opacity-20"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <h4 className="text-3xl font-bold text-blue-600 mb-1">100%</h4>
                  <p className="text-xs font-bold text-slate-500 uppercase">Conformidade Legal</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <h4 className="text-3xl font-bold text-blue-600 mb-1">24h</h4>
                  <p className="text-xs font-bold text-slate-500 uppercase">Suporte Técnico</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CONTATO --- */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">Entre em Contato</h2>
            <p className="text-slate-600 mt-2">Nossa equipe está pronta para atender sua empresa</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg mb-1">Telefone</h4>
                  <p className="text-slate-600">(71) 98315-6060</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg mb-1">E-mail</h4>
                  <p className="text-slate-600">contato@hco.com.br</p>
                  <p className="text-slate-600">atendimento@hco.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg mb-1">Endereço</h4>
                  <p className="text-slate-600">Av. Paulista, 1000</p>
                  <p className="text-slate-600">São Paulo - SP, 01310-100</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
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
            <div className="bg-slate-50 p-8 rounded-2xl shadow-lg">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="nome" className="text-sm font-bold text-slate-700">Nome Completo *</label>
                    <input type="text" id="nome" name="nome" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition bg-white" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="empresa" className="text-sm font-bold text-slate-700">Empresa *</label>
                    <input type="text" id="empresa" name="empresa" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition bg-white" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700">E-mail *</label>
                    <input type="email" id="email" name="email" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition bg-white" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="telefone" className="text-sm font-bold text-slate-700">Telefone *</label>
                    <input type="tel" id="telefone" name="telefone" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition bg-white" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="assunto" className="text-sm font-bold text-slate-700">Assunto *</label>
                  <select id="assunto" name="assunto" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition text-slate-600 bg-white" required>
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
                  <textarea id="mensagem" name="mensagem" rows="5" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition bg-white" required></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition shadow-lg flex items-center justify-center gap-2">
                  <Send size={20} /> Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
        </>
      )}

      {/* --- PÁGINA DE ORIENTAÇÕES --- */}
      {currentPage === 'orientacoes' && (
        <div className="pt-36 pb-20 bg-slate-50 min-h-screen">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-extrabold text-slate-900">Orientações para Exames</h2>
                <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mt-3">
                  <button onClick={() => scrollToSection('inicio')} className="hover:text-blue-600 transition-colors">Home</button>
                  <ChevronRight size={16} className="text-slate-400" />
                  <span className="font-semibold text-slate-700">Orientações para Exames</span>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <div className="space-y-2">
                  {[
                    { title: "Audiometria", content: "Não usar fones de ouvidos por 24 horas e não ouvir som alto por 48 horas." },
                    { title: "Cultura de Orofaringe", content: "O colaborador não deve se alimentar e nem escovar os dentes no dia do atendimento." },
                    { title: "Eletroencefalograma", content: "Não utilizar creme ou gel de cabelo no dia do exame." },
                    { title: "Glicemia", content: "Jejum de no mínimo 08 horas." },
                    { title: "Micológico de Unhas", content: "Unhas sem esmaltar e sem cortar por 48 horas." },
                    { title: "PSA", content: "No mínimo 03 dias de abstinência sexual." },
                    { title: "Sumário de Urina", content: "Descartar o primeiro jato e colocar no coletor o segundo jato.<br/><br/>Obs: Se a colaboradora estiver no período menstrual não trazer amostra." }
                  ].map((item, index) => (
                    <div key={index} className="border-b border-slate-100 last:border-0">
                      <button 
                        onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                        className={`w-full flex justify-between items-center py-4 text-left font-bold transition-colors ${openAccordion === index ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'}`}
                      >
                        {item.title}
                        <ChevronDown size={20} className={`transition-transform duration-300 ${openAccordion === index ? 'rotate-180' : ''}`} />
                      </button>
                      <div 
                        className={`overflow-hidden transition-all duration-300 ${openAccordion === index ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}
                      >
                        <p className="text-slate-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.content }}></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- PÁGINA DE SERVIÇOS --- */}
      {currentPage === 'servicos' && (
        <div className="pt-36 pb-20 bg-slate-50 min-h-screen">
          <div className="max-w-6xl mx-auto px-4">
            
            {/* Header da Página */}
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Nossos Serviços</h2>
              <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-6">
                <button onClick={() => scrollToSection('home')} className="hover:text-blue-600 transition-colors">Home</button>
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
                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl"><ClipboardList size={28} /></div>
                <h3 className="text-2xl font-bold text-slate-800">Gestão Técnica e Documental</h3>
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
                    <div className="mb-6 text-blue-600 bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center">
                      <item.icon size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed flex-grow">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Grupo 2: Medicina e Diagnóstico */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-green-100 text-green-600 rounded-xl"><Stethoscope size={28} /></div>
                <h3 className="text-2xl font-bold text-slate-800">Medicina e Diagnósticos</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-slate-100">
                  <div className="flex items-start gap-6">
                    <div className="text-green-600 bg-green-50 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-4">Atendimento Clínico e Exames</h4>
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
                      <h4 className="text-xl font-bold text-slate-900 mb-4">Medições Ambientais</h4>
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
                <h3 className="text-2xl font-bold text-slate-800">Treinamentos Normativos (NRs)</h3>
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
      )}

      {/* --- PÁGINA DE POLÍTICA DE PRIVACIDADE --- */}
      {currentPage === 'politicadeprivacidade' && (
        <div className="pt-36 pb-20 bg-slate-50 min-h-screen">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Política de Privacidade</h2>
                <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mt-3">
                  <button onClick={() => scrollToSection('home')} className="hover:text-blue-600 transition-colors">Home</button>
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
                
                <h3 className="text-xl font-bold text-slate-800 mt-8">Política de Cookies HCO</h3>
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

                <h3 className="text-xl font-bold text-slate-800 mt-8">Cookies de Terceiros</h3>
                <p>Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar através deste site.</p>
                <p>Este site usa o Google Analytics, que é uma das soluções de análise mais difundidas e confiáveis da Web, para nos ajudar a entender como você usa o site e como podemos melhorar sua experiência. Esses cookies podem rastrear itens como quanto tempo você gasta no site e as páginas visitadas, para que possamos continuar produzindo conteúdo atraente.</p>
                <p>Para mais informações sobre cookies do Google Analytics, consulte a página oficial do Google Analytics.</p>
                <p>As análises de terceiros são usadas para rastrear e medir o uso deste site, para que possamos continuar produzindo conteúdo atrativo. Esses cookies podem rastrear itens como o tempo que você passa no site ou as páginas visitadas, o que nos ajuda a entender como podemos melhorar o site para você. Periodicamente, testamos novos recursos e fazemos alterações subtis na maneira como o site se apresenta. Quando ainda estamos testando novos recursos, esses cookies podem ser usados para garantir que você receba uma experiência consistente enquanto estiver no site, enquanto entendemos quais otimizações os nossos usuários mais apreciam. À medida que vendemos produtos, é importante entendermos as estatísticas sobre quantos visitantes de nosso site realmente compram e, portanto, esse é o tipo de dados que esses cookies rastrearão. Isso é importante para você, pois significa que podemos fazer previsões de negócios com precisão que nos permitem analizar nossos custos de publicidade e produtos para garantir o melhor preço possível.</p>
                
                <h3 className="text-xl font-bold text-slate-800 mt-8">Compromisso do Usuário</h3>
                <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que a HCO oferece no site e com caráter enunciativo, mas não limitativo:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
                  <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou casas de apostas, jogos de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
                  <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) da HCO, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
                </ul>

                <h3 className="text-xl font-bold text-slate-800 mt-8">Mais informações</h3>
                <p>Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</p>
                <p className="mt-4 text-sm text-slate-500">Esta política é efetiva a partir de Set/2022.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Section 1: Logo & About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 text-white p-1.5 rounded font-bold text-lg">HCO</div>
                <h2 className="text-white font-bold text-lg">HealthyCare Occupational</h2>
              </div>
              <p className="text-sm leading-relaxed mb-4">Medicina do Trabalho com excelência, cuidando da saúde dos seus colaboradores e da conformidade legal da sua empresa.</p>
            </div>
            
            {/* Section 2: Serviços */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Serviços</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('resultados')} className="hover:text-blue-400 transition text-left">Resultados de Exames</button></li>
                <li><button onClick={() => scrollToSection('dicas')} className="hover:text-blue-400 transition text-left">Dicas de Saúde</button></li>
                <li><button onClick={() => scrollToSection('normativas')} className="hover:text-blue-400 transition text-left">Normativas</button></li>
                <li><button onClick={() => scrollToSection('esocial')} className="hover:text-blue-400 transition text-left">Gestão em SST</button></li>
              </ul>
            </div>
            
            {/* Section 3: Links Úteis */}
            <div>
               <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Links Úteis</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.gov.br/trabalho-e-previdencia" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">Ministério do Trabalho</a></li>
                <li><a href="https://www.gov.br/esocial" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">eSocial</a></li>
                <li><a href="https://www.cfm.org.br" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">Conselho Federal de Medicina</a></li>
                <li><a href="https://www.anamt.org.br" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">ANAMT</a></li>
              </ul>
            </div>

            {/* Section 4: Redes Sociais */}
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" aria-label="Facebook" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition duration-300"><Facebook size={20} /></a>
                <a href="#" aria-label="Instagram" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition duration-300"><Instagram size={20} /></a>
                <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition duration-300"><Linkedin size={20} /></a>
                <a href="#" aria-label="YouTube" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition duration-300"><Youtube size={20} /></a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 text-sm">
              <div className="text-center md:text-left">
                <p>© 2025 HCO - HealthyCare Occupational. Todos os direitos reservados.</p>
                <p className="text-slate-500 mt-1">Desenvolvido com foco em gestão e saúde ocupacional.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#" className="hover:text-white transition">Termos de Uso</a>
              <span className="text-slate-600">|</span>
              <button onClick={() => scrollToSection('politicadeprivacidade')} className="hover:text-white transition">Política de Privacidade</button>
              <span className="text-slate-600">|</span>
              <a href="#" className="hover:text-white transition">LGPD</a>
              <span className="text-slate-600">|</span>
              <a href="#" className="hover:text-white transition">Direitos Autorais</a>
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
      
    </div>
  );
}

// Icon helper component for cleaner code if needed, but handled directly in map functions above.
const UserCheck = ({size, className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
);