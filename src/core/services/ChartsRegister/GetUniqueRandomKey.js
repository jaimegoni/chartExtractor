
import { getRandomKey } from "../RandomKey/GetRandomKey";
import { getStoredChartsKeys } from "./GetStoredChartsKeys";

export const getUniqueRandomKey = (keyLength = 20)=>{

    const keyword = "chartImg_";

    const storedChartsKeys = getStoredChartsKeys();

    if (storedChartsKeys.length > 0){

        let key = keyword + getRandomKey(keyLength);

        while (storedChartsKeys.includes(key)){
            key = keyword + getRandomKey(keyLength);
        }
        return key;
    }
    else{
        return keyword + getRandomKey(keyLength);
    }

}