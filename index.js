/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

/* dom elements */ 
const input = document.getElementById("inputEl")
const convertBtn = document.getElementById("convertBtn")
const lengthResult = document.getElementById("lengthResult")
const volumeResult = document.getElementById("volumeResult")
const massResult = document.getElementById("massResult")

convertBtn.addEventListener("click", () => { 
    const val = input.value 

    if (isNaN(val)) { 
        lengthResult.innerHTML = `Not a number! Please retry`
        volumeResult.innerHTML = `Not a number! Please retry`
        massResult.innerHTML = `Not a number! Please retry`
    } else { 
        let lengthDOM = ``
        let volumeDOM = ``
        let massDOM = ``
    
        const feet = (3.281 * val).toFixed(3)
        const gallons = (0.264 * val).toFixed(3)
        const pounds = (2.204 * val).toFixed(3)
    
        const meter = (val / 3.281).toFixed(3)
        const liters = (val / 0.264).toFixed(3)
        const kg = (val / 2.204).toFixed(3)
    
    
        lengthDOM = `${val} meters = ${feet} feet | ${val} feet = ${meter} meters` 
        volumeDOM = `${val} liters = ${gallons} gallons | ${val} galloons = ${liters} liters` 
        massDOM = `${val} kilos = ${pounds} pounds | ${val} pounds = ${kg} kilos` 
    
        lengthResult.innerHTML = lengthDOM 
        volumeResult.innerHTML = volumeDOM 
        massResult.innerHTML = massDOM
    }
})