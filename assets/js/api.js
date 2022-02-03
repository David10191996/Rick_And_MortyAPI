const API = "https://rickandmortyapi.com/api/character";

const getAPI = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      fillData(json.results), pagination(json.info);
    })
    .catch((error) => {
      console.log("Error in the API", error);
    });
};

const fillData = (data) => {
  let html = "";

  data.forEach((ch) => {
    // html += '<div class="row row-cols-1 row-cols-md-3 g-4">';
    html += '<div class="col">';
    html += '<div class="col">';
    html += `<img src="${ch.image}" class="card-img-top" alt="...">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${ch.name}</h5>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
    // html += "</div>";
  });

  document.getElementById("characters").innerHTML = html;
};

const pagination = (info) => {
  // let prevDisabled = "";
  // let nextDisabled = "";
  let html = "";

  // info.prev ==  null ? prevDisabled = "disabled" : prevDisabled="";  // Operador ternario, tambien se puede insertar directo en el boton, asi se hizo abajo
  // info.next == null ? nextDisabled = "disabled" : nextDisabled ="";
  // if (info.prev == null) {
  //   prevDisabled = "disabled";
  // }

  // if (info.next == null) {
  //   nextDisabled = "disabled";
  // }

  html += `<li class="page-item ${
    info.prev == null ? "disabled" : ""
  }"> <a class="page-link" onclick="getAPI('${info.prev}')">Prev</a> </li> `;
  html += `<li class="page-item ${
    info.next == null ? "disabled" : ""
  }"> <a class="page-link" onclick="getAPI('${info.next}')">Next</a> </li> `;

  document.getElementById("pagination").innerHTML = html;
};

getAPI(API);
