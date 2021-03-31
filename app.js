const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

const base = argv.b;
const listar = argv.l;
const hasta = argv.h;

crearArchivo(base, listar, hasta)
   .then((nombreArch) => console.log(nombreArch))
   .catch((err) => console.log(err));
