const washCar = document.getElementById("wash-car")
const mowLawn = document.getElementById("mow-lawn")
const pullWeeds = document.getElementById("pull-weeds")
const invoice = document.getElementById("invoice-genarator")
const invoiceTotal = document.getElementById("invoice-total")
const reset = document.getElementById("invoice-footer")

const serviceItems = [
  { service: "Wash Car", cost: "10" },
  { service: "Mow Lawn", cost: "20" },
  { service: "Pull Weeds", cost: "30" },
]

washCar.addEventListener("click", () => {
  invoice.innerHTML += `
  <div class="dummy"> 
  <div> ${serviceItems[0].service} </div>
  <div> $${serviceItems[0].cost} </div>
  </div>
    `
  washCar.classList.add("unselect")
})

mowLawn.addEventListener("click", () => {
  invoice.innerHTML += `
  <div class='dummy'> 
  <div> ${serviceItems[1].service} </div>
  <div> $${serviceItems[1].cost} </div>
  </div>
  
  `
  mowLawn.classList.add("unselect")
})
pullWeeds.addEventListener("click", () => {
  invoice.innerHTML += `
  <div class='dummy'> 
  <div> ${serviceItems[2].service} </div>
  <div> $${serviceItems[2].cost} </div>
  </div>
  `
  pullWeeds.classList.add("unselect")
})

invoiceTotal.textContent = "$" + 0

reset.addEventListener("click", () => {
  console.log("reset")
})
