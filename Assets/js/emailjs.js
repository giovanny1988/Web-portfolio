//Biblioteca email JS para envio de correos a travez del formulario
emailjs.init("KH6wgCXzpgg2ZMnJU");

const btn = document.getElementById("button");
const divMessage = document.getElementById("response-message");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando...";

  const serviceID = "default_service";
  const templateID = "template_4sby4ay";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Enviar";
      divMessage.removeAttribute("hidden");
      divMessage.classList.add("alert", "alert-success");
      divMessage.innerHTML = "Mensaje enviado correctamente!";
      this.reset();
    },
    (err) => {
      btn.value = "Enviar";
      divMessage.removeAttribute("hidden");
      divMessage.classList.add("alert", "alert-danger");
      divMessage.innerHTML = `Ocurrio un error al enviar mensaje: ${err}`;
    }
  );
});
