const BubbleSort = (array)=>{
    const len = array.length
    
    if(array === null || len<2){
        return array
    }
    for(let i = 0;i<len-1;i++){
        // 增加优化变量flag
        let flag = false
        for(let j = 0;j<len-i-1;j++){
            if(array[j]>array[j+1]){
                const temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
                // 发现此轮未进行排序，说明已经排序完成，直接退出后续循环
                flag = true
            }
        }
        if(!flag)break
    }
    return array
}
