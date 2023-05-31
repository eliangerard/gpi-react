export const getLocations = async (token, category = -1, precioMin = "", precioMax = "") => {
    console.table(category, precioMin, precioMax);
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+token);

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'manual'
    };
    const url = 'https://208qra64eg.execute-api.us-east-2.amazonaws.com/dev/locaciones'
    + (category != -1 ? `?category=${category}` : "")
    + (precioMin != "" ? `${ category != -1 ? "&" : "?" }precioMin=${precioMin}` : "")
    + (precioMax != "" ? `${ category != -1 || precioMin != "" ? "&" : "?" }precioMax=${precioMax}` : "");

    console.log(url);
    return await fetch(url, requestOptions)
        .then(response => response.json())
}

export const getLocationByID = async (token, id) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+token);

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'manual'
    };
    const url = 'https://208qra64eg.execute-api.us-east-2.amazonaws.com/dev/locaciones?idLocacion='+id;

    console.log(url);
    return await fetch(url, requestOptions)
        .then(response => response.json())
}