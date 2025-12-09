import React, { useState } from 'react';
import { 
  Menu, X, Search, FileText, Activity, AlertTriangle, 
  CheckCircle, Users, Building, Phone, Mail, MapPin, 
  ChevronRight, ArrowRight, Shield, Stethoscope, Eye, 
  Ear, Wind, Beaker, Truck, ClipboardList, BookOpen
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700">
      
      {/* --- HEADER --- */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo Placeholder - Replicating text logo style */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="bg-blue-600 text-white p-2 rounded-lg font-bold text-xl">HCO</div>
            <div>
              <h1 className="text-xl font-bold text-blue-900 leading-none">HealthyCare</h1>
              <p className="text-xs text-blue-500 font-semibold tracking-wider">OCCUPATIONAL</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {['Início', 'Resultados', 'eSocial', 'Dicas', 'Normativas', 'Gestão', 'Cadastro'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))}
                className="hover:text-blue-600 transition-colors uppercase text-xs font-bold tracking-wide"
              >
                {item}
              </button>
            ))}
            <button onClick={() => scrollToSection('contato')} className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition font-bold shadow-lg shadow-blue-200">
              Contato
            </button>
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
              {['Início', 'Resultados', 'eSocial', 'Dicas', 'Normativas', 'Gestão', 'Cadastro', 'Contato'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))}
                  className="text-left font-semibold text-slate-600 hover:text-blue-600 py-2 border-b border-slate-50"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section id="inicio" className="pt-24 pb-12 lg:pt-40 lg:pb-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
              Soluções em Saúde Corporativa
            </span>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-blue-900 leading-tight">
              Medicina do Trabalho <span className="text-blue-600">Especializada</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Soluções completas em Saúde Ocupacional para sua empresa. Gestão eficiente, conformidade legal total com o eSocial e cuidado genuíno com seus colaboradores.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollToSection('resultados')} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition flex items-center gap-2 shadow-lg hover:shadow-xl">
                <Search size={20} /> Consultar Resultados
              </button>
              <button onClick={() => scrollToSection('contato')} className="bg-white text-blue-600 border-2 border-blue-100 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition">
                Fale Conosco
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200 mt-8">
              <div>
                <h4 className="font-bold text-blue-900 text-lg">Online</h4>
                <p className="text-xs text-slate-500">Resultados ágeis</p>
              </div>
              <div>
                <h4 className="font-bold text-blue-900 text-lg">100% Legal</h4>
                <p className="text-xs text-slate-500">Conformidade eSocial</p>
              </div>
              <div>
                <h4 className="font-bold text-blue-900 text-lg">Gestão</h4>
                <p className="text-xs text-slate-500">Controle total</p>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            {/* Abstract Graphic Element representing Health/Tech */}
            <div className="bg-blue-600 rounded-3xl p-1 shadow-2xl rotate-3">
               <div className="bg-white rounded-2xl overflow-hidden h-96 flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80")'}}>
                  <div className="bg-blue-900/80 p-8 text-center rounded-xl backdrop-blur-sm m-8">
                    <Activity size={48} className="text-white mx-auto mb-4" />
                    <h3 className="text-white text-2xl font-bold">Tecnologia & Saúde</h3>
                    <p className="text-blue-100 mt-2">Integrando medicina e dados para segurança da sua empresa.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONSULTA DE RESULTADOS --- */}
      <section id="resultados" className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-blue-900 p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">Consulta de Resultados</h3>
              <p className="text-blue-200">Acesse seus exames médicos ocupacionais de forma rápida e segura</p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">CPF do Colaborador</label>
                  <input type="text" placeholder="000.000.000-00" className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Data do Exame</label>
                  <input type="date" className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Protocolo (Opcional)</label>
                  <input type="text" placeholder="Ex: 123456" className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
              </div>
              <button className="w-full mt-6 bg-green-600 text-white font-bold py-4 rounded-lg hover:bg-green-700 transition flex justify-center items-center gap-2">
                <Search size={20} /> Buscar Resultado
              </button>
              <div className="mt-6 flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                <Shield className="text-blue-600 flex-shrink-0" size={20} />
                <p className="text-sm text-blue-800">Seus dados estão protegidos e seguem a LGPD. Apenas colaboradores autorizados e o próprio paciente podem acessar os resultados detalhados.</p>
              </div>
            </div>
          </div>

          {/* Service Types Cards */}
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
            {[
              { icon: FileText, title: "Admissional", desc: "Avaliação inicial" },
              { icon: Activity, title: "Periódico", desc: "Acompanhamento" },
              { icon: Users, title: "Mudança de Função", desc: "Nova atividade" },
              { icon: ArrowRight, title: "Demissional", desc: "Desligamento" },
              { icon: CheckCircle, title: "Retorno", desc: "Após afastamento" },
              { icon: Beaker, title: "Complementares", desc: "Laboratoriais" },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition text-center border border-slate-100">
                <service.icon className="mx-auto text-blue-600 mb-2" size={24} />
                <h4 className="font-bold text-slate-800 text-sm">{service.title}</h4>
                <p className="text-xs text-slate-500 mt-1">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ESOCIAL --- */}
      <section id="esocial" className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
        <div className="container mx-auto px-4">
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
        <div className="container mx-auto px-4">
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
        <div className="container mx-auto px-4">
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
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Entre em Contato</h2>
            <p className="text-slate-600 mt-2">Nossa equipe está pronta para atender sua empresa.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-slate-50 rounded-xl">
              <Phone className="mx-auto text-blue-600 mb-4" size={32} />
              <h4 className="font-bold text-slate-800 mb-2">Telefone</h4>
              <p className="text-slate-600">(11) 3000-0000</p>
              <p className="text-slate-600">(11) 98765-4321</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl">
              <Mail className="mx-auto text-blue-600 mb-4" size={32} />
              <h4 className="font-bold text-slate-800 mb-2">E-mail</h4>
              <p className="text-slate-600">contato@hco.com.br</p>
              <p className="text-slate-600">atendimento@hco.com.br</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl">
              <MapPin className="mx-auto text-blue-600 mb-4" size={32} />
              <h4 className="font-bold text-slate-800 mb-2">Endereço</h4>
              <p className="text-slate-600">Av. Paulista, 1000</p>
              <p className="text-slate-600">São Paulo - SP, 01310-100</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 text-white p-1.5 rounded font-bold text-lg">HCO</div>
                <h2 className="text-white font-bold text-lg">HealthyCare Occupational</h2>
              </div>
              <p className="text-sm max-w-sm mb-4">Medicina do Trabalho com excelência, cuidando da saúde dos seus colaboradores e da conformidade legal da sua empresa.</p>
              <div className="flex gap-4">
                {/* Social Placeholders */}
                <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">FB</div>
                <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">IN</div>
                <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">LN</div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Serviços</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#resultados" className="hover:text-blue-400 transition">Resultados de Exames</a></li>
                <li><a href="#dicas" className="hover:text-blue-400 transition">Dicas de Saúde</a></li>
                <li><a href="#normativas" className="hover:text-blue-400 transition">Normativas</a></li>
                <li><a href="#gestao" className="hover:text-blue-400 transition">Gestão em SST</a></li>
              </ul>
            </div>
            
            <div>
               <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Links Úteis</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition">Ministério do Trabalho</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">eSocial</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">CFM</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">ANAMT</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 HCO - HealthyCare Occupational. Todos os direitos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">Termos de Uso</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition">Política de Privacidade</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition">LGPD</a>
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