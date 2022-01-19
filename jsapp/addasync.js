function add(a, b, cb) {
    setTimeout(() => {
        cb(a + b);
    });
}

add(10, 20, (res) => {
    console.log(res);
});
console.log('________________');