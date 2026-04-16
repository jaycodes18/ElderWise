import { motion } from 'framer-motion'
import { useState } from 'react'

interface NavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'tech', label: 'Learn Tech', icon: '💻' },
    { id: 'health', label: 'Health Guide', icon: '🏥' },
    { id: 'chat', label: 'Ask AI', icon: '🤖' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/50 border-b border-cyan-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <span className="text-3xl">🧠</span>
            <h1 className="text-2xl font-bold gradient-text">ElderWise</h1>
          </motion.div>

          {/* Navigation Tabs */}
          <div className="hidden md:flex gap-2">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 text-lg ${
                  activeTab === tab.id
                    ? 'bg-cyan-500/20 border border-cyan-500 text-cyan-300'
                    : 'hover:bg-cyan-500/10 text-gray-300'
                }`}
              >
                {tab.icon} {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex gap-2">
            {tabs.slice(0, 2).map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 rounded-lg text-sm ${
                  activeTab === tab.id ? 'bg-cyan-500/20 text-cyan-300' : 'text-gray-300'
                }`}
              >
                {tab.icon}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
