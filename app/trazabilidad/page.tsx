import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ChatbotWidget } from '@/components/chatbot-widget'
import { TimelineComponent } from '@/components/timeline-component'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { traceabilitySteps, products } from '@/lib/data'
import { 
  Search, 
  QrCode, 
  Shield, 
  Leaf, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'
import Link from 'next/link'

const benefits = [
  {
    icon: Shield,
    title: 'Transparencia Total',
    description: 'Cada paso del proceso está documentado y verificado para garantizar la autenticidad del producto.',
  },
  {
    icon: Leaf,
    title: 'Sostenibilidad',
    description: 'Prácticas agrícolas responsables que protegen el medio ambiente y las comunidades locales.',
  },
  {
    icon: Users,
    title: 'Comercio Justo',
    description: 'Los caficultores reciben un precio justo por su trabajo, mejorando su calidad de vida.',
  },
  {
    icon: Award,
    title: 'Calidad Certificada',
    description: 'Cada lote es evaluado por catadores profesionales para garantizar la excelencia.',
  },
]

export default function TrazabilidadPage() {
  const featuredProduct = products[0]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary">
                Trazabilidad Blockchain
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Conoce el Viaje de Tu Café
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Cada grano tiene una historia. Con nuestra tecnología de trazabilidad, 
                puedes seguir el recorrido completo de tu café desde la finca hasta tu taza.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Ingresa el código del lote..."
                      className="pl-10"
                    />
                  </div>
                  <Button className="gap-2">
                    <QrCode className="h-4 w-4" />
                    Escanear
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Encuentra el código en el empaque de tu café o escanea el código QR
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Example Traceability */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Product Info */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                      <div className="text-6xl opacity-50">☕</div>
                    </div>
                    <h2 className="text-xl font-bold mb-2">{featuredProduct.name}</h2>
                    <p className="text-muted-foreground text-sm mb-4">{featuredProduct.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Lote: CAF-2024-001234</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Verificado por CaféTrace AI</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Certificación Orgánica</span>
                      </div>
                    </div>

                    <Button asChild className="w-full mt-6 gap-2">
                      <Link href={`/tienda/${featuredProduct.id}`}>
                        Ver Producto
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">Línea de Tiempo</h2>
                  <p className="text-muted-foreground">
                    Haz clic en cada paso para ver más detalles del proceso
                  </p>
                </div>
                <TimelineComponent steps={traceabilitySteps} />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                ¿Por Qué es Importante la Trazabilidad?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                La trazabilidad no es solo un requisito técnico, es nuestro compromiso 
                con la transparencia, calidad y sostenibilidad.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="text-center">
                  <CardContent className="pt-6">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="max-w-2xl">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    ¿Eres Caficultor?
                  </h2>
                  <p className="text-lg opacity-90 mb-6">
                    Únete a nuestra red de productores y accede a tecnología de trazabilidad 
                    de vanguardia. Aumenta el valor de tu café y conecta directamente con 
                    consumidores conscientes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="secondary" size="lg" className="gap-2">
                      Registrarme como Productor
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    >
                      Más Información
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
      <ChatbotWidget />
    </div>
  )
}
