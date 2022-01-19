//ES6

function add(a, b) {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0)
                reject('Invalid Nos..');
            else
                resolve(a + b);
        }, 3000)
    });
    return p;
}
add(10, 20).then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});
console.log('______________');