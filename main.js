let list = document.getElementById("list");
let block = document.getElementById("block");
let photo = document.getElementById("photo");
let img = document.getElementById("img");
let text = document.getElementById("text");
const pN = "https://pokeapi.co/api/v2/pokemon/";
let npN = fetch(pN);
npN
  .then(res => res.json())
  .then(({ results }) => {
    results.forEach(({ url }) => {
      let info = fetch(url);
      info
        .then(res => res.json())
        .then(info => {
          // console.log(info.name);
          console.log(info.types[0].type.name);
          // console.log(info.height);
          // console.log(info.weight);
          let p = document.createElement("p");
          p.innerText = info.name;
          list.append(p);
          p.addEventListener("click", () => {
            photo.innerHTML = "";
            text.innerHTML = "";
            // setTimeout(() => {
            photo.innerHTML += `<img src ="${info.sprites.back_default}">`;
            text.innerHTML += `<p>Name: ${info.name}</p><p>Weight: ${info.weight}</p><p>Height: ${info.height}</p><p>Type: ${info.types[0].type.name}</p>`;
            // }, 1000);
          });
        });
    });
  });
