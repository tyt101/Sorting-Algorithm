const HeapSort = (array)=>{
    // 调整为大根堆，最大的非叶子结点: Math.ceil(len/2)-1
    // 根节点和最后一个节点互换，再调整为大根堆
    // 根节点和倒数第二个节点互换，再调整为大根堆

    const buildMaxHeap = (array)=>{
        len = array.length
        for(let i = Math.ceil(len/2)-1;i>=0;i--){
            heapAll(array,i)
        }
    }
    const heapAll = (arr,index)=>{
        const left = index*2 + 1
        const right = index*2 + 2
        let largest = index
        if(left < len && arr[left] > arr[largest])
            largest = left
        if(right < len && arr[right] > arr[largest])
            largest = right
        if(largest!==index){
            swap(arr,largest,index)
            heapAll(arr,largest)
        }
    }
    const swap = (arr,i,j)=>{
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    let len = 0
    buildMaxHeap(array)
    for(let i = len - 1;i >= 0;i--){
        swap(array,0,i)
        len--;
        heapAll(array,0)
    }
    return array
}