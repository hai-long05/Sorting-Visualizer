export function getBogoSortAlgorithm(array) {
    const animations = [];
    while (!isSorted(array)) {
        var a = Math.floor(Math.random() * array.length);
        var b = Math.floor(Math.random() * array.length);
        swap(array, a, b, animations)
    }
}


function swap(array, firstIdx, secondIdx, animations) {
    animations.push([firstIdx, array[secondIdx]]);
    animations.push([firstIdx, secondIdx]);
    animations.push([firstIdx, secondIdx]);
    animations.push([secondIdx, array[firstIdx]]);
    let tmp = array[firstIdx];
    array[firstIdx] = array[secondIdx];
    array[secondIdx] = tmp;
}

function isSorted(array){
    for (var i = 0; i < array.length - 1; i++){
        if (array[i] > array[i + 1]) return false;
    }
    return true
}