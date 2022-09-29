/**
 * @param {number[]} nums
 * @return {number}
 */
var RadixSort = function(nums) {
    let n = nums.length
    if(n<2)return 0
    let max = -Infinity
    for(let i = 0;i < nums.length; i++){
        max = Math.max(nums[i],max)
    }
    const len = (max+"").length
    const bucket = []
    for(let i = 0;i<10;i++){
        bucket.push([])
    }
    for(let i = 0; i < len; i++){   //遍历最大值长度次
        for(let j = 0;j<nums.length;j++){
            const temp = nums[j]+""
            if(temp.length >= i+1){
                const k = parseInt(temp[temp.length-1-i])
                bucket[k].push(nums[j])
            }else{
                bucket[0].push(nums[j])
            }
        }
        // 重置nums
        nums.splice(0,n)
        for(let i = 0;i<bucket.length;i++){
            let temp = bucket[i].length
            for(let j = 0;j < temp;j++){
                nums.push(bucket[i][j])
            }
            bucket[i]=[]
        }
    }
    return nums
};