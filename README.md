# 🏠 Avalúos Quiñonez - Landing Page

Sitio web profesional para la empresa **Avalúos Quiñonez**, especializada en valuación de bienes inmuebles con precisión y confiabilidad.

## 🎯 Descripción

Landing page moderna y responsiva que presenta los servicios de avalúos inmobiliarios. Incluye carruseles interactivos, navegación suave y diseño optimizado para dispositivos móviles.

## ✨ Características principales

- ✅ **Diseño responsivo** - Adaptable a todos los tamaños de pantalla
- ✅ **Carruseles infinitos** - Servicios y noticias con autoplay
- ✅ **Menú hamburguesa** - Navegación móvil intuitiva
- ✅ **Scroll suave** - Navegación fluida entre secciones
- ✅ **Integración de mapas** - Google Maps embebido
- ✅ **Enlaces a redes sociales** - WhatsApp, Facebook, Instagram

## 🏗️ Estructura del proyecto

```
├── index.html          # Archivo HTML principal
├── styles.css          # Estilos CSS
├── main.js             # Lógica JavaScript
├── assets/             # Imágenes y recursos
│   ├── Avaluo-logo.png
│   ├── house.png
│   ├── news-image.png
│   └── ...
├── imagenes/           # Imágenes adicionales
│   └── degradado.jpeg
└── README.md           # Este archivo
```

## 🚀 Secciones del sitio

### 1. **Navbar** 
Barra de navegación sticky con:
- Logo de la empresa
- Menú de navegación
- Botón hamburguesa para móvil

### 2. **Hero Section**
Sección de bienvenida con:
- Imagen de propiedad
- Título principal
- Botón de llamada a acción

### 3. **Sobre Nosotros**
Información sobre la empresa:
- Quiénes somos
- Misión
- Visión

### 4. **Servicios**
Carrusel infinito con:
- Avalúos comerciales
- Avalúos residenciales
- Avalúos industriales
- Navegación con botones prev/next

### 5. **Noticias**
Carrusel de noticias con:
- Tarjetas de artículos
- Fecha de publicación
- Enlaces "Leer más"

### 6. **Ubicación**
Información de contacto:
- Mapa interactivo de Google Maps
- Dirección y detalles

### 7. **Footer**
Pie de página con:
- Derechos reservados
- Enlaces a redes sociales

## 🛠️ Tecnologías utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
- **JavaScript (Vanilla)** - Interactividad sin dependencias
- **Google Maps API** - Mapas embebidos

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Móviles (hasta 768px)
- 💻 Tablets (768px - 1024px)
- 🖥️ Escritorio (1024px+)

## ⚙️ Funcionalidades JavaScript

### Carruseles infinitos
- Clonación automática de elementos
- Transiciones suaves
- Navegación manual y autoplay (cada 10 segundos)

### Menú hamburguesa
- Toggle de visibilidad
- Cierre automático al seleccionar un enlace

### Scroll suave
- Navegación entre secciones con scroll fluido
- Menú activo según la sección visible

## 🎨 Paleta de colores

- **Primario**: `#00BCD4` (Cyan)
- **Secundario**: `#00838F` (Teal oscuro)
- **Fondo claro**: `#f5f5f5`
- **Texto**: `#333` / `#666`

## 📝 Personalización

### Cambiar colores
Edita las variables de color en [styles.css](styles.css):
```css
color: #00BCD4; /* Color primario */
```

### Modificar carruseles
Ajusta los valores en [main.js](main.js):
```javascript
const visibleCards = 5;      // Tarjetas visibles
const autoplayInterval = 10000; // Intervalo en ms
```

### Actualizar contenido
Edita el contenido en [index.html](index.html):
- Textos de misión/visión
- Descripciones de servicios
- Noticias

## 🔗 Enlaces útiles

- [Google Maps](https://maps.google.com) - Obtener iframe de ubicación
- [Iconos SVG](https://www.flaticon.com) - Recursos gráficos

## 📞 Contacto

Para consultas sobre los servicios de avalúos, contactar a través de:
- WhatsApp
- Facebook
- Instagram

## 📄 Licencia

Todos los derechos reservados © Avalúos Quiñonez

---

**Última actualización**: 2025
