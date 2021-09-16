import { choice, remove } from './helpers';
import fruits from './foods'

let fruit;
console.log(`I would like to have one ${fruit = choice(fruits)},please. `);
console.log("Here you go:", fruit);
console.log("Delicious! May I have another one?");
remove(fruits, fruit);
console.log(`I am sorry, we're all out. We have ${fruits.length}  left.`)