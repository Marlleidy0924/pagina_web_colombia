// Datos del glosario renderizados con JavaScript para demostrar interactividad basica.
const glossaryTerms = [
  ["Figma", "Diseno digital", "Herramienta colaborativa utilizada para crear interfaces, prototipos y sistemas visuales."],
  ["Interfaz de usuario", "Experiencia digital", "Parte visual e interactiva con la que una persona usa un producto digital."],
  ["Componente", "Diseno de interfaces", "Elemento reutilizable, como un boton, una tarjeta o una barra de vida."],
  ["Auto Layout", "Figma", "Funcion que organiza elementos de forma dinamica y facilita disenos adaptables."],
  ["Variante", "Diseno de componentes", "Version o estado diferente de un mismo componente."],
  ["Sistema de diseno", "Organizacion visual", "Conjunto estructurado de reglas, estilos y componentes reutilizables."],
  ["Marco", "Figma", "Contenedor que agrupa y organiza elementos dentro de un archivo de diseno."],
  ["Recurso", "Produccion digital", "Archivo, imagen, icono o elemento de diseno que puede reutilizarse."],
  ["Escalado de 9 secciones", "UI para videojuegos", "Tecnica para estirar paneles sin deformar las esquinas."],
  ["Prototipo", "Validacion", "Modelo interactivo usado para probar una experiencia antes de desarrollarla por completo."],
  ["Diseno adaptable", "Desarrollo web", "Estructura que se ajusta a celulares, tablets y computadores."],
  ["Sistema de cuadricula", "Maquetacion", "Organizacion en filas y columnas que ayuda a alinear el contenido."],
  ["Bootstrap", "Front-End", "Framework que facilita la creacion de sitios web responsivos."],
  ["JavaScript", "Programacion web", "Lenguaje usado para agregar interactividad a las paginas web."],
  ["HTML5", "Estructura web", "Lenguaje estandar moderno para organizar el contenido de una pagina."],
  ["CSS3", "Diseno web", "Lenguaje usado para definir colores, tamanos, distribucion y apariencia visual."],
  ["Inteligencia artificial", "Tecnologia", "Sistemas capaces de realizar tareas asociadas al razonamiento humano."],
  ["Automatizacion", "Productividad", "Uso de sistemas para ejecutar tareas con menor intervencion manual."],
  ["Privacidad de datos", "Etica digital", "Proteccion y uso responsable de la informacion personal."],
  ["Accesibilidad", "Experiencia de usuario", "Practica de disenar productos que puedan usar mas personas."],
  ["Usabilidad", "Calidad de software", "Facilidad con la que una persona puede usar un producto de forma eficiente."],
  ["Navegacion", "Diseno web", "Sistema que permite moverse entre secciones o paginas de un sitio."],
  ["Seccion principal", "Estructura web", "Primer bloque destacado de una pagina, normalmente con titulo y llamado a la accion."],
  ["Tarjeta", "Interfaz", "Contenedor compacto para presentar informacion relacionada."],
  ["Carrusel", "Componente web", "Elemento que muestra contenido en diapositivas."],
  ["Etiqueta semantica", "HTML5", "Etiqueta que describe claramente el significado del contenido."],
  ["SEO", "Visibilidad web", "Practicas que ayudan a que los buscadores comprendan una pagina."],
  ["Etica", "Responsabilidad profesional", "Principios que orientan decisiones correctas y responsables."],
  ["Ciberseguridad", "Proteccion digital", "Defensa de sistemas, redes y datos frente a amenazas tecnologicas."],
  ["Desarrollo de software", "Ingenieria de sistemas", "Proceso de disenar, construir, probar y mantener programas."]
];

const glossaryBody = document.querySelector("#glossaryBody");

if (glossaryBody) {
  glossaryTerms.forEach(([term, area, definition]) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><strong>${term}</strong></td>
      <td>${area}</td>
      <td>${definition}</td>
    `;
    glossaryBody.appendChild(row);
  });
}

// Cierra el menu movil despues de seleccionar un enlace.
document.querySelectorAll(".navbar .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.querySelector("#navbarContent");
    const bootstrapMenu = bootstrap.Collapse.getInstance(menu);

    if (bootstrapMenu) {
      bootstrapMenu.hide();
    }
  });
});

// Agrega una pequena respuesta visual al pasar el cursor sobre las imagenes.
document.querySelectorAll(".photo-tile").forEach((tile) => {
  tile.addEventListener("mouseenter", () => tile.classList.add("is-hovered"));
  tile.addEventListener("mouseleave", () => tile.classList.remove("is-hovered"));
});
