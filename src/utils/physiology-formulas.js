/**
 * PhysioHub - Physiology Formulas
 * Mathematical calculations for physiological simulations
 * 
 * Sources:
 * - Guyton and Hall Textbook of Medical Physiology, 14th Ed.
 * - Cardiovascular Physiology by Mohrman & Heller, 9th Ed.
 * - West's Respiratory Physiology, 10th Ed.
 */

// ============================================
// RENAL PHYSIOLOGY
// ============================================

/**
 * Calculate GFR using simplified Starling equation
 * Normal GFR: 90-120 mL/min (adults)
 * 
 * @param {number} glomerularPressure - Pressure in glomerulus (mmHg), normal: 55-60
 * @param {number} bowmanPressure - Pressure in Bowman's capsule (mmHg), normal: 15
 * @param {number} oncoticPressure - Oncotic pressure from proteins (mmHg), normal: 30
 * @param {number} filtrationCoefficient - Kf, normally ~12.5 mL/min/mmHg
 * @returns {number} GFR in mL/min
 */
export function calculateGFR(
  glomerularPressure,
  bowmanPressure = 15,
  oncoticPressure = 30,
  filtrationCoefficient = 12.5
) {
  const netFilteringPressure = glomerularPressure - bowmanPressure - oncoticPressure;
  return Math.max(0, filtrationCoefficient * netFilteringPressure);
}

/**
 * Calculate medullary osmolarity at different depths
 * Uses simplified exponential model
 * 
 * @param {number} corticalOsmolarity - Starting osmolarity (mOsm/L), normal: 300
 * @param {number} depth - Depth into medulla (mm)
 * @param {number} maxDepth - Total loop length (mm), normal: 15
 * @returns {number} Osmolarity at given depth (mOsm/L)
 */
export function calculateMedullaryOsmolarity(
  corticalOsmolarity = 300,
  depth,
  maxDepth = 15
) {
  const maxOsmolarity = 1200; // Maximum at papillary tip
  const normalizedDepth = Math.min(depth / maxDepth, 1);
  const osmolarity = corticalOsmolarity + 
    (maxOsmolarity - corticalOsmolarity) * 
    Math.pow(normalizedDepth, 1.5);
  
  return Math.min(osmolarity, maxOsmolarity);
}

/**
 * Calculate renal blood flow using pressure gradient
 * Normal RBF: 1000-1200 mL/min (both kidneys)
 * 
 * @param {number} arterialPressure - Mean arterial pressure (mmHg), normal: 100
 * @param {number} venousPressure - Renal vein pressure (mmHg), normal: 4
 * @param {number} renalResistance - Total renal vascular resistance, normal: 0.08
 * @returns {number} RBF in mL/min
 */
export function calculateRBF(
  arterialPressure = 100,
  venousPressure = 4,
  renalResistance = 0.08
) {
  const pressureGradient = arterialPressure - venousPressure;
  return pressureGradient / renalResistance;
}

// ============================================
// CARDIAC PHYSIOLOGY
// ============================================

/**
 * Calculate stroke volume using simplified Frank-Starling
 * Normal SV: 60-100 mL
 * 
 * @param {number} edv - End-diastolic volume (mL), normal: 120
 * @param {number} contractility - Contractility (% of normal), 100 = normal
 * @param {number} afterload - Arterial pressure (mmHg), normal: 100
 * @returns {number} Stroke volume in mL
 */
export function calculateStrokeVolume(
  edv,
  contractility = 100,
  afterload = 100
) {
  const baseEF = 0.6; // 60% normal ejection fraction
  const contractilityFactor = contractility / 100;
  const afterloadFactor = 100 / afterload;
  
  let adjustedEF = baseEF * contractilityFactor * afterloadFactor;
  adjustedEF = Math.min(Math.max(adjustedEF, 0.3), 0.8);
  
  return edv * adjustedEF;
}

/**
 * Calculate cardiac output
 * Normal CO: 4-8 L/min at rest
 * 
 * @param {number} strokeVolume - Stroke volume (mL)
 * @param {number} heartRate - Heart rate (bpm)
 * @returns {number} Cardiac output in L/min
 */
