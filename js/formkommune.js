const urlPostRegion = "http://localhost:8080/region"
console.log("jeg er i formkommune")

document.addEventListener('DOMContentLoaded', createFormEventListener);
let formKommune;

function createFormEventListener() {
    formKommune = document.getElementById("formKommune");
    formKommune.addEventListener("submit", handleFormSubmit);
}

async function postObjectAsJson(url, object, httpVerbum) {
    const objectAsJsonString = JSON.stringify(object)
    console.log(objectAsJsonString)
    const fetchOptions = {
        method: httpVerbum,
        headers: {
            "Content-Type": "application/json",
        },
        body: objectAsJsonString
    }
    const response = await fetch(urlPostRegion, fetchOptions)
    if (!response.ok) {
        const errorMessage = await response.text();
        console.error(errorMessage);
        //throw new Error(errorMessage);
        return response
    } else {
        return response
    }
}


async function handleFormSubmit(event) {
    //Vi handler submitten her i stedet for default html behaviour
    event.preventDefault();
    const form = event.currentTarget;
    const url = form.action;
    console.log(form);
    console.log(url);
    try {
        const formData = new FormData(form);
        console.log(formData);
        const responseData = await postFormDataAsJson(url, formData);
    } catch (error) {
        alert(error.message);
        console.error(error);
    }
}

async function postFormDataAsJson(url, formData) {
    const plainFormData = Object.fromEntries(formData.entries());
    console.log(plainFormData)
    debugger
    const resp = await postObjectAsJson(url, plainFormData, "POST");
    if (!response.ok) {
        const errorMessage = await response.text();
        console.error(errorMessage);
        //throw new Error(errorMessage);
        alert(errorMessage);
    } else {
        alert("region gemt")
    }
}




