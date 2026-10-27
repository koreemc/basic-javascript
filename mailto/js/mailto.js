const TO_ADDRESS = "hello@examplewebsite.com";

const form = document.querySelector("#contact-form");

function buildMailto() {
  const name = document.querySelector("#full-name").value;
  const email = document.querySelector("#email").value;
  const topic = document.querySelector("#topic").value;
  const text = document.querySelector("#message").value;

  const subject = "Website message: " + topic;
  const body =
    "Name: " + name + "\r\n" +
    "Email: " + email + "\r\n\r\n" +
    text;

  return (
    "mailto:" + TO_ADDRESS +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body)
  );
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  window.location.href = buildMailto();
});
