import React, { useState } from 'react';
import { 
  ChevronLeft, FileText, Eraser, Download, User, MapPin, Briefcase, Building, Save 
} from 'lucide-react';

export default function FichaCadastral({ onBack }) {
  // Estado inicial com todos os campos mapeados do CSV
  const initialFormState = {
    // Identificação
    nomeFuncionario: '',
    nomeMae: '',
    dataNascimento: '',
    sexo: '',
    estadoCivil: '',
    naturalidade: '',
    cor: '',
    deficiencia: 'Não',
    
    // Documentos
    cpf: '',
    rg: '',
    ufRg: '',
    orgaoExpedidor: '',
    pisPasep: '',
    ctps: '',
    serieCtps: '',
    ufCtps: '',
    dataEmissaoCtps: '',
    
    // Contato e Endereço
    telefone: '',
    celularSms: '',
    email: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    cep: '',
    
    // Dados Contratuais
    matricula: '',
    codFuncionario: '',
    dataAdmissao: '',
    situacao: 'Ativo',
    cargo: '',
    funcao: '',
    cbo: '',
    setor: '',
    turno: '',
    regimeRevezamento: '',
    
    // Dados da Unidade (Empresa)
    codUnidade: '',
    nomeUnidade: '',
    cnpjUnidade: '',
    razaoSocial: '',
    enderecoUnidade: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [activeSection, setActiveSection] = useState('pessoais');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados salvos:", formData);
    alert("Cadastro salvo com sucesso! (Simulação)");
  };

  const handleClear = () => {
    if (window.confirm("Tem certeza que deseja limpar todo o formulário?")) {
      setFormData(initialFormState);
    }
  };

  const exportCSV = () => {
    // Cabeçalho simples baseado nas chaves
    const headers = Object.keys(formData).join(',');
    const values = Object.values(formData).map(v => `"${v}"`).join(',');
    const csvContent = `data:text/csv;charset=utf-8,${headers}\n${values}`;
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "cadastro_esocial.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Componente de Seção para organizar o layout
  const FormSection = ({ id, title, icon: Icon, children }) => (
    <div className={`mb-8 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all ${activeSection === id ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}>
      <div 
        className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center gap-3 cursor-pointer hover:bg-gray-100"
        onClick={() => setActiveSection(id)}
      >
        <div className={`p-2 rounded-lg ${activeSection === id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <div className={`p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${activeSection !== id && 'hidden md:grid'}`}>
        {children}
      </div>
    </div>
  );

  // Componente de Input Reutilizável
  const Input = ({ label, name, type = "text", required = false, placeholder = "", colSpan = 1 }) => (
    <div className={`flex flex-col gap-1 col-span-1 ${colSpan > 1 ? `md:col-span-${colSpan}` : ''}`}>
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
        required={required}
      />
    </div>
  );

  const Select = ({ label, name, options, required = false }) => (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-sm"
        required={required}
      >
        <option value="">Selecione...</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 font-sans pb-20 pt-36">
      {/* Cabeçalho Fixo */}
      <header className="bg-blue-700 text-white shadow-lg relative">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="p-1 hover:bg-blue-600 rounded-full transition-colors mr-2">
                <ChevronLeft size={24} />
            </button>
            <FileText className="h-6 w-6" />
            <div>
              <h1 className="text-xl font-bold">Ficha Cadastral eSocial</h1>
              <p className="text-blue-200 text-xs">Preenchimento de Modelo I</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={handleClear}
              className="flex items-center gap-2 px-4 py-2 bg-blue-800 hover:bg-blue-900 rounded-lg text-sm font-medium transition-colors"
            >
              <Eraser size={16} />
              <span className="hidden sm:inline">Limpar</span>
            </button>
            <button 
              onClick={exportCSV}
              className="flex items-center gap-2 px-4 py-2 bg-white text-blue-700 hover:bg-blue-50 rounded-lg text-sm font-bold transition-colors shadow-sm"
            >
              <Download size={16} />
              <span className="hidden sm:inline">Exportar CSV</span>
            </button>
          </div>
        </div>
      </header>

      {/* Formulário Principal */}
      <main className="max-w-5xl mx-auto px-4 py-8 mt-4">
        <form onSubmit={handleSubmit}>
          
          {/* Seção 1: Dados Pessoais */}
          <FormSection id="pessoais" title="Dados Pessoais" icon={User}>
            <Input label="Nome Completo do Funcionário" name="nomeFuncionario" required colSpan={2} />
            <Input label="Nome da Mãe" name="nomeMae" colSpan={1} />
            
            <Input label="Data de Nascimento" name="dataNascimento" type="date" required />
            <Select label="Sexo" name="sexo" options={["Masculino", "Feminino"]} required />
            <Select label="Estado Civil" name="estadoCivil" options={["Solteiro(a)", "Casado(a)", "Divorciado(a)", "Viúvo(a)", "União Estável"]} />
            
            <Input label="Naturalidade" name="naturalidade" placeholder="Cidade/UF" />
            <Select label="Cor/Raça" name="cor" options={["Branca", "Preta", "Parda", "Amarela", "Indígena"]} />
            <Select label="Possui Deficiência?" name="deficiencia" options={["Não", "Física", "Auditiva", "Visual", "Mental", "Múltipla"]} />
          </FormSection>

          {/* Seção 2: Documentação */}
          <FormSection id="documentos" title="Documentos" icon={FileText}>
            <Input label="CPF" name="cpf" placeholder="000.000.000-00" required />
            <Input label="PIS/PASEP" name="pisPasep" required />
            <div className="hidden md:block"></div> {/* Spacer */}

            <Input label="RG (Número)" name="rg" />
            <Input label="Órgão Expedidor" name="orgaoExpedidor" placeholder="Ex: SSP" />
            <Input label="UF RG" name="ufRg" placeholder="Ex: SP" />

            <Input label="Número CTPS" name="ctps" />
            <Input label="Série CTPS" name="serieCtps" />
            <Input label="UF CTPS" name="ufCtps" />
            <Input label="Data Emissão CTPS" name="dataEmissaoCtps" type="date" />
          </FormSection>

          {/* Seção 3: Endereço e Contato */}
          <FormSection id="endereco" title="Endereço e Contato" icon={MapPin}>
            <Input label="CEP" name="cep" placeholder="00000-000" />
            <Input label="Logradouro (Rua, Av...)" name="endereco" colSpan={2} />
            
            <Input label="Número" name="numero" />
            <Input label="Complemento" name="complemento" placeholder="Apto, Bloco..." />
            <Input label="Bairro" name="bairro" />
            
            <Input label="Cidade" name="cidade" />
            <Input label="UF" name="uf" placeholder="Ex: SP" />
            <div className="hidden md:block"></div>

            <Input label="Telefone Fixo" name="telefone" />
            <Input label="Celular (SMS)" name="celularSms" required />
            <Input label="E-mail Pessoal" name="email" type="email" colSpan={1} />
          </FormSection>

          {/* Seção 4: Dados Contratuais */}
          <FormSection id="contrato" title="Dados Contratuais" icon={Briefcase}>
            <Input label="Matrícula" name="matricula" />
            <Input label="Cód. Funcionário" name="codFuncionario" />
            <Select label="Situação" name="situacao" options={["Ativo", "Férias", "Afastado", "Desligado"]} />

            <Input label="Data de Admissão" name="dataAdmissao" type="date" required />
            <Input label="Cargo" name="cargo" required />
            <Input label="CBO" name="cbo" placeholder="Classificação Brasileira de Ocupações" />

            <Input label="Setor/Departamento" name="setor" />
            <Input label="Turno de Trabalho" name="turno" />
            <Input label="Regime de Revezamento" name="regimeRevezamento" />
          </FormSection>

          {/* Seção 5: Dados da Unidade/Empresa */}
          <FormSection id="unidade" title="Dados da Unidade (Local de Trabalho)" icon={Building}>
            <Input label="Cód. Unidade" name="codUnidade" />
            <Input label="Nome da Unidade" name="nomeUnidade" colSpan={2} />
            
            <Input label="CNPJ da Unidade" name="cnpjUnidade" />
            <Input label="Razão Social" name="razaoSocial" colSpan={2} />
            <Input label="Endereço da Unidade" name="enderecoUnidade" colSpan={3} />
          </FormSection>

          {/* Botão Salvar Flutuante Mobile e Fixo Desktop */}
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg md:relative md:bg-transparent md:border-0 md:shadow-none md:p-0 mt-6 flex justify-end z-40">
             <button
              type="submit"
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl shadow-md transition-all transform hover:scale-105"
            >
              <Save size={20} />
              Salvar Cadastro
            </button>
          </div>

        </form>
      </main>
    </div>
  );
}