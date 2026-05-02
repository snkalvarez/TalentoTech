'use client'

import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { X } from 'lucide-react'

interface FiltersSidebarProps {
  filters: {
    types: string[]
    intensities: string[]
    priceRange: [number, number]
  }
  onFilterChange: (filters: FiltersSidebarProps['filters']) => void
  onClose?: () => void
  isMobile?: boolean
}

const coffeeTypes = [
  { id: 'arabica', label: 'Arábica' },
  { id: 'especial', label: 'Especial' },
  { id: 'blend', label: 'Blend' },
]

const intensities = [
  { id: 'suave', label: 'Suave' },
  { id: 'medio', label: 'Medio' },
  { id: 'intenso', label: 'Intenso' },
]

export function FiltersSidebar({ filters, onFilterChange, onClose, isMobile }: FiltersSidebarProps) {
  const handleTypeChange = (typeId: string, checked: boolean) => {
    const newTypes = checked
      ? [...filters.types, typeId]
      : filters.types.filter((t) => t !== typeId)
    onFilterChange({ ...filters, types: newTypes })
  }

  const handleIntensityChange = (intensityId: string, checked: boolean) => {
    const newIntensities = checked
      ? [...filters.intensities, intensityId]
      : filters.intensities.filter((i) => i !== intensityId)
    onFilterChange({ ...filters, intensities: newIntensities })
  }

  const handlePriceChange = (value: number[]) => {
    onFilterChange({ ...filters, priceRange: [value[0], value[1]] })
  }

  const clearFilters = () => {
    onFilterChange({
      types: [],
      intensities: [],
      priceRange: [30000, 100000],
    })
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="space-y-6">
      {isMobile && (
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Filtros</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
      )}

      {/* Coffee Type */}
      <div>
        <h3 className="font-medium mb-3">Tipo de Café</h3>
        <div className="space-y-3">
          {coffeeTypes.map((type) => (
            <div key={type.id} className="flex items-center space-x-2">
              <Checkbox
                id={type.id}
                checked={filters.types.includes(type.id)}
                onCheckedChange={(checked) => handleTypeChange(type.id, checked as boolean)}
              />
              <Label htmlFor={type.id} className="text-sm font-normal cursor-pointer">
                {type.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Intensity */}
      <div>
        <h3 className="font-medium mb-3">Intensidad</h3>
        <div className="space-y-3">
          {intensities.map((intensity) => (
            <div key={intensity.id} className="flex items-center space-x-2">
              <Checkbox
                id={intensity.id}
                checked={filters.intensities.includes(intensity.id)}
                onCheckedChange={(checked) => handleIntensityChange(intensity.id, checked as boolean)}
              />
              <Label htmlFor={intensity.id} className="text-sm font-normal cursor-pointer">
                {intensity.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price Range */}
      <div>
        <h3 className="font-medium mb-3">Rango de Precio</h3>
        <div className="px-2">
          <Slider
            value={filters.priceRange}
            min={30000}
            max={100000}
            step={5000}
            onValueChange={handlePriceChange}
            className="mb-4"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{formatPrice(filters.priceRange[0])}</span>
            <span>{formatPrice(filters.priceRange[1])}</span>
          </div>
        </div>
      </div>

      <Separator />

      <Button variant="outline" className="w-full" onClick={clearFilters}>
        Limpiar Filtros
      </Button>
    </div>
  )
}
