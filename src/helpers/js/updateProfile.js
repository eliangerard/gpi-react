export const updateProfile = async (token, nombre, apellido, descripcion, imagen) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+token);
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        nombre,
        apellido,
        descripcion,
        imagen
    });

    let requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'manual'
    };

    return await fetch("https://208qra64eg.execute-api.us-east-2.amazonaws.com/dev/user", requestOptions)
        .then(response => response.json())
}