export const Colors = {
  primary: '#6200EE', // Ejemplo: Morado principal
  primaryVariant: '#3700B3', // Ejemplo: Variante más oscura del morado
  secondary: '#03DAC6', // Ejemplo: Teal secundario
  secondaryVariant: '#018786', // Ejemplo: Variante más oscura del teal
  background: '#FFFFFF',
  surface: '#FFFFFF',
  error: '#B00020',
  onPrimary: '#FFFFFF',
  onSecondary: '#000000',
  onBackground: '#000000',
  onSurface: '#000000',
  onError: '#FFFFFF',
  text: '#333333',
  textLight: '#757575',
  border: '#E0E0E0',
  disabled: '#BDBDBD',
  placeholder: '#BDBDBD',
  // Colores específicos de SoulDream (a definir/ajustar)
  souldreamBlue: '#4A90E2',
  souldreamGold: '#F5A623',
};

export const Fonts = {
  // Asegúrate de que estas fuentes estén cargadas en tu aplicación
  regular: 'System', // Usar System por defecto, luego configurar fuentes personalizadas
  bold: 'System',
  italic: 'System',
  // Tamaños de fuente (ejemplos)
  size: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 24,
    title: 32,
  },
  // Pesos de fuente (ejemplos)
  weight: {
    light: '300' as const,
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const BorderRadius = {
  sm: 4,
  md: 8,
  lg: 16,
  circle: 999,
};

export const Shadows = {
  // Ejemplo de sombras (pueden necesitar ajustes para Android/iOS)
  small: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
};

const theme = {
  Colors,
  Fonts,
  Spacing,
  BorderRadius,
  Shadows,
};

export type AppTheme = typeof theme;

export default theme;
