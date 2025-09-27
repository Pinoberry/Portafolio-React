# Portafolio Profesional

Sitio web de portafolio personal desarrollado con React y TypeScript, con diseño responsivo y soporte para temas claro/oscuro.

[Ver Demo](https://Pinoberry.github.io/Portafolio-React/)

## Tecnologías Principales

- **Frontend**: React 18 con TypeScript
- **Estilización**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconografía**: React Icons
- **Componentes UI**: Chakra UI (opcional)
- **Herramienta de Construcción**: Create React App

## Características Principales

- **Tema claro/oscuro** con persistencia de preferencias del usuario
- **Diseño responsivo** adaptado a móviles, tablets y escritorio
- **Optimización de rendimiento** con carga diferida (lazy loading)
- **Transiciones y animaciones** implementadas con Framer Motion
- **Estructura de secciones**:
  - Inicio (Hero)
  - Sobre mí
  - Habilidades técnicas
  - Proyectos destacados
  - Formulario de contacto

## Estructura del Proyecto

```
portafolio-react/
├── public/                 # Archivos estáticos
├── src/
│   ├── assets/             # Imágenes, fuentes, etc.
│   ├── components/         # Componentes reutilizables
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── context/            # Contextos de React
│   │   └── ThemeContext.tsx
│   ├── App.tsx             # Componente principal
│   └── index.tsx           # Punto de entrada
├── .gitignore
├── package.json
├── tailwind.config.js      # Configuración de Tailwind
├── postcss.config.js
└── tsconfig.json           # Configuración de TypeScript
```

## Comandos Disponibles

Ejecuta estos comandos en la raíz del proyecto:

```bash
# Iniciar servidor de desarrollo
npm start

# Construir para producción
npm run build

# Ejecutar pruebas
npm test

# Desplegar a GitHub Pages
npm run deploy

# Preparar para despliegue
npm run predeploy
```

## Requisitos del Sistema

- Node.js versión 16 o superior
- Gestor de paquetes npm (incluido con Node.js)
- Cuenta de GitHub para despliegue
- Repositorio configurado con GitHub Pages (rama `gh-pages`) opcional

## Instalación y Configuración

Siga estos pasos para configurar el proyecto en su entorno local:

1. Clonar el repositorio

   ```bash
   git clone https://github.com/tu-usuario/portafolio-react.git
   cd portafolio-react
   ```

2. Instalar dependencias

   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo
   ```bash
   npm start
   ```
   La aplicación estará disponible en http://localhost:3000

## Construcción para Producción

Para generar una versión optimizada del proyecto, ejecute:

```bash
npm run build
```

La compilación de producción se generará en el directorio `build/`.

## Pruebas

```bash
npm test
```

## Despliegue en GitHub Pages

Siga estos pasos para desplegar el proyecto en GitHub Pages:

1. Verificar que el campo `homepage` en `package.json` contenga la URL correcta:

   ```json
   "homepage": "https://tu-usuario.github.io/tu-repositorio"
   ```

2. Instalar la dependencia gh-pages si no está presente:

   ```bash
   npm install --save gh-pages
   ```

3. Ejecutar el comando de despliegue:
   ```bash
   npm run deploy
   ```

Este proceso actualizará la rama `gh-pages` con el contenido del directorio `build/`.

## Personalización

### Temas y Estilos

- Los colores del tema se configuran en `tailwind.config.js`
- Los estilos globales se encuentran en `src/index.css`
- Las animaciones utilizan Framer Motion

### Configuración Técnica

- **TypeScript**: Configuración estricta en `tsconfig.json`
- **Compatibilidad**: Navegadores objetivo definidos en `browserslist`
- **PostCSS**: Configurado con `postcss-preset-env` y `autoprefixer`