export function calculateCardiacOutput(strokeVolume, heartRate) {
  return (strokeVolume * heartRate) / 1000;
}

/**
 * Calculate Mean Arterial Pressure
 * Normal MAP: 70-100 mmHg
 * 
 * @param {number} systolic - Systolic BP (mmHg)
 * @param {number} diastolic - Diastolic BP (mmHg)
 * @returns {number} MAP in mmHg
 */
export function calculateMAP(systolic, diastolic) {
  return diastolic + (systolic - diastolic) / 3;
}

/**
 * Calculate key points of cardiac PV loop
 * 
 * @param {number} edv - End-diastolic volume (mL)
 * @param {number} esv - End-systolic volume (mL)
 * @param {number} edp - End-diastolic pressure (mmHg)
 * @param {number} esp - End-systolic pressure (mmHg)
 * @returns {object} PV loop coordinates for each phase
 */
export function calculatePVLoop(edv, esv, edp = 8, esp = 120) {
  return {
    endDiastole: { v: edv, p: edp },
    isovolContraction: { v: edv, p: 80 },
    ejectionStart: { v: edv, p: 80 },
    endSystole: { v: esv, p: esp },
    isovolRelaxation: { v: esv, p: edp },
  };
}

// ============================================
// RESPIRATORY PHYSIOLOGY
// ============================================

/**
 * Calculate alveolar oxygen pressure (PAO2)
 * Normal PAO2: 100-105 mmHg
 * 
 * @param {number} FiO2 - Fraction of inspired oxygen (0.21 for room air)
 * @param {number} barometricPressure - Atmospheric pressure (mmHg), sea level: 760
 * @param {number} PaCO2 - Arterial CO2 pressure (mmHg), normal: 40
 * @param {number} respiratoryQuotient - R, typically 0.8
 * @returns {number} PAO2 in mmHg
 */
export function calculatePAO2(
  FiO2 = 0.21,
  barometricPressure = 760,
  PaCO2 = 40,
  respiratoryQuotient = 0.8
) {
  const waterVaporPressure = 47; // At 37°C
  return (FiO2 * (barometricPressure - waterVaporPressure)) - (PaCO2 / respiratoryQuotient);
}

/**
 * Calculate minute ventilation
 * Normal: 5-8 L/min at rest
 * 
 * @param {number} tidalVolume - Volume per breath (mL)
 * @param {number} respiratoryRate - Breaths per minute
 * @returns {number} Minute ventilation in L/min
 */
export function calculateMinuteVentilation(tidalVolume, respiratoryRate) {
  return (tidalVolume * respiratoryRate) / 1000;
}

/**
 * Simplified oxygen saturation curve
 * Based on sigmoid approximation of oxyhemoglobin curve
 * 
 * @param {number} pO2 - Partial pressure of oxygen (mmHg)
 * @returns {number} Oxygen saturation (0-100%)
 */
export function calculateO2Saturation(pO2) {
  const P50 = 27; // Half-saturation pressure
  const hillCoefficient = 2.7; // Cooperativity
  
  const saturation = 100 * (
    Math.pow(pO2, hillCoefficient) / 
    (Math.pow(P50, hillCoefficient) + Math.pow(pO2, hillCoefficient))
  );
  
  return Math.min(saturation, 100);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Linear interpolation between two values
 * @param {number} start - Starting value
 * @param {number} end - Ending value
 * @param {number} t - Progress (0-1)
 * @returns {number} Interpolated value
 */
export function lerp(start, end, t) {
  return start + (end - start) * t;
}

/**
 * Clamp value between min and max
 * @param {number} value - Value to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped value
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Round to specified decimal places (for display)
 * @param {number} value - Value to round
 * @param {number} decimals - Number of decimal places
 * @returns {number} Rounded value
 */
export function roundTo(value, decimals = 1) {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

// Unit conversions
export function mmHgToKPa(mmHg) {
  return mmHg * 0.133322;
}

export function mLToL(mL) {
  return mL / 1000;
}
