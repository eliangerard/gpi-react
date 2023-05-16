export const useLogin = async ({ username, password }) => {
    console.log(username, password);
    let myHeaders = new Headers();
    myHeaders.append("username", username);
    myHeaders.append("password", password);

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'manual'
    };

    return await fetch("https://208qra64eg.execute-api.us-east-2.amazonaws.com/dev/auth/login", requestOptions)
				.then(response => response.json())
}