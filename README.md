# FEL-OS19 / V8.3 — Personal Space

Portafolio estático bilingüe, exclusivamente claro. Inspiración visual editorial, diseño y código propios. Conserva el CV y certificados de V7.3. No requiere Node, npm ni dependencias de compilación.

## Publicación
1. Extraer el ZIP en una carpeta nueva. Subir **los archivos interiores** a la raíz del repositorio `fel-os19.github.io`, reemplazando los existentes. No subir el ZIP ni añadir sufijos a los nombres.
2. Commit en `main`. GitHub Pages: Deploy from a branch → main → / (root). Mantener la configuración existente.
3. Comprobar el despliegue en Actions y abrir https://fel-os19.github.io/?v=8.3. El pie de página indica V8.3.

## Estructura
- index.html / en.html: portada estática con JavaScript ligero para contacto, navegación y proyectos seleccionados.
- profile.html / profile-en.html: trayectoria, certificados con enlaces individuales.
- cv.html / cv-en.html: CV y descarga directa de PDF.
- projects.html / projects-en.html: catálogo, filtros y repositorios públicos.
- lab.html / lab-en.html: simuladores y modelos 3D, independientes de la portada.
- lab-game.html / lab-game-en.html: ahorcado bilingüe con selector de idioma de palabra.
- personal-v8.css: identidad visual y adaptación móvil.

Para desarrollo local: `python -m http.server 8000` en esta carpeta, abrir http://localhost:8000. Los recursos locales funcionan sin backend; la lista de repositorios usa la API pública de GitHub si está disponible.

Las ilustraciones de proyecto son conceptuales. No se incluyen fotografías personales ni correo público no confirmado. El laboratorio ofrece demostraciones educativas. Los CV originales se conservan. No se reutiliza código de Braydon Coyer.

## V8.2 — Contacto
El formulario bilingüe usa el endpoint público https://formspree.io/f/xppdkjlj. El correo receptor se administra en Formspree; no es necesario incluirlo en el código. Comprueba que tu cuenta y correo de destino estén verificados y realiza un envío real desde el sitio publicado. Las pruebas locales simulan las respuestas del servidor; no se enviaron mensajes reales.

Para una actualización limpia: clona el repositorio, respalda la rama actual, reemplaza solo los archivos del sitio (conserva .git y cualquier configuración personalizada como CNAME o workflows), copia los archivos de este paquete incluyendo .nojekyll, revisa git status y confirma un único commit en main. No elimines el repositorio.

## V8.3 — Mobile
Navegación móvil desplegable accesible, retícula y tipografía editorial, tarjetas de una columna, controles táctiles y formulario con fuentes de 16 px. No cambia el diseño de escritorio ni el endpoint de Formspree.
