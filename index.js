// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(newCat) {
    cats.push(newCat);
}

function destructivelyPrependCat(newCat) {
    cats.unshift(newCat);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(cat) {
    return [...cats, cat];
}

function prependCat(cat) {
    return [cat, ...cats]
}

function removeLastCat() {
    return cats.slice(0, cats.length -1);
}

function removeFirstCat() {
    return cats.slice(1, cats.length)
}