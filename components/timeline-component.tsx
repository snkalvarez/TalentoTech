'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TraceabilityStep } from '@/lib/data'
import { 
  Leaf, 
  Package, 
  Droplets, 
  Truck, 
  Store,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import { cn } from '@/lib/utils'

const iconMap = {
  seed: Leaf,
  harvest: Package,
  process: Droplets,
  transport: Truck,
  store: Store,
}

const colorMap = {
  seed: 'bg-green-500',
  harvest: 'bg-amber-500',
  process: 'bg-blue-500',
  transport: 'bg-purple-500',
  store: 'bg-primary',
}

interface TimelineComponentProps {
  steps: TraceabilityStep[]
  interactive?: boolean
}

export function TimelineComponent({ steps, interactive = true }: TimelineComponentProps) {
  const [expandedStep, setExpandedStep] = useState<string | null>(steps[0]?.id || null)

  const toggleStep = (id: string) => {
    if (interactive) {
      setExpandedStep(expandedStep === id ? null : id)
    }
  }

  return (
    <div className="relative">
      {/* Main Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-amber-500 to-primary rounded-full" />

      <div className="space-y-6">
        {steps.map((step, index) => {
          const Icon = iconMap[step.icon]
          const bgColor = colorMap[step.icon]
          const isExpanded = expandedStep === step.id
          const isLast = index === steps.length - 1

          return (
            <div key={step.id} className="relative">
              <div
                className={cn(
                  'flex gap-6 cursor-pointer transition-all duration-300',
                  interactive && 'hover:translate-x-1'
                )}
                onClick={() => toggleStep(step.id)}
              >
                {/* Icon Circle */}
                <div 
                  className={cn(
                    'relative z-10 h-16 w-16 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300',
                    bgColor,
                    isExpanded && 'scale-110 ring-4 ring-offset-2 ring-offset-background',
                    isExpanded && step.icon === 'seed' && 'ring-green-500/30',
                    isExpanded && step.icon === 'harvest' && 'ring-amber-500/30',
                    isExpanded && step.icon === 'process' && 'ring-blue-500/30',
                    isExpanded && step.icon === 'transport' && 'ring-purple-500/30',
                    isExpanded && step.icon === 'store' && 'ring-primary/30',
                  )}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Content Card */}
                <Card className={cn(
                  'flex-1 transition-all duration-300',
                  isExpanded && 'shadow-lg border-primary/30'
                )}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            Paso {index + 1}
                          </Badge>
                        </div>
                        
                        <p className={cn(
                          'text-muted-foreground transition-all duration-300',
                          !isExpanded && 'line-clamp-1'
                        )}>
                          {step.description}
                        </p>

                        {/* Expanded Content */}
                        <div className={cn(
                          'grid transition-all duration-300 overflow-hidden',
                          isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                        )}>
                          <div className="min-h-0">
                            <div className="flex flex-wrap gap-4">
                              <div className="flex items-center gap-2 text-sm">
                                <Calendar className="h-4 w-4 text-primary" />
                                <span>{step.date}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>{step.location}</span>
                              </div>
                            </div>

                            {/* Additional Details */}
                            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                              <h4 className="font-medium mb-2">Detalles del proceso</h4>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                {step.icon === 'seed' && (
                                  <>
                                    <li>• Variedad: Arábica Castillo</li>
                                    <li>• Suelo: Volcánico rico en minerales</li>
                                    <li>• Certificación: Orgánico</li>
                                  </>
                                )}
                                {step.icon === 'harvest' && (
                                  <>
                                    <li>• Método: Recolección manual selectiva</li>
                                    <li>• Madurez: 100% cerezas rojas</li>
                                    <li>• Rendimiento: 15 kg/día por recolector</li>
                                  </>
                                )}
                                {step.icon === 'process' && (
                                  <>
                                    <li>• Fermentación: 36 horas controladas</li>
                                    <li>• Secado: Camas africanas, 15 días</li>
                                    <li>• Humedad final: 10-12%</li>
                                  </>
                                )}
                                {step.icon === 'transport' && (
                                  <>
                                    <li>• Empaque: Bolsas GrainPro</li>
                                    <li>• Temperatura: 18-22°C controlada</li>
                                    <li>• Tiempo de tránsito: 24-48 horas</li>
                                  </>
                                )}
                                {step.icon === 'store' && (
                                  <>
                                    <li>• Tostión: A pedido para máxima frescura</li>
                                    <li>• Empaque: Bolsa con válvula desgasificadora</li>
                                    <li>• Garantía: Frescura por 30 días</li>
                                  </>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {interactive && (
                        <Button variant="ghost" size="icon" className="flex-shrink-0">
                          {isExpanded ? (
                            <ChevronUp className="h-5 w-5" />
                          ) : (
                            <ChevronDown className="h-5 w-5" />
                          )}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Connector Animation */}
              {!isLast && (
                <div className="absolute left-8 top-16 h-6 w-1 bg-transparent">
                  <div 
                    className={cn(
                      'h-full w-full transition-all duration-500',
                      isExpanded ? 'bg-primary animate-pulse' : 'bg-transparent'
                    )}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
