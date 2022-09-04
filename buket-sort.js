const BucketSort = array=>{
    let max = -Infinity
    let min = Infinity
    for(let v of array){
        max = Math.max(max,v)
        min = Math.min(min,v)
    }
    // 桶长度
    const bucketNum = Math.floor((max-min)/array.length)+1
    const bucketArray = new Array(bucketNum).fill(null).map(_=>[])

    for(let v of array){
        let index = Math.floor((v-min)/array.length)
        bucketArray[index].push(v)
    }

    const res = []
    for(let v of bucketArray){
        v.sort((a,b)=>a-b)
        for(m of v){
            res.push(m)
        }
    }
    return res
}