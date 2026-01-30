import { motion } from 'framer-motion';
import { Heart, Droplets, Wind, Zap, ChevronRight } from 'lucide-react';
import { cn } from '@/utils/cn';

const iconMap = {
  Heart,
  Droplets,
  Wind,
  Zap,
};

/**
 * Card component for displaying a physiology module
 * Shows system name, icon, and topic count
 */
export default function ModuleCard({
  id,
  name,
  icon,
  color,
  topics = [],
  onClick,
  className,
}) {
  const Icon = iconMap[icon] || Droplets;
  const completedCount = topics.filter(t => t.status === 'complete').length;
  const totalCount = topics.length;

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'w-full p-5 rounded-2xl text-left',
        'bg-white border border-gray-100',
        'shadow-sm hover:shadow-md',
        'transition-shadow duration-200',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        className
      )}
      style={{ '--ring-color': color, focusRingColor: color }}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${color}15` }}
        >
          <Icon 
            size={24} 
            style={{ color }} 
            strokeWidth={2.5}
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-lg">
            {name}
          </h3>
          
          {totalCount > 0 ? (
            <p className="text-sm text-gray-500 mt-1">
              {completedCount}/{totalCount} topics
            </p>
          ) : (
            <p className="text-sm text-gray-400 mt-1 italic">
              Coming soon
            </p>
          )}

          {/* Progress Bar */}
          {totalCount > 0 && (
            <div className="mt-3 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${(completedCount / totalCount) * 100}%`,
                  backgroundColor: color,
                }}
              />
            </div>
          )}
        </div>

        {/* Arrow */}
        <ChevronRight 
          size={20} 
          className="text-gray-300 flex-shrink-0 mt-1"
        />
      </div>

      {/* Topic Preview */}
      {topics.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {topics.slice(0, 3).map((topic) => (
            <span
              key={topic.id}
              className="text-xs px-2 py-1 rounded-full bg-gray-50 text-gray-600"
            >
              {topic.name}
            </span>
          ))}
        </div>
      )}
    </motion.button>
  );
}
