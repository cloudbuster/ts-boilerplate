import { Sum } from './Sum';
import './image-viewer';

let sum = new Sum(10, 10);

console.log(sum.sum());

sum.setA(12);
sum.setB(12);

console.log(sum.sum());