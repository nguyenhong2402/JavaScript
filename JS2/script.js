function sumAvg(arr) {
    let total = arr.reduce(function (sum,value) {
        sum += value;
        return sum;
    }, 0);
    return total / (arr.length);
}
console.log(sumAvg([1, 3, 4, 2]));

// function findMax(arr) {
//     let n = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > n) {
//             n = arr[i];
//         }
//     }
//     return n;
// }
//===========================================================
function findMax(arr) {
    let max = arr.reduce((a,b) => {
        if (a < b) a = b;
        return a;
    });
    return max;
}
console.log(findMax([4, 984, 314, 567, 723, 5, 352, 325]));;
//===========================================================
function fibonacci(n) {
    let arr = [0,1];
    for (let i = 0; i < n; i++){
        if (i >= 2) {
            arr[i] = arr[i-1] + arr[i-2]
        }
    }
    return arr;
}

console.log(fibonacci(9));
//===========================================================
function removeFalsy(arr) {
    let arr2 = arr.filter((value) => {
        return Boolean (value) === true
    }
    );
    return arr2;
}

console.log(removeFalsy(["", 412, 12, true, false]));
//===========================================================
function sortByColumn(arr) {
    arr.sort((a, b) => {
        return a[0] - b[0]
    });
    return arr;
}
console.log(sortByColumn([[1,1,2,1],[9,3,3,3],[2,2,2,2],[4,4,4,4]]));

function double(arr) {
    let arr2 = arr.map(value => {
        return value ** 2;
    })
    return arr2;
} 

console.log(double([4, 5, 2, 1]));

function capitalize(str) {
    str.toLowerCase();

    let str2 = str.split(" ").map(x => {
        x = x.slice(0, 1).toUpperCase() + x.slice(1, x.length);
        return x;
    })
    let y = str2.reduce((a, b) => {
        
        return a + " " + b;
    })
    return y;
}
console.log(capitalize("fkaofko afokaofjkw awfokwao aw kwof"));

function randtem(arr) {
    let rd = arr.find((value, index) => {
    
        return (index == Math.floor(Math.random() * (arr.length-1)));
    })
    return rd;
}
console.log(randtem([3,24,12,312,4,142,4]));
