'use client'

import { useEffect, useState } from 'react'
import { Switch } from '@/shared/ui/switch'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null)

  // Инициализируем тему из cookie или <html>
  useEffect(() => {
    const currentTheme = document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light'
    setTheme(currentTheme)
  }, [])

  // Переключение темы
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)

    // Обновляем класс на <html>
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(newTheme)

    // Сохраняем тему в cookie
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000` // Cookie на 1 год
  }

  if (theme === null) return null // Показываем только после инициализации

  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="theme-toggle"
        onClick={toggleTheme}
        checked={theme === 'dark'}
      />
    </div>
  )
}
