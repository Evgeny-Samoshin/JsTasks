import {listIPv4} from './listIP.js';

const uniqueIP = new Set(listIPv4).size;

console.log(uniqueIP);
