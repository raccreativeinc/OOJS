const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function(){
        console.log('Woof!');
    }
}

ernie.age = 2;
ernie['age'] = 2;

ernie.color = 'black';

console.log(ernie);
