// Constates que seleccionar

const question    = document.querySelectorAll('.question');
const answer      = document.querySelectorAll('.answer');
const arrow       = document.querySelectorAll('.arrow');

//  Darle un evento Click a cada clase "question",
    // Quitar la clase "activo" y luego agregarle la clase "activo" de nuevo para mostrar cualquiera de los otros que se valla a selecionar.
    // Como veo que una vez seleccionado, al clickear otra vez no se quita, modificamos el codigo para comprobar si el contenido ya tiene o no la clase "activo", si lo tiene no le añadimos la clase, en cambio se la quitamos.

question.forEach ((cadaQuestion , i) => {

    question[i].addEventListener('click', () => {

// Constante de verificacion de si el contenido ya tiene o no la clase "activo"
        const esActivo = answer[i].classList.contains('activo');
        const isActivo = question[i].classList.contains('activo');
        const yesActivo = arrow[i].classList.contains('activo');

        answer.forEach( (cadaAnswer , i) => {
            answer[i].classList.remove('activo');
        });
        
        question.forEach( (cadaquestion , i) => {
            question[i].classList.remove('activo');
        });

        arrow.forEach( (cadaarrow , i) => {
            arrow[i].classList.remove('activo');
        });

// Condicional, para si el elemento tiene la clase, dejarsela eliminado, si en caso contrario no la tenia pues añadirselo.
        if (!esActivo) {
            answer[i].classList.add('activo');
        }
        if (!isActivo) {
            question[i].classList.add('activo');
        }
        if (!yesActivo) {
            arrow[i].classList.add('activo');
        }
    })

});
