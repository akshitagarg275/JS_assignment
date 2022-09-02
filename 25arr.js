/*
25. In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of you shopping cart if it has not been already added
    - remove 'Honey' if you are allergic to honey
    - modify Tea to 'Green Tea'
*/

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('Meat')
console.log(shoppingCart)

if ( !shoppingCart.includes('sugar')){
    shoppingCart.splice(shoppingCart.length,0,'Sugar')
}

console.log(shoppingCart)

let is_allergic = true

if (is_allergic){
    let idx =  shoppingCart.indexOf('Honey')
    shoppingCart.splice(idx , 1)
}

console.log(shoppingCart)

let idx_of_tea = shoppingCart.indexOf('Tea')
shoppingCart.splice(idx_of_tea , 1 , 'Green Tea')
console.log(shoppingCart)