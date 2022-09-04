// 增量是怎样计算的?
const ShellSort = (array)=>{
    const len = array.length
    if(array === null || len < 2)return array
    let gap = Math.ceil(len/2)
    while(gap>0){
        for(let i = gap;i < len; i++){
            const temp = array[i]
            let j = i-gap
            while(j>=0 && array[j]>temp){
                array[j+gap] = array[j]
                j = j-gap
            }
            array[j+gap] = temp
        }
        gap=Math.floor(gap/2)
    }
    return array

}