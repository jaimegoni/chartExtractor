
export const saveObject = (key, object)=>{
    localStorage.setItem(key, JSON.stringify(object));

    return;
}