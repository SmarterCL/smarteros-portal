import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { 
  LayoutDashboard, Users, ShoppingCart, Zap, 
  MessageSquare, BarChart3, Bot, Settings 
} from 'lucide-react'

export default async function Dashboard() {
  const { userId } = auth()
  
  if (!userId) {
    redirect('/auth/sign-in')
  }
  
  const modules = [
    { 
      name: 'ERP', 
      icon: LayoutDashboard, 
      href: process.env.NEXT_PUBLIC_ODOO_URL + '/auth/clerk/login',
      description: 'Gestión empresarial completa'
    },
    { 
      name: 'CRM', 
      icon: Users, 
      href: '/dashboard/crm',
      description: 'Gestión de clientes y ventas'
    },
    { 
      name: 'Tienda', 
      icon: ShoppingCart, 
      href: process.env.NEXT_PUBLIC_STORE_URL,
      description: 'E-commerce y catálogo'
    },
    { 
      name: 'Automatizaciones', 
      icon: Zap, 
      href: 'https://n8n.smarterbot.store',
      description: 'Workflows y procesos'
    },
    { 
      name: 'Chat', 
      icon: MessageSquare, 
      href: 'https://chatwoot.smarterbot.store',
      description: 'Soporte y conversaciones'
    },
    { 
      name: 'KPI', 
      icon: BarChart3, 
      href: '/dashboard/kpi',
      description: 'Métricas y reportes'
    },
    { 
      name: 'Bot', 
      icon: Bot, 
      href: 'https://botpress.smarterbot.store',
      description: 'Asistente inteligente'
    },
    { 
      name: 'Configuración', 
      icon: Settings, 
      href: '/settings',
      description: 'Ajustes del sistema'
    },
  ]
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900">SmarterOS</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Usuario: {userId}</span>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Bienvenido a SmarterOS
          </h1>
          <p className="text-gray-600">
            Tu sistema operativo para negocios. Gestiona todo desde un solo lugar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module) => {
            const Icon = module.icon
            return (
              <Link
                key={module.name}
                href={module.href}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-emerald-300"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{module.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{module.description}</p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
        
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Estado del Sistema
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-emerald-50 rounded-lg">
              <div className="text-2xl font-bold text-emerald-600">8+</div>
              <div className="text-sm text-gray-600">Módulos Activos</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
            <div className="p-4 bg-amber-50 rounded-lg">
              <div className="text-2xl font-bold text-amber-600">v0.9</div>
              <div className="text-sm text-gray-600">Beta Release</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
