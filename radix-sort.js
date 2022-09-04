const RadixSort = (array)=>{
    const length = array.length
    if(!Array.isArray(array)||length < 2) return array
    
    let bucket = [],
        max = array[0],
        loop;
    
    // 确定排序数组中的最大值
    for(let i = 1; i < length;i++){
        if(array[i] > max){
            max = array[i]
        }
    }
    loop = (max+"").length

    //初始化桶
    for(let i = 0; i < 10; i++){
        bucket[i]=[]
    }

    for(let i = 0;i < loop; i++){
        for(let j = 0;j < length; j++){
            let str = array[j]+''

            if(str.length>=i+1){
                let k = parseInt(str[str.length-1-i])   //获取当前位的值
                bucket[k].push(array[j])
            }else{
                bucket[0].push(array)
            }
        }
    }
    // 清空旧数组
    array.splice(0,length)
    // 使用bucket重新初始化数组
    for(let i = 0;i<bucket.length;i++){
        const count = bucket[i].length
        for(let j = 0; j < count;j++){
            array.push(bucket[i][j])
        }
    }
    return array
}