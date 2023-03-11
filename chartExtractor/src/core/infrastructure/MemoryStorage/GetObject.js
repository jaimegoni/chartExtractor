
export const getObject = (key)=>{

    const stringifiedData = localStorage.getItem(key);

    return JSON.parse(stringifiedData);
}