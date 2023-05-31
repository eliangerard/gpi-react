export const useRegister = async (given_name, family_name, birthdate, username, email, password) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        given_name,
        family_name,
        birthdate,
        username,
        email,
        password
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'manual'
    };

    return await fetch("https://208qra64eg.execute-api.us-east-2.amazonaws.com/dev/auth/signup", requestOptions)
        .then(response => response.json())
}