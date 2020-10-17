//create map
const map = L.map("mapid").setView([-27.2109325,-49.6448719], 15);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

//create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;
  //remover icon
  marker && map.removeLayer(marker);

  //add icon Layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//uppload de photos

function addPhotoField() {
  //pegar o container de fotos #images
  const container = document.querySelector("#images");
  //pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");
  //realizar o clone da ultima imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  //verificar se o campo ta vazio, se sim, não adicionar ao container de imagens
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  //limpar campo antes de adicionar ao containe de imagens
  input.value = "";

  //adicionar o clone ao con de imagens
  container.appendChild(newFieldContainer);
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll(".new-upload")

    if(fieldsContainer.length < 2){
        //limpar o valor do campo
        span.parentNode.children[0].value=""
        return
    }

    //deletar o campo
    span.parentNode.remove();

    
}

//select sim e não
 function toggleSelect(event){
    
    //retira a class .active (dos botões)
    document.querySelectorAll(".button-select button")
    .forEach(button => button.classList.remove("active"))
    
    
    //coloca a class .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add("active")
    //pegar o botão clicado
    //atualizar o meu input gidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value
 }

 function validate(event){
  //validade lat e lng estão preenchidos 
    const needsLatAndLng = true;
  if(needsLatAndLng){
    event.preventDefault()
  alert('Selecione um ponto no mapa')
 
  }
  event.preventDefault()
  alert('Selecione um ponyo no mapa')
 }