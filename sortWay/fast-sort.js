// const swap = (arr,i,j)=>{
//     const temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
// }

// // 这个是选择的第一个数为基数
// // 也可以选择最后一个或者中间任意一个。选择中间任意一个的算法是最优的
// const FastSort = (array,low,high)=>{
//     const len = array.length
//     const key = array[low]
//     let start = low
//     let end = high
//     while(end>start){
//         while(end>start && array[end]>=key) end--
//         if(array[end]<=key){
//             swap(array,start,end)
//         }
//         while(end>start && array[start]<=key) start++
//         if(array[start]>=key){
//             swap(array,start,end)
//         }
//     }
//         if(start>low) FastSort(array,low,start-1)
//         if(end<high) FastSort(array,end+1,high)
    
//     return array
// }


var FastSort = function(nums) {
    const quickSort = (nums,start,end)=>{
        if(start>=end)return
        let middle = partition(nums,start,end)
        quickSort(nums,start,middle-1)
        quickSort(nums,middle+1,end)
        return nums
    }
    const partition = (nums,start,end)=>{
        // const n = Math.floor(start,end+1)
        // swap(nums,start,n)
        let pivot = nums[start]
        let left = start + 1;
        let right = end
        while(left<right){
            while(left<right&&nums[left]<pivot) left++
            while(left<right&&nums[right]>pivot) right--
            if(left<right){
                swap(nums,left,right)
                left++
                right--
            }   
        }
        if(left===right&&nums[right]>pivot) right--
        swap(nums,start,right)
        return right
    }
    const swap = (nums,i,j)=>{
        const temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
    return quickSort(nums,0,nums.length-1)
};