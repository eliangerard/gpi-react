export const postLocation = async (token, form) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+token);
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify(form);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'manual'
    };

    return await fetch("https://208qra64eg.execute-api.us-east-2.amazonaws.com/dev/locaciones", requestOptions)
        .then(response => response.json())
}