import React, { useState } from 'react';
import { 
  Search, FileText, Activity, 
  Users, Building, 
  ChevronRight, ChevronLeft, ArrowRight, Shield, 
  Ear, Wind, Beaker, ClipboardList, BookOpen, ChevronDown,
  HardHat, TrendingUp, Handshake,
  Gavel, FileCheck, Flame, Zap, Package, Settings, Thermometer, User, Minimize2, ArrowUpCircle, 
  CalendarCheck, FileText as FileTextIcon, Heart, Activity as ActivityIcon, Eye as EyeIcon, Wind as WindIcon, Truck as TruckIcon, FilePlus, Monitor, Weight, UserCheck as UserCheckIcon, ShieldAlert, Brain, Smile, Users as UsersIcon, ShieldCheck, AlertOctagon,
  Award, RefreshCw, Smartphone, HandCoins, Building as BuildingIcon, Info, User as UserIcon, CheckCircle as CheckCircleIcon, Calculator, ExternalLink, BarChart, FolderOpen, GraduationCap, Lightbulb, Percent, Phone, Mail, MapPin, Clock, Send
} from 'lucide-react';

export default function Orientacoes({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('exames');

  return (
    <div className="pt-36 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <button onClick={() => onNavigate('home')} className="hover:text-[#0F2C4A] transition-colors">Home</button>
              <ChevronRight size={16} className="text-slate-400" />
              <span className="font-semibold text-slate-700">Dicas e Orientações</span>
            </div>
        </div>

        <div className="w-full mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-black text-[#0F2C4A]">Dicas e Orientações</h2>
                <p className="text-slate-600 mt-2">Orientações especializadas para promover saúde e segurança no ambiente de trabalho</p>
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
                      { icon: Heart, title: "Exame Clínico Ocupacional", desc: "O que esperar durante a consulta com o médico do trabalho.", list: ["Chegue 15 minutos antes do horário", "Relate histórico de doenças e cirurgias", "Informe alergias medicamentosas", "Mencione queixas ou sintomas atuais", "Seja honesto sobre hábitos (fumo, álcool)"] },
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
  );
}