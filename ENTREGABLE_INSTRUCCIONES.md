# 🚀 ENTREGABLE - TechPro Solutions Ecommerce MVP

## 📦 Descripción del Entregable

Este es un **MVP (Mínimo Producto Viable)** completamente funcional de una tienda en línea especializada en **servicios informáticos profesionales**.

### 📂 Contenido del Proyecto

```
TechPro-Solutions-Ecommerce-MVP.zip
└── Ejercicio Práctico - Desarrollo Portafolio Módulo 2/
    ├── index.html                    # Página de inicio (home)
    ├── detalle.html                  # Página de detalle de servicio
    ├── carrito.html                  # Página del carrito de compras
    ├── README.md                     # Documentación completa del proyecto
    ├── DOCUMENTACION_TECNICA.md      # Documentación técnica
    ├── .gitignore                    # Configuración de Git
    ├── assets/
    │   ├── css/
    │   │   └── styles.css            # Estilos personalizados (tema Dark Tech)
    │   ├── js/
    │   │   └── script.js             # Lógica JavaScript completa
    │   └── img/                      # Carpeta para imágenes
    └── data/
        └── productos.json            # Base de datos JSON de servicios
```

---

## ✨ Características Principales

### ✅ HTML5 Semántico
- Uso correcto de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Estructura válida y accesible
- Meta tags responsivos

### ✅ Bootstrap 5 (CDN)
- Grid system responsivo (12 columnas)
- Componentes profesionales: navbar, cards, badges, buttons
- Utilidades de spacing y tipografía
- Diseño mobile-first

### ✅ JavaScript Vanilla
- Manejo de eventos (click, change)
- Manipulación del DOM con querySelector/getElementById
- Async/Await para cargar datos JSON
- Array methods (map, find, filter)

### ✅ Funcionalidad de Carrito
- ✓ Agregar/Eliminar servicios
- ✓ Actualizar cantidad de items
- ✓ Contador en tiempo real en navbar
- ✓ Cálculo automático de totales + IVA 21%
- ✓ Persistencia con localStorage

### ✅ Diseño Responsivo
- 📱 Mobile: ≤420px
- 📱 Tablet: 420px - 768px
- 💻 Desktop: ≥1024px
- Testeado en múltiples resoluciones

### ✅ Control de Versiones Git
- Repositorio inicializado con `.git`
- **3 commits descriptivos**:
  1. Agrega estructura HTML base del proyecto TechPro Solutions
  2. Agrega estilos CSS con tema Dark Tech y diseño responsive
  3. Añade funcionalidad JavaScript completa para carrito y gestión de productos dinámicos

---

## 🎯 Requisitos Completados (Rúbrica)

| # | Requisito | Status | Ubicación |
|---|-----------|--------|-----------|
| 1 | Página Home con grilla de productos | ✅ | index.html |
| 2 | Cards Bootstrap con botones Ver Más y Agregar | ✅ | index.html |
| 3 | Página Detalle de Producto | ✅ | detalle.html |
| 4 | Página Carrito con resumen | ✅ | carrito.html |
| 5 | Navbar con contador badge | ✅ | Todas las páginas |
| 6 | Footer con información | ✅ | Todas las páginas |
| 7 | HTML5 semántico | ✅ | Todas las páginas |
| 8 | Bootstrap 5 en CDN | ✅ | Todas las páginas |
| 9 | Grid system responsive | ✅ | assets/css/styles.css |
| 10 | Componentes Bootstrap (navbar, cards, badge) | ✅ | Todas las páginas |
| 11 | Diseño responsivo (mobile, tablet, desktop) | ✅ | assets/css/styles.css |
| 12 | JavaScript con querySelector | ✅ | assets/js/script.js |
| 13 | Event listeners en botones | ✅ | assets/js/script.js |
| 14 | Contador actualiza en tiempo real | ✅ | actualizarContadorCarrito() |
| 15 | localStorage para persistencia | ✅ | guardarCarrito() |
| 16 | Productos desde array JSON | ✅ | data/productos.json |
| 17 | 3+ páginas mínimo | ✅ | 3 páginas HTML |
| 18 | Navegación clara | ✅ | Navbar en todas partes |
| 19 | Git inicializado | ✅ | .git/ directory |
| 20 | 3+ commits descriptivos | ✅ | git log |
| 21 | README.md completo | ✅ | README.md |
| 22 | Proyecto comprimido .zip | ✅ | TechPro-Solutions-Ecommerce-MVP.zip |

---

## 🌐 Cómo Ejecutar el Proyecto

### Opción 1: Con Python (Recomendado)
```bash
cd "Ejercicio Práctico - Desarrollo Portafolio Módulo 2"
python -m http.server 8000
# Abre: http://localhost:8000
```

### Opción 2: Con Node.js
```bash
npm install -g http-server
cd "Ejercicio Práctico - Desarrollo Portafolio Módulo 2"
http-server
# Abre: http://localhost:8080
```

### Opción 3: Con Live Server (VS Code)
1. Instala extensión "Live Server"
2. Click derecho en `index.html` → "Open with Live Server"

### Opción 4: Servidor Local en Windows (PowerShell)
```powershell
cd "Ejercicio Práctico - Desarrollo Portafolio Módulo 2"
$HttpListener = New-Object System.Net.HttpListener
$HttpListener.Prefixes.Add("http://localhost:8000/")
$HttpListener.Start()
```

⚠️ **Nota**: Abrir archivos directamente sin servidor puede limitar algunas funciones (localStorage, fetch).

