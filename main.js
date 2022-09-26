/* formulario para novedades */

class Cliente {
    constructor(nombre, email, numeroDeTelefono) {
        this.nombre = nombre;
        this.email = email;
        this.numeroDeTelefono = numeroDeTelefono;
    }
}

const arrayClientes = [];

const formularioNovedades = document.getElementById("formularioNovedades");

formularioNovedades.addEventListener("submit", (e) =>{
    e.preventDefault();
    const nombre = document.getElementById("formNombre");
    const email = document.getElementById("formEmail");
    const numeroDeTelefono = document.getElementById("formNumeroDeTelefono");
    const cliente = new Cliente(nombre.value, email.value, numeroDeTelefono.value);
    arrayClientes.push(cliente);
    console.log(arrayClientes);
    formularioNovedades.reset();
})

/* TODAVIA EN PROGRESO PARA QUE EL FORMULARIO HAGA LO QUE YO QUIERO, PERO LA ESTRUCTURA ESTA DEBO INVESTIGAR MAS*/


/*TIENDA*/

/*vamos a comenzar con el molde de los productos*/

class Juego {
    constructor(nombre, precioPrimaria, precioSecundaria) {
        this.nombre = nombre;
        this.precioPrimaria = precioPrimaria;
        this.precioSecundaria = precioSecundaria;
    }
}

const AlanWakeRemastered = new Juego("Alan Wake Remastered", "1450", "850");
const DOOMEternalDeluxeEdition = new Juego("DOOM Eternal Deluxe Edition", "2500", "1400");
const DRAGONBALLFIGHTERZ = new Juego("DRAGON BALL FIGHTERZ", "1900", "1100");
const FarCry5GoldEdition = new Juego("Far Cry 5: Gold Edition", "2400", "1200");
const HITMAN3DeluxeEdition = new Juego("HITMAN 3 - Deluxe Edition", "2550", "1350");
const LifeisStrangeRemasteredCollection = new Juego("Life is Strange Remastered Collection", "2300", "1400");
const MortalKombat11Ultimate = new Juego("Mortal Kombat 11 Ultimate", "2100", "1200");
const NBA2K22CrossGenDigitalBundle = new Juego("NBA 2K22 Cross-Gen Digital Bundle", "2650", "1300");
const SekiroShadowsDieTwiceGameoftheYearEdition = new Juego("Sekiro™: Shadows Die Twice - Game of the Year Edition", "2050", "1100");

