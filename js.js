//************************************** Questionario ***************************************************************

//************************************** Classe para a questão ******************************************************

var gabarito = ["a1", "b2", "c1", "d2", "e3", "f1", "g1", "h2", "i3", "j1"];
var dados = [];

class Questao
{
	constructor(ident, resposta, pos)
	{
		this.identificador = ident;
		this.resposta = resposta;
		this.pos = pos;
		this.situacao;
	}
	validar()
	{
		if(this.identificador == this.resposta)
			this.situacao = true;
		else
			this.situacao = false;

	}
}

/*
Parametros: 
identificador =  ID(html) do botão escolhido(pressionado)
pos = Relacionada a posição do vetor onde esta a resposta para a questão respondida
 */
function certa(identificador, pos) 
{
	var pergunta = new Questao(identificador, gabarito[pos], pos);
	 /*Identificador: Saber qual opção que o usuário escolheu
	   gabarito[pos]: pega a resposta correta da alternativa escolhida pelo usuário
	   pos: pega a "qual o número da questao que esta sendo respondida*/
	pergunta.validar();	
	var marcador = true;
	if(dados.length == 0)
	{
		dados.push(pergunta);
	}
	else
	{
		for(var i=0;i<dados.length;i++)
		{
			if(dados[i].pos == pos)
			{
				marcador = false;
				dados[i] = pergunta;
			}
		}
		if(marcador)
		{
			dados.push(pergunta);
		}
	}	
	document.getElementById(identificador).style.backgroundColor = "#f2ea55";
	if(parseInt(identificador[1]) == 1)
	{
	document.getElementById(identificador[0]+'2').style.backgroundColor = "";
	document.getElementById(identificador[0]+'3').style.backgroundColor = "";
	}
	if(parseInt(identificador[1]) == 2)
	{
	document.getElementById(identificador[0]+'1').style.backgroundColor = "";
	document.getElementById(identificador[0]+'3').style.backgroundColor = "";
	}
	if(parseInt(identificador[1]) == 3)
	{
	document.getElementById(identificador[0]+'2').style.backgroundColor = "";
	document.getElementById(identificador[0]+'1').style.backgroundColor = "";
	}
}


//****************************** Função para conferir as respostas e mostrar o resultado *****************************

var acertos;

function mostrar()
{
	window.scrollTo(0, 0);
    acertos = 0;

	for(var i = 0; i<dados.length;i++)
	{
		if(dados[i].situacao)
		{
            document.getElementById(dados[i].identificador).style.backgroundColor = "#27ae60";
            acertos++;
		}
		else
		{
			document.getElementById(dados[i].identificador).style.backgroundColor = "#d63031";
			document.getElementById(dados[i].resposta).style.backgroundColor = "#27ae60";
		}
    }
    document.getElementById("score").innerHTML = acertos;
	score();
}



function again(){
	window.scrollTo(0, 0);
	for(var i = 0; i<30;i++)
	{
		document.getElementById(dados[i].identificador).style.backgroundColor = "#cfcac4";
		document.getElementById(dados[i].resposta).style.backgroundColor = "#cfcac4";
	}
	dados.length = 0;
}