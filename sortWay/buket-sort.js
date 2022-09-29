// const BucketSort = array=>{
//     let max = -Infinity
//     let min = Infinity
//     for(let v of array){
//         max = Math.max(max,v)
//         min = Math.min(min,v)
//     }
//     // 桶长度
//     const bucketNum = Math.floor((max-min)/array.length)+1
//     const bucketArray = new Array(bucketNum).fill(null).map(_=>[])

//     for(let v of array){
//         let index = Math.floor((v-min)/array.length)
//         bucketArray[index].push(v)
//     }

//     const res = []
//     for(let v of bucketArray){
//         v.sort((a,b)=>a-b)
//         for(m of v){
//             res.push(m)
//         }
//     }
//     return res
// }



const BucketSort = (arr) =>{
    let max = -Infinity
    let min = Infinity
    for(let v of arr){
        max = Math.max(max,v)
        min = Math.min(min,v)
    }
    const len = Math.floor((max - min)/arr.length)+ 1
    const array = new Array(len).fill(null).map(_=>[])
    console.log(array)
    for(let v of arr){
        let index = Math.floor((v-min)/arr.length)
        array[index].push(v)
    }
    console.log(array)
    let res = []
    for(let t in array){
        let temp = array[t].sort((a,b)=>a-b)
        for(let v of temp)
            res.push(v)
    }
    console.log(res)
}
BucketSort([1,5,3,9,0,4,-4])