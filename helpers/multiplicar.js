const fs = require('fs');
const crearArchivo = async (base = 5, listar, hasta) => {
   let salida = '';
   for (let i = 1; i <= hasta; i++) {
      const res = i * base;
      salida += `${base} * ${i} = ${res}\n`;
   }

   if (listar) {
      console.log(salida);
   }

   fs.writeFileSync(`tabla-${base}.txt`, salida);
   return `Archvio tabla-${base}.txt ha sido creado.`;
};

module.exports = {
   crearArchivo,
};
