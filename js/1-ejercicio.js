//Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

class Auto {
    constructor(color, marca, modelo) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.encendido = false; // Estado inicial del auto
    }

    encender() {
        if (!this.encendido) {
            this.encendido = true;
            console.log(`El auto ${this.marca} ${this.modelo} está encendido.`);
        } 
    }

    apagar() {
        if (this.encendido) {
            this.encendido = false;
            console.log(`El auto ${this.marca} ${this.modelo} está apagado.`);
        } 
    }
}

const auto = new Auto("rojo", "Toyota", "Corolla");
auto.encender();
auto.apagar();