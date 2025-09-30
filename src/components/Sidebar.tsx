import Link from 'next/link';
import {
  LayoutDashboard,
  BookOpen,
  Search,
  Users,
  GraduationCap,
  UserPlus,
  MessageSquare,
  FileText
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard, color: 'hover:bg-purple-700 hover:shadow-purple-500/50' },
  { name: 'Knowledge Hub', href: '/knowledge-hub', icon: BookOpen, color: 'hover:bg-blue-700 hover:shadow-blue-500/50' },
  { name: 'HR Policies', href: '/policies', icon: FileText, color: 'hover:bg-indigo-700 hover:shadow-indigo-500/50' },
  { name: 'Smart Search & AI Assistant', href: '/search', icon: Search, color: 'hover:bg-cyan-700 hover:shadow-cyan-500/50' },
  { name: 'Employee Profiles & Skills Mapping', href: '/profile', icon: Users, color: 'hover:bg-green-700 hover:shadow-green-500/50' },
  { name: 'Learning & Career Growth', href: '/learning', icon: GraduationCap, color: 'hover:bg-yellow-700 hover:shadow-yellow-500/50' },
  { name: 'Onboarding & Knowledge Transfer', href: '/onboarding', icon: UserPlus, color: 'hover:bg-pink-700 hover:shadow-pink-500/50' },
  { name: 'Collaboration & Sharing', href: '/collaboration', icon: MessageSquare, color: 'hover:bg-red-700 hover:shadow-red-500/50' },
];

export default function Sidebar() {
  return (
    <nav className="w-72 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 text-white p-8 flex flex-col shadow-2xl relative overflow-hidden">
      {/* Modern animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-16 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-12 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-8 w-20 h-20 bg-white/5 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

      {/* Logo */}
      <div className="relative z-10 mb-8 flex items-center justify-center group">
        <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:bg-white/30 transition-all duration-300"></div>
        <img
          src="https://zlendosuite.com/assets/img/logo.png"
          alt="Logo"
          className="relative w-20 h-20 object-contain drop-shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
        />
      </div>

      {/* Title */}
      <div className="relative z-10 mb-10 text-center">
        <h1 className="text-3xl font-black mb-2 bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text text-transparent drop-shadow-lg tracking-tight">
          Employee Portal
        </h1>
        <p className="text-white/70 text-sm font-medium">Your HR Hub</p>
      </div>

      {/* Navigation */}
      <ul className="relative z-10 space-y-2.5 flex-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`group flex items-center py-4 px-5 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-x-1 ${item.color} bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 hover:bg-white/20 shadow-lg hover:shadow-xl`}
              >
                <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                  <Icon className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                </div>
                <span className="ml-3 text-sm font-semibold group-hover:text-white transition-colors leading-tight">
                  {item.name}
                </span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Bottom decorative element */}
      <div className="relative z-10 mt-8 flex flex-col items-center space-y-4">
        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"></div>
        <div className="text-center text-white/50 text-xs font-medium">
          v2.0 • Modern Design
        </div>
      </div>
    </nav>
  );
}
