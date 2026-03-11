# Goyo Landing

Landing page para Tortas Goyo construida con Astro, React y Tailwind CSS v4. El sitio está orientado a mostrar la propuesta del restaurante, menú, sucursales y datos de contacto con una experiencia rápida y simple para móvil y escritorio.

## Producción

Sitio desplegado en [https://goyo-landing.vercel.app/](https://goyo-landing.vercel.app/).

## Stack

- Astro 6
- React 19
- Tailwind CSS 4
- shadcn/ui + Radix UI
- Lucide React
- `@astrojs/sitemap`

## Secciones del sitio

- Inicio con hero, propuesta de valor y CTA de contacto
- Menú destacado en home
- Página de menú completo
- Página de sucursales
- Sección de contacto con teléfonos, horarios y mapa
- SEO base desde `src/layouts/Layout.astro`

## Scripts

Ejecuta los comandos desde la raíz del proyecto.

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Estructura

```text
src/
  assets/        Imagenes del sitio
  components/    Componentes React y UI
  data/          Data del menú
  layouts/       Layout base y SEO
  pages/         Rutas Astro
  styles/        Estilos globales
public/          Archivos públicos
```

## Rutas principales

- `/` Inicio
- `/menu` Menú completo
- `/sucursales` Sucursales

## Desarrollo

El proyecto usa Astro como shell principal y React para componentes interactivos. La configuración del sitio está en `astro.config.mjs`, con sitemap habilitado y `site` apuntando a producción.

Si necesitas correr el proyecto localmente y `npm` falla en tu entorno, valida que tu instalación global de Node/NPM esté correcta o usa el binario local de Astro desde `node_modules/.bin`.

## Contenido relevante

- El menú vive en `src/data/menu.ts`
- La imagen principal del hero y OG está en `src/assets/hero/frontside-goyo.png`
- El layout SEO central está en `src/layouts/Layout.astro`

## Despliegue

El sitio está pensado para desplegarse en Vercel. Antes de publicar cambios conviene revisar:

- Metadatos SEO
- Teléfonos, horarios y direcciones
- Funcionamiento de rutas `/menu` y `/sucursales`
- Generación correcta del sitemap
