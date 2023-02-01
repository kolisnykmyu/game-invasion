const Player = require('./js/Player');
import css from './css/style.css';

const root = document.querySelector('#root');

const canvas = document.createElement('canvas');
root.append(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const paintContext = canvas.getContext('2d');

const player = new Player();
player.draw;

let z = player.render();
console.log(z);
