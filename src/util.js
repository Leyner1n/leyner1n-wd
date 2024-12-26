
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
};

const getItems = (range, callback, args = []) => {
    const items = [];
    range = range.length === 2 ? getRandomInt(...range) : range[0];

    for (let i = 0; i < range; i++) {
        if (args.length) {
            items.push(callback[0](...callback[1]) + args[0]);
        } else {
            items.push(callback[0](...callback[1] ?? []));
        }
    }

    return items;
};

const getRandomArrayElement = (array) => {
    return array[getRandomInt(0, array.length - 1)];
};

export {
    getRandomArrayElement,
    getRandomInt,
    getItems
};
