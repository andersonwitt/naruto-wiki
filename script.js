const personagensNav = document.getElementById("personagens-nav");
const episodiosNav = document.getElementById("episodios-nav");
const portifolioNav = document.getElementById("portifolio-nav");

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
    path: "portifolio.html",
    element: portifolioNav,
  },
];

window.addEventListener("load", () => {
  const route = routes.find((route) =>
    window.location.pathname.includes(route.path)
  );
  route.element.classList.add("nav-active");
});
