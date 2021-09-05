let fruits = ['apple', 'orange', 'banana']
let veggies = ['kale', 'carrot', 'broccoli']
let breads = ['brioche', 'sourdough','focaccia']

// 2 Dimensional Array - Array of Arrays: 3 items below are also arrays
// outter array = row , each inner array is like a column 

//Outer Array Food 😎
let food = [fruits, veggies, breads]

console.table(food)

//How to grab Broccoli... Food Array Veggies index[1], Veggie Array Broccli is [2]

//Put Broccli on the Body of the Page 😎

/* let mainDiv = document.getElementById('main')

mainDiv.innerHTML = food[1][2] */

//grab the div with List

let list = document.getElementById('food')


//loop over the outer array
for (let i = 0; i < food.length; i++) {
    let listItem = document.createElement('li')
    listItem.append(food[i].join(', '))

    list.append(listItem)
    
}

let tableAppend = console.table(food)



