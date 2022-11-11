var comiRioja = document.getElementsByClassName ('cRiojana')
var comiCrio = document.getElementsByClassName ('bifeCriolla')
var comiMon = document.getElementsByClassName ('mondongo')
var comiGuiso = document.getElementsByClassName ('guiso')
var comiLasa = document.getElementsByClassName ('lasa')

function mostrarComRio() {
	comiRioja[0].style.display = 'block'
	comiRioja[1].style.display = 'block'
	comiCrio[0].style.display = 'none'
	comiCrio[1].style.display = 'none'
	comiMon[0].style.display = 'none'
	comiMon[1].style.display = 'none'
	comiGuiso[0].style.display = 'none'
	comiGuiso[1].style.display = 'none'
	comiLasa[0].style.display = 'none'
	comiLasa[1].style.display = 'none'
}

function mostrarComBife() {
	comiRioja[0].style.display = 'none'
	comiRioja[1].style.display = 'none'
	comiCrio[0].style.display = 'block'
	comiCrio[1].style.display = 'block'
	comiMon[0].style.display = 'none'
	comiMon[1].style.display = 'none'
	comiGuiso[0].style.display = 'none'
	comiGuiso[1].style.display = 'none'
	comiLasa[0].style.display = 'none'
	comiLasa[1].style.display = 'none'
}

function mostrarComMon() {
	comiRioja[0].style.display = 'none'
	comiRioja[1].style.display = 'none'
	comiCrio[0].style.display = 'none'
	comiCrio[1].style.display = 'none'
	comiMon[0].style.display = 'block'
	comiMon[1].style.display = 'block'
	comiGuiso[0].style.display = 'none'
	comiGuiso[1].style.display = 'none'
	comiLasa[0].style.display = 'none'
	comiLasa[1].style.display = 'none'
}

function mostrarComGuiso() {
	comiRioja[0].style.display = 'none'
	comiRioja[1].style.display = 'none'
	comiCrio[0].style.display = 'none'
	comiCrio[1].style.display = 'none'
	comiMon[0].style.display = 'none'
	comiMon[1].style.display = 'none'
	comiGuiso[0].style.display = 'block'
	comiGuiso[1].style.display = 'block'
	comiLasa[0].style.display = 'none'
	comiLasa[1].style.display = 'none'
}

function mostrarComLasa() {
	comiRioja[0].style.display = 'none'
	comiRioja[1].style.display = 'none'
	comiCrio[0].style.display = 'none'
	comiCrio[1].style.display = 'none'
	comiMon[0].style.display = 'none'
	comiMon[1].style.display = 'none'
	comiGuiso[0].style.display = 'none'
	comiGuiso[1].style.display = 'none'
	comiLasa[0].style.display = 'block'
	comiLasa[1].style.display = 'block'
}

var lugar = prompt("Marcar con una letra. Si vivis en: \na. Lomas de zamora\nb. Lanús\nc. Avellaneda\nd. Otro lugar")

if(lugar == 'd'){
	alert("Lamentablemente no estamos disponibles en tu zona")
} else {
	alert("Estamos cerca de zona. Nos encantaria que pases a disfrutar de \nnuestra comida o puedes hacernos un pedido a domicilio.")
}