'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Get initial theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Check system preference
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme('system');
      applyTheme(systemTheme);
    }
  }, []);

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    const isDark = theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
    setIsOpen(false);
  };

  const getCurrentIcon = () => {
    if (theme === 'dark') return <Moon className="w-5 h-5" />;
    if (theme === 'light') return <Sun className="w-5 h-5" />;
    return <Monitor className="w-5 h-5" />;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        title="Toggle theme"
      >
        {getCurrentIcon()}
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50">
            <div className="p-2">
              <button
                onClick={() => handleThemeChange('light')}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  theme === 'light' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Sun className="w-4 h-4" />
                <span className="text-sm">Light</span>
                {theme === 'light' && <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>}
              </button>

              <button
                onClick={() => handleThemeChange('dark')}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  theme === 'dark' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Moon className="w-4 h-4" />
                <span className="text-sm">Dark</span>
                {theme === 'dark' && <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>}
              </button>

              <button
                onClick={() => handleThemeChange('system')}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  theme === 'system' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Monitor className="w-4 h-4" />
                <span className="text-sm">System</span>
                {theme === 'system' && <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
