
import { getRandomKey } from "../RandomKey/GetRandomKey";
import { getStoredChartsKeys } from "./GetStoredChartsKeys";

export const getUniqueRandomKey = ()=>{

    const storedChartsKeys = getStoredChartsKeys();

    if (storedChartsKeys.length > 0){

        let key = getRandomKey();

        while (storedChartsKeys.includes(key)){
            key = getRandomKey();
        }
        return key;
    }
    else{
        return getRandomKey();
    }

}