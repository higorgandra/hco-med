import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';

export default function Contato({ onNavigate }) {
  const [formResult, setFormResult] = useState({ message: "", type: "" });
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [countdown, setCountdown] = useState(0);
  const timerRef = useRef(null);
  const submitButtonRef = useRef(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [messageText, setMessageText] = useState("");

  const handleInputChange = (e) => {
    const { name, validity } = e.target;
    let message = '';
    if (!validity.valid) {
      if (validity.valueMissing) message = 'Campo obrigatório';
      else if (validity.typeMismatch) message = 'Formato inválido';
      else if (validity.tooShort) message = `Mínimo de ${e.target.minLength} caracteres`;
      else message = 'Valor inválido';
    }
    setFieldErrors(prev => ({ ...prev, [name]: message }));
  };

  const handlePhoneInput = (e) => {
    let v = e.target.value;
    v = v.replace(/\D/g, "");
    if (v.length > 11) v = v.slice(0, 11);
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");
    e.target.value = v;
    handleInputChange(e);
  };

  const cancelSubmission = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setSubmitStatus('idle');
    setCountdown(0);
  };

  useEffect(() => {
    if (submitStatus !== 'counting') return;
    const handleCancelClick = (event) => {
      if (submitButtonRef.current && submitButtonRef.current.contains(event.target)) return;
      cancelSubmission();
    };
    const handleWindowBlur = () => cancelSubmission();
    document.addEventListener('click', handleCancelClick, true);
    window.addEventListener('blur', handleWindowBlur);
    return () => {
      document.removeEventListener('click', handleCancelClick, true);
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, [submitStatus]);

  const onSubmitContactForm = async (event) => {
    event.preventDefault();
    if (submitStatus !== 'idle') return;
    const form = event.target;
    const formData = new FormData(form);
    const mensagem = formData.get("mensagem");
    if (mensagem && mensagem.length < 20) {
      setFieldErrors(prev => ({ ...prev, mensagem: "Mínimo de 20 caracteres" }));
      return;
    }
    setSubmitStatus('counting');
    setCountdown(3);
    let count = 3;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(async () => {
      count -= 1;
      setCountdown(count);
      if (count <= 0) {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setSubmitStatus('sending');
        formData.append("subject", `${formData.get("empresa")} - ${formData.get("assunto")}`);
        formData.append("access_key", "5cccab4a-71e3-4c20-8043-7f92c90c1723");
        const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
        const data = await response.json();
        if (data.success) {
          setSubmitStatus('success');
          setFormResult({ message: "Mensagem enviada com sucesso! Agradecemos o seu contato.", type: "success" });
          form.reset();
          setMessageText("");
          setTimeout(() => { setFormResult({ message: "", type: "" }); setSubmitStatus('idle'); }, 3000);
        } else {
          setSubmitStatus('idle');
          setFormResult({ message: `Ocorreu um erro: ${data.message}. Tente novamente.`, type: "error" });
          setTimeout(() => { setFormResult({ message: "", type: "" }); }, 6000);
        }
      }
    }, 1000);
  };

  return (
    <div className="pt-36 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <button onClick={() => onNavigate('home')} className="hover:text-[#0F2C4A] transition-colors">Home</button>
              <ChevronRight size={16} className="text-slate-400" />
              <span className="font-semibold text-slate-700">Contato</span>
            </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-black text-[#0F2C4A] mb-4">Entre em Contato</h2>
              <p className="text-slate-600 mt-2">Nossa equipe está pronta para atender sua empresa</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#0F2C4A]/10 p-3 rounded-lg text-[#0F2C4A]"><Phone size={24} /></div>
                  <div><h4 className="font-bold text-slate-800 text-lg mb-1">Telefone</h4><p className="text-slate-600">(71) 98315-6060</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#0F2C4A]/10 p-3 rounded-lg text-[#0F2C4A]"><Mail size={24} /></div>
                  <div><h4 className="font-bold text-slate-800 text-lg mb-1">E-mail</h4><p className="text-slate-600">comercial@clinicahco.com.br</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#0F2C4A]/10 p-3 rounded-lg text-[#0F2C4A]"><MapPin size={24} /></div>
                  <div><h4 className="font-bold text-slate-800 text-lg mb-1">Endereço</h4><p className="text-slate-600">Rua Senador Theotônio Vilela, 190</p><p>Ed. Convention Center 3º andar</p><p className="text-slate-600">Parque Bela Vista, Salvador - BA, 40279-435</p></div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#0F2C4A]/10 p-3 rounded-lg text-[#0F2C4A]"><Clock size={24} /></div>
                  <div><h4 className="font-bold text-slate-800 text-lg mb-1">Horário de Atendimento</h4><p className="text-slate-600">Segunda a Sexta: 8h às 18h</p><p className="text-slate-600">Sábado: 8h às 12h</p></div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <form className="space-y-6" onSubmit={onSubmitContactForm}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2"><label htmlFor="name" className="text-sm font-bold text-slate-700">Nome Completo *</label><input type="text" id="name" name="name" onInput={handleInputChange} className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-white" required />{fieldErrors.name && <span className="text-red-500 text-xs font-bold">{fieldErrors.name}</span>}</div>
                    <div className="space-y-2"><label htmlFor="empresa" className="text-sm font-bold text-slate-700">Empresa *</label><input type="text" id="empresa" name="empresa" onInput={handleInputChange} className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-white" required />{fieldErrors.empresa && <span className="text-red-500 text-xs font-bold">{fieldErrors.empresa}</span>}</div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2"><label htmlFor="email" className="text-sm font-bold text-slate-700">E-mail *</label><input type="email" id="email" name="email" onInput={handleInputChange} className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-white" required />{fieldErrors.email && <span className="text-red-500 text-xs font-bold">{fieldErrors.email}</span>}</div>
                    <div className="space-y-2"><label htmlFor="telefone" className="text-sm font-bold text-slate-700">Telefone *</label><input type="tel" id="telefone" name="telefone" onInput={handlePhoneInput} className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-white" required maxLength="15" />{fieldErrors.telefone && <span className="text-red-500 text-xs font-bold">{fieldErrors.telefone}</span>}</div>
                  </div>
                  <div className="space-y-2"><label htmlFor="assunto" className="text-sm font-bold text-slate-700">Assunto *</label><select id="assunto" name="assunto" onInput={handleInputChange} className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition text-slate-600 bg-white" required><option value="">Selecione um assunto</option><option value="exames">Exames Ocupacionais</option><option value="programas">Programas de SST</option><option value="treinamentos">Treinamentos</option><option value="consultoria">Consultoria</option><option value="outros">Outros</option></select>{fieldErrors.assunto && <span className="text-red-500 text-xs font-bold">{fieldErrors.assunto}</span>}</div>
                  <div className="space-y-2"><label htmlFor="pais" className="text-sm font-bold text-slate-700">País *</label><select id="pais" name="pais" defaultValue="Brasil" onInput={handleInputChange} className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition text-slate-600 bg-white" required><option value="Brasil">Brasil</option></select>{fieldErrors.pais && <span className="text-red-500 text-xs font-bold">{fieldErrors.pais}</span>}</div>
                  <div className="space-y-2"><label htmlFor="mensagem" className="text-sm font-bold text-slate-700">Mensagem *</label><textarea id="mensagem" name="mensagem" onInput={(e) => { handleInputChange(e); setMessageText(e.target.value); }} rows="5" className="w-full border border-slate-200 p-3 rounded-lg focus:ring-2 focus:ring-[#0F2C4A] outline-none transition bg-white" required minLength="20"></textarea><div className="flex justify-between items-start">{fieldErrors.mensagem ? <span className="text-red-500 text-xs font-bold">{fieldErrors.mensagem}</span> : <span></span>}<span className={`text-xs font-medium ${messageText.length < 20 ? 'text-slate-400' : 'text-green-600'}`}>{messageText.length < 20 ? `Faltam ${20 - messageText.length} caracteres` : `${messageText.length} caracteres`}</span></div></div>
                  <button type="submit" ref={submitButtonRef} disabled={submitStatus !== 'idle'} className={`w-full font-bold py-4 rounded-lg transition shadow-lg flex items-center justify-center gap-2 ${submitStatus === 'idle' ? 'bg-[#0F2C4A] text-white hover:bg-[#0A1F35]' : submitStatus === 'success' ? 'bg-green-600 text-white' : 'bg-slate-400 text-white cursor-not-allowed'}`}>{submitStatus === 'idle' && "Enviar Mensagem"}{submitStatus === 'counting' && `Enviando em ${countdown}...`}{submitStatus === 'sending' && "Aguarde..."}{submitStatus === 'success' && "Mensagem Enviada!"}</button>
                  {formResult.message && (<p className={`text-center mt-4 font-medium text-sm p-3 rounded-lg ${formResult.type === 'success' ? 'bg-green-100 text-green-800' : formResult.type === 'error' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>{formResult.message}</p>)}
                </form>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}