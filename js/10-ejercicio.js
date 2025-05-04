//crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
//Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.
//Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
// Clase Avión
class Avion {
    constructor(nombre, capacidad, destino) {
      this.nombre = nombre;
      this.capacidad = capacidad;
      this.destino = destino;
      this.listaPasajeros = [];
    }
    abordar(nombrePasajero) {
      if (this.listaPasajeros.length < this.capacidad) {
        this.listaPasajeros.push(nombrePasajero);
        console.log(`${nombrePasajero} abordó el avión ${this.nombre} con destino a ${this.destino}. Pasajeros: ${this.listaPasajeros.length}/${this.capacidad}`);
      } else {
        console.log(`Lo sentimos, el avión ${this.nombre} está lleno. No hay más asientos disponibles.`);
      }
    }
  }
  class Aeropuerto {
    constructor(nombreAeropuerto) {
      this.nombreAeropuerto = nombreAeropuerto;
      this.listaAviones = [];
    }
    agregarAvion(avion) {
      this.listaAviones.push(avion);
      console.log(`Avión ${avion.nombre} agregado al aeropuerto ${this.nombreAeropuerto}`);
    }
    buscarAvion(nombreAvion) {
      const avionEncontrado = this.listaAviones.find(avion => avion.nombre === nombreAvion);
      
      if (avionEncontrado) {
        console.log(`Avión encontrado: ${avionEncontrado.nombre} | Capacidad: ${avionEncontrado.capacidad} | Destino: ${avionEncontrado.destino} | Pasajeros: ${avionEncontrado.listaPasajeros.length}`);
        return avionEncontrado;
      } else {
        console.log(`No se encontró ningún avión con el nombre "${nombreAvion}" en ${this.nombreAeropuerto}`);
        return null;
      }
    }
  }
  const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");
  const avion1 = new Avion("Vuelo 001", 150, "París");
  const avion2 = new Avion("Vuelo 007", 200, "Nueva York");
  const avion3 = new Avion("Vuelo 202", 100, "Tokio");

  aeropuertoInternacional.agregarAvion(avion1);
  aeropuertoInternacional.agregarAvion(avion2);
  aeropuertoInternacional.agregarAvion(avion3);

  console.log("\n=== Búsqueda y abordaje ===");
  const avionBuscado = aeropuertoInternacional.buscarAvion("Vuelo 007");
  
  if (avionBuscado) {
    avionBuscado.abordar("Juan Pérez");
    avionBuscado.abordar("María García");
    avionBuscado.abordar("Carlos López");
    
    aeropuertoInternacional.buscarAvion("Vuelo 007");
  }
  aeropuertoInternacional.buscarAvion("Vuelo 999");