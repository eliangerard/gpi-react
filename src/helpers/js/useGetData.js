import { fetchLocalUser } from "./fetchLocalUser";
import { updateID } from "./updateID";

export const validateId = async (base64, token, setLoadingStatus) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "imageBase64": base64
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'manual'
    };
    setLoadingStatus("Subiendo tu identificación");
    const idData = await fetch("https://208qra64eg.execute-api.us-east-2.amazonaws.com/dev/auth/id", requestOptions)
    .then(response => response.json())
    
    console.log(idData);
    
    setLoadingStatus("Comprobando identidad");
    const response = await fetchLocalUser(token);
    console.log(response);
    const { result } = response;
    console.log(result);
    const nameFormatted = result.apellidos.toUpperCase() + " " + result.nombre.toUpperCase();
    
    console.log(idData, nameFormatted);
    
    if (idData.result.NOMBRE) {
        if (idData.result.NOMBRE == nameFormatted) {
            console.log(idData.result.NOMBRE, nameFormatted);
            console.log("IDENTIDAD VALIDADA");
            let myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + token);
            myHeaders.append("Content-Type", "application/json");
            
            let raw = JSON.stringify({
                image : base64
            });
            
            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'manual'
            };
            
            const response = await fetch("https://208qra64eg.execute-api.us-east-2.amazonaws.com/dev/private/upload", requestOptions)
            .then(response => response.json())
            
            setLoadingStatus("Identidad comprobada");
            console.log(response);
            
            const finalResponse = await updateID(response.result, token)
            
            return true;
        }
    }
    return false;
}
