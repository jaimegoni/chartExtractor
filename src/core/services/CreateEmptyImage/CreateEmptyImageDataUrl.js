
export const createEmptyImageDataUrl = (width, height)=>{

    let canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgba(250,0,0,0)";
    ctx.fillRect(0, 0,width,height);

    const imageData = canvas.toDataURL("image/png");

    return imageData;

}