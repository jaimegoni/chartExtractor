
export const imageToBase64 = ( file )=>{

    let base64String = "";

    const reader = new FileReader();
    reader.onload = () => {
        base64String = reader.result.replace("data:", "")
            .replace(/^.+,/, "");
        return base64String;
    }
    reader.readAsDataURL(file);
}