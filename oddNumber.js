function oddNumber(arr) {
    var str = arr[0].match(/\d+/gi).map(Number).filter(n => n%2);
    if (str.length === 0) {
        return "Odd numbers are missing"
    }
    return str;
};

// Input
console.log(oddNumber(["odd ones 13 15 81 even ones 8 6 4"]));