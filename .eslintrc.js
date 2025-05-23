module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', // Asegúrate de que Prettier sea el último para que pueda sobrescribir otras configuraciones.
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json', // Necesario para algunas reglas de TypeScript
  },
  settings: {
    react: {
      version: 'detect', // Detecta automáticamente la versión de React
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'error', // Reporta los problemas de Prettier como errores de ESLint
    'react/prop-types': 'off', // Deshabilitado ya que usamos TypeScript para los tipos de props
    'react/react-in-jsx-scope': 'off', // No es necesario con React 17+ y el nuevo JSX transform
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Puede ser útil habilitarlo más adelante
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    // Puedes añadir o modificar reglas aquí según las necesidades del proyecto
  },
  ignorePatterns: [
    'node_modules/',
    '.expo/',
    'babel.config.js',
    'metro.config.js',
    'jest.config.js',
    '.eslintrc.js',
    '.prettierrc.js',
  ],
};
