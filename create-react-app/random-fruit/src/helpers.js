function choice(fruits) {
    return fruits[Math.floor(Math.random() * fruits.length)];
}

function remove(fruits, fruit) {
    let index = fruits.indexOf(fruit);
    if (index > -1)
        return fruits.splice(index, 1);
    else
        return undefined;
}

export { choice, remove };