export function getInsertionSortAnimations(array) {
    const animations = []
    let value = 0;
    let j = 0;

    for (let i = 1; i < array.length; i++) {

        value = array[i];
        j = i;
        
        while (j > 0 && array[j - 1] > value) {
            animations.push([j, j - 1]);
            animations.push([j, j - 1]);
            animations.push([j, array[j - 1]]);
            array[j] = array[j - 1];
            j = j - 1;
        }
        array[j] = value;
        animations.push([j, j])
        animations.push([j, j])
        animations.push([j, value])
    }

    return animations;
}
