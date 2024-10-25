function setup() { // função que vai peronalizar a tela
  createCanvas(600, 600); // dimensões da tela
  background("white") // cor de fundo da tela
}

function draw() { // função que vai desenhar na tela
  stroke("blue"); // cor da borda do retângulo
  fill("red"); // cor do retângulo
  
  // conole.log(mouseIsPressed);
  
  if (mouseIsPressed) { // vê se o mouse está pressionado
    rect(mouseX, mouseY, 20, 35); // cria um retângulo na posição do mouse
  }
}
