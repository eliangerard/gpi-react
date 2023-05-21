export const confirmAuthenticator = async (code, token) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+token);
    myHeaders.append("Content-Type", "text/plain");

    let raw = `{\r\n    \"usercode\" : \"${code}\"\r\n}`;

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'manual'
    };

    return await fetch("https://208qra64eg.execute-api.us-east-2.amazonaws.com/dev/auth", requestOptions)
        .then(response => response.json())
}