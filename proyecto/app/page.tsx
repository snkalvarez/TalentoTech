import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ChatbotWidget } from '@/components/chatbot-widget'
import { ProductCard } from '@/components/product-card'
import { products, testimonials } from '@/lib/data'
import { 
  Leaf, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Coffee, 
  Search, 
  Truck, 
  Heart,
  Quote
} from 'lucide-react'

const benefits = [
  {
    icon: Leaf,
    title: 'Trazabilidad Total',
    description: 'Conoce cada paso del café, desde la finca hasta tu taza. Transparencia completa en toda la cadena.',
  },
  {
    icon: ShieldCheck,
    title: 'Comercio Justo',
    description: 'Apoyamos directamente a los caficultores del Cauca, garantizando precios justos y sostenibles.',
  },
  {
    icon: Sparkles,
    title: 'Recomendaciones IA',
    description: 'Nuestra inteligencia artificial aprende tus gustos y te sugiere el café perfecto para ti.',
  },
]

const steps = [
  {
    icon: Search,
    title: 'Explora',
    description: 'Navega por nuestra selección de cafés premium del Cauca con filtros inteligentes.',
  },
  {
    icon: Coffee,
    title: 'Conoce el Origen',
    description: 'Visualiza la trazabilidad completa y conoce a los productores detrás de cada café.',
  },
  {
    icon: Truck,
    title: 'Recibe en Casa',
    description: 'Tu café llega fresco a tu puerta con garantía de calidad y frescura.',
  },
  {
    icon: Heart,
    title: 'Impacta',
    description: 'Cada compra apoya directamente a comunidades cafeteras del Cauca colombiano.',
  },
]

export default function HomePage() {
  const featuredProducts = products.slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Del caficultor a tu taza, con{' '}
                  <span className="text-primary">trazabilidad inteligente</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Descubre el café más auténtico del Cauca colombiano. Conoce a los productores, 
                  sigue el viaje de cada grano y recibe recomendaciones personalizadas con IA.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="gap-2">
                    <Link href="/tienda">
                      Explorar Cafés
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/dashboard">
                      Soy Productor
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center gap-8 pt-4">
                  <div>
                    <p className="text-3xl font-bold text-primary">150+</p>
                    <p className="text-sm text-muted-foreground">Caficultores</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">50+</p>
                    <p className="text-sm text-muted-foreground">Variedades</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">4.8</p>
                    <p className="text-sm text-muted-foreground">Calificación</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                  <div className="text-[200px] opacity-50">☕</div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-card rounded-lg shadow-lg p-4 border">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Recomendación IA</p>
                      <p className="text-xs text-muted-foreground">Café perfecto para ti</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">¿Por qué CaféTrace AI?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Combinamos tradición cafetera con tecnología de vanguardia para ofrecerte la mejor experiencia.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">¿Cómo Funciona?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                En cuatro simples pasos disfruta del mejor café del Cauca mientras apoyas a comunidades locales.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={step.title} className="text-center">
                  <div className="relative inline-flex">
                    <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mb-4">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Cafés Destacados</h2>
                <p className="text-muted-foreground">Selección de nuestros mejores cafés del Cauca</p>
              </div>
              <Button asChild variant="outline">
                <Link href="/tienda">
                  Ver Todos
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Lo Que Dicen Nuestros Clientes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Miles de personas ya disfrutan del mejor café trazable del Cauca.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="relative">
                  <CardContent className="pt-8">
                    <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/20" />
                    <p className="text-muted-foreground mb-6 relative z-10">{testimonial.content}</p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-semibold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              ¿Listo para descubrir el verdadero sabor del Cauca?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Únete a nuestra comunidad de amantes del café consciente y apoya directamente a los caficultores colombianos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="gap-2">
                <Link href="/tienda">
                  Explorar Tienda
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/trazabilidad">
                  Ver Trazabilidad
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatbotWidget />
    </div>
  )
}
