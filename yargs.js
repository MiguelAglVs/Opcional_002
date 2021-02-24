const nombre = {
	demand: true,
	alias: 'n'
}
const matematicas = {
	demand: true,
	alias: 'm'
}
const ingles = {
	demand: true,
	alias: 'i'
}
const programacion = {
	demand: true,
	alias: 'p'
}
const creacion = {
	nombre,
	matematicas,
	ingles,
	programacion
}
const mostarprom = {
	nombre
}
const ver = {
	nombre
}
const argv = require('yargs')
	.command('crear', 'Crear cliente', creacion)
	.command('mostarprom', 'Mostar mejor promedio')
	.command('ver', 'Visualizar lista')

	.argv
module.exports = {
	argv
};