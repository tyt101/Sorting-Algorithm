// 增量是怎样计算的?

// 插入排序的升级，插入排序相当于对整个数组进行插入排序，而希尔排序是对数组进行分组，然后对每一组进行插入排序
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