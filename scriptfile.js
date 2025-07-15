function getRandomInt(max) {
    const randomnum = Math.floor(Math.random() * max) +1;
  document.getElementById("demo").innerText = randomnum;
  return randomnum
}

console.log(getRandomInt(6));
// Expected output: 0, 1 or 2

console.log(4<6)
console.log(4>6)
console.log(getRandomInt(6));
console.log(getRandomInt(6));
console.log(getRandomInt(6));
console.log(getRandomInt(6));

if (getRandomInt(6) > 6 ) { throw new Error('Test failed');}
console.log('All tests passed.');
if (getRandomInt(6) < 1 ) { throw new Error('Test failed');}
if (getRandomInt(10) > 10) { throw new Error('Test failed');}
console.log('All tests passed.');
if (getRandomInt(10) < 1 ) { throw new Error('Test failed');}

