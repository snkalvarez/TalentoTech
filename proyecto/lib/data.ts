export interface Product {
  id: string
  name: string
  origin: string
  farm: string
  producer: string
  price: number
  rating: number
  intensity: 'suave' | 'medio' | 'intenso'
  type: 'arabica' | 'especial' | 'blend'
  altitude: string
  process: string
  description: string
  image: string
  tags: string[]
}

export interface TraceabilityStep {
  id: string
  title: string
  description: string
  date: string
  location: string
  icon: 'seed' | 'harvest' | 'process' | 'transport' | 'store'
}

export interface Order {
  id: string
  customer: string
  product: string
  quantity: number
  total: number
  status: 'pendiente' | 'procesando' | 'enviado' | 'entregado'
  date: string
}

export interface DashboardStats {
  totalRevenue: number
  totalOrders: number
  productsSold: number
  averageRating: number
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Café Origen Cauca Premium',
    origin: 'Popayán, Cauca',
    farm: 'Finca La Esperanza',
    producer: 'Carlos Muñoz',
    price: 45000,
    rating: 4.8,
    intensity: 'medio',
    type: 'arabica',
    altitude: '1,800 msnm',
    process: 'Lavado',
    description: 'Un café excepcional con notas de chocolate negro, caramelo y un sutil toque cítrico. Cultivado en las montañas del Cauca con métodos tradicionales.',
    image: '/images/coffee-1.jpg',
    tags: ['Más vendido', 'Orgánico']
  },
  {
    id: '2',
    name: 'Café Especial Tierradentro',
    origin: 'Tierradentro, Cauca',
    farm: 'Finca El Paraíso',
    producer: 'María Elena Gómez',
    price: 52000,
    rating: 4.9,
    intensity: 'intenso',
    type: 'especial',
    altitude: '2,100 msnm',
    process: 'Honey',
    description: 'Café de especialidad con perfil complejo. Notas de frutos rojos, miel y especias. Proceso honey que realza su dulzura natural.',
    image: '/images/coffee-2.jpg',
    tags: ['Recomendado para ti', 'Edición limitada']
  },
  {
    id: '3',
    name: 'Café Suave del Macizo',
    origin: 'Macizo Colombiano',
    farm: 'Finca Los Andes',
    producer: 'José Antonio Paz',
    price: 38000,
    rating: 4.6,
    intensity: 'suave',
    type: 'arabica',
    altitude: '1,600 msnm',
    process: 'Natural',
    description: 'Perfecto para quienes prefieren un café suave. Notas de nuez, vainilla y un final limpio y prolongado.',
    image: '/images/coffee-3.jpg',
    tags: ['Basado en tus gustos']
  },
  {
    id: '4',
    name: 'Blend Caucano Tradicional',
    origin: 'Varios, Cauca',
    farm: 'Cooperativa CaféCauca',
    producer: 'Cooperativa CaféCauca',
    price: 35000,
    rating: 4.5,
    intensity: 'medio',
    type: 'blend',
    altitude: '1,700 msnm',
    process: 'Lavado',
    description: 'Mezcla equilibrada de los mejores granos del Cauca. Ideal para el café del día a día sin perder calidad.',
    image: '/images/coffee-4.jpg',
    tags: ['Comercio justo']
  },
  {
    id: '5',
    name: 'Café Geisha del Cauca',
    origin: 'Inzá, Cauca',
    farm: 'Finca Altamira',
    producer: 'Ana Lucía Perdomo',
    price: 85000,
    rating: 5.0,
    intensity: 'suave',
    type: 'especial',
    altitude: '2,200 msnm',
    process: 'Lavado',
    description: 'La joya del café caucano. Variedad Geisha con notas florales de jazmín, bergamota y frutas tropicales.',
    image: '/images/coffee-5.jpg',
    tags: ['Premium', 'Edición limitada']
  },
  {
    id: '6',
    name: 'Café Intenso Nocturno',
    origin: 'Silvia, Cauca',
    farm: 'Finca El Roble',
    producer: 'Pedro Cuchimba',
    price: 42000,
    rating: 4.7,
    intensity: 'intenso',
    type: 'arabica',
    altitude: '1,900 msnm',
    process: 'Natural',
    description: 'Para los amantes del café fuerte. Notas de cacao oscuro, tabaco dulce y un cuerpo robusto.',
    image: '/images/coffee-6.jpg',
    tags: ['Más vendido']
  }
]

