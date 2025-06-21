import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-9 w-9 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
        ))}
      </div>
    );
  }

  const themes = [
    { name: 'light', icon: Sun, label: 'Light' },
    { name: 'dark', icon: Moon, label: 'Dark' },
    { name: 'system', icon: Monitor, label: 'System' },
  ];

  return (
    <div className="flex items-center space-x-1">
      {themes.map(({ name, icon: Icon, label }) => (
        <motion.div
          key={name}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={theme === name ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setTheme(name)}
            className={`h-9 w-9 p-0 rounded-full transition-all duration-300 ${
              theme === name
                ? 'bg-gradient-to-r from-portfolio-blue to-blue-600 text-white shadow-lg'
                : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300'
            }`}
            title={label}
          >
            <Icon className="h-4 w-4" />
          </Button>
        </motion.div>
      ))}
    </div>
  );
};

export default ThemeToggle; 