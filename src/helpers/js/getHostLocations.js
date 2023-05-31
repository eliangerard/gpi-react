export const getHostLocations = async (token) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+token);

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'manual'
    };
    const url = 'https://208qra64eg.execute-api.us-east-2.amazonaws.com/dev/locaciones';

    console.log(url);
    return await fetch(url, requestOptions)
        .then(response => response.json())
}
