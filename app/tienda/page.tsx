'use client'

import { useState, useMemo } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ChatbotWidget } from '@/components/chatbot-widget'
import { ProductCard } from '@/components/product-card'
import { FiltersSidebar } from '@/components/filters-sidebar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import { products } from '@/lib/data'
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react'

export default function TiendaPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState({
    types: [] as string[],
    intensities: [] as string[],
    priceRange: [30000, 100000] as [number, number],
  })
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesSearch =
          product.name.toLowerCase().includes(query) ||
          product.origin.toLowerCase().includes(query) ||
          product.farm.toLowerCase().includes(query)
        if (!matchesSearch) return false
      }

      // Type filter
      if (filters.types.length > 0 && !filters.types.includes(product.type)) {
        return false
      }

      // Intensity filter
      if (filters.intensities.length > 0 && !filters.intensities.includes(product.intensity)) {
        return false
      }

      // Price filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false
      }

      return true
    })
  }, [searchQuery, filters])

  const activeFiltersCount =
    filters.types.length +
    filters.intensities.length +
    (filters.priceRange[0] !== 30000 || filters.priceRange[1] !== 100000 ? 1 : 0)

  const recommendedProducts = products.filter((p) => 
    p.tags.includes('Recomendado para ti') || p.tags.includes('Basado en tus gustos')
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Tienda de Café</h1>
          <p className="text-muted-foreground">
            Explora nuestra selección de cafés premium del Cauca colombiano
          </p>
        </div>

        {/* AI Recommendations */}
        {recommendedProducts.length > 0 && (
          <div className="mb-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Recomendado para Ti</h2>
              <Badge variant="secondary" className="bg-primary/20 text-primary">IA</Badge>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {recommendedProducts.map((product) => (
                <div key={product.id} className="min-w-[280px] max-w-[280px]">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filters Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar café, finca, origen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          {/* Mobile Filter Button */}
          <Sheet open={isMobileFiltersOpen} onOpenChange={setIsMobileFiltersOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="lg:hidden gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                Filtros
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-1">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] p-6">
              <FiltersSidebar
                filters={filters}
                onFilterChange={setFilters}
                onClose={() => setIsMobileFiltersOpen(false)}
                isMobile
              />
            </SheetContent>
          </Sheet>
        </div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-card rounded-lg border p-6">
              <h2 className="text-lg font-semibold mb-4">Filtros</h2>
              <FiltersSidebar filters={filters} onFilterChange={setFilters} />
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">
                {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4 opacity-50">☕</div>
                <h3 className="text-lg font-semibold mb-2">No se encontraron productos</h3>
                <p className="text-muted-foreground mb-4">
                  Intenta ajustar los filtros o el término de búsqueda
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('')
                    setFilters({
                      types: [],
                      intensities: [],
                      priceRange: [30000, 100000],
                    })
                  }}
                >
                  Limpiar Filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <ChatbotWidget />
    </div>
  )
}
