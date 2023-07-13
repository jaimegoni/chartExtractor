
import { getRandomKey } from "./GetRandomKey";

export const createUniqueKey = (keyword, existingKeys, keyLength=20) =>{

    let newKey = keyword + getRandomKey(keyLength);

    while(existingKeys.includes(newKey)){
        newKey = keyword + getRandomKey(keyLength);
    }

    return newKey;

}