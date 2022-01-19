function greet(cb) {
    setTimeout(() => {
        cb('Hello World')
    }, 3000);
}

greet((res) => {
    console.log(res);
});
console.log('___________________');