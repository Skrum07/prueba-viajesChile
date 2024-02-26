$(document).ready(function(){
    
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


    $("#liveAlertBtn").on("click",function(){
        alert("Mensaje enviado con exito")
    })


})
