const InsertSort = (array)=>{
    const len = array.length
    if(array === null || len < 2)return array
    for(let i = 1; i < len; i++){
        const temp = array[i]
        let j = i-1;
        while(j >= 0 && array[j] > temp){
            array[j+1] = array[j]
            j--
        }
        array[j+1] = temp
    }
    return array
}