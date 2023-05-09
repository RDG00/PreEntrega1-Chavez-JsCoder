

function validarEdad(){
    alert("¡Bienvenido/a a CompraTuTicket.com!");
    let EdadUser = parseInt(prompt("Antes de continuar, porfavor indicanos tu edad"));
    if (EdadUser >= 18){
        alert("Perfecto, podés continuar con la compra");
        }else {
        alert("Lo sentimos, no podés continuar con la compra por ser menor de edad");
        validarEdad();
        };
};



let EntradasTotales = 150
let EntradasReservadas = 0

for (let i = 0; i < EntradasTotales; i++){
    validarEdad();
    let NombreCompra = prompt("¿Nos indicas tu nombre?").toLowerCase();
    let CantidadReservada = parseInt(prompt("Perfecto. " + NombreCompra + " Cuántos tickets deseas comprar?"));
    let CorreoElectronico = prompt("Ingresá tu correo electrónico");
    EntradasReservadas += CantidadReservada
    if (EntradasReservadas <= EntradasTotales){
       alert(NombreCompra + " , ya tenés tus entradas reservadas para " + CantidadReservada + " personas.");
    }else{
        /* nota: este alert fue creado con la finalidad de que me arroje el resultado de las entradas disponibles, pero justo cuando continua de vuelta con el inicio del codigo, tambien me resta el valor q se introdujo anteriormente (CantidadReservada) me gustaria saber como resolverlo */
        alert("Lo sentimos " + NombreCompra + " para evento quedan una cantidad de " + (CantidadReservada - (EntradasReservadas - EntradasTotales)) + " entradas, y tu petición excede el número permitido, hacé tu solicitud de vuelta");
        continue;
    }; 

    alert("¡Muchas gracias " + NombreCompra + " por comprar " + CantidadReservada + " tickets!. Porfavor confirme la compra y realice el pago mediante el link enviado a " + CorreoElectronico + " , ¡Hasta pronto!");
  };