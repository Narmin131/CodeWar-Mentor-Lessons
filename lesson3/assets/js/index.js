// LocalStorage, Session Storage

// SetItem
// GetItem
// RemoveItem
// Clear ALL

const myHeading = document.querySelector('h1').innerHTML

// key + value
localStorage.setItem("h1", myHeading)
localStorage.setItem('myAge', 18)
localStorage.setItem('melumat', true)

const myParagraph = document.querySelector('p')


// key
myParagraph.innerHTML = localStorage.getItem("h1")

// 

localStorage.removeItem('products')

// localStorage.clear()

const myInfo = {
    name: 'Narmin',
    age : 20
}

const myArr = [12, 23, 56]

// JSON.stringfy()

localStorage.setItem('MyInfo', JSON.stringify(myInfo))
localStorage.setItem('MyArr', JSON.stringify(myArr))

// JSON.parse()

console.log(JSON.parse(localStorage.getItem('MyInfo')));
console.log(JSON.parse(localStorage.getItem('MyArr')));


