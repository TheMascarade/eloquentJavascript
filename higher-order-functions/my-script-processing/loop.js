function loop(value, test, update, body) {
    let val = value;
    while (test(val)) {
        body(val);
        val = update(val);
    }
}

loop(5, n => n > 0 , n => n -= 1, console.log)
