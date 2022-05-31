export const storeEven = (num) =>{

    console.log("Action Data : " + num)
    return {
        type : "storeEven",
        payload : num,
    }
}