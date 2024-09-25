const urlPostRegion = "http://localhost:8080/region"
console.log("jeg er i formkommune")

document.addEventListener('DOMContentLoaded', createFormEventListener);
let formKommune;

function createFormEventListener() {
    formKommune = document.getElementById("formKommune");
    formKommune.addEventListener("submit", handleFormSubmit);
}

function createRegion() {
    const region = {}
    region.kode = "8935"
    region.navn = "KEA"
    region.href = "httpkea"
    return region;
}


async function postDataAsJson(url, region) {
    const objectAsJsonString = JSON.stringify(region);
    console.log(objectAsJsonString);
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: objectAsJsonString,
    };
    debugger
    const response = await fetch(url, fetchOptions);
    if (!response.ok) {
        const errorMessage = await response.text();
        console.error(errorMessage);
        //throw new Error(errorMessage);
    }
    return response;
}

async function postFormDataAsJson(url, formData) {
    const plainFormData = Object.fromEntries(formData.entries());
    console.log(plainFormData)

    const rgg = createRegion();

    const response = await postDataAsJson(url, rgg);
    if (!response.ok) {
        const errorMessage = await response.text();
        console.error(errorMessage);
        //throw new Error(errorMessage);
        alert(errorMessage);
    } else {
        alert("region gemt")
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



