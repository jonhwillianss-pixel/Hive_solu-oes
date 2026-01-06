/**
 * Home Page - Sua Casa, do Projeto à Entrega
 * 
 * Design Philosophy: Warm Contemporary with Natural Textures
 * - Generous spacing and breathing room
 * - Warm color palette (golden, browns, sage green)
 * - Rounded corners and soft shadows
 * - Serif display fonts with sans-serif body text
 * - Smooth, deliberate animations and transitions
 */

import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2, Users, Zap, Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("consultoria");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const portfolioProjects = [
    {
      id: "casa-serra",
      name: "Casa da Serra",
      location: "Rio de Janeiro",
      description: "Refúgio tropical com arte vibrante e integração total com a natureza. Design que celebra a cultura carioca através de cores, texturas e espaços que convidam ao convívio.",
      mainImage: "/images/casa-serra-sala.png",
      gallery: [
        "/images/casa-serra-fachada.jpg",
        "/images/casa-serra-deck.jpeg",
        "/images/casa-serra-quarto.jpeg",
      ],
      features: ["Arte Integrada", "Piscina Natural", "Deck Tropical"],
    },
    {
      id: "casa-mm",
      name: "Casa MM",
      location: "Brasília",
      description: "Arquitetura contemporânea que dialoga com o cerrado. Teto de madeira, espelho d'água e vegetação exuberante criam uma experiência sensorial única de bem-estar.",
      mainImage: "/images/casa-mm-fachada.png",
      gallery: [
        "/images/casa-mm-sala.png",
        "/images/casa-mm-quarto.png",
        "/images/casa-mm-banheiro.png",
      ],
      features: ["Espelho D'água", "Teto em Madeira", "Vista Panorâmica"],
    },
    {
      id: "casas-jp",
      name: "Casas JP",
      location: "Brasília",
      description: "Residência que une sofisticação e funcionalidade. Mármore, madeira e vidro em harmonia perfeita, com espaços generosos que se abrem para o jardim e piscina.",
      mainImage: "/images/casas-jp-fachada.png",
      gallery: [
        "/images/casas-jp-cozinha.png",
        "/images/casas-jp-quarto.png",
      ],
      features: ["Ilha Gourmet em Mármore", "Suíte Master", "Piscina Integrada"],
    },
    {
      id: "apto-ana",
      name: "Apartamento ANA",
      location: "Brasília",
      description: "Elegância minimalista em cada detalhe. Painéis ripados, iluminação cênica e uma paleta neutra que transmite sofisticação e aconchego em um apartamento urbano.",
      mainImage: "/images/apto-ana-sala.png",
      gallery: [
        "/images/apto-ana-quarto.png",
        "/images/apto-ana-cozinha.jpg",
      ],
      features: ["Painel Ripado", "Iluminação Cênica", "Cozinha Integrada"],
    },
  ];

  const testimonials = [
    {
      name: "Marina Silva",
      role: "Proprietária - Casa da Serra",
      text: "Yago e Pedro transformaram meu sonho em realidade. A transparência e profissionalismo durante todo o processo foram excepcionais. Minha casa ficou exatamente como imaginava!",
    },
    {
      name: "Carlos Mendes",
      role: "Empresário - Casa MM",
      text: "Ficamos impressionados com o método integrado. O orçamento foi respeitado e a obra entregue no prazo. Recomendamos para todos os nossos amigos!",
    },
    {
      name: "Juliana Costa",
      role: "Arquiteta - Reforma Inteligente",
      text: "Como profissional, apreciei muito a colaboração entre arquitetura e engenharia. O resultado final superou nossas expectativas. Trabalho de excelência!",
    },
    {
      name: "Ricardo Oliveira",
      role: "Investidor - Casas JP",
      text: "Investir em um projeto com Yago e Pedro foi a melhor decisão. O gerenciamento profissional garantiu qualidade, prazos e retorno financeiro excelente.",
    },
  ];

  const faqs = [
    {
      question: "Qual é o tempo médio de um projeto de arquitetura?",
      answer: "O tempo varia conforme a complexidade do projeto. Projetos residenciais completos geralmente levam de 3 a 6 meses para a fase de projeto, e a execução da obra pode variar de 8 a 18 meses dependendo do tamanho e especificações.",
    },
    {
      question: "Como funciona o processo de orçamento?",
      answer: "Nosso diferencial é o orçamento integrado. Enquanto o arquiteto desenvolve o projeto, nosso engenheiro valida os custos em tempo real. Assim, você tem total clareza sobre o investimento desde o início, sem surpresas.",
    },
    {
      question: "Vocês gerenciam a execução da obra?",
      answer: "Sim! Oferecemos o serviço de Obra Gerenciada, onde nossa equipe de engenharia acompanha toda a execução, desde a contratação de fornecedores até a entrega das chaves, garantindo qualidade e cumprimento de prazos.",
    },
    {
      question: "Qual é o valor mínimo para contratar seus serviços?",
      answer: "Trabalhamos com projetos a partir de R$ 15.000 para consultoria de terreno. O valor final depende do escopo, tamanho e complexidade do projeto. Agende uma análise gratuita para receber um orçamento personalizado.",
    },
    {
      question: "Posso fazer alterações no projeto durante a execução?",
      answer: "Alterações são possíveis, mas recomendamos que sejam feitas ainda na fase de projeto para evitar custos adicionais. Nossa metodologia de briefing detalhado minimiza a necessidade de mudanças durante a obra.",
    },
    {
      question: "Como é o acompanhamento após a entrega da obra?",
      answer: "Oferecemos garantia e suporte pós-obra. Realizamos vistorias periódicas nos primeiros meses e estamos disponíveis para orientações sobre manutenção e pequenos ajustes que possam ser necessários.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-primary font-cormorant" style={{fontWeight: '900'}}>
            HIVE
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <a href="#servicos" className="hover:text-primary transition-colors font-poppins text-sm">
              Serviços
            </a>
            <a href="#solucoes" className="hover:text-primary transition-colors font-poppins text-sm">
              Soluções
            </a>
            <a href="#sobre" className="hover:text-primary transition-colors font-poppins text-sm">
              Sobre
            </a>
            <a href="#portfolio" className="hover:text-primary transition-colors font-poppins text-sm">
              Portfólio
            </a>
            <a href="#contato" className="hover:text-primary transition-colors font-poppins text-sm">
              Contato
            </a>
          </div>
          
          <Button className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 rounded-3xl font-poppins">
            Agende uma Análise
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border py-4">
            <div className="container flex flex-col gap-4">
              <a href="#servicos" className="hover:text-primary transition-colors font-poppins" onClick={() => setMobileMenuOpen(false)}>
                Serviços
              </a>
              <a href="#solucoes" className="hover:text-primary transition-colors font-poppins" onClick={() => setMobileMenuOpen(false)}>
                Soluções
              </a>
              <a href="#sobre" className="hover:text-primary transition-colors font-poppins" onClick={() => setMobileMenuOpen(false)}>
                Sobre
              </a>
              <a href="#portfolio" className="hover:text-primary transition-colors font-poppins" onClick={() => setMobileMenuOpen(false)}>
                Portfólio
              </a>
              <a href="#contato" className="hover:text-primary transition-colors font-poppins" onClick={() => setMobileMenuOpen(false)}>
                Contato
              </a>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-3xl font-poppins w-full">
                Agende uma Análise
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20">
        <div className="container section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-display text-foreground leading-tight">
                  Sua Casa, do Projeto à Entrega
                </h1>
                <p className="text-xl text-muted-foreground font-semibold font-poppins" style={{fontFamily: 'Lato, sans-serif'}}>
                  Arquitetura e Engenharia em Perfeita Sintonia
                </p>
              </div>
              
              <p className="text-lg text-foreground/80 leading-relaxed max-w-md font-lato">
                Somos um escritório de arquitetura e engenharia que integra design, orçamento e execução para transformar seu sonho em realidade, com total transparência.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="btn-primary">
                  Agende uma Análise de Projeto
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 lg:h-full min-h-96 rounded-3xl overflow-hidden shadow-2xl animate-fade-in-delay" style={{width: '456px'}}>
              <img
                src="/images/casa-mm-fachada.png"
                alt="Casa moderna com piscina e arquitetura contemporânea"
                className="w-full h-full object-cover" style={{width: '456px', height: '397px'}}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" style={{width: '456px', height: '397px'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="bg-background section-padding border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-heading text-foreground mb-4" style={{fontSize: '48px'}}>
              Construir ou reformar não tem que ser uma dor de cabeça
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-lato">
              Entendemos seus desafios e temos a solução
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pain Point 1 */}
            <div className="card-warm border-l-4 border-l-primary/50 hover:border-l-primary transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary font-cormorant" style={{fontFamily: 'Lato, sans-serif'}}>1</span>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg mb-2 text-foreground">
                    Medo de gastar mais do que o planejado?
                  </h3>
                  <p className="text-foreground/70 font-lato">
                    Projetos que não conversam com a realidade financeira geram custos inesperados e frustrações.
                  </p>
                </div>
              </div>
            </div>

            {/* Pain Point 2 */}
            <div className="card-warm border-l-4 border-l-primary/50 hover:border-l-primary transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary font-cormorant" style={{fontFamily: 'Lato, sans-serif'}}>2</span>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg mb-2 text-foreground">
                    Inseguro sobre as decisões?
                  </h3>
                  <p className="text-foreground/70 font-lato">
                    Escolher o terreno errado ou um projeto inadequado pode comprometer todo o seu investimento antes mesmo de começar.
                  </p>
                </div>
              </div>
            </div>

            {/* Pain Point 3 */}
            <div className="card-warm border-l-4 border-l-primary/50 hover:border-l-primary transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary font-cormorant" style={{fontFamily: 'Lato, sans-serif'}}>3</span>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg mb-2 text-foreground">
                    Pavor de gerenciar a obra?
                  </h3>
                  <p className="text-foreground/70 font-lato">
                    Lidar com fornecedores, prazos e a qualidade da execução pode ser um processo estressante e complexo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Method Section */}
      <section id="servicos" className="bg-secondary/10 section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-heading text-foreground mb-4" style={{fontSize: '48px'}}>
              Nosso Método Integrado
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-lato">
              A Solução para um Processo Tranquilo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Design */}
            <div className="card-warm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3 text-foreground">
                Design Inteligente
              </h3>
              <p className="text-sm text-muted-foreground mb-4 font-poppins">
                <span className="font-semibold text-foreground">Arquiteto</span>
              </p>
              <p className="text-foreground/80 leading-relaxed font-lato">
                Criamos projetos que unem estética e funcionalidade, baseados em uma profunda imersão nos seus sonhos e necessidades (o nosso Briefing de Descoberta).
              </p>
            </div>

            {/* Pillar 2: Budget */}
            <div className="card-warm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3 text-foreground">
                Orçamento Preciso
              </h3>
              <p className="text-sm text-muted-foreground mb-4 font-poppins">
                <span className="font-semibold text-foreground">Engenheiro</span>
              </p>
              <p className="text-foreground/80 leading-relaxed font-lato">
                Enquanto o arquiteto cria, nosso engenheiro valida os custos em tempo real. Isso garante que o projeto nasça 100% alinhado ao seu orçamento.
              </p>
            </div>

            {/* Pillar 3: Execution */}
            <div className="card-warm">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3 text-foreground">
                Execução Eficiente
              </h3>
              <p className="text-sm text-muted-foreground mb-4 font-poppins">
                <span className="font-semibold text-foreground">Equipe Unida</span>
              </p>
              <p className="text-foreground/80 leading-relaxed font-lato">
                Com um plano perfeito em mãos, nossa equipe de engenharia gerencia a obra do início ao fim, garantindo qualidade, cumprimento de prazos e total controle financeiro.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="btn-primary">
              Conheça Nossos Pacotes
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solucoes" className="bg-background section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-heading text-foreground mb-4" style={{fontSize: '48px'}}>
              Soluções Flexíveis para Cada Etapa
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-lato">
              do Seu Projeto
            </p>
          </div>

          {/* Solution Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: "consultoria", label: "Consultoria de Terreno" },
              { id: "integrado", label: "Projeto Integrado" },
              { id: "reforma", label: "Reforma Inteligente" },
              { id: "obra", label: "Obra Gerenciada" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 font-poppins text-sm ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-foreground hover:bg-secondary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Consultoria de Terreno */}
            {activeTab === "consultoria" && (
              <>
                <div className="card-warm">
                  <h3 className="font-poppins font-semibold text-xl mb-4 text-foreground">
                    Consultoria de Terreno
                  </h3>
                  <p className="text-foreground/80 mb-6 font-lato">
                    Para quem ainda está procurando o terreno ideal. Analisamos as características do lote, viabilidade construtiva e potencial de valorização.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-lato">Análise Técnica do Terreno</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-lato">Viabilidade Econômica</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-lato">Estudo de Implantação</span>
                    </div>
                  </div>
                  <Button className="btn-primary w-full mt-6">
                    Saiba Mais
                  </Button>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg h-64 md:h-auto">
                  <img
                    src="/images/consultoria-terreno.png"
                    alt="Consultoria de Terreno - Casal analisando terreno com profissionais"
                    className="w-full h-full object-cover"
                  />
                </div>
              </>
            )}

            {/* Projeto Integrado */}
            {activeTab === "integrado" && (
              <>
                <div className="card-warm">
                  <h3 className="font-poppins font-semibold text-xl mb-4 text-foreground">
                    Projeto Integrado
                  </h3>
                  <p className="text-foreground/80 mb-6 font-lato">
                    Para quem já tem o terreno e quer um projeto completo e orçado. Arquitetura e engenharia trabalhando juntas desde o primeiro traço.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-lato">Projetos Executivos Completos</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-lato">Orçamento em Tempo Real</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-lato">Renderizações 3D</span>
                    </div>
                  </div>
                  <Button className="btn-primary w-full mt-6">
                    Saiba Mais
                  </Button>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg h-64 md:h-auto">
                  <img
                    src="/images/projeto-integrado.png"
                    alt="Projeto Integrado - Arquiteto e engenheiro analisando plantas"
                    className="w-full h-full object-cover"
                  />
                </div>
              </>
            )}

            {/* Reforma Inteligente */}
            {activeTab === "reforma" && (
              <>
                <div className="card-warm">
                  <h3 className="font-poppins font-semibold text-xl mb-4 text-foreground">
                    Reforma Inteligente
                  </h3>
                  <p className="text-foreground/80 mb-6 font-lato">
                    Para quem quer reformar com planejamento e economia. Transformamos seu espaço existente com o máximo de aproveitamento e mínimo de desperdício.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-lato">Projeto Arquitetônico</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-lato">Otimização de Custos</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-lato">Cronograma Detalhado</span>
                    </div>
                  </div>
                  <Button className="btn-primary w-full mt-6">
                    Saiba Mais
                  </Button>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg h-64 md:h-auto">
                  <img
                    src="/images/reforma-inteligente.jpeg"
                    alt="Reforma Inteligente - Profissional acompanhando obra"
                    className="w-full h-full object-cover"
                  />
                </div>
              </>
            )}

            {/* Obra Gerenciada */}
            {activeTab === "obra" && (
              <>
                <div className="card-warm">
                  <h3 className="font-poppins font-semibold text-xl mb-4 text-foreground">
                    Obra Gerenciada
                  </h3>
                  <p className="text-foreground/80 mb-6 font-lato">
                    Para quem quer executar o projeto com total tranquilidade. Nossa equipe cuida de tudo, da fundação à entrega das chaves.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-lato">Gerenciamento Completo</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-lato">Controle de Qualidade</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-lato">Relatórios Semanais</span>
                    </div>
                  </div>
                  <Button className="btn-primary w-full mt-6">
                    Saiba Mais
                  </Button>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg h-64 md:h-auto">
                  <img
                    src="/images/casas-jp-fachada.png"
                    alt="Obra Gerenciada - Casa moderna finalizada"
                    className="w-full h-full object-cover"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="bg-secondary/10 section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-96 lg:h-full min-h-96">
              <img
                src="/images/sobre-nos-equipe.png"
                alt="Yago Sávio e Pedro Henrique - Arquiteto e Engenheiro"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-heading text-foreground">
                Sua Visão, Nossa Expertise
              </h2>
              
              <p className="text-lg text-foreground/80 leading-relaxed font-lato">
                Somos <strong>Yago Sávio</strong>, arquiteto brasiliense que encontrou na arquitetura uma paixão avassaladora por transformar casas em lares únicos e inesquecíveis. E <strong>Pedro Henrique</strong>, engenheiro focado em otimizar recursos e garantir uma execução perfeita.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed font-lato">
                
              </p>

              <Button className="btn-primary">
                Conheça Nosso Trabalho
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="bg-background section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-heading text-foreground mb-4">
              Projetos que Transformam Sonhos em Realidade
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-lato">
              Cada projeto é uma história única de colaboração, criatividade e excelência técnica
            </p>
          </div>

          <div className="space-y-24">
            {portfolioProjects.map((project, idx) => (
              <div 
                key={project.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Main Image */}
                <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="rounded-3xl overflow-hidden shadow-2xl h-80 lg:h-96">
                    <img
                      src={project.mainImage}
                      alt={project.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <p className="text-primary font-poppins font-semibold text-sm uppercase tracking-wider mb-2">
                      {project.location}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground font-cormorant">
                      {project.name}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-foreground/80 leading-relaxed font-lato">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3">
                    {project.features.map((feature, i) => (
                      <span 
                        key={i}
                        className="px-4 py-2 bg-secondary/30 rounded-full text-sm font-poppins text-foreground/80"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Gallery Thumbnails */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.gallery.map((img, i) => (
                      <div 
                        key={i}
                        className="rounded-xl overflow-hidden shadow-md h-24 cursor-pointer hover:shadow-lg transition-shadow"
                      >
                        <img
                          src={img}
                          alt={`${project.name} - Imagem ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <a href={`/projeto/${project.id}`}>
                    <Button className="btn-primary">
                      Ver Projeto Completo
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary/10 section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-heading text-foreground mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-lato">
              Histórias reais de transformação e satisfação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="card-warm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6 font-lato italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-poppins font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground font-lato">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-background section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-heading text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-lato">
              Respostas para as dúvidas mais comuns sobre nossos serviços, processo e como trabalhamos.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`}
                  className="card-warm border-none"
                >
                  <AccordionTrigger className="font-poppins font-semibold text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 font-lato leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4 font-lato">Não encontrou sua dúvida?</p>
              <a href="#contato" className="text-primary font-poppins font-semibold hover:underline">
                Entre em Contato Conosco
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container text-center">
          <h2 className="text-heading text-primary-foreground mb-6">
            Pronto para começar seu projeto?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90 font-lato">
            Agende uma análise de projeto gratuita e descubra como podemos transformar seu sonho em realidade.
          </p>
          <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 rounded-3xl font-semibold font-poppins">
            Agende Agora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="bg-background section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-heading text-foreground mb-4">
                  Entre em Contato
                </h2>
                <p className="text-lg text-foreground/80 font-lato">
                  Preencha o formulário e nossa equipe entrará em contato em breve.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-foreground">Telefone</h4>
                    <p className="text-foreground/70 font-lato">(61) 98312-8855</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-foreground">Email</h4>
                    <p className="text-foreground/70 font-lato">contato@hive.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-foreground">Localização</h4>
                    <p className="text-foreground/70 font-lato">Brasília, DF</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-warm">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-poppins font-semibold text-foreground mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-lato focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-poppins font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-lato focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-poppins font-semibold text-foreground mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    placeholder="(61) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-lato focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-poppins font-semibold text-foreground mb-2">
                    Tipo de Projeto
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-lato focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option value="consultoria">Consultoria de Terreno</option>
                    <option value="integrado">Projeto Integrado</option>
                    <option value="reforma">Reforma Inteligente</option>
                    <option value="obra">Obra Gerenciada</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-poppins font-semibold text-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Conte-nos sobre seu projeto..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-lato focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                </div>

                <Button className="btn-primary w-full">
                  Enviar Mensagem
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-cormorant text-2xl font-bold text-foreground mb-4" style={{color: '#a65429', fontSize: '30px', fontWeight: '900'}}>
                Sua Casa
              </h3>
              <p className="text-foreground/70 text-sm font-lato">
                Arquitetura e engenharia em perfeita sintonia. Transformamos sonhos em realidade através da integração perfeita entre design, orçamento e execução. Do projeto à entrega, com total transparência.
              </p>
            </div>
            <div>
              <h4 className="font-poppins font-semibold text-foreground mb-4">
                Serviços
              </h4>
              <ul className="space-y-2 text-sm text-foreground/70 font-lato">
                <li><a href="#servicos" className="hover:text-primary transition-colors">Consultoria</a></li>
                <li><a href="#servicos" className="hover:text-primary transition-colors">Projetos</a></li>
                <li><a href="#servicos" className="hover:text-primary transition-colors">Reformas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-poppins font-semibold text-foreground mb-4">
                Empresa
              </h4>
              <ul className="space-y-2 text-sm text-foreground/70 font-lato">
                <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
                <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfólio</a></li>
                <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
              </ul>
            </div>
            <div style={{marginRight: 'px', marginLeft: '10px'}}>
              <h4 className="font-poppins font-semibold text-foreground mb-4">
                Contato
              </h4>
              <p className="text-sm text-foreground/70 font-lato">
                Email: contato@suacasa.com.br<br />
                Telefone: (61) 99999-9999
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60 font-lato">
            <p>&copy; 2025 Sua Casa. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
