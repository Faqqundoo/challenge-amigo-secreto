// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Crea una lista vacía
let amigos = [];

// Agrega un amigo a la lista
function agregarAmigo() {
  let nombre = document.getElementById("amigo").value.trim();

// Verifica que el nombre no esté vacío
  if (nombre === "") {
    alert("Por favor, no deje vacío este campo.");
    return;
  }

// Empujo "nombre" a la lista "amigos"
  amigos.push(nombre);
  mostrarAmigos();
  document.querySelector('#amigo').value = '';
}


function mostrarAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

// Recorre el array y muestra cada amigo en la lista
  amigos.forEach(function(nombre) { // Recorre cada nombre en la lista (array) "amigos"
    const li = document.createElement("li"); // Por cada nombre, crea un elemento li
    li.textContent = nombre; // Le pone como texto el nombre
    listaAmigos.appendChild(li); // Lo agrega al HTML dentro de la listaAmigos
  });
}

// Sortea un amigo
function sortearAmigo() {
// Si la lista tiene menos de 2 nombres, muestra una alerta
  if (amigos.length < 2) {
    alert("Debe haber al menos 2 amigos para realizar el sorteo.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const nombre = amigoSorteado
  const resultado = document.getElementById("resultado");
  const li = document.createElement("li");
  li.textContent = `¡Felicitaciones! El amigo sorteado es: ${nombre}`;
  resultado.appendChild(li);

  document.querySelector(".button-draw").disabled = true;
}
