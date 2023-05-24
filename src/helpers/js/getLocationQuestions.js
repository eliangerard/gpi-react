export const getLocationQuestions = async (token, id) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'manual'
    };

    fetch("https://208qra64eg.execute-api.us-east-2.amazonaws.com/dev/locaciones/preguntas?idLocacion="+id, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}