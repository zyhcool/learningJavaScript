const originArray = [4, 7, 0, 5, 2, 4, 7, 90, 9087, 4, 212, 4, 6, 9, 087, 4, 21, 3, 5, 8, 09, 8, 65, 3, 2, 24, 6, 7, 8, 0909, 6, 43, 24, 6, 87, 9, 0, 44];
console.log(originArray);

// 冒泡排序
function bubbleSort(arr) {
    let time = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            time++;
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    console.log(time);
    console.log(arr)
}
// bubbleSort(originArray);

// 选择排序
function selectionSort(arr) {
    let time = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            time++;
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    console.log(time);
    console.log(arr);
}
// selectionSort(originArray);

// 插入排序
function insertionSort(arr) {
    let time = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            time++;
            if (arr[j] === undefined) {
                break;
            }
            let temp = arr[i];
            if (arr[i] >= arr[j]) {
                arr.splice(i, 1);
                arr.splice(j + 1, 0, temp);
                break;
            } else if (j === 0) {
                arr.splice(i, 1);
                arr.splice(0, 0, temp);
                break;
            }
        }
    }
    console.log(time);
    console.log(arr);
}
insertionSort(originArray);

// 堆排序
{

}
