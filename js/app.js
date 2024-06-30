import Layers from "./core/Layers.js";

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let layers = new Layers();
layers.add(0,'center');
console.log(layers.get());