export const getOwnPreguntas = async (token) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'manual'
    };

    return await fetch("https://208qra64eg.execute-api.us-east-2.amazonaws.com/dev/locaciones/preguntas", requestOptions)
        .then(response => response.json())

}