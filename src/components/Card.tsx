'use client';

import { useState, useEffect } from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  expandable?: boolean;
  defaultExpanded?: boolean;
  className?: string;
  variant?: 'default' | 'gradient' | 'glass' | 'bordered';
  interactive?: boolean;
  loading?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  badge?: string | number;
  badgeColor?: 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'indigo';
  animate?: boolean;
}

export default function Card({
  title,
  children,
  expandable = false,
  defaultExpanded = true,
  className = "",
  variant = 'default',
  interactive = false,
  loading = false,
  onClick,
  icon,
  badge,
  badgeColor = 'blue',
  animate = true
}: CardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [animate]);

  const toggleExpanded = () => {
    if (expandable) {
      setIsExpanded(!isExpanded);
    }
    if (onClick) {
      onClick();
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-pink-50/80 dark:from-blue-950/30 dark:via-purple-950/20 dark:to-pink-950/30 border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm';
      case 'glass':
        return 'glass border-white/20 dark:border-white/10';
      case 'bordered':
        return 'border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 bg-gray-50/50 dark:bg-gray-800/50 hover:bg-blue-50/50 dark:hover:bg-blue-950/50';
      default:
        return 'bg-white/90 dark:bg-slate-800/90 border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm';
    }
  };

  const getBadgeClasses = () => {
    const colors = {
      blue: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 ring-1 ring-blue-500/20 dark:ring-blue-500/30',
      green: 'bg-green-500/10 dark:bg-green-500/20 text-green-700 dark:text-green-300 ring-1 ring-green-500/20 dark:ring-green-500/30',
      red: 'bg-red-500/10 dark:bg-red-500/20 text-red-700 dark:text-red-300 ring-1 ring-red-500/20 dark:ring-red-500/30',
      yellow: 'bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 ring-1 ring-yellow-500/20 dark:ring-yellow-500/30',
      purple: 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 ring-1 ring-purple-500/20 dark:ring-purple-500/30',
      indigo: 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 ring-1 ring-indigo-500/20 dark:ring-indigo-500/30'
    };
    return colors[badgeColor];
  };

  if (loading) {
    return (
      <div className={`rounded-lg border border-gray-100 p-6 ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl transition-all duration-300 transform relative overflow-hidden ${
        animate ? (isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0') : ''
      } ${
        interactive || expandable || onClick
          ? 'cursor-pointer interactive-card shadow-modern hover:shadow-modern-hover'
          : 'shadow-modern'
      } ${getVariantClasses()} border ${className}`}
      onClick={toggleExpanded}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className={`p-7 ${interactive || expandable || onClick ? 'hover:bg-gradient-to-r hover:from-gray-50/50 hover:to-transparent dark:hover:from-gray-700/20 transition-all duration-300' : ''}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {icon && (
              <div className={`p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 transition-all duration-300 ${
                isHovered ? 'scale-110 rotate-6 shadow-lg' : 'shadow-md'
              }`}>
                {icon}
              </div>
            )}
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center space-x-3 tracking-tight">
                <span>{title}</span>
                {badge && (
                  <span className={`px-3 py-1.5 text-xs rounded-full font-semibold ${getBadgeClasses()}`}>
                    {badge}
                  </span>
                )}
              </h2>
            </div>
          </div>

          {(expandable || interactive) && (
            <div className="flex items-center space-x-2">
              {interactive && (
                <div className={`transition-transform duration-200 ${isHovered ? 'translate-x-1' : ''}`}>
                  →
                </div>
              )}
              {expandable && (
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''} ${
                    isHovered ? 'scale-110' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      {(!expandable || isExpanded) && (
        <div className={`px-7 pb-7 transition-all duration-300 ${
          expandable ? (isExpanded ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden') : ''
        }`}>
          <div className="content-fade">
            {children}
          </div>
        </div>
      )}

      {/* Hover Effect Overlay */}
      {(interactive || expandable) && isHovered && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl pointer-events-none transition-opacity duration-500" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-2xl pointer-events-none transition-opacity duration-500" />
        </>
      )}
    </div>
  );
}
