const { argv } = require('./yargs');
const funciones = require('./funciones');
var comando = argv._[0]
switch (comando) {
	case 'crear':
		funciones.crear(argv)
		break
	case 'mejorpromedio':
		funciones.mejorPromedio()
		break
	case 'vertodos':
		funciones.verTodos()
		break
	default:
		console.log('\n' + 'Se ingreso un comando invalido' + '\n');
}
