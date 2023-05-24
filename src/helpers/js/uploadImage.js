export const uploadImage = async (base64, token) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "image": base64
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'manual'
    };

    return await fetch("https://208qra64eg.execute-api.us-east-2.amazonaws.com/dev/upload", requestOptions)
        .then(response => response.json())
}