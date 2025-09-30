import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from '@/components/Sidebar';
import ThemeToggle from '@/components/ThemeToggle';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Employee Portal - HR Management System",
  description: "Comprehensive HR portal for employee management, learning, and collaboration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
      >
        <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-950 dark:via-indigo-950/50 dark:to-purple-950/30 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400/10 dark:bg-pink-600/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
          </div>

          <Sidebar />
          <main className="flex-1 relative z-10">
            {/* Modern Header with theme toggle */}
            <div className="sticky top-0 z-30 glass-strong border-b border-gray-200/50 dark:border-gray-700/50 px-8 py-5">
              <div className="flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 dark:from-green-600/20 dark:to-emerald-600/20 border border-green-500/20 dark:border-green-600/30">
                    <div className="w-2.5 h-2.5 bg-green-500 dark:bg-green-400 rounded-full animate-gentle-pulse shadow-lg shadow-green-500/50"></div>
                    <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                      System Online
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    ⏰ {new Date().toLocaleTimeString()}
                  </div>
                  <ThemeToggle />
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="p-8 max-w-7xl mx-auto">
              <div className="animate-scale-in">
                {children}
              </div>
            </div>

            {/* Modern Floating action button */}
            <div className="fixed bottom-8 right-8 z-40 fab">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <button className="relative w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform group-hover:scale-110 flex items-center justify-center border-2 border-white/20">
                  <span className="text-white text-3xl font-light">+</span>
                </button>

                {/* Modern tooltip */}
                <div className="absolute bottom-full right-0 mb-3 glass-strong rounded-xl px-4 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl transform group-hover:translate-y-[-4px]">
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">Quick Actions</span>
                  <div className="absolute top-full right-6 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-white/80 dark:border-t-slate-800/80"></div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
