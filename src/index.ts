import { Permuter } from './permuter';

const permuter = new Permuter();

const constantCount = permuter.calc(5, 4);
const totalCount = permuter.calc(6, 4) * 2;

console.log(totalCount - constantCount);
