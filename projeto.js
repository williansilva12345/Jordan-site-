var all = document.querySelectorAll("[data-anima]");

var anima = "animacao";

function scroll() {
    var topo = window.pageYOffset + 200;

    all.forEach(function (el, index) {
        if (topo > el.offsetTop) {
            el.classList.add("animacao");
        } else {
            el.classList.remove("animacao");
        }
    });
}

if (all.length) {
    window.addEventListener("scroll", scroll);
}

let current = 0;
const slider = document.querySelector(".slider"); // Defina a variável slider

function show(index) {
    const slides = document.querySelectorAll(".slide");

    if (index >= slides.length) {
        current = 0;
    } else if (index < 0) {
        current = slides.length - 1;
    } else {
        current = index;
    }

    const off = -current * 100;
    document.querySelector(".slides").style.transform = `translateX(${off}%)`;

    // Mudar a cor de fundo com base na posição do slide
    if (current === 0) {
           document.querySelector("#sapatos").style.background = "#3e3f40";
    } else if (current === 1) {
		
		       document.querySelector("#sapatos").style.background = "#66910db5";

	
		} else if (current === 2) {
    
		document.querySelector("#sapatos").style.background = "#115fa1";

		}
}

function nextSlide() {
    show(current + 1);
}

function prevSlide() {
    show(current - 1);
}

show(current);// Obtendo o ícone



var icone = document.getElementById("config2");
  var section = document.getElementById("config")
  
  var dialog = document.getElementById("dialog")
// Adicionando o evento de clique
icone.addEventListener("click", () => {
  
  // Criando a nova div
  var div = document.createElement("div");
  
  
  dialog.classList.toggle("ativo")
  
  // Definindo o conteúdo da nova div
  div.innerHTML = "el";
			  div.classList.toggle("ativo")
  section.appendChild(div)
  
  // Exibindo uma mensagem no console

  console.log("Hello World");


});
   var dialog = document.getElementById("dialog");

var close= document.getElementById("close").addEventListener("click",()=>{
	
	dialog.classList.remove("ativo")
	document.getElementById("apply").addEventListener("click", function() {
    // Obter o nome do elemento e a cor escolhida
    const elementName = document.getElementById("element").value;
    const color = document.getElementById("color").value;

    // Tentar encontrar o elemento no DOM
    const elements = document.querySelectorAll(elementName);

    if (elements.length > 0) {
        // Aplica a cor de fundo ao(s) elemento(s)
        elements.forEach(function(el) {
            el.style.backgroundColor = color;
        });
    } else {
        alert("Elemento não encontrado.");
    }
});

})


document.getElementById("apply").addEventListener("click", function() {
    // Obter o nome do elemento e a cor escolhida
    const elementName = document.getElementById("element").value.trim();
    const color = document.getElementById("color").value;

    // Verificar se o nome do elemento está vazio
    if (!elementName) {
        alert("Por favor, insira o nome de um elemento válido.");
        return;
    }

    // Tentar encontrar o elemento no DOM
    const elements = document.querySelectorAll(elementName);

    if (elements.length > 0) {
        // Aplica a cor de fundo ao(s) elemento(s)
        elements.forEach(function(el) {
            el.style.backgroundColor = color;
        });
    } else {
        alert("Elemento não encontrado.");
    }
});

// Fechar o dialog
document.getElementById("close").addEventListener("click", function() {
    document.getElementById("dialog").style.display = "none";
});

