import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ChatbotWidget } from '@/components/chatbot-widget'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { products, traceabilitySteps } from '@/lib/data'
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Mountain, 
  Droplets, 
  User, 
  ShoppingCart,
  Minus,
  Plus,
  Sparkles,
  Leaf,
  Package,
  Truck,
  Store
} from 'lucide-react'

const iconMap = {
  seed: Leaf,
  harvest: Package,
  process: Droplets,
  transport: Truck,
  store: Store,
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.type === product.type)
    .slice(0, 3)

  const aiRecommendations = products
    .filter((p) => p.id !== product.id && p.tags.some(t => t.includes('Recomendado') || t.includes('Basado')))
    .slice(0, 2)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            href="/tienda" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a la tienda
          </Link>
        </div>

        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
              <div className="text-[180px] opacity-50">☕</div>
            </div>
            <div className="flex gap-2">
              {product.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <MapPin className="h-4 w-4" />
                <span>{product.farm}</span>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
              <p className="text-muted-foreground">{product.origin}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{product.rating}</span>
                <span className="text-muted-foreground">(124 reseñas)</span>
              </div>
              <Badge variant="outline">{product.intensity}</Badge>
              <Badge variant="outline">{product.type}</Badge>
            </div>

            <p className="text-foreground leading-relaxed">{product.description}</p>

            <Separator />

            {/* Product Specs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mountain className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Altitud</p>
                  <p className="font-medium">{product.altitude}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Droplets className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Proceso</p>
                  <p className="font-medium">{product.process}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Productor</p>
                  <p className="font-medium">{product.producer}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Tipo</p>
                  <p className="font-medium capitalize">{product.type}</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Price and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary">{formatPrice(product.price)}</span>
                <span className="text-muted-foreground">/ 340g</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg">
                  <Button variant="ghost" size="icon" className="rounded-r-none">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">1</span>
                  <Button variant="ghost" size="icon" className="rounded-l-none">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button size="lg" className="flex-1 gap-2">
                  <ShoppingCart className="h-5 w-5" />
                  Agregar al Carrito
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Envío gratis para compras superiores a $100,000 COP
              </p>
            </div>
          </div>
        </div>

        {/* Traceability Section */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Trazabilidad del Producto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {/* Timeline */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
                
                <div className="space-y-8">
                  {traceabilitySteps.map((step, index) => {
                    const Icon = iconMap[step.icon]
                    return (
                      <div key={step.id} className="relative flex gap-4">
                        <div className="relative z-10 h-12 w-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-foreground">{step.title}</h3>
                            <Badge variant="outline" className="text-xs">{step.date}</Badge>
                          </div>
                          <p className="text-muted-foreground mb-1">{step.description}</p>
                          <p className="text-sm text-primary">{step.location}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* AI Recommendations */}
        {aiRecommendations.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Recomendaciones de IA</h2>
              <Badge variant="secondary" className="bg-primary/20 text-primary">Basado en tus gustos</Badge>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiRecommendations.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">Productos Relacionados</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
      <ChatbotWidget />
    </div>
  )
}
