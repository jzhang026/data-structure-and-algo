var Linklist = require('./link_list');

function bubbleSort(list) {
    if (!list || !list.head) return list;
    let tail = null;
    while(list.head.next !== tail) {
        let prev = null;
        let current = list.head;
        while(current.next && current.next !== tail) {
            let next = current.next;
            if (current.ele > next.ele) {
                if (prev !==null) {
                    current.next = next.next;
                    prev.next = next;
                    next.next = current;
                } else {
                    current.next = next.next;
                    list.head = next;
                    next.next = current;
                }
                prev = next;
                
                
            } else {
                // 曾经在此交换时发生了bug，搞错了当值发生交换和不叫唤时候，current的值
                prev = current;
                current = current.next;
            }
            
        }
        tail = current;
    }
    return list
}


function insertionSort(list) {
    if(!list || !list.head) return list;
    let newList = list.head;
    let unsorted = list.head.next;
    newList.next = null;
    while (unsorted !== null) {
        let sortPointer = newList;
        let prev = null;
        let cur = unsorted;
        while(sortPointer !== null) {
            if(sortPointer.ele >= cur.ele) {
                unsorted = unsorted.next;
                if (prev === null) {
                    cur.next = sortPointer;
                    newList = cur;
                } else {
                    cur.next = sortPointer;
                    prev.next = cur;
                }
                break;
            } else {
                prev = sortPointer;
                sortPointer = sortPointer.next;
            }
        }
        if (sortPointer === null) {
            prev.next = cur;
            cur.next = null;
            unsorted = unsorted.next;
        }
    }
    list.head = newList;
}

function selectionSort(list) {
    if(!list || !list.head) return list;
    let outPointer = list.head;
    list.head = null;
    tail = null;

    while (outPointer !== null) {
        let prev = outPointer;
        let innerPointer = outPointer.next;
        let min = outPointer;
        let minPrev = null;
        while(innerPointer !== null) {
            if (innerPointer.ele < min.ele) {
                min = innerPointer;
                minPrev = prev;
            }
            prev = innerPointer;
            innerPointer = innerPointer.next;
        }
        if (minPrev === null) {
            outPointer = outPointer.next;
        } else {
            minPrev.next = min.next;
        }
        
        tail === null ? list.head = min : tail.next = min;
        tail === null ? tail = min : tail = tail.next;
        tail.next = null;
    }
    
    
}

module.exports = {
    bubbleSort,
    insertionSort,
    selectionSort
}