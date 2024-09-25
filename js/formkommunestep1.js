console.log("jeg er i formkommune")

document.addEventListener('DOMContentLoaded', createFormEventListener);
let formKommune;

function createFormEventListener() {
    formKommune = document.getElementById("formKommune");
    formKommune.addEventListener("submit", handleFormSubmit);
}

async function handleFormSubmit(event) {
    //Vi handler submitten her i stedet for default html behaviour
    event.preventDefault();
    const form = event.currentTarget;
    const url = form.action;
    //skriver form element ud
    console.log(form);
    console.log(url);
}


