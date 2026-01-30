/**
 * PhysioHub Constants
 * Design tokens and physiological reference values
 */

// Organ System Colors
export const systemColors = {
  renal: '#3b82f6',      // Blue
  cardiac: '#ef4444',    // Red
  respiratory: '#8b5cf6', // Purple
  endocrine: '#f59e0b',  // Orange
  nervous: '#10b981',    // Green
  digestive: '#eab308',  // Yellow
};

// UI Colors
export const uiColors = {
  background: '#ffffff',
  backgroundDark: '#0f172a',
  text: '#1f2937',
  textLight: '#6b7280',
  border: '#e5e7eb',
  correct: '#10b981',
  incorrect: '#ef4444',
  disabled: '#9ca3af',
};

// Physiological Normal Ranges
// Used for slider min/max and validation
export const renalRanges = {
  GFR: { min: 30, max: 150, normal: 100, unit: 'mL/min' },
  bloodFlow: { min: 400, max: 1600, normal: 1200, unit: 'mL/min' },
  osmolarity: { min: 300, max: 1200, normal: 300, unit: 'mOsm/L' },
  loopLength: { min: 0, max: 15, normal: 10, unit: 'mm' },
};

export const cardiacRanges = {
  heartRate: { min: 40, max: 180, normal: 70, unit: 'bpm' },
  strokeVolume: { min: 40, max: 120, normal: 70, unit: 'mL' },
  contractility: { min: 40, max: 160, normal: 100, unit: '%' },
  afterload: { min: 60, max: 180, normal: 100, unit: 'mmHg' },
  edv: { min: 80, max: 160, normal: 120, unit: 'mL' },
  esv: { min: 30, max: 80, normal: 50, unit: 'mL' },
};

export const respiratoryRanges = {
  respiratoryRate: { min: 8, max: 30, normal: 15, unit: 'breaths/min' },
  tidalVolume: { min: 300, max: 800, normal: 500, unit: 'mL' },
  FiO2: { min: 0.21, max: 1.0, normal: 0.21, unit: 'fraction' },
  PaCO2: { min: 20, max: 80, normal: 40, unit: 'mmHg' },
};

// Module Metadata
export const modules = [
  {
    id: 'renal',
    name: 'Renal System',
    icon: 'Droplets',
    color: systemColors.renal,
    topics: [
      { id: 'counter-current', name: 'Counter-Current Multiplier', status: 'todo' },
      { id: 'gfr', name: 'Glomerular Filtration', status: 'todo' },
      { id: 'tubular', name: 'Tubular Reabsorption', status: 'todo' },
    ],
  },
  {
    id: 'cardiac',
    name: 'Cardiac System',
    icon: 'Heart',
    color: systemColors.cardiac,
    topics: [
      { id: 'cardiac-cycle', name: 'Cardiac Cycle', status: 'todo' },
      { id: 'pv-loop', name: 'Pressure-Volume Loops', status: 'todo' },
      { id: 'conduction', name: 'Conduction System', status: 'todo' },
    ],
  },
  {
    id: 'respiratory',
    name: 'Respiratory System',
    icon: 'Wind',
    color: systemColors.respiratory,
    topics: [
      { id: 'spirometry', name: 'Spirometry', status: 'todo' },
      { id: 'gas-exchange', name: 'Gas Exchange', status: 'todo' },
      { id: 'vq-matching', name: 'V/Q Matching', status: 'todo' },
    ],
  },
  {
    id: 'endocrine',
    name: 'Endocrine System',
    icon: 'Zap',
    color: systemColors.endocrine,
    topics: [],
  },
];

// Animation Settings
export const animationConfig = {
  fps: {
    mobile: 30,
    desktop: 60,
  },
  maxParticles: {
    mobile: 20,
    desktop: 50,
  },
  durations: {
    fast: 150,
    medium: 300,
    slow: 500,
  },
};
