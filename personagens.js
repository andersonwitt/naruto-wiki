const accordion = document.getElementsByClassName("accordion");
const cardSection = document.querySelector(".card-section");
const personagemInput = document.getElementById("personagem-input");
const personagemSearchForm = document.getElementById("personagem-search-form");
const badges = document.querySelectorAll(".badge");
const limpaFiltrosButton = document.getElementById("limpa-filtros-btn");

const personagens = [
  {
    img: "https://t.ctcdn.com.br/YUHmVUQ90ex1b135p-9hUlIM1p8=/640x360/smart/i500105.png",
    title: "Naruto Uzumaki",
    status: "Vivo",
    rank: "Hokage",
    description:
      'Naruto Uzumaki, protagonista de "Naruto", é um ninja determinado da vila de Konoha, cuja jornada de superação e amizade o transformou em um ícone da cultura pop japonesa.',
  },
  {
    img: "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2022/04/legiao_0brp_6tc1Ivl.jpg",
    title: "Sasuke Uchiha",
    status: "Vivo",
    rank: "Jounnin",
    description:
      "Sasuke Uchiha é um dos principais rivais e amigos de Naruto. Ele é um talentoso ninja da vila de Konoha, marcado por sua busca por poder e vingança.",
  },
  {
    img: "https://s.aficionados.com.br/imagens/saiba-tudo-sobre-sakura-haruno_t.jpg",
    title: "Sakura Haruno",
    status: "Vivo",
    rank: "Jounnin",
    description:
      "Sakura Haruno é uma kunoichi (ninja mulher) da vila de Konoha e companheira de equipe de Naruto e Sasuke. Inicialmente, ela é retratada como uma personagem que se destaca em genjutsu e cura.",
  },
  {
    img: "https://geeksaw.com.br/wp-content/uploads/2016/07/Kakashi_Hatake.png",
    title: "Kakashi Hatake",
    status: "Vivo",
    rank: "Hokage",
    description:
      "Kakashi Hatake é um ninja habilidoso e o líder do Time 7, composto por Naruto, Sasuke e Sakura. Ele é conhecido por seu Sharingan, que lhe permite copiar técnicas de seus oponentes.",
  },
  {
    img: "https://static.wikia.nocookie.net/naruto/images/b/b8/Iruka_Umino.png/revision/latest?cb=20130527233100&path-prefix=pt-br",
    title: "Iruka Umino",
    status: "Vivo",
    rank: "Chunnin",
    description:
      "Iruka Umino é um ninja e professor da Academia Ninja de Konoha. Ele desempenha um papel importante na vida de Naruto, sendo uma das primeiras figuras de autoridade que o reconhece e apoia.",
  },
  {
    img: "https://static.wikia.nocookie.net/naruto/images/a/a4/Hinata_Hyūga_%28Infobox_-_Parte_II%29.PNG/revision/latest/scale-to-width/360?cb=20140408001739&path-prefix=pt-br",
    title: "Hinata Hyuga",
    status: "Vivo",
    rank: "Jounnin",
    description:
      "Hinata Hyuga é uma kunoichi da vila de Konoha e membro do Clã Hyuga. Ela é conhecida por sua timidez e devoção a Naruto Uzumaki.",
  },
  {
    img: "https://static.wikia.nocookie.net/naruto/images/5/5e/Shikamaru_Nara_%28Infobox_-_Parte_II%29.PNG/revision/latest?cb=20141109154344&path-prefix=pt-br",
    title: "Shikamaru Nara",
    status: "Vivo",
    rank: "Jounnin",
    description:
      "Shikamaru Nara é um ninja preguiçoso, mas extremamente inteligente, da vila de Konoha. Ele é conhecido por sua estratégia brilhante e foi promovido a um dos líderes da vila mais tarde na série.",
  },
  {
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifRLs01biZimo-5aV-v9JwnQ1yedSeQw9csiP2ugDickPfVCR_I5WGVzsw_V9K35xDs8xYh1QJvxv7r9es-TnpfQCXCqZ6gydpExT237wq6EoyFVnH9ZJDdbiOrMRYSHBC1siC6Zwb2DQy/s1600/Choji.png",
    title: "Choji Akimichi",
    status: "Vivo",
    rank: "Jounnin",
    description:
      "Choji Akimichi é um ninja da vila de Konoha e membro do Clã Akimichi. Ele é conhecido por sua grande estatura e apetite voraz, além de suas técnicas de manipulação de peso durante a batalha.",
  },
  {
    img: "https://static.wikia.nocookie.net/naruto/images/7/71/Ino_%28Parte_II%29.png/revision/latest?cb=20151228124622&path-prefix=pt-br",
    title: "Ino Yamanaka",
    status: "Vivo",
    rank: "Jounnin",
    description:
      "Ino Yamanaka é uma kunoichi da vila de Konoha e membro do Clã Yamanaka. Ela é conhecida por suas habilidades em técnicas de controle mental e por sua amizade com Sakura Haruno.",
  },
  {
    img: "https://static.wikia.nocookie.net/naruto/images/4/48/Asuma_Sarutobi.png/revision/latest?cb=20130806211344&path-prefix=pt-br",
    title: "Asuma Sarutobi",
    status: "Morto",
    rank: "Jounnin",
    description:
      "Asuma Sarutobi é um ninja da vila de Konoha e o líder do Time 10, composto por Shikamaru, Choji e Ino. Ele é conhecido por sua habilidade com o tabaco e suas técnicas de lâmina de vento.",
  },
  {
    img: "https://pm1.aminoapps.com/6346/c9324af18c8a3663fa02558ece41f448878daa93_hq.jpg",
    title: "Kiba Inuzuka",
    status: "Vivo",
    rank: "Jounnin",
    description:
      "Kiba Inuzuka é um ninja da vila de Konoha e membro do Clã Inuzuka. Ele é conhecido por sua parceria com o cão ninja Akamaru e suas técnicas baseadas em combate corpo a corpo.",
  },
  {
    img: "https://static.wikia.nocookie.net/naruto/images/9/92/Shino_Aburame-Shippuden.png/revision/latest?cb=20140823001818&path-prefix=pt-br",
    title: "Shino Aburame",
    status: "Vivo",
    rank: "Jounnin",
    description:
      "Shino Aburame é um ninja da vila de Konoha e membro do Clã Aburame. Ele é conhecido por suas habilidades em controle de insetos e sua personalidade reservada.",
  },
];

