// =========================
// NAVBAR SHADOW ON SCROLL
// =========================

window.addEventListener("scroll", function () {

  const header = document.querySelector("header");

  if (window.scrollY > 50) {

    header.classList.add("shadow-lg");

  } else {

    header.classList.remove("shadow-lg");

  }

});

// =========================
// SIMPLE NEWSLETTER ALERT
// =========================

const subscribeButton = document.querySelector("#subscribeBtn");

if (subscribeButton) {

  subscribeButton.addEventListener("click", () => {

    alert("Thank you for subscribing!");

  });

}