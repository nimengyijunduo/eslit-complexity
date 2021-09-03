(function test(num) {
    if (num > 1) {
        console.log('a');
    }
    for (let i = 0; i < 3; i++) {
        console.log('b');
    }
    switch (num) {
        case 1: 
            console.log('c');
            break;
        case 2:
            console.log('d');
            break;
        default:
            break;
    }
}());

((num) => {
    if (num > 1) {
        console.log('a');
    } else if (num > 1 && num < 3) {
        console.log('a');
    } else if (num > 3 && num < 5) {
        console.log('a');
    } else if (num > 6 && num < 7) {
        console.log('a');
    } else if (num > 8 && num < 9) {
        console.log('a');
    }
    for (let i = 0; i < 3; i++) {
        console.log('b');
    }
    switch (num) {
        case 1: 
            console.log('c');
            break;
        case 2:
            console.log('d');
            break;
        default:
            break;
    }
})();
