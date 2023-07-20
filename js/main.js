let userName;
let userAge;
let userDistance;
let basePrice;
let finalPrice;
let promoType;

const ticketRate = 0.21;
const minPromo = 20;
const maxPromo = 40;

const ticketForm = document.getElementById("ticketForm")
const ticket_userPromo = document.getElementById("ticket_userPromo")


//main
ticketForm.addEventListener("submit", function(event) {

    //impedisce alla pagina di ricaricare dopo submit
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
            promoType = -minPromo + "% OFF!"
            document.getElementById("ticket_userPromo").style.backgroundColor = "green";

        } else if (userAge == "Over 65") {

            finalPrice = basePrice - ((basePrice * maxPromo) / 100)
            promoType = -maxPromo + "% OFF!"
            ticket_userPromo.style.backgroundColor = "red";

        } else {
            finalPrice = basePrice
            promoType = "Standard Plan (Full price)"
            document.getElementById("ticket_userPromo").style.backgroundColor = "yellow";
        }


        //monstro dati sul biglietto
        document.getElementById("ticket_userName").innerHTML = userName
        document.getElementById("ticket_userDistance").innerHTML = userDistance + "km"
        document.getElementById("ticket_finalPrice").innerHTML = finalPrice.toFixed(2) + "€"
        ticket_userPromo.innerHTML = promoType


    } else {
        alert("Inserire una distanza valida!")
        //ricarica la pagina, svuotando il form e la tabella biglietto
        location.reload(true)
    }


})
