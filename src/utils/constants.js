/**
 * PhysioHub Constants
 * Design tokens and physiological reference values
 */

// Organ System Colors
export const systemColors = {
  renal: '#3b82f6',           // Blue
  cardiac: '#ef4444',         // Red
  respiratory: '#8b5cf6',     // Purple
  endocrine: '#f59e0b',       // Orange
  neural: '#10b981',          // Green (emerald)
  gastrointestinal: '#eab308', // Yellow
  haematology: '#dc2626',     // Dark red
  reproductive: '#ec4899',    // Pink
  neuromuscular: '#14b8a6',   // Teal
  specialSenses: '#6366f1',   // Indigo
  general: '#64748b',         // Slate
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

// Module Metadata - All Physiology Systems
export const modules = [
  {
    id: 'cardiac',
    name: 'Cardiac',
    icon: 'Heart',
    color: systemColors.cardiac,
    topics: [
      { id: 'cardiac-cycle', name: 'Cardiac Cycle', status: 'todo' },
      { id: 'pv-loop', name: 'Pressure-Volume Loops', status: 'todo' },
      { id: 'conduction', name: 'Conduction System', status: 'todo' },
      { id: 'ecg', name: 'ECG Interpretation', status: 'todo' },
      { id: 'cardiac-output', name: 'Cardiac Output', status: 'todo' },
    ],
  },
  {
    id: 'respiratory',
    name: 'Respiratory',
    icon: 'Wind',
    color: systemColors.respiratory,
    topics: [
      { id: 'spirometry', name: 'Spirometry', status: 'todo' },
      { id: 'gas-exchange', name: 'Gas Exchange', status: 'todo' },
      { id: 'vq-matching', name: 'V/Q Matching', status: 'todo' },
      { id: 'oxygen-dissociation', name: 'O₂ Dissociation Curve', status: 'todo' },
    ],
  },
  {
    id: 'renal',
    name: 'Renal',
    icon: 'Droplets',
    color: systemColors.renal,
    topics: [
      { id: 'counter-current', name: 'Counter-Current Multiplier', status: 'todo' },
      { id: 'gfr', name: 'Glomerular Filtration', status: 'todo' },
      { id: 'tubular', name: 'Tubular Reabsorption', status: 'todo' },
      { id: 'acid-base', name: 'Acid-Base Balance', status: 'todo' },
    ],
  },
  {
    id: 'neural',
    name: 'Neural',
    icon: 'Brain',
    color: systemColors.neural,
    topics: [
      { id: 'action-potential', name: 'Action Potential', status: 'todo' },
      { id: 'synaptic-transmission', name: 'Synaptic Transmission', status: 'todo' },
      { id: 'reflexes', name: 'Reflex Arcs', status: 'todo' },
    ],
  },
  {
    id: 'neuromuscular',
    name: 'Neuromuscular',
    icon: 'Dumbbell',
    color: systemColors.neuromuscular,
    topics: [
      { id: 'nmj', name: 'Neuromuscular Junction', status: 'todo' },
      { id: 'muscle-contraction', name: 'Muscle Contraction', status: 'todo' },
      { id: 'sliding-filament', name: 'Sliding Filament Theory', status: 'todo' },
    ],
  },
  {
    id: 'gastrointestinal',
    name: 'Gastrointestinal',
    icon: 'Utensils',
    color: systemColors.gastrointestinal,
    topics: [
      { id: 'motility', name: 'GI Motility', status: 'todo' },
      { id: 'digestion', name: 'Digestion & Absorption', status: 'todo' },
      { id: 'secretion', name: 'GI Secretions', status: 'todo' },
    ],
  },
  {
    id: 'endocrine',
    name: 'Endocrine',
    icon: 'Zap',
    color: systemColors.endocrine,
    topics: [
      { id: 'hpa-axis', name: 'HPA Axis', status: 'todo' },
      { id: 'thyroid', name: 'Thyroid Function', status: 'todo' },
      { id: 'glucose-regulation', name: 'Glucose Regulation', status: 'todo' },
      { id: 'calcium', name: 'Calcium Homeostasis', status: 'todo' },
    ],
  },
  {
    id: 'haematology',
    name: 'Haematology',
    icon: 'Droplet',
    color: systemColors.haematology,
    topics: [
      { id: 'coagulation', name: 'Coagulation Cascade', status: 'todo' },
      { id: 'haematopoiesis', name: 'Haematopoiesis', status: 'todo' },
      { id: 'oxygen-transport', name: 'Oxygen Transport', status: 'todo' },
    ],
  },
  {
    id: 'reproductive',
    name: 'Reproductive',
    icon: 'Baby',
    color: systemColors.reproductive,
    topics: [
      { id: 'menstrual-cycle', name: 'Menstrual Cycle', status: 'todo' },
      { id: 'pregnancy', name: 'Pregnancy Physiology', status: 'todo' },
      { id: 'male-reproductive', name: 'Male Reproductive', status: 'todo' },
    ],
  },
  {
    id: 'special-senses',
    name: 'Special Senses',
    icon: 'Eye',
    color: systemColors.specialSenses,
    topics: [
      { id: 'vision', name: 'Vision & Optics', status: 'todo' },
      { id: 'hearing', name: 'Hearing & Balance', status: 'todo' },
      { id: 'taste-smell', name: 'Taste & Smell', status: 'todo' },
    ],
  },
  {
    id: 'general',
    name: 'General Physiology',
    icon: 'BookOpen',
    color: systemColors.general,
    topics: [
      { id: 'membrane-transport', name: 'Membrane Transport', status: 'todo' },
      { id: 'homeostasis', name: 'Homeostasis', status: 'todo' },
      { id: 'cell-signaling', name: 'Cell Signaling', status: 'todo' },
    ],
  },
];

// Physiological Normal Ranges
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
  PaO2: { min: 60, max: 100, normal: 95, unit: 'mmHg' },
};

export const neuralRanges = {
  restingPotential: { min: -90, max: -60, normal: -70, unit: 'mV' },
  thresholdPotential: { min: -60, max: -40, normal: -55, unit: 'mV' },
  actionPotentialPeak: { min: 20, max: 40, normal: 30, unit: 'mV' },
};

export const haematologyRanges = {
  haemoglobin: { min: 8, max: 18, normal: 14, unit: 'g/dL' },
  haematocrit: { min: 25, max: 55, normal: 42, unit: '%' },
  plateletCount: { min: 100, max: 400, normal: 250, unit: '×10⁹/L' },
};

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
