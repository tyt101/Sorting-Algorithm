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



// 补充思路
// 1.先建立一次大根堆
        // 需要从Math.ceil(len/2)-1的位置到0开始进行递归遍历建立大根堆
// 2.将大根堆最后一个节点和根节点进行交换，交换完成之后，最后一个节点就是数组最大值，所以已经排序好了，就只用对len-1进行排序
// 3.对根节点继续建立大根堆
// 4.重复2，3过程