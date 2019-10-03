// Este texto se ejecuta en el servidor.
/** Se importa el objeto functions de la librería "firebase-functions". */
const functions = require('firebase-functions');
 
/* Se exporta la función sobre https llamada "saludo". */
exports.saludo = functions.https.onRequest(
  /** Código para la función saludo.
   * @param {{query:Object}} request solicitud que recibe el servidor.
   * Corresponde a la librería Express.
   * @param {{send:(texto:string)=>void}} response respuesta que devuelve el
   * servidor. Corresponde a la librería Express. */
  (request, response) => {
    try {
      // verifica que el parámetro nombre1 recibido del navegador esté correcto.
      if (!request.query.nombre1) {
        // Entra aquí si el nombre1 es null, undefined o ""
        throw new Error("Falta el nombre 1");
      } else if (!request.query.nombre2) {
        // Entra aquí si el nombre2 es null, undefined o ""
        throw new Error("Falta el nombre 2");
      }else if (!request.query.nombre3) {
        // Entra aquí si el nombre2 es null, undefined o ""
        throw new Error("Falta el nombre 3");
      }else if (!request.query.nombre4) {
        // Entra aquí si el nombre2 es null, undefined o ""
        throw new Error("Falta el nombre 4");
      }else if (!request.query.nombre5) {
        // Entra aquí si el nombre2 es null, undefined o ""
        throw new Error("Falta el nombre 5");
      }
      /* Solo se llega a esta parte si nombre1 y nombre 2 tienen un texto.
       * Devuelve un saludo. */
       var suma = parseInt(request.query.nombre1)+parseInt(request.query.nombre2)+parseInt(request.query.nombre3)+parseInt(request.query.nombre4)+parseInt(request.query.nombre5);
       var prom = suma/5;
      response.send(
        `El promedio de las calificaciones ${request.query.nombre1}, ${request.query.nombre2}, ${request.query.nombre3}, ${request.query.nombre4}, ${request.query.nombre5} es: ` 
        + prom);
    } catch (e) {
      // Devuelve un texto de error.
      response.send(e.message);
    }
  });
