import { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, BookOpen, Sparkles } from 'lucide-react';
import ModuleCard from '@/components/shared/ModuleCard';
import { modules } from '@/utils/constants';

export default function App() {
  const [activeModule, setActiveModule] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Activity size={20} className="text-white" />
            </div>
            <span className="font-display font-bold text-xl text-gray-900">
              PhysioHub
            </span>
          </div>
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-amber-100 text-amber-700">
            Beta
          </span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 pb-20">
        {/* Hero Section */}
        <motion.section 
          className="pt-12 pb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-sm text-blue-600 font-medium mb-3">
            <Sparkles size={16} />
            <span>Interactive Learning</span>
          </div>
          
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Learn physiology by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              playing with it
            </span>
          </h1>
          
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Adjust parameters, watch systems respond, and build intuition for how the body works. 
            Designed for medical and biology students.
          </p>

          {/* Quick Stats */}
          <div className="mt-8 flex gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <BookOpen size={16} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">38 Topics</p>
                <p className="text-xs text-gray-500">Interactive modules</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                <Activity size={16} className="text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">11 Systems</p>
                <p className="text-xs text-gray-500">Organ systems</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Module Grid */}
        <section>
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Explore Systems
          </h2>
          
          <motion.div 
            className="grid grid-cols-1 gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {modules.map((module) => (
              <motion.div
                key={module.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <ModuleCard
                  {...module}
                  onClick={() => setActiveModule(module.id)}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Getting Started Note */}
        <motion.section 
          className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="font-display font-semibold text-lg mb-2">
            🚀 Getting Started
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            This project is under active development. Start with the{' '}
            <span className="text-blue-400 font-medium">Renal System</span>{' '}
            to explore the counter-current multiplier - a concept that becomes 
            much clearer when you can visualize and control it.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://github.com/MetaMudraGames/physio-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              View on GitHub →
            </a>
          </div>
        </motion.section>
      </main>

      {/* Mobile Navigation (placeholder) */}
      <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-100 px-4 py-3 md:hidden">
        <div className="max-w-3xl mx-auto flex justify-around">
          <button className="flex flex-col items-center gap-1 text-blue-600">
            <Activity size={24} />
            <span className="text-xs font-medium">Learn</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <BookOpen size={24} />
            <span className="text-xs">Quiz</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
