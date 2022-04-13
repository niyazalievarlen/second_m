const obj = {
    name1: '*',
    name2: '**',
    name3: '***',
    name4: '****',
    name5: '*****',
    name6: '******',
    name7: '*******',
}
for(let name in obj) {
    console.log(obj[name])
}

for(let i=1; i <= 100;i++){
    if (i % 15 === 0) {
    console.log(i, "FizzBuzz");
} else if (i % 3 === 0) {
    console.log(i, "Fizz");
} else if (i % 5 === 0) {
    console.log(i, "Buzz");
} else {
    console.log(i)
}
}