const urlPostRegion = "http://localhost:8080/region"

function createRegion() {
    const region = {}
    region.kode = "2345"
    region.navn = "KEA"
    region.href = "http:kea"
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
        body: region,
    };
    const response = await fetch(url, fetchOptions);
    if (!response.ok) {
        const errorMessage = await response.text();
        console.error(errorMessage);
        //throw new Error(errorMessage);
    }
}

const reg1 = createRegion()
console.log(reg1)
postDataAsJson(urlPostRegion, reg1)



