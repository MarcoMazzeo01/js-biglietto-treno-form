let userName;
let userAge;
let userDistance;

const ticketForm = document.getElementById("ticketForm")



ticketForm.addEventListener("submit", function(event) {
    userName = document.getElementById("userName").value
    userAge = document.getElementById("userAge").value
    userDistance = document.getElementById("userDistance").value

    document.getElementById("ticket_userName").innerHTML = userName
    document.getElementById("ticket_userAge").innerHTML = userAge
    document.getElementById("ticket_userDistance").innerHTML = userDistance + "km"



    event.preventDefault()
})
