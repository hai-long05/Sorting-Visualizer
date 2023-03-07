export function getBubbleSortAlgorithm(array) {
    const animations = [];
    let n = array.length;
    let swapped = false;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                animations.push([i, i + 1]);
                animations.push([i, i + 1]);
                swap(array, i, i + 1, animations);
                swapped = true;
            }
        }
        n = n - 1
    } while (swapped);

    return animations
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

// 3, 5, 1, 8, 3, 6