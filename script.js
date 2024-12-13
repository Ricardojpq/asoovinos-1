document.addEventListener("DOMContentLoaded", function () {
  // Animación de fade-in para elementos principales
  const fadeElements = document.querySelectorAll(".hero, .consultation, .pdf-viewer, .eslogan");
  fadeElements.forEach((element) => {
    element.classList.add("fade-in");
  });

  // Smooth scroll para los enlaces de navegación
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Funcionalidad para el formulario de consulta
  const consultationForm = document.querySelector(".consultation form");
  const pdfContainer = document.getElementById("pdf-container");

  consultationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const animalId = this.querySelector('input[type="text"]').value;
    const iframe = document.createElement('iframe');
    iframe.classList.add("w-100", "h-100");
   
    // Simulación de carga de PDF
    pdfContainer.innerHTML = `<p>Cargando datos para el animal ID: ${animalId}...</p>`;

    // Aquí iría la lógica real para cargar el PDF basado en el ID del animal
    setTimeout(() => {
      // pdfContainer.innerHTML = `
      //     <h4>Registro del Animal ID: ${animalId}</h4>
      //     <p>Fecha de Nacimiento: 01/01/2020</p>
      //     <p>Raza: Merino</p>
      //     <p>Peso: 70 kg</p>
      //     <p>Estado de Salud: Excelente</p>
      // `;
      // Supongamos que esta es la URL del PDF generado
      pdfContainer.innerHTML = "";
      pdfContainer.classList.add("mx-auto");
      pdfContainer.style = "height:450px;";
      iframe.src = "assets/media/pdf/test.pdf";
      pdfContainer.append(iframe);
    }, 1500);
  });

  // Cambio de color del navbar al hacer scroll
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    } else {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    }
  });

  // Animación para las imágenes al hacer hover
  const images = document.querySelectorAll(".img-fluid");
  images.forEach((img) => {
    img.addEventListener("mouseover", function () {
      this.style.transform = "scale(1.05)";
      this.style.transition = "transform 0.3s ease";
    });
    img.addEventListener("mouseout", function () {
      this.style.transform = "scale(1)";
    });
  });

  // Animación para los íconos de la sección de visión
  const visionIcons = document.querySelectorAll(".vision-goals i");
  visionIcons.forEach((icon) => {
    icon.addEventListener("mouseover", function () {
      this.style.transform = "scale(1.2) rotate(10deg)";
      this.style.transition = "transform 0.3s ease";
    });
    icon.addEventListener("mouseout", function () {
      this.style.transform = "scale(1) rotate(0deg)";
    });
  });

  // Contador de animación para la lista de misión
  const missionItems = document.querySelectorAll(".mission ul li");
  let delay = 0;
  missionItems.forEach((item) => {
    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateX(0)";
    }, delay);
    delay += 200;
  });

  // Validación del formulario
  const inputs = document.querySelectorAll('input[type="text"], input[type="email"]');
  inputs.forEach((input) => {
    input.addEventListener("blur", function () {
      if (this.value.trim() === "") {
        this.classList.add("is-invalid");
      } else {
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
      }
    });
  });
});