export const traceabilitySteps: TraceabilityStep[] = [
  {
    id: '1',
    title: 'Cultivo',
    description: 'Semillas seleccionadas plantadas en suelo volcánico rico en nutrientes',
    date: 'Enero 2024',
    location: 'Finca La Esperanza, Popayán',
    icon: 'seed'
  },
  {
    id: '2',
    title: 'Recolección',
    description: 'Cosecha manual selectiva de cerezas maduras por expertos caficultores',
    date: 'Octubre 2024',
    location: 'Finca La Esperanza, Popayán',
    icon: 'harvest'
  },
  {
    id: '3',
    title: 'Procesamiento',
    description: 'Despulpado, fermentación controlada y secado al sol en camas africanas',
    date: 'Octubre 2024',
    location: 'Centro de Beneficio CaféCauca',
    icon: 'process'
  },
  {
    id: '4',
    title: 'Transporte',
    description: 'Almacenamiento en condiciones óptimas y transporte refrigerado',
    date: 'Noviembre 2024',
    location: 'Bodega Central, Popayán',
    icon: 'transport'
  },
  {
    id: '5',
    title: 'Venta',
    description: 'Disponible para ti con garantía de frescura y calidad certificada',
    date: 'Diciembre 2024',
    location: 'CaféTrace AI',
    icon: 'store'
  }
]

export const orders: Order[] = [
  { id: 'ORD-001', customer: 'Juan Pérez', product: 'Café Origen Cauca Premium', quantity: 2, total: 90000, status: 'entregado', date: '2024-12-15' },
  { id: 'ORD-002', customer: 'María García', product: 'Café Especial Tierradentro', quantity: 1, total: 52000, status: 'enviado', date: '2024-12-18' },
  { id: 'ORD-003', customer: 'Carlos López', product: 'Blend Caucano Tradicional', quantity: 3, total: 105000, status: 'procesando', date: '2024-12-20' },
  { id: 'ORD-004', customer: 'Ana Martínez', product: 'Café Geisha del Cauca', quantity: 1, total: 85000, status: 'pendiente', date: '2024-12-21' },
  { id: 'ORD-005', customer: 'Roberto Sánchez', product: 'Café Suave del Macizo', quantity: 2, total: 76000, status: 'entregado', date: '2024-12-10' },
  { id: 'ORD-006', customer: 'Laura Torres', product: 'Café Intenso Nocturno', quantity: 1, total: 42000, status: 'enviado', date: '2024-12-19' },
]

export const dashboardStats: DashboardStats = {
  totalRevenue: 2450000,
  totalOrders: 156,
  productsSold: 423,
  averageRating: 4.7
}

export const monthlyRevenue = [
  { month: 'Jul', revenue: 180000 },
  { month: 'Ago', revenue: 220000 },
  { month: 'Sep', revenue: 195000 },
  { month: 'Oct', revenue: 280000 },
  { month: 'Nov', revenue: 320000 },
  { month: 'Dic', revenue: 450000 },
]

export const productSales = [
  { name: 'Premium', value: 35 },
  { name: 'Especial', value: 28 },
  { name: 'Tradicional', value: 22 },
  { name: 'Geisha', value: 15 },
]

export const testimonials = [
  {
    id: '1',
    name: 'Andrea Ruiz',
    role: 'Barista Profesional',
    content: 'La trazabilidad que ofrece CaféTrace me permite contar la historia del café a mis clientes. Es increíble saber exactamente de dónde viene cada grano.',
    avatar: '/images/avatar-1.jpg'
  },
  {
    id: '2',
    name: 'Miguel Ángel Torres',
    role: 'Caficultor',
    content: 'Gracias a esta plataforma he podido conectar directamente con compradores y recibir un precio justo por mi café. Ha cambiado mi negocio.',
    avatar: '/images/avatar-2.jpg'
  },
  {
    id: '3',
    name: 'Carolina Méndez',
    role: 'Consumidora',
    content: 'Me encanta poder ver todo el proceso del café que compro. Las recomendaciones de IA siempre dan en el clavo con mis gustos.',
    avatar: '/images/avatar-3.jpg'
  }
]

export const chatMessages = [
  { role: 'bot' as const, message: '¡Hola! Soy el asistente de CaféTrace AI. ¿En qué puedo ayudarte hoy?' },
  { role: 'user' as const, message: '¿Qué café me recomiendas?' },
  { role: 'bot' as const, message: 'Basándome en las preferencias más populares, te recomiendo el Café Especial Tierradentro. Tiene un perfil intenso con notas de frutos rojos y miel. ¿Te gustaría saber más sobre su trazabilidad?' },
]
