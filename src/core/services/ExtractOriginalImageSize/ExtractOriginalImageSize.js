export const extractOriginalImageSize = async(imageUrl)=>{

    let isImageLoaded = false;

    const image = new Image();

    image.src = imageUrl;

    image.onload = ()=>{
        isImageLoaded = true;
    };

    return new Promise ((resolve, reject)=>{

        setTimeout(
            ()=>{
                isImageLoaded === true ? resolve({imageWidth : image.naturalWidth, imageHeight: image.naturalHeight}) : reject({imageWidth : 0, imageHeight: 0});
            }
            , 500);
    })

}