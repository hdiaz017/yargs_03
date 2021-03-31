const argv = require('yargs')
   .option('b', {
      alias: 'base',
      type: 'number',
      demandOption: true,
   })
   .option('l', {
      alias: 'listar',
      demandOption: false,
      default: false,
      type: 'boolean',
   })
   .option('h', {
      alias: 'hasta',
      default: 10,
      type: 'number',
   })
   .check((argv, options) => {
      if (isNaN(argv.b) || isNaN(argv.h)) {
         throw 'La base tiene que ser un numero';
      }

      return true;
   }).argv;

module.exports = argv;
