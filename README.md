# Dashboard de Cedavilu Web Academy

Aplicación de interfaz construida con React y Vite para presentar servicios de búsqueda y selección de personal, consultar aspirantes y mostrar un catálogo de profesiones. La navegación entre secciones se realiza en el cliente mediante React Router.

## Funcionalidades

- Diseño de dashboard con barra de acceso, navegación lateral y área de contenido.
- Página de inicio con información de búsqueda y selección y tarjetas de aspirantes.
- Página de empresas con el contenido promocional del servicio.
- Listado de aspirantes cargado desde [Random User](https://randomuser.me/).
- Listado de profesiones cargado desde un servicio HTTP local.
- Estados de carga y error para las consultas de datos.

Las opciones de búsqueda, perfil, agregar usuario, cerrar sesión, postulación y contacto son elementos visuales de la interfaz; no están conectados a una funcionalidad de búsqueda, autenticación o envío.

## Tecnologías

- React y React DOM
- Vite
- React Router DOM
- ESLint
- Hojas de estilo propias, Bootstrap CSS y Bootstrap Icons

## Requisitos

- Node.js y npm instalados. Use una versión de Node.js compatible con la versión de Vite declarada en `package.json`.
- Acceso a Internet para cargar aspirantes desde Random User y descargar Bootstrap Icons desde su CDN.
- Un servicio de profesiones accesible en `http://localhost:8080/api/profesiones` para mostrar el catálogo y habilitar la navegación.

El servicio de profesiones debe responder con un arreglo JSON. Cada elemento debe incluir al menos `id` y `nombre`, por ejemplo:

```json
[
  { "id": 1, "nombre": "Desarrollador web" },
  { "id": 2, "nombre": "Mecánico" }
]
```

La URL del servicio está definida en `src/services/profesionesService.js`. Si el backend no está disponible o responde con error, la aplicación muestra el error en lugar de la interfaz principal.

## Instalación y ejecución

Desde la carpeta raíz del proyecto:

```bash
npm install
npm run dev
```

Abra en el navegador la dirección que Vite indique en la terminal, normalmente `http://localhost:5173/`. Para detener el servidor de desarrollo, presione `Ctrl+C` en esa terminal.

### Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo de Vite con recarga en caliente. |
| `npm run lint` | Ejecuta ESLint sobre el proyecto. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve localmente la compilación existente de `dist/`; ejecute primero `npm run build`. |

No hay un framework ni un script de pruebas automatizadas configurado actualmente. `npm run lint` y `npm run build` verifican el código y la compilación, pero no sustituyen las pruebas funcionales en el navegador.

## Cómo probar la aplicación

1. Inicie el backend de profesiones en `http://localhost:8080/api/profesiones` y compruebe que devuelve el arreglo descrito arriba.
2. Ejecute `npm run dev` y abra la URL local mostrada por Vite.
3. Compruebe la página de inicio (`/`): debe presentar el bloque de búsqueda y selección y las tarjetas de aspirantes. La carga de aspirantes requiere acceso a Internet.
4. Seleccione **Empresas** y compruebe la ruta `/empresa` y su contenido promocional.
5. Seleccione **Aspirantes** y compruebe la ruta `/aspirantes`, las tarjetas y sus datos. Sin conexión con Random User, debe mostrarse un mensaje de error.
6. Seleccione **Profesiones** y compruebe la ruta `/profesiones` y los elementos recibidos del backend. Si el servicio está apagado o devuelve un estado HTTP no exitoso, se mostrará un error.
7. Ejecute `npm run lint` y `npm run build` para validar estáticamente el proyecto y generar la compilación.
8. Opcionalmente, ejecute `npm run preview` después de la compilación y pruebe las mismas rutas en la URL indicada.

## Estructura y componentes

### Entrada y composición

- `index.html`: documento HTML inicial. Define el título, carga las hojas de estilo estáticas de `public/css`, Bootstrap Icons desde CDN y el punto de montaje de React.
- `src/main.jsx`: crea la raíz de React, monta `App` dentro de `StrictMode` y configura `BrowserRouter` para permitir la navegación por rutas.
- `src/App.jsx` — **`App`**: compone el dashboard. Coloca `Acceso` y `Menu` dentro del contenedor principal con clase `dashboard`.

### Componentes de `src/components`

- `Acceso.jsx` — **`Acceso`**: muestra la barra superior con el campo visual de búsqueda y botones de agregar usuario, perfil y cierre de sesión. Estos controles todavía son de presentación.
- `Menu.jsx` — **`Menu`**: carga las profesiones mediante `useProfesiones`, presenta la marca y la navegación lateral, y declara las rutas `/`, `/empresa`, `/aspirantes` y `/profesiones`. Si la carga de profesiones está pendiente o falla, muestra el estado correspondiente.
- `Contenido.jsx` — **`Contenido`**: organiza el contenido de inicio; presenta `Preventa` y `Aspirantes`.
- `Preventa.jsx` — **`Preventa`**: muestra el encabezado promocional de búsqueda y selección e incluye la imagen de banner.
- `Aspirantes.jsx` — **`Aspirantes`**: solicita aspirantes mediante `useAspirantes`, muestra estados de carga y error, y renderiza una tarjeta por cada resultado.
- `AspirantesCard.jsx` — **`AspirantesCard`**: presenta la foto, el nombre, el apellido y el correo de un aspirante, además de iconos de acciones visuales.
- `Profesiones.jsx` — **`Profesiones`**: recibe la propiedad `listado` y presenta cada profesión en un elemento de lista.

### Hooks y servicios

- `src/hooks/useAspirantes.js` — **`useAspirantes`**: obtiene los aspirantes al montar el componente y expone `aspirantes`, `loading` y `error`.
- `src/services/aspirantesServices.js` — **`fetchAspirantes`**: consulta Random User (`results=9`, nacionalidad española) y adapta cada resultado a los campos que consume `AspirantesCard`.
- `src/hooks/useProfesiones.js` — **`useProfesiones`**: obtiene las profesiones al montar el componente y expone `profesiones`, `loading` y `error`.
- `src/services/profesionesService.js` — **`fetchProfesiones`**: consulta el endpoint local `http://localhost:8080/api/profesiones` y devuelve el JSON de la respuesta.

### Estilos y recursos

- `src/index.css`: estilos globales y diseño del dashboard, barra lateral, contenido y tarjetas.
- `src/App.css`: estilos que quedaron de la plantilla inicial de Vite; actualmente no se importa desde la entrada de la aplicación.
- `src/assets/img/`: imágenes usadas por la interfaz, como el logotipo y el banner.
- `public/css/`: hojas de Normalize, Font Awesome y Bootstrap cargadas desde `index.html`.
- `public/`: recursos estáticos, incluidos el favicon y los iconos SVG.