---

## 🎨 Temática del Proyecto

### **TechPro Solutions** - Servicios Informáticos Profesionales

**Servicios disponibles:**
1. 🧹 **Limpieza Profunda de Equipo** - €50
2. 💾 **Formateo e Instalación de SO** - €80
3. 🛡️ **Instalación de Antivirus** - €35
4. 📂 **Recuperación de Datos** - €150
5. 🔧 **Mantenimiento Preventivo Anual** - €120
6. ⚙️ **Instalación de Hardware** - €60

**Características del diseño:**
- Tema Dark Tech (fondo oscuro con acentos cian neón)
- Colores: `#0a0e27` (fondo), `#00d4ff` (acentos)
- Estilo profesional y moderno
- Imágenes placeholder de alta calidad

---

## 🔍 Verificación de Funcionalidades

### Test de Navegación
- ✓ Home → enlace a detalles funciona
- ✓ Detalle → botón volver al home funciona
- ✓ Carrito → accesible desde navbar
- ✓ Todas las páginas cargan correctamente

### Test de Carrito
- ✓ Agregar servicio → contador sube
- ✓ Contador persiste al recargar
- ✓ totales calculan IVA automáticamente
- ✓ Eliminar item → carrito actualiza
- ✓ Cambiar cantidad → precio se recalcula

### Test Responsivo
- ✓ Mobile (320px, 420px): Layout single column
- ✓ Tablet (768px): Layout 2 columnas
- ✓ Desktop (1024px+): Layout 3 columnas
- ✓ Navbar se colapsa en mobile

---

## 📊 Estadísticas del Proyecto

- **Líneas de HTML**: ~300
- **Líneas de CSS**: ~400
- **Líneas de JavaScript**: ~280
- **Documentación**: 250+ líneas
- **Tamaño total (descomprimido)**: ~150 KB
- **Archivos**: 8 archivos principales
- **Commits Git**: 3 commits descriptivos

---

## 💡 Conceptos Aplicados

### Frontend
- HTML5 semántico y accesible
- CSS3 con variables y responsividad
- Bootstrap 5 framework
- JavaScript ES6+ (async/await, arrow functions)

### UX/UI
- Diseño mobile-first
- Feedback visual (hover, animaciones)
- Color scheme consistente
- Tipografía legible (19px mínimo)

### Web Development Best Practices
- Separación de concerns (HTML/CSS/JS)
- Código organizado y comentado
- Nombres descriptivos de variables
- Reutilización de componentes
- Responsive design
- Progressive enhancement

---

## 📁 Archivo README.md Incluido

El archivo `README.md` contiene:
- ✅ Descripción del proyecto
- ✅ Temática elegida
- ✅ Características principales
- ✅ Estructura de archivos
- ✅ Cómo ejecutar localmente
- ✅ Requisitos completados
- ✅ Historial de commits
- ✅ Tecnologías utilizadas
- ✅ Información de contacto

---

## 🔐 Git & Versioning

### Estado de Repositorio
```
Total commits: 3
Branch: master
Status: Clean (sin cambios sin commitar)
```

### Commits Realizados
```
6f645e4 - Añade funcionalidad JavaScript
db8c7ff - Agrega estilos CSS
e31727d - Agrega estructura HTML (root)
```

### Comando para ver historial completo
```bash
cd "Ejercicio Práctico - Desarrollo Portafolio Módulo 2"
git log --oneline --graph
git log -p  # Ver cambios detallados
```

---

## 🎓 Lecciones Aprendidas

Este proyecto demuestra:
1. ✓ Maquetación semántica con HTML5
2. ✓ Diseño responsivo con Bootstrap
3. ✓ Interactividad con JavaScript vanilla
4. ✓ Persistencia de datos con localStorage
5. ✓ Versionado con Git
6. ✓ Documentación técnica completa
7. ✓ UX/UI design thinking
8. ✓ Best practices en desarrollo web

---

## 📞 Información de Contacto (Simulada)

**TechPro Solutions**
- 📧 Email: info@techpro.com
- 📞 Teléfono: +34 912 345 678
- 📍 Ubicación: Madrid, España

---

## ✅ Checklist Final de Entrega

- ✅ Proyecto en carpeta `Ejercicio Práctico - Desarrollo Portafolio Módulo 2`
- ✅ Proyecto en carpeta `Ejercicio Práctico - Desarrollo Portafolio Módulo 2`
- ✅ 3 páginas HTML mínimo (home, detalle, carrito)
- ✅ Estilos CSS con Bootstrap y personalización
- ✅ JavaScript funcional con carrito dinámico
- ✅ Datos en JSON (productos.json)
- ✅ Git initialized con 3+ commits
- ✅ README.md con descripción completa
- ✅ Proyecto comprimido en .zip
- ✅ Código limpio y documentado
- ✅ Diseño responsive probado

---

## 🚀 Próximos Pasos (No Incluidos)

Mejoras futuras para versiones posteriores:
1. Backend con Node.js/Express
2. Base de datos MongoDB/PostgreSQL
3. Autenticación de usuarios
4. Pasarela de pago real
5. Admin panel
6. Búsqueda y filtros
7. Reviews de usuarios
8. Email de confirmación
9. Dashboard de pedidos

---

**Proyecto completado**: 26/02/2026
**Estado**: Listo para presentación ✅

Descomprime `TechPro-Solutions-Ecommerce-MVP.zip` y sigue las instrucciones de `README.md` para ejecutar.