function renderCards(value, attribute) {
  let cards = "";
  personagens
    .filter((item) =>
      item[attribute].toLowerCase().includes(value.toLowerCase())
    )
    .forEach((personagem) => {
      cards += `
    <article class="card">
      <div class="card-image" style="background-image: url(${personagem.img})"></div>
      <section class="card-title">
        <h3>${personagem.title}</h3>
        <div class="card-badge">
          <span class="display-badge">${personagem.status}</span>
          <span class="display-badge">${personagem.rank}</span>
        </div>
      </section>
      <section class="card-body">
        <p>${personagem.description}</p>
      </section>
    </article>
    `;
    });

  cardSection.innerHTML = cards;
}

personagemSearchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  badges.forEach((item) => {
    item.classList.remove("badge-selected");
  });
  renderCards(personagemInput.value, "title");
  personagemInput.value = "";
});

window.addEventListener("load", () => {
  renderCards("", "title");

  badges.forEach((badge) => {
    badge.addEventListener("click", () => {
      badges.forEach((item) => {
        item.classList.remove("badge-selected");
      });

      badge.classList.add("badge-selected");
      renderCards(badge.innerHTML, badge.getAttribute("data-type"));
    });
  });

  limpaFiltrosButton.addEventListener("click", () => {
    renderCards("", "title");
    badges.forEach((item) => {
      item.classList.remove("badge-selected");
    });
  });

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
