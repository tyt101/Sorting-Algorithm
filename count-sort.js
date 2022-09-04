const CountSort =  (array)=>{
    let max = -Infinity
    for(let v of array){
        max = Math.max(v,max)
    }
    const count = new Array(max+1).fill(0)
    for(let v of array){
        count[v]++
    }
    const res=[]
    for(let i = 0;i<count.length;i++){
        let temp = count[i]
        while(temp--){
            res.push(i)
        }
    }
    return res
}