/* Lê o XML */
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "xml/db_conteudo.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

let x = xmlDoc.getElementsByTagName("conteudo");

/* Exibe o conteúdo */

function funcaoSobrenos() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h3>" + x[i].getElementsByTagName("titulosobrenos")[0].childNodes[0].nodeValue + "</h3>");
	}
}

function funcaoTextosobrenos() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p>" + x[i].getElementsByTagName("textosobrenos")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaoObjetivo1() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h2 class='title'>" + x[i].getElementsByTagName("tobjetivo1")[0].childNodes[0].nodeValue + "</h2>");
	}
}

function funcaoCorpoobjetivo1() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p>" + x[i].getElementsByTagName("corpoobjetivo1")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaoObjetivo2() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h2 class='title'>" + x[i].getElementsByTagName("tobjetivo2")[0].childNodes[0].nodeValue + "</h2>");
	}
}

function funcaoCorpoobjetivo2() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p>" + x[i].getElementsByTagName("corpoobjetivo2")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaoObjetivo3() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h2 class='title'>" + x[i].getElementsByTagName("tobjetivo3")[0].childNodes[0].nodeValue + "</h2>");
	}
}

function funcaoCorpoobjetivo3() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p>" + x[i].getElementsByTagName("corpoobjetivo3")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaoDesemprego() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h3>" + x[i].getElementsByTagName("titulodesemp")[0].childNodes[0].nodeValue + "</h3>");
	}
}

function funcaoTextodesemprego() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p>" + x[i].getElementsByTagName("textodesemp")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaoTitulodesemp1() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h4 class='title'>" + x[i].getElementsByTagName("tdesemp1")[0].childNodes[0].nodeValue + "</h4>");
	}
}

function funcaoTitulodesemp2() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h4 class='title'>" + x[i].getElementsByTagName("tdesemp2")[0].childNodes[0].nodeValue + "</h4>");
	}
}

function funcaoTitulodesemp3() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h4 class='title'>" + x[i].getElementsByTagName("tdesemp3")[0].childNodes[0].nodeValue + "</h4>");
	}
}

function funcaoTextodesemp1() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='description'>" + x[i].getElementsByTagName("corpodesemp1")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaoTextodesemp2() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='description'>" + x[i].getElementsByTagName("corpodesemp2")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaoTextodesemp3() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='description'>" + x[i].getElementsByTagName("corpodesemp3")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaoNossosprojetos() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h3 class='section-title'>" + x[i].getElementsByTagName("tituloprojeto")[0].childNodes[0].nodeValue + "</h3>");
	}
}

function funcaoTituloweb() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='textoweb1'>" + x[i].getElementsByTagName("tituloweb")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaosobreweb() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='textoweb'>" + x[i].getElementsByTagName("projetoweb")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaoTituloapp() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='textoapp1'>" + x[i].getElementsByTagName("tituloapp")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaosobreapp() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='textoapp'>" + x[i].getElementsByTagName("projetoapp")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaosobreapp2() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='textoapp'>" + x[i].getElementsByTagName("projetoapp2")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaoNossosclientes() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h4>" + x[i].getElementsByTagName("titulocliente")[0].childNodes[0].nodeValue + "</h4>");
	}
}

function funcaoEquipe() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h3>" + x[i].getElementsByTagName("tituloequipe")[0].childNodes[0].nodeValue + "</h3>");
	}
}

function funcaoAna() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h4>" + x[i].getElementsByTagName("tituloana")[0].childNodes[0].nodeValue + "</h4>");
	}
}

function funcaoGabs() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h4>" + x[i].getElementsByTagName("titulogabs")[0].childNodes[0].nodeValue + "</h4>");
	}
}

function funcaoEduardo() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h4>" + x[i].getElementsByTagName("tituloeduardo")[0].childNodes[0].nodeValue + "</h4>");
	}
}

function funcaoHagata() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h4>" + x[i].getElementsByTagName("titulohagata")[0].childNodes[0].nodeValue + "</h4>");
	}
}

function funcaoDesenvolvedora() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<span>" + x[i].getElementsByTagName("desenvolvedora")[0].childNodes[0].nodeValue + "</span>");
	}
}

function funcaoDesenvolvedor() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<span>" + x[i].getElementsByTagName("desenvolvedor")[0].childNodes[0].nodeValue + "</span>");
	}
}

/*
function sobrenos(){
    n = x.length - 1;
	for (var i = 0; i <= n; i++) { console.log(x[i])
        document.write(
         `<div class="col-md-4 wow fadeInUp">
            <div class="sobrenos-col">
              <div class="img">
                <img src="img/sobrenos-mission.jpg" alt="" class="img-fluid">
                <div class="icon"><i class="ion-ios-speedometer-outline"></i></div>
              </div>
              <h2 class="title"><a href="#desemprego">${xml[i].getElementsByTagName('titulo')[0].childNodes[0].nodeValue}</a></h2>
              <p>
                ${xml[i].getElementsByTagName('texto')[0].childNodes[0].nodeValue}
              </p>
            </div>
          </div>`
        );
    }
}
*/