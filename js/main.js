let userName;
let userAge;
let userDistance;
let basePrice;
let finalPrice;

const ticketRate = 0.21;
const minAge = 18, minPromo = 20;
const maxAge = 65, maxPromo = 40;

const ticketForm = document.getElementById("ticketForm")



ticketForm.addEventListener("submit", function(event) {

    event.preventDefault()

    //prendo i dati necessari
    userName = document.getElementById("userName").value
    userAge = document.getElementById("userAge").value
    userDistance = parseInt(document.getElementById("userDistance").value)

    //controllo che la distanza sia un numero
    if ( !(isNaN(userDistance)) ) {

        //calcolo prezzo base senza applicare sconti
        basePrice = userDistance * ticketRate;
    

        //applico sconto in base all'età
        if (userAge == "Minorenne") {

            finalPrice = basePrice - ((basePrice * minPromo) / 100)

        } else if (userAge == "Over 65") {

            finalPrice = basePrice - ((basePrice * maxPromo) / 100)

        } else {
            finalPrice = basePrice
        }


        //monstro dati sul biglietto
        document.getElementById("ticket_userName").innerHTML = userName
        document.getElementById("ticket_userAge").innerHTML = userAge
        document.getElementById("ticket_userDistance").innerHTML = userDistance + "km"
        document.getElementById("ticket_finalPrice").innerHTML = finalPrice.toFixed(2) + "€"


    } else {
        alert("Inserire una distanza valida!")
        //ricarica la pagina, svuotando il form e la tabella biglietto
        location.reload(true)
    }


    




})
