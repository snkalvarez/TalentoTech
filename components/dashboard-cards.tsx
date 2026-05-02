import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign, Package, ShoppingCart, Star, TrendingUp, TrendingDown } from 'lucide-react'
import { DashboardStats } from '@/lib/data'

interface DashboardCardsProps {
  stats: DashboardStats
}

export function DashboardCards({ stats }: DashboardCardsProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const cards = [
    {
      title: 'Ingresos Totales',
      value: formatPrice(stats.totalRevenue),
      icon: DollarSign,
      change: '+12.5%',
      trend: 'up' as const,
      description: 'vs. mes anterior',
    },
    {
      title: 'Pedidos',
      value: stats.totalOrders.toString(),
      icon: ShoppingCart,
      change: '+8.2%',
      trend: 'up' as const,
      description: 'vs. mes anterior',
    },
    {
      title: 'Productos Vendidos',
      value: stats.productsSold.toString(),
      icon: Package,
      change: '+15.3%',
      trend: 'up' as const,
      description: 'vs. mes anterior',
    },
    {
      title: 'Calificación Promedio',
      value: stats.averageRating.toString(),
      icon: Star,
      change: '+0.2',
      trend: 'up' as const,
      description: 'vs. mes anterior',
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.title}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {card.title}
            </CardTitle>
            <card.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <div className="flex items-center gap-1 text-xs">
              {card.trend === 'up' ? (
                <TrendingUp className="h-3 w-3 text-green-600" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-600" />
              )}
              <span className={card.trend === 'up' ? 'text-green-600' : 'text-red-600'}>
                {card.change}
              </span>
              <span className="text-muted-foreground">{card.description}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
