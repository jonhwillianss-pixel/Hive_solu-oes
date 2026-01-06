/**
 * Project Detail Page
 * 
 * Página individual para cada projeto do portfólio com galeria expandida,
 * detalhes técnicos e informações sobre o projeto.
 */

import { useParams, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Ruler, Users, Award } from "lucide-react";
import { useState } from "react";

export default function ProjectDetail() {
  const [location, setLocation] = useLocation();
  const params = useParams();
  const projectId = params.id;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Dados dos projetos
  const projects: Record<string, any> = {
    "casa-serra": {
      name: "Casa da Serra",
      location: "Rio de Janeiro, RJ",
      year: "2023",
      area: "450 m²",
      team: "Yago Sávio + Pedro Henrique",
      description: "Refúgio tropical com arte vibrante e integração total com a natureza. Design que celebra a cultura carioca através de cores, texturas e espaços que convidam ao convívio. Este projeto une modernidade com a essência do Rio, criando um espaço onde a arquitetura dialoga com a paisagem e a arte local.",
      longDescription: "A Casa da Serra é um projeto que nasceu da paixão por criar espaços que respeitam a natureza e celebram a cultura local. Localizada em uma encosta com vista privilegiada, a casa foi projetada para se integrar harmoniosamente ao terreno, aproveitando as árvores existentes e criando múltiplos níveis que acompanham a topografia natural. A paleta de cores quentes, inspirada nos tons do Rio, dialoga com as obras de arte contemporânea que adornam os ambientes. A integração entre interior e exterior é total, com grandes aberturas que trazem a natureza para dentro da casa.",
      features: [
        "Arte Integrada",
        "Piscina Natural",
        "Deck Tropical",
        "Integração com Natureza",
        "Paleta de Cores Carioca",
      ],
      gallery: [
        "/images/casa-serra-sala.png",
        "/images/casa-serra-fachada.jpg",
        "/images/casa-serra-deck.jpeg",
        "/images/casa-serra-quarto.jpeg",
      ],
      highlights: [
        {
          icon: "🎨",
          title: "Arte Integrada",
          description: "Painéis de arte contemporânea que dialogam com a arquitetura",
        },
        {
          icon: "🌳",
          title: "Integração com Natureza",
          description: "Respeito à topografia natural e preservação das árvores existentes",
        },
        {
          icon: "🏊",
          title: "Piscina Natural",
          description: "Piscina que se integra à paisagem com design orgânico",
        },
        {
          icon: "🌅",
          title: "Vista Panorâmica",
          description: "Aproveitamento máximo da vista para a cidade e a natureza",
        },
      ],
      specifications: {
        "Área Total": "450 m²",
        "Área Construída": "380 m²",
        "Terreno": "1.200 m²",
        "Pavimentos": "3",
        "Quartos": "4",
        "Banheiros": "4",
        "Estilo": "Contemporâneo Tropical",
        "Conclusão": "2023",
      },
    },
    "casa-mm": {
      name: "Casa MM",
      location: "Brasília, DF",
      year: "2022",
      area: "520 m²",
      team: "Yago Sávio + Pedro Henrique",
      description: "Arquitetura contemporânea que dialoga com o cerrado. Teto de madeira, espelho d'água e vegetação exuberante criam uma experiência sensorial única de bem-estar. O projeto busca a integração perfeita entre os espaços internos e externos, criando uma relação harmoniosa com a natureza.",
      longDescription: "A Casa MM é um projeto que celebra a beleza do cerrado brasiliense através de uma arquitetura minimalista e sofisticada. O uso de madeira clara no teto cria uma sensação de aconchego, enquanto o espelho d'água reflete a luz e amplifica a sensação de espaço. A vegetação exuberante que envolve a casa cria microclimas naturais, reduzindo a necessidade de climatização artificial. Cada detalhe foi pensado para criar uma experiência sensorial única, onde o som da água, o aroma das plantas e a luz natural se combinam para criar um espaço de bem-estar total.",
      features: [
        "Espelho D'água",
        "Teto em Madeira",
        "Vista Panorâmica",
        "Integração com Cerrado",
        "Minimalismo Sofisticado",
      ],
      gallery: [
        "/images/casa-mm-fachada.png",
        "/images/casa-mm-sala.png",
        "/images/casa-mm-quarto.png",
        "/images/casa-mm-banheiro.png",
      ],
      highlights: [
        {
          icon: "💧",
          title: "Espelho D'água",
          description: "Elemento central que reflete a luz e cria microclimas naturais",
        },
        {
          icon: "🪵",
          title: "Teto em Madeira",
          description: "Acabamento em madeira clara que cria aconchego e sofisticação",
        },
        {
          icon: "🌿",
          title: "Integração com Cerrado",
          description: "Respeito à vegetação natural e criação de espaços de transição",
        },
        {
          icon: "🧘",
          title: "Bem-estar Total",
          description: "Design pensado para criar uma experiência sensorial única",
        },
      ],
      specifications: {
        "Área Total": "520 m²",
        "Área Construída": "450 m²",
        "Terreno": "2.000 m²",
        "Pavimentos": "2",
        "Quartos": "5",
        "Banheiros": "5",
        "Estilo": "Contemporâneo Minimalista",
        "Conclusão": "2022",
      },
    },
    "casas-jp": {
      name: "Casas JP",
      location: "Brasília, DF",
      year: "2023",
      area: "380 m²",
      team: "Yago Sávio + Pedro Henrique",
      description: "Residência que une sofisticação e funcionalidade. Mármore, madeira e vidro em harmonia perfeita, com espaços generosos que se abrem para o jardim e piscina. Cada detalhe foi cuidadosamente planejado para criar um espaço de luxo acessível.",
      longDescription: "As Casas JP representam o auge da sofisticação contemporânea. A combinação de mármore, madeira e vidro cria uma linguagem visual coerente e elegante. A cozinha gourmet em mármore é o coração da casa, um espaço onde a gastronomia e a arquitetura se encontram. A suíte master oferece um refúgio privado com integração total ao jardim. A piscina integrada ao projeto cria um espaço de lazer que se conecta perfeitamente com a arquitetura.",
      features: [
        "Ilha Gourmet em Mármore",
        "Suíte Master",
        "Piscina Integrada",
        "Sofisticação Contemporânea",
        "Funcionalidade Premium",
      ],
      gallery: [
        "/images/casas-jp-fachada.png",
        "/images/casas-jp-cozinha.png",
        "/images/casas-jp-quarto.png",
      ],
      highlights: [
        {
          icon: "🍽️",
          title: "Ilha Gourmet",
          description: "Cozinha de luxo com ilha em mármore e acabamentos premium",
        },
        {
          icon: "👑",
          title: "Suíte Master",
          description: "Espaço privado de luxo com integração ao jardim",
        },
        {
          icon: "🏊",
          title: "Piscina Integrada",
          description: "Piscina que se conecta perfeitamente com a arquitetura",
        },
        {
          icon: "✨",
          title: "Sofisticação",
          description: "Cada detalhe planejado para criar luxo acessível",
        },
      ],
      specifications: {
        "Área Total": "380 m²",
        "Área Construída": "320 m²",
        "Terreno": "1.500 m²",
        "Pavimentos": "2",
        "Quartos": "4",
        "Banheiros": "4",
        "Estilo": "Contemporâneo Sofisticado",
        "Conclusão": "2023",
      },
    },
    "apto-ana": {
      name: "Apartamento ANA",
      location: "Brasília, DF",
      year: "2023",
      area: "220 m²",
      team: "Yago Sávio + Pedro Henrique",
      description: "Elegância minimalista em cada detalhe. Painéis ripados, iluminação cênica e uma paleta neutra que transmite sofisticação e aconchego em um apartamento urbano. Um projeto que prova que luxo e funcionalidade podem coexistir perfeitamente.",
      longDescription: "O Apartamento ANA é um manifesto de elegância minimalista. Os painéis ripados criam uma textura visual sofisticada que se estende por toda a unidade. A iluminação cênica foi cuidadosamente planejada para criar atmosferas diferentes em cada ambiente. A paleta neutra de cores permite que a luz natural seja a verdadeira protagonista do espaço. Este projeto demonstra que em um apartamento urbano, é possível criar um refúgio de sofisticação e bem-estar.",
      features: [
        "Painel Ripado",
        "Iluminação Cênica",
        "Cozinha Integrada",
        "Minimalismo Elegante",
        "Paleta Neutra",
      ],
      gallery: [
        "/images/apto-ana-sala.png",
        "/images/apto-ana-quarto.png",
        "/images/apto-ana-cozinha.jpg",
      ],
      beforeAfter: [
        {
          title: "Sala de Estar",
          before: "/images/apto-ana-antes-sala.jpg",
          after: "/images/apto-ana-sala.png",
          description: "Transformacao da sala: de escuro e claustrofobico para luminoso e minimalista"
        },
        {
          title: "Quarto",
          before: "/images/apto-ana-antes-quarto-real.jpg",
          after: "/images/apto-ana-quarto.png",
          description: "Renovacao completa: paineis ripados, iluminacao planejada e paleta neutra"
        },
        {
          title: "Cozinha",
          before: "/images/apto-ana-antes-cozinha.png",
          after: "/images/apto-ana-cozinha.jpg",
          description: "Modernizacao: design contemporaneo, integracao com sala e acabamentos premium"
        }
      ],
      highlights: [
        {
          icon: "🎨",
          title: "Painel Ripado",
          description: "Textura visual sofisticada que percorre toda a unidade",
        },
        {
          icon: "💡",
          title: "Iluminação Cênica",
          description: "Luz planejada para criar atmosferas diferentes em cada ambiente",
        },
        {
          icon: "🍳",
          title: "Cozinha Integrada",
          description: "Espaço funcional que se integra perfeitamente à sala",
        },
        {
          icon: "🧘",
          title: "Refúgio Urbano",
          description: "Sofisticação e bem-estar em um apartamento na cidade",
        },
      ],
      specifications: {
        "Área Total": "220 m²",
        "Área Construída": "200 m²",
        "Pavimentos": "1",
        "Quartos": "3",
        "Banheiros": "2",
        "Estilo": "Minimalista Elegante",
        "Conclusão": "2023",
      },
    },
  };

  const project = projects[projectId as string];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Projeto não encontrado</h1>
          <Button 
            onClick={() => setLocation("/")}
            className="btn-primary"
          >
            Voltar ao Portfólio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button
            onClick={() => setLocation("/#portfolio")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-poppins font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar ao Portfólio
          </button>
          <h1 className="text-2xl font-bold text-primary font-cormorant">
            {project.name}
          </h1>
          <div className="w-24" />
        </div>
      </nav>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container">
          {/* Main Image */}
          <div className="mb-8">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-96 md:h-[600px]">
              <img
                src={project.gallery[selectedImageIndex]}
                alt={`${project.name} - Imagem ${selectedImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {project.gallery.map((img: string, idx: number) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`rounded-xl overflow-hidden h-24 cursor-pointer transition-all duration-300 ${
                  selectedImageIndex === idx
                    ? "ring-4 ring-primary shadow-lg"
                    : "hover:shadow-md"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </button>
            ))}
          </div>

          {/* Project Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-heading text-foreground mb-4">
                  {project.name}
                </h1>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-poppins">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Ruler className="w-5 h-5 text-primary" />
                    <span className="font-poppins">{project.area}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-poppins">{project.year}</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 font-cormorant">
                  Sobre o Projeto
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed font-lato mb-4">
                  {project.longDescription}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6 font-cormorant">
                  Destaques do Projeto
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.highlights.map((highlight: any, idx: number) => (
                    <div key={idx} className="card-warm">
                      <div className="text-4xl mb-3">{highlight.icon}</div>
                      <h3 className="font-poppins font-semibold text-lg mb-2 text-foreground">
                        {highlight.title}
                      </h3>
                      <p className="text-foreground/70 font-lato">
                        {highlight.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Before and After */}
              {project.beforeAfter && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6 font-cormorant">
                    Antes e Depois
                  </h2>
                  <div className="space-y-8">
                    {project.beforeAfter.map((item: any, idx: number) => (
                      <div key={idx} className="card-warm">
                        <h3 className="text-lg font-poppins font-semibold text-foreground mb-4">
                          {item.title}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-muted-foreground font-poppins mb-2 font-bold uppercase">Antes</p>
                            <div className="rounded-xl overflow-hidden shadow-md h-48">
                              <img src={item.before} alt="Antes" className="w-full h-full object-cover" />
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground font-poppins mb-2 font-bold uppercase">Depois</p>
                            <div className="rounded-xl overflow-hidden shadow-md h-48">
                              <img src={item.after} alt="Depois" className="w-full h-full object-cover" />
                            </div>
                          </div>
                        </div>
                        <p className="text-foreground/80 font-lato text-sm">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Specifications */}
              <div className="card-warm">
                <h3 className="font-poppins font-semibold text-lg mb-6 text-foreground">
                  Especificações
                </h3>
                <div className="space-y-4">
                  {Object.entries(project.specifications).map(([key, value]) => (
                    <div key={key} className="border-b border-border pb-3 last:border-b-0">
                      <p className="text-sm text-muted-foreground font-poppins mb-1">
                        {key}
                      </p>
                      <p className="font-semibold text-foreground font-lato">
                        {value as string}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team */}
              <div className="card-warm">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-primary" />
                  <h3 className="font-poppins font-semibold text-lg text-foreground">
                    Equipe
                  </h3>
                </div>
                <p className="text-foreground/70 font-lato">
                  {project.team}
                </p>
              </div>

              {/* CTA */}
              <Button className="btn-primary w-full">
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground section-padding">
        <div className="container text-center">
          <h2 className="text-heading text-primary-foreground mb-6">
            Gostou deste Projeto?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90 font-lato">
            Vamos criar algo igualmente incrível para você. Entre em contato e descubra como podemos transformar seu sonho em realidade.
          </p>
          <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 rounded-3xl font-semibold font-poppins">
            Agende uma Consulta
          </Button>
        </div>
      </section>
    </div>
  );
}
