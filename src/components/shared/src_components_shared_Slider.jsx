import { cn } from '@/utils/cn';

/**
 * Interactive slider control for adjusting physiological parameters
 * Mobile-first with 44x44px touch targets
 * 
 * @param {string} label - Display name shown above slider
 * @param {number} value - Current value (controlled)
 * @param {function} onChange - Callback: (newValue: number) => void
 * @param {number} min - Minimum allowed value
 * @param {number} max - Maximum allowed value
 * @param {number} step - Increment step size (default: 1)
 * @param {string} unit - Unit to display (e.g., "mL/min", "mmHg")
 * @param {boolean} disabled - Whether slider is disabled
 * @param {boolean} showValue - Whether to show current value (default: true)
 * @param {string} color - Accent color for the slider track
 */
export default function Slider({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  unit = '',
  disabled = false,
  showValue = true,
  color = '#3b82f6',
  className,
}) {
  // Calculate fill percentage for visual feedback
  const fillPercent = ((value - min) / (max - min)) * 100;

  const handleChange = (e) => {
    const newValue = parseFloat(e.target.value);
    onChange(newValue);
  };

  return (
    <div className={cn('w-full', className)}>
      {/* Label and Value Display */}
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
        {showValue && (
          <span className="text-sm font-semibold tabular-nums" style={{ color }}>
            {value}
            {unit && <span className="text-gray-500 ml-1 font-normal">{unit}</span>}
          </span>
        )}
      </div>

      {/* Slider Container */}
      <div className="relative h-11 flex items-center">
        {/* Background Track */}
        <div className="absolute inset-x-0 h-2 bg-gray-200 rounded-full overflow-hidden">
          {/* Filled Track */}
          <div
            className="h-full rounded-full transition-all duration-75"
            style={{
              width: `${fillPercent}%`,
              backgroundColor: disabled ? '#9ca3af' : color,
            }}
          />
        </div>

        {/* Native Range Input (invisible but functional) */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          className={cn(
            'absolute inset-0 w-full h-full opacity-0 cursor-pointer',
            'touch-none', // Prevent scroll interference
            disabled && 'cursor-not-allowed'
          )}
          style={{
            WebkitAppearance: 'none',
          }}
        />

        {/* Custom Thumb */}
        <div
          className={cn(
            'absolute w-5 h-5 md:w-4 md:h-4 rounded-full shadow-md',
            'border-2 border-white',
            'transform -translate-x-1/2',
            'pointer-events-none',
            'transition-transform duration-75',
            !disabled && 'active:scale-110'
          )}
          style={{
            left: `${fillPercent}%`,
            backgroundColor: disabled ? '#9ca3af' : color,
          }}
        />
      </div>

      {/* Min/Max Labels */}
      <div className="flex justify-between mt-1">
        <span className="text-xs text-gray-400">{min}</span>
        <span className="text-xs text-gray-400">{max}</span>
      </div>
    </div>
  );
}
