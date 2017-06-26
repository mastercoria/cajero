/*

== ALGORITMO DE CAJERO AUTOMÁTICO ==
@author: Christopher Coria Vásquez.
@version: 0.1.
@copyright-website: https://www.mastercoria.com/.
=========================

Este código es libre, puedes modificarlo y distribuirlo a tu antojo.
Se hizo con amor para la página de Facebook llamada Aprendamos Ingeniería.
*/

// Variables globales.
var enviarFormulario = document.getElementById("enviar");
var numero;

///////// AJUSTES:
var opcionesDinero = [1,2,5,10,20,50,100];
/*
opcionesDinero contiene la configuración de dinero (monedas y billetes).
opcionesCantidad contiene la configuración de cantidad de dinero en opcionesDinero. Es proporcional las dimenciones de ella.
EJ: opcionesCantidad[0] contiene la cantidad de dinero de opcionesDinero[0], etc ...

NOTA: Ambos vectores tienen que tener las mismas dimensiones con valores asignados. opcionesDinero[6] = opcionesCantidad[6].
SE PUEDEN EDITAR.
*/
var opcionesCantidad = [5,5,3,3,4,3,3];
///////// TERMINA AJUSTES.

var i = 0; // Bucles.
var g, d = [], opcionesCantidad2 = [], max = 0; // Procesos en algoritmo.

do{
	// Copiamos la configuración de "opcionesCantidad", esto es para poder hacer comparaciones después.
	opcionesCantidad2[i] = opcionesCantidad[i];
	// Obtenemos la cantidad total de dinero y la asignamos a la variable "max".
	max += opcionesDinero[i]*opcionesCantidad[i];
	i++;
}while(i <= opcionesDinero.length - 1);
///////////
//
//	NOMENCLATURA GENERAL DE VARIABLES:
//		enviarFormulario: obtiene el identificador del botón.
//		numero = Dinero tomado, enviado por el usuario.
//		opcionesDinero = Array; dinero disponible.
//		opcionesCantidad = Array; cantidad de dinero disponible.
//		opcionesCantidad2 = Array; copia de opcionesCantidad.
//		i = Iterador en bucles.
//		g = Obtención de dinero en cantidad.
//		d = Array; producto de g * opcionesDinero.
// 		max = Sumatoria de dinero disponible.
//
////////////


// A partir de aquí comienza la acción: el algoritmo central.
enviarFormulario.addEventListener("click", ejecutar);

function cajero(a){
	g = Math.floor(numero / opcionesDinero[a]);
	if(g > opcionesCantidad[a]){
		g = opcionesCantidad[a];
	}
	d[a] = g*opcionesDinero[a];
	opcionesCantidad[a] -= g;
	numero -= d[a];
}

function ejecutar(){
	numero = parseInt(document.getElementById("dinero").value);
	if(numero <= max){
		i = opcionesDinero.length - 1;
		do{
			cajero(i);
			var resultado = opcionesCantidad2[i] - opcionesCantidad[i];
			document.getElementById("resultados").innerHTML += "Billetes/monedas de $" + opcionesDinero[i] + ": " + resultado + "<br />";
			if(numero <= 0){
				document.getElementById("ocultar").style.display = "inline";				
				break;
			}
			i--;
		}while(i >= 0);
	} else if(numero > max){
		document.getElementById("resultados").innerHTML += "El número es mayor al máximo disponible: " + max;
	} else {	
		document.getElementById("resultados").innerHTML += "ERROR.";
	}
}

function borrarContenido(){
	document.getElementById("resultados").innerHTML = "<strong>Resultados:</strong><br /><br />";
}
// Facebook: Aprendamos Ingeniería.