import { useState, useEffect, useMemo, memo, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, Users, Target, Phone, Menu, X, ChevronDown } from 'lucide-react'

import { AvatarCircles } from '@/components/ui/avatar-circles'
import FuturisticHero from '@/components/FuturisticHero'
import AnimatedMarqueeHero from '@/components/AnimatedMarqueeHero'
import { BioSection } from '@/components/BioSection'

const WhatsAppButton = memo(({ text = "Fale comigo no WhatsApp", className = "", size = "normal" }: { text?: string; className?: string; size?: string }) => {
  const phoneNumber = "5585985271854"
  const message = useMemo(() => encodeURIComponent("Olá, vim pelo site e quero aumentar minhas vendas com tráfego pago!"), [])
  const href = useMemo(() => `https://wa.me/${phoneNumber}?text=${message}`, [message])
  
  const sizeClasses = size === "small" ? "text-sm px-4 py-2" : "py-3 px-6"
  
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold ${sizeClasses} rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      {text}
    </motion.a>
  )
})
WhatsAppButton.displayName = 'WhatsAppButton'

const AnimatedCounter = ({ end, duration = 2, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = end / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [end, duration])

  return <span>{prefix}{count}{suffix}</span>
}

const RotatingNames = () => {
  const names = ["Maria Silva", "João Santos", "Ana Costa", "Pedro Almeida"]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % names.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-8 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-white text-lg font-medium"
        >
          {names[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         
          <div className="flex items-center">
            <img 
              src="/logo-walter-otmz.svg" 
              alt="Walter Paz - Gestor de Tráfego" 
              className="object-contain drop-shadow-lg"
              style={{ 
                height: '40px',
                width: 'auto',
                maxHeight: '40px',
                maxWidth: '100px'
              }}
              loading="eager"
              width="100"
              height="40"
              fetchpriority="high"
              decoding="sync"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-red-600 transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-red-600 transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('resultados')} className="text-white hover:text-red-600 transition-colors">
              Resultados
            </button>
            <button onClick={() => scrollToSection('depoimentos')} className="text-white hover:text-red-600 transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-white hover:text-red-600 transition-colors">
              FAQ
            </button>
          </nav>

          {/* WhatsApp Button */}
          <div className="hidden md:block">
            <WhatsAppButton text="Falar no WhatsApp" size="small" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-red-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-black border-t border-gray-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-white hover:text-red-600 transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('sobre')} className="block px-3 py-2 text-white hover:text-red-600 transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('resultados')} className="block px-3 py-2 text-white hover:text-red-600 transition-colors">
                Resultados
              </button>
              <button onClick={() => scrollToSection('depoimentos')} className="block px-3 py-2 text-white hover:text-red-600 transition-colors">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('faq')} className="block px-3 py-2 text-white hover:text-red-600 transition-colors">
                FAQ
              </button>
              <div className="px-3 py-2">
                <WhatsAppButton text="Falar no WhatsApp" size="small" />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('conversas')
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]) // Array of expanded FAQ indices
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleVideoLoadedData = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }

  const toggleFaq = (index: number) => {
    setExpandedFaqs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) // Remove if already expanded
        : [...prev, index] // Add if not expanded
    )
  }

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Proprietária de E-commerce",
      text: "Em apenas 2 meses trabalhando com o Walter, meu faturamento triplicou! O WhatsApp não para de receber mensagens de clientes interessados."
    },
    {
      name: "João Santos", 
      role: "Consultor de Vendas",
      text: "Finalmente encontrei alguém que entende de tráfego pago de verdade. Resultados consistentes mês após mês. Muito satisfeito!"
    },
    {
      name: "Ana Costa",
      role: "Infoprodutora", 
      text: "O Walter transformou meu negócio. Hoje tenho uma máquina de vendas funcionando 24/7. Não consigo imaginar meu negócio sem tráfego pago."
    }
  ]

  const clientResults = [
    { name: "Maria Silva", roi: "556%", business: "E-commerce de Moda" },
    { name: "João Santos", roi: "596%", business: "Infoprodutos" },
    { name: "Ana Costa", roi: "109%", business: "Consultoria" },
    { name: "Pedro Almeida", roi: "181%", business: "Agência Digital" },
    { name: "Carla Mendes", roi: "561%", business: "Loja Virtual" },
    { name: "Roberto Lima", roi: "526%", business: "Curso Online" },
    { name: "Juliana Oliveira", roi: "114%", business: "Clínica Odontológica" },
    { name: "Carlos Ferreira", roi: "472%", business: "Academia" },
    { name: "Patricia Souza", roi: "493%", business: "Restaurante" },
    { name: "Lucas Martins", roi: "213%", business: "Pet Shop" },
    { name: "Fernanda Rocha", roi: "144%", business: "Escritório de Advocacia" },
    { name: "Rafael Costa", roi: "392%", business: "Imobiliária" }
  ]

  const faqs = [
    {
      question: "Como funciona o tráfego pago?",
      answer: "Tráfego pago são anúncios estratégicos que colocam seu negócio na frente de pessoas que já estão procurando por seus produtos ou serviços. Você paga apenas quando alguém clica no seu anúncio."
    },
    {
      question: "Quanto preciso investir para começar?",
      answer: "O investimento varia conforme seu nicho e objetivos. Trabalhamos com budgets a partir de R$ 1.500/mês para campanhas efetivas. O importante é começar e escalar conforme os resultados."
    },
    {
      question: "Em quanto tempo vejo resultados?",
      answer: "Geralmente os primeiros resultados aparecem em 7-15 dias. Leads qualificados chegando no seu WhatsApp em 48-72 horas. Otimizações contínuas garantem melhores resultados ao longo do tempo."
    },
    {
      question: "Qual a diferença entre tráfego pago e orgânico?",
      answer: "Tráfego pago traz resultados imediatos e mensuráveis, enquanto o orgânico demora meses para gerar resultados. Com tráfego pago, você controla quem vê seus anúncios e quanto gasta."
    },
    {
      question: "Como sei se o tráfego pago é para meu negócio?",
      answer: "Se você tem um produto ou serviço que resolve um problema real, tráfego pago é para você. Funciona para praticamente todos os nichos: e-commerce, serviços, consultoria, infoprodutos, etc."
    },
    {
      question: "Vou ter que gerenciar as campanhas sozinho?",
      answer: "Não! Eu cuido de tudo para você. Desda criação das campanhas até a otimização diária. Você só precisa receber os leads qualificados no WhatsApp e focar em fechar vendas."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      {/* Hero Section - Futuristic Hero with Video Background */}
      <section id="home" className="relative min-h-screen overflow-hidden bg-black">
        {/* Video Background - z-0 */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          onLoadedData={handleVideoLoadedData}
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ filter: 'brightness(0.5)' }}
        >
          <source src="/video/background.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay - z-1 */}
        <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none" />
        
        {/* Content overlay - positioned above video background */}
        <div className="relative z-10">
          <FuturisticHero 
            title="Não conte com a sorte, invista em Tráfego Pago"
            subtitle="Descubra como receber clientes qualificados todos os dias no seu WhatsApp querendo comprar."
            ctaText="Fale comigo no WhatsApp"
            onCtaClick={() => {
              const phoneNumber = "5585985271854"
              const message = encodeURIComponent("Olá, vim pelo site e quero aumentar minhas vendas com tráfego pago!")
              window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
            }}
          />
        </div>
        
        {/* Avatar Circles Component */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30">
          <AvatarCircles
            numPeople={99}
          />
        </div>
      </section>

      {/* Bio Section */}
      <BioSection
        name="Walter Paz"
        title="Gestor de Tráfego Pago"
        bio="Com anos de experiência transformando investimentos em resultados reais, ajudo empresas e empreendedores a escalarem seus negócios através de estratégias avançadas de tráfego pago. Minha missão é colocar seu negócio na frente de quem realmente importa: seus clientes ideais."
        photoUrl="/logo-walter-otmz.svg"
        ctaText="Vamos conversar sobre seu negócio"
        onCtaClick={() => {
          const phoneNumber = "5585985271854"
          const message = encodeURIComponent("Olá Walter! Vi seu site e quero saber mais sobre tráfego pago para meu negócio.")
          window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
        }}
        stats={[
          { value: "500+", label: "Clientes Atendidos" },
          { value: "5M+", label: "Investidos em Ads" },
          { value: "400%", label: "ROI Médio" }
        ]}
      />

      {/* Results Section - Animated Marquee Hero */}
      <section id="resultados" className="pt-0 pb-20 px-4">
        <AnimatedMarqueeHero
          tagline="Resultados Comprovados"
          title={<>Resultados que <span className="text-red-600">Falam por Si</span></>}
          description="Números reais de clientes reais que investiram em tráfego pago e transformaram seus negócios"
          ctaText="Quero resultados como esses"
          images={[
            '/resultados/IMG-20251122-WA0045.jpg',
            '/resultados/IMG-20251122-WA0046.jpg',
            '/resultados/IMG-20251122-WA0047.jpg',
            '/resultados/IMG-20251122-WA0048.jpg',
            '/resultados/IMG-20251122-WA0049.jpg',
            '/resultados/IMG-20251122-WA0050.jpg',
            '/resultados/IMG-20251122-WA0051.jpg',
            '/resultados/IMG-20251122-WA0052.jpg',
          ]}
        />
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Por que Investir em Tráfego Pago?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Transforme seu negócio com estratégias comprovadas de marketing digital
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800 text-center">
              <div className="text-red-600 mb-6">
                <Users className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-4">Alcance muito mais pessoas com Tráfego Pago</h3>
              <p className="text-gray-300">Expanda seu negócio para milhares de potenciais clientes que realmente têm interesse no que você oferece.</p>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800 text-center">
              <div className="text-red-600 mb-6">
                <Target className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-4">Alcance melhores resultados mostrando o seu negócio para as pessoas certas!</h3>
              <p className="text-gray-300">Segmentação inteligente que coloca sua oferta na frente de quem está pronto para comprar.</p>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-800 text-center">
              <div className="text-red-600 mb-6">
                <TrendingUp className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-4">Não ignore, invista em Tráfego Pago!</h3>
              <p className="text-gray-300">Enquanto seus concorrentes esperam, você está conquistando novos clientes todos os dias.</p>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-red-900/20 to-red-800/20 rounded-2xl p-8 backdrop-blur-sm border border-red-800/50">
            <h3 className="text-2xl font-bold text-white mb-4">Seus concorrentes já estão investindo.</h3>
            <p className="text-xl text-red-600 font-bold mb-6">E você, vai ficar para trás?</p>
            <WhatsAppButton text="Quero aumentar minhas vendas agora" />
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-400">
              Tire suas dúvidas sobre tráfego pago
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-800/30 transition-colors duration-200"
                >
                  <h3 className="text-xl font-bold text-white">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-6 h-6 text-red-600 transition-transform duration-200 ${
                      expandedFaqs.includes(index) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedFaqs.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 bg-gradient-to-r from-red-900/20 to-red-800/20 rounded-2xl p-8 backdrop-blur-sm border border-red-800/50">
            <h3 className="text-2xl font-bold text-white mb-4">Ainda tem dúvidas?</h3>
            <p className="text-lg text-gray-300 mb-6">Vamos conversar sobre seu negócio!</p>
            <WhatsAppButton text="Falar comigo no WhatsApp" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-xl font-bold">Walter Paz</span>
              </div>
              <p className="text-gray-400">
                Gestor de Tráfego Pago especializado em gerar resultados reais para seu negócio.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contato</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>85 9 8527-1854</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>WhatsApp</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Horário</h4>
              <p className="text-gray-400">
                Segunda a Sexta<br />
                9h às 18h
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 Walter Paz - Gestor de Tráfego. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}