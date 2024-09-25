const urlPostKommune = "http://localhost:8080/region"

function createRegion() {
    const region = {}
    region.kode = "8845"
    region.navn = "KEA"
    region.href = "httpkea"
    return region;
}

async function postDataAsJson(url, obj) {
    const objectAsJsonString = JSON.stringify(obj);
    console.log(objectAsJsonString);
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: objectAsJsonString,
    };
    const response = await fetch(url, fetchOptions);
    if (!response.ok) {
        const errorMessage = await response.text();
        console.error(errorMessage);
        //throw new Error(errorMessage);
    } else {
        //vi har fået response fra backend
        console.log(response.json())
    }

}

async function postkommune() {
    const nogetjson = await postDataAsJson(urlPostKommune, kom1);
    console.log(nogetjson);

}

const kom1 = createRegion()
console.log(kom1)
postkommune();


