const personagensNav = document.getElementById("personagens-nav");
const episodiosNav = document.getElementById("episodios-nav");
const localizacoesNav = document.getElementById("localizacoes-nav");
const accordion = document.getElementsByClassName("accordion");

const routes = [
  {
    path: "personagens.html",
    element: personagensNav,
  },
  {
    path: "episodios.html",
    element: episodiosNav,
  },
  {
    path: "localizacoes.html",
    element: localizacoesNav,
  },
];

window.addEventListener("load", () => {
  const route = routes.find((route) =>
    window.location.pathname.includes(route.path)
  );
  route.element.classList.add("nav-active");

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
});
