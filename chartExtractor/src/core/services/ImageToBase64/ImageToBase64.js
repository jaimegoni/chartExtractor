
export const imageToBase64 = ( file, setBase64 )=>{

    const reader = new FileReader();
    reader.onload = () => {
        setBase64(reader.result) ;
    }
    reader.readAsDataURL(file);
}