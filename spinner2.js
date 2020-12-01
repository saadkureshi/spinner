
let arr = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
let x = 0;

for (let char of arr) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, x)
  x += 200;
}
