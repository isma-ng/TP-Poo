//Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
//Una propiedad titular con el valor "Alex".
//Una propiedad saldo, teniendo como valor inicial 0.
//Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
//Un método extraer() que permita retirar la cantidad pasada como parámetro.
//Un método informar() que retorne la información del estado de la cuenta. 
//Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.


class Cuenta {
    constructor(titular = "Alex", saldo = 0) {
      this.titular = titular;
      this.saldo = saldo;
    }
  
    ingresar(cantidad) {
      if (cantidad > 0) {
        this.saldo += cantidad;
        console.log(`Se ingresaron $${cantidad}. Nuevo saldo: $${this.saldo}`);
      } else {
        console.log("Error: La cantidad debe ser positiva");
      }
    }
  
    extraer(cantidad) {
      if (cantidad > 0) {
        if (cantidad <= this.saldo) {
          this.saldo -= cantidad;
          console.log(`Se extrajeron $${cantidad}. Nuevo saldo: $${this.saldo}`);
        } else {
          console.log(`Error: Fondos insuficientes. Saldo actual: $${this.saldo}`);
        }
      } else {
        console.log("Error: La cantidad debe ser positiva");
      }
    }
  
    informar() {
      return `Titular: ${this.titular} | Saldo: $${this.saldo}`;
    }
  }
  const miCuenta = new Cuenta();
  console.log(miCuenta.informar());
  miCuenta.ingresar(1500);
  miCuenta.extraer(750);
  console.log(miCuenta.informar());