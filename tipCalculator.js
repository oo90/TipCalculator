const billInput = document.getElementById("billTotalInput")
const tipInput = document.getElementById("tipInput")
const numberOfPeopleDiv = document.getElementById("numberOfPeople")
const perPersonTotalDiv = document.getElementById("perPersonTotal")

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {
const bill = Number(billInput.value)
const tipPercentage = Number(tipInput.value) / 100
const tipAmount = bill * tipPercentage
const total = tipAmount + bill  
const perPersonTotal = total / numberOfPeople
perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}
/*to add coma in total amount: `$${perPersonTotal.toLocaleString("en-US")}` */
const increasePeople = () => {
numberOfPeople += 1
numberOfPeopleDiv.innerText = numberOfPeople
calculateBill()
}

const decreasePeople = () => {
 if (numberOfPeople <= 1) {
  // throw "hey, input whatever". you can use the throw as an alert message
 return
}
numberOfPeople -=1
numberOfPeopleDiv.innerText = numberOfPeople
calculateBill()
}