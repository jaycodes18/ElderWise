import { motion } from 'framer-motion'

interface HeroProps {
  setActiveTab: (tab: string) => void
}

export default function Hero({ setActiveTab }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full text-center"
      >
        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl sm:text-7xl font-bold mb-4">
            <span className="gradient-text">Welcome to ElderWise</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            Your AI-powered companion for learning technology and understanding health information
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {[
            { icon: '💻', title: 'Learn Technology', desc: 'Step-by-step guides to master any tech skill' },
            { icon: '🏥', title: 'Health Guidance', desc: 'Understand prescriptions and medical info' },
            { icon: '🤖', title: 'AI Assistant', desc: 'Ask questions anytime, get instant answers' },
            { icon: '✨', title: 'Easy to Use', desc: 'Large buttons, simple design, perfect for everyone' },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, translateY: -10 }}
              className="glassmorphism p-6 rounded-2xl cursor-pointer"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('tech')}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Learn Technology →
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('health')}
            className="px-8 py-4 border-2 border-cyan-500 rounded-xl font-bold text-lg hover:bg-cyan-500/10 transition-all duration-300"
          >
            Understand Health Info →
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}
