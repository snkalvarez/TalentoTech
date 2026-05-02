import Link from 'next/link'
import { Coffee, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Coffee className="h-8 w-8" />
              <span className="text-xl font-bold">CaféTrace AI</span>
            </div>
            <p className="text-sm opacity-90">
              Del caficultor a tu taza, con trazabilidad inteligente. Conectamos a los mejores caficultores del Cauca con consumidores conscientes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/tienda" className="opacity-90 hover:opacity-100 transition-opacity">Tienda</Link></li>
              <li><Link href="/trazabilidad" className="opacity-90 hover:opacity-100 transition-opacity">Trazabilidad</Link></li>
              <li><Link href="/dashboard" className="opacity-90 hover:opacity-100 transition-opacity">Para Productores</Link></li>
              <li><Link href="#" className="opacity-90 hover:opacity-100 transition-opacity">Sobre Nosotros</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="opacity-90 hover:opacity-100 transition-opacity">Centro de Ayuda</Link></li>
              <li><Link href="#" className="opacity-90 hover:opacity-100 transition-opacity">Preguntas Frecuentes</Link></li>
              <li><Link href="#" className="opacity-90 hover:opacity-100 transition-opacity">Política de Envíos</Link></li>
              <li><Link href="#" className="opacity-90 hover:opacity-100 transition-opacity">Devoluciones</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="opacity-90">Popayán, Cauca, Colombia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="opacity-90">+57 (2) 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="opacity-90">hola@cafetrace.ai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} CaféTrace AI. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
