const SelectSort = (array)=>{
    const len = array.length
    if(array === null || len < 2)return array
    for(let i = 0;i < len-1; i++){
        let min = i;
        for(let j = i+1; j < len; j++){
            if(array[j]<array[min]){
                min = j
            }
        }
        if(min>i){
            const temp = array[min]
            array[min] = array[i]
            array[i] = temp
        }
        
    }
    return array
}