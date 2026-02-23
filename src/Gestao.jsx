import React, { useState } from 'react';
import { 
  ClipboardList, BarChart, FolderOpen, GraduationCap, Shield, ChevronRight, 
  Stethoscope, HardHat, Users, Calculator, Clock, Activity, AlertTriangle, 
  Percent, TrendingUp, Lightbulb, FileText, Monitor, Zap, ArrowUpCircle, 
  Heart, Flame, Info, ShieldCheck
} from 'lucide-react';

export default function Gestao({ onNavigate }) {
  const [activeGestaoTab, setActiveGestaoTab] = useState('programas');

  return (
    <div className="pt-36 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold text-[#0F2C4A] mb-4">Gestão de Saúde Ocupacional</h2>
            <p className="text-slate-600 mt-2">Ferramentas e recursos para gestores implementarem programas eficientes</p>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mt-3">
              <button onClick={() => onNavigate('home')} className="hover:text-[#0F2C4A] transition-colors">Home</button>
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

        </div>
      </div>
    </div>
  );
}