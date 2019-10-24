//********************************* Troca de tela ********************************************************************
var paginaAtual = "trocatela";

function troca(pagina)
{
	
	document.getElementById(paginaAtual).className = "invisivel";
	document.getElementById(pagina).className = "visivel";
  	paginaAtual = pagina;
}