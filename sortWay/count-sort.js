// const CountSort =  (array)=>{
//     let max = -Infinity
//     for(let v of array){
//         max = Math.max(v,max)
//     }
//     const count = new Array(max+1).fill(0)
//     for(let v of array){
//         count[v]++
//     }
//     const res=[]
//     for(let i = 0;i<count.length;i++){
//         let temp = count[i]
//         while(temp--){
//             res.push(i)
//         }
//     }
//     return res
// }

const countStart = (arr) => {
    let max = -Infinity
    let min = Infinity
    for(let v of arr){
        max = Math.max(max,v)
        min = Math.min(min,v)
    }
    const len = (max - min) + 1
    const array = new Array(len).fill(0)

    for(let v of arr){
        array[v-min] ++
    }
    let res = []
    for(let i in array){
        let temp = array[i]
        while(temp--){
            res.push(parseInt(i)+min)
        }
    }
    return res
}