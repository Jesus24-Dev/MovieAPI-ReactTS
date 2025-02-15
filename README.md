# MovieAPI-ReactTS 🎬

**MovieAPI-ReactTS** es una aplicación web desarrollada en **React** con **TypeScript** que permite buscar películas utilizando la API de [OMDb](http://www.omdbapi.com/). La aplicación incluye funcionalidades como búsqueda de películas, paginación, detalles de películas en un modal y un diseño responsivo con **TailwindCSS**.

---

## Características principales 🚀

- **Búsqueda de películas**: Busca películas por título.
- **Paginación**: Navega entre los resultados de búsqueda con botones de paginación.
- **Detalles de películas**: Haz clic en una película para ver sus detalles en un modal.
- **Diseño responsivo**: La aplicación se adapta a diferentes tamaños de pantalla.
- **Despliegue en Netlify**: La aplicación está desplegada en Netlify para acceso público.

---

## Tecnologías utilizadas 🛠️

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **TypeScript**: Lenguaje que añade tipos estáticos a JavaScript.
- **TailwindCSS**: Framework de CSS para diseñar la interfaz de usuario.
- **Axios**: Librería para realizar solicitudes HTTP a la API de OMDb.
- **Netlify**: Plataforma para desplegar aplicaciones web.

---

## Cómo funciona ⚙️

1. **Búsqueda**: El usuario ingresa el título de una película en el campo de búsqueda.
2. **Resultados**: La aplicación muestra una lista de películas que coinciden con la búsqueda.
3. **Paginación**: Si hay muchos resultados, el usuario puede navegar entre páginas.
4. **Detalles**: Al hacer clic en una película, se abre un modal con información detallada (título, año, director, actores, trama, etc.).
5. **Diseño**: La interfaz es responsiva y se adapta a dispositivos móviles, tablets y desktop.

---

## Capturas de pantalla 📸

### Búsqueda de películas
![Búsqueda de películas](https://github.com/user-attachments/assets/ff6757da-ca0e-4c80-83c9-bbbd2aea5a31)

### Modal de detalles
![Modal de detalles](https://github.com/user-attachments/assets/d323afc6-19dd-4eb3-bd60-4fbbae96df78)


---

## Cómo configurar el proyecto 🛠️

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local.

### Requisitos previos

- **Node.js**: Asegúrate de tener Node.js instalado. Puedes descargarlo [aquí](https://nodejs.org/).
- **Git**: Para clonar el repositorio.

### Pasos

6. **Clona el repositorio**:
   ```bash
   git clone https://github.com/Jesus24-Dev/MovieAPI-ReactTS.git
   cd MovieAPI-ReactTS
   ```

7. **Instala las dependencias**:
   ```bash
   npm install
   ```

8. **Configura las variables de entorno**:
   - Crea un archivo `.env` en la raíz del proyecto.
   - Agrega tu clave de API de OMDb:
     ```env
     VITE_API_URL=http://www.omdbapi.com/
     VITE_API_KEY=tu_clave_api
     ```

9. **Inicia la aplicación**:
   ```bash
   npm run dev
   ```
---

## Despliegue en Netlify 🌐

El proyecto está configurado para desplegarse en Netlify. Sigue estos pasos para desplegar tu propia versión:

11. **Crea una cuenta en Netlify** (si no tienes una).
12. **Conecta tu repositorio**:
   - Ve a [Netlify](https://www.netlify.com/) y selecciona "New site from Git".
   - Conecta tu repositorio de GitHub.
13. **Configura las variables de entorno**:
   - En la pestaña **Site settings** > **Build & deploy** > **Environment**, agrega las variables `VITE_API_URL` y `VITE_API_KEY`.
14. **Despliega**:
   - Netlify desplegará automáticamente tu aplicación cada vez que hagas un `push` a la rama principal.

---

## Contribuciones 🤝

¡Las contribuciones son bienvenidas! Si deseas mejorar el proyecto, sigue estos pasos:

15. Haz un **fork** del repositorio.
16. Crea una rama para tu feature o corrección: `git checkout -b nombre-de-tu-feature`.
17. Realiza tus cambios y haz commit: `git commit -m "Añade nueva funcionalidad"`.
18. Sube tus cambios: `git push origin nombre-de-tu-feature`.
19. Abre un **Pull Request** en GitHub.

---

## Licencia 📄

Este proyecto está bajo la licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## Autor ✒️

- **Jesus24-Dev** - [GitHub](https://github.com/Jesus24-Dev)

---

¡Gracias por visitar el proyecto! Si tienes alguna pregunta o sugerencia, no dudes en contactarme. 🚀
