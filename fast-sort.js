const swap = (arr,i,j)=>{
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const FastSort = (array,low,high)=>{
    const len = array.length
    const key = array[low]
    let start = low
    let end = high
    while(end>start){
        while(end>start && array[end]>=key) end--
        if(array[end]<=key){
            swap(array,start,end)
        }
        while(end>start && array[start]<=key) start++
        if(array[start]>=key && array[end]<=key)
        if(array[start]>=key){
            swap(array,start,end)
        }
    }
        if(start>low) FastSort(array,low,start-1)
        if(end<high) FastSort(array,end+1,high)
    
    return array
}