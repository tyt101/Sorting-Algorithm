const merge = (left,right)=>{
    const res = []
    while(left.length&&right.length){
        if(left[0]<right[0]){
            res.push(left.shift())
        }else{
            res.push(right.shift())
        }
    }
    while(left.length){
        res.push(left.shift())
    }
    while(right.length){
        res.push(right.shift())
    }
    return res
}
const MergeSort = (array)=>{
    const len = array.length
    if(array === null || len < 2)return array
    const middle = Math.floor(len/2)
    const left = array.slice(0,middle)
    const right = array.slice(middle,len)
    return merge(MergeSort(left),MergeSort(right))
}