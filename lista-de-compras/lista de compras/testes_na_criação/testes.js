let testList = [
    {
        fruitName: 'Banana'
    },
    {
        fruitName: 'pêra'
    },
    {
        fruitName: 'maçã'
    }
];

// console.log(testList.filter(test => test.fruitName !== 'pêra'));
console.log(testList.map(fruits => fruits.fruitName == 'Banana'))
