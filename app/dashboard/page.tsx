import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { 
  LayoutDashboard, Users, ShoppingCart, Zap, 
  MessageSquare, BarChart3, Bot, Settings,
  Megaphone, Home, Briefcase, TrendingUp
} from 'lucide-react'

export default async function Dashboard() {
  const { userId } = auth()
  
  if (!userId) {
    redirect('/auth/sign-in')
  }
  
  const modules = [
    { 
      name: 'Inicio', 
      icon: Home, 
      href: '/dashboard',
      description: 'Dashboard principal',
      category: 'Principal'
    },
    { 
      name: 'ERP', 
      icon: LayoutDashboard, 
      href: 'https://odoo.smarterbot.cl/auth/clerk/login',
      description: 'Gestión empresarial completa',
      category: 'Core',
      external: true
    },
    { 
      name: 'CRM', 
      icon: Users, 
      href: 'https://crm.smarterbot.cl',
      description: 'Gestión de clientes y ventas',
      category: 'Core',
      external: true
    },
    { 
      name: 'Tienda', 
      icon: ShoppingCart, 
      href: 'https://tienda.smarterbot.cl',
      description: 'E-commerce (Odoo/Shopify)',
      category: 'Core',
      external: true
    },
    { 
      name: 'Chat', 
      icon: MessageSquare, 
      href: 'https://chatwoot.smarterbot.store',
      description: 'Soporte omnicanal',
      category: 'Comunicación',
      external: true
    },
    { 
      name: 'Automatizaciones', 
      icon: Zap, 
      href: 'https://n8n.smarterbot.store',
      description: 'Workflows y procesos',
      category: 'Automatización',
      external: true
    },
    { 
      name: 'KPI', 
      icon: BarChart3, 
      href: 'https://kpi.smarterbot.cl',
      description: 'Dashboards y métricas',
      category: 'Analytics',
      external: true
    },
    { 
      name: 'Marketing', 
      icon: Megaphone, 
      href: 'https://mkt.smarterbot.cl',
      description: 'Campañas y leads',
      category: 'Marketing',
      external: true,
      badge: 'Nuevo'
    },
    { 
      name: 'Bot IA', 
      icon: Bot, 
      href: 'https://botpress.smarterbot.store',
      description: 'Asistente inteligente',
      category: 'IA',
      external: true
    },
    { 
      name: 'Planes', 
      icon: TrendingUp, 
      href: '/dashboard/plans',
      description: 'Gestión de suscripción',
      category: 'Cuenta'
    },
    { 
      name: 'Servicios', 
      icon: Briefcase, 
      href: '/dashboard/services',
      description: 'Casos reales y demos',
      category: 'Información'
    },
    { 
      name: 'Configuración', 
      icon: Settings, 
      href: '/settings',
      description: 'Ajustes del sistema',
      category: 'Sistema'
    },
  ]
  
  const categories = ['Core', 'Comunicación', 'Automatización', 'Analytics', 'Marketing', 'IA', 'Cuenta', 'Sistema']
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-xl shadow-lg"></div>
              <div>
                <span className="text-xl font-bold text-gray-900">SmarterOS</span>
                <span className="ml-2 text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-semibold">v1.0</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Todos los sistemas operativos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-right hidden sm:block">
                  <div className="text-sm font-medium text-gray-900">Usuario</div>
                  <div className="text-xs text-gray-500">{userId.slice(0, 8)}...</div>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Bienvenido a tu Sistema Operativo
          </h1>
          <p className="text-lg text-gray-600">
            Gestiona todo tu negocio desde un solo lugar. Multi-tenant, multi-servicio, multi-agente.
          </p>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900">7</div>
                <div className="text-sm text-gray-600">Módulos Activos</div>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <LayoutDashboard className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900">SSO</div>
                <div className="text-sm text-gray-600">Login Único</div>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-900">v1.0</div>
                <div className="text-sm text-gray-600">Production</div>
              </div>
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-amber-600" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Modules by Category */}
        {categories.map(category => {
          const categoryModules = modules.filter(m => m.category === category)
          if (categoryModules.length === 0) return null
          
          return (
            <div key={category} className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {categoryModules.map((module) => {
                  const Icon = module.icon
                  const isExternal = module.external
                  
                  return (
                    <Link
                      key={module.name}
                      href={module.href}
                      target={isExternal ? '_blank' : undefined}
                      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-200 hover:border-emerald-300 group relative"
                    >
                      {module.badge && (
                        <div className="absolute top-2 right-2 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          {module.badge}
                        </div>
                      )}
                      <div className="flex flex-col items-start gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                            {module.name}
                            {isExternal && (
                              <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            )}
                          </h3>
                          <p className="text-sm text-gray-600">{module.description}</p>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
        
        {/* Footer Info */}
        <div className="mt-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">¿Necesitas ayuda?</h3>
              <p className="text-emerald-50">Nuestro equipo está disponible 24/7 para asistirte</p>
            </div>
            <Link 
              href="/settings/support" 
              className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition"
            >
              Contactar Soporte
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
