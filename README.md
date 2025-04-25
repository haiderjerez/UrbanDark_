# 🛍️ URBANDARK - Interfaz Web Animada

URBANDARK es una tienda online con un enfoque visual atractivo y moderno. Este proyecto implementa efectos visuales como scroll suave, parallax, animaciones de entrada, tarjetas con efecto 3D, notificaciones interactivas y carga elegante de imágenes para mejorar la experiencia del usuario.

## 🚀 Funcionalidades destacadas

- ✨ **Scroll suave:** Navegación fluida al hacer clic en botones de navegación.
- 🏞️ **Parallax Effect:** Efecto de desplazamiento dinámico en la sección de historia de marca.
- 🎞️ **Animaciones on-scroll:** Elementos que aparecen con fade-in al hacer scroll.
- 🧊 **Efecto 3D en tarjetas de productos:** Movimiento interactivo al pasar el mouse.
- 🖼️ **Animación de carga de imágenes:** Transición suave cuando las imágenes terminan de cargar.
- 🛒 **Botón "Añadir al carrito":** Crea notificaciones flotantes al añadir productos.
- 🔔 **Notificaciones estéticas:** Diseño tipo neón con animación deslizante.
- 📦 **Guardado en LocalStorage:** Persistencia de productos añadidos.

## 📁 Estructura del proyecto

```
📦 delux-store
 ┣ 📄 index.html
 ┣ 📄 styles.css
 ┗ 📄 script.js
```

## 🧠 Tecnologías utilizadas

- HTML5
- CSS3 (con variables para colores neón y gradientes)
- JavaScript puro (Vanilla JS)

## 🛠️ Cómo usar

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/delux-store.git
   cd delux-store
   ```

2. Abre el archivo `index.html` en tu navegador.

3. Explora las interacciones al hacer scroll, mover el mouse sobre los productos y al añadir productos al carrito.

## 🎨 Personalización

Puedes modificar los colores principales (neón) directamente desde tu CSS usando variables como:

```css
:root {
    --neon-purple: #a000ff;
    --neon-blue: #00eaff;
}
```

Además, puedes cambiar los elementos observados por el IntersectionObserver según los componentes de tu sitio.

## 💡 Sugerencias futuras

- Conectar con un backend para almacenar el carrito real.
- Añadir contador de productos en el ícono del carrito.
- Implementar carrito flotante desplegable.
- Agregar filtro dinámico por categoría o precio.

## 🧑‍💻 Autor

**Haider Jerez** – Inspirado en la estética urbana y moderna para una experiencia de compra única.

---

¿Listo para llevar tu tienda al siguiente nivel?
