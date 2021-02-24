const fs = require('fs');
listaEstudiantes = [];
const crear = (estudiante) => {
	listar()
	let est = {
		nombre: estudiante.nombre,
		matematicas: estudiante.matematicas,
		ingles: estudiante.ingles,
		programacion: estudiante.programacion,
		promedio: (estudiante.matematicas + estudiante.ingles + estudiante.programacion) / 3
	}
	let duplicado = listaEstudiantes.find(nom => nom.nombre == estudiante.nombre)
	if (duplicado) {
		console.log('Ya existe el estudiante')
	} else {
		listaEstudiantes.push(est)
		console.log(listaEstudiantes)
		guardar()
	}
}
const listar = () => {
	try {
		listaEstudiantes = JSON.parse(fs.readFileSync('listado.json'))
	} catch (err) {
		listaEstudiantes = []
	}
}
const guardar = () => {
	let datos = JSON.stringify(listaEstudiantes);
	fs.writeFile('listado.json', datos, (err) => {
		if (err) throw (err);
		console.log('Archivo fue creado con éxito');
	})
}
const verTodos = () => {
	listar()
	listaEstudiantes.forEach(est => {
		console.log('\nLa cedula es: ' + '\t' + est.nombre)
		console.log('Nota de matemicas: ' + '\t' + est.matematicas)
		console.log('Nota de ingles: ' + '\t' + est.ingles)
		console.log('Nota de programacion: ' + '\t' + est.programacion + '\n')
	});
}
const mejorPromedio = () => {
	listar()
	let pml = listaEstudiantes.filter(prom => prom.promedio >= 3)
	if (pml.length == 0) {
		console.log('ningun promedio supera 3')
	} else {
		pml.forEach(est => {
			console.log('\nEl/La estudiante: ' + '\t' + est.nombre)
			console.log('Tiene un promedio de: ' + '\t' + est.promedio + '\n')
		});
	}
}
module.exports = {
	crear,
	mejorPromedio,
	verTodos,
	// actualizar
	// eliminar
}