export const uploadImage = async (base64, token) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+token);
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "image": base64,
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'manual'
    };

    return await fetch("https://208qra64eg.execute-api.us-east-2.amazonaws.com/dev/upload", requestOptions)
        .then(response => response.json())
}