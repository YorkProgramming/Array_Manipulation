//Push Front

function pushFront(arr, val) {
    for (let i = arr.length - 1; i >= 0; i--) {             // Shifts all elements to the right by one position
    arr[i + 1] = arr[i];                            // Starts at the end of the array and work backwards
    }
    arr[0] = val;                                // Sets the first element to the value passed in    

    return arr;
}

console.log(pushFront([5,7,2,3], 8));
console.log(pushFront([99], 7));



//Pop Front

function popFront(arr) {
    const val = arr[0];

    for (let i = 0; i < arr.length - 1; i++) {      // shifts all to the left by one
        arr[i] = arr[i + 1];
    }
    
    arr.length = arr.length - 1;                     // removes the last element
    console.log(val + " returned, with " + arr );
    
    return val;
}

console.log(popFront([0,5,10,15]));
console.log(popFront([4,5,7,9]));




//Insert At

function insertAt(arr, idx, val) {
    for (let i = arr.length - 1; i >= idx; i--) {
        arr[i + 1] = arr[i];                
    }
    
    arr[idx] = val;                        // sets index to value we passed in

    return arr;
}


console.log(insertAt([100,200,5], 2, 311));
console.log(insertAt([9,33,7], 1, 42));