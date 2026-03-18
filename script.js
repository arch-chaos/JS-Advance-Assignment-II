// const para=document.querySelector("p")
// para.innerText="Hello Shubham"
// para.style.backgroundColor="Black"
// para.style.color="White"

// Selecting elements by class name

// const paras=document.getElementsByClassName("para")
// paras[0].innerText="Hello!"
// paras[0].innerHTML="<h1 style='color:red; background-color:Thistle;'>WOOWWWW</h1>"
// paras[1].style.color='Blue'
// Returns an array of elements if there are multiple.

// Selecting elements by id

// const para=document.getElementById("heading")
// para.innerText="MAIN SHUBHAM HUN"
// para.innerHTML="<p id='heading' style='color:Blue;background-color:Thistle;'>MAIN SHUBHAM HUN</p> " 


// Returns a new array
// let arr=[1, 2, 3, 4, 5, 6 ,7]
// const newarr=arr.map((arr)=>2*arr)
// console.log(newarr)    OUTPUT=> Array(7) [ 2, 4, 6, 8, 10, 12, 14 ]


// Doesn't return a new array
// let arr=[1,2,3,4,5,6,7]
// arr.forEach((ele)=>console.log(arr+=2))



// function first() {
    // second()
// }
// function second() {
    // third()
// }
// function third() {
    // console.trace()
// }
// first()

// let val=40

// function calc(){
//     console.log(val)
//     let val=100
// }

// calc()
// setTimeout(() => {
//     console.log("Hello after 5 seconds")
// }, 5*1000);

// setInterval(() => {
//     console.log("Hello after every 2 seconds")
// }, 2*1000);

// const timerID = setInterval(() => {"set interval"}, 1000);

// const timerID2 = setTimeout(() => {
//     clearInterval(timerID);
// }, 10000);

// const name = document.querySelector("#name")
// const btn = document.querySelector("#btn")
// const list = document.querySelector(".list")

// btn.addEventListener("click", () => {
//     if (name.value == "") {
//         alert("Please enter a valid name")
//         return;
//     }
//     const li = document.createElement("li")
//     const dlt = document.createElement("button")
//     li.innerText = name.value;
//     dlt.innerText = "Delete"
//     dlt.addEventListener("click", () => {
//         list.removeChild(li)
//     })
//     li.appendChild(dlt)
//     list.appendChild(li)
//     name.value = ""
//     })

// function print(num){
//     setTimeout(() => {
//         console.log("Inside print")
//         num()
// } ,2000)}

// function sample(){
//     console.log("Inside callback")
// }

// print(sample)
// console.log("Starting Homework")

// setTimeout(() => {
//     console.log("Homework done");
//     console.log("Starting dinner...");

//     setTimeout(() => {
//         console.log("Dinner done");
//         console.log("Getting ready to go out...");

//         setTimeout(() => {
//             console.log("Going to playground");
//         }, 1000);
//     }, 2500);
// }, 2000);


// function finishHomework(callback){
//     console.log("Starting homework...");
//     setTimeout(() => {
//         console.log("Homework finished");
//         callback()
//     }, 2000);
// }

// const p = new Promise((resolve, reject) => {
//     let done = true;
//     setTimeout(() => {
//         if (done) {
//             resolve("Homework is done");
//         } else {
//             reject("Homework is not done");
//         }
// }, 2000);});
// p.then((data) => {
//     console.log(data);
// }).catch((er) =>{
//     console.log(er);
// }).finally(() => {
//     console.log("Finally back")
// })

// function donehomwwork(){
//     const p = new Promise((res , rej) => {
//         let done = true;
//         setTimeout(() => {
//             if (done) {
//                 console.log("Homework completed");
//                 res("Homework is done");
//             }else {
//                 rej("Home not completed");
//             }
//         }, 2000)
//     })
//     return p
// }

// function eatDinner(){
//     const p = new Promise((res, rej) => {
//         let done = true;
//         setTimeout(() => {
//             if (done) {
//                 console.log("Dinner completed");
//                 res("Dinner is done");
//             } else {
//                 rej("Dinner not completed");
//             }
//         }, 2000)
//     })
//     return p
// }

// function goToPlayground(){
//     const p = new Promise((res, rej) => {
//         let done = true;
//         setTimeout(() => {
//             if (done) {
//                 console.log("Going to playground");
//                 res("Going to playground");
//             } else {
//                 rej("Not going to playground");
//             }
//         }, 2000)
//     })
//     return p
// }

// donehomwwork().then((data) => {
//     console.log(data);
//     return eatDinner();
// }).then((data) => {
//     console.log(data);
//     return goToPlayground();
// }).then((data) => {
//     console.log(data);
// }).catch((er) => {
//     console.log(er);
// }).finally(() => {
//     console.log("Go to sleep")
// })

// function orderFood(){
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log("Food Ordered");
//             res("food is ordered")
//         }, 2000)
//     })
// }

// function prepareFood(){
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log("Food Prepared");
//             res()
//         }, 3000)
//     })
// }

// function deliverFood(){
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log("Food Delivered");
//             res()
//         }, 4000)
//     })
// }

// async function foodOrder(){
//     const data = await orderFood()
//     console.log(data)
//     await prepareFood()
//     await deliverFood()
// }

// foodOrder()
// console.log("First line")
// try{
//     let a = 10
//     console.log(a)
// } catch (error) {
//     console.log("Error caught: " + error)
// }
// console.log("Last line")

// try{
//     let age = 16
//     if (age < 18) {
//         throw new Error("Age must be at least 18")
//     }   
// }catch(e){
//     console.error("Error caught: " + e)
// } 
// function* generator(){
//     yield 1
//     yield 2
//     yield 3
// }   
// const gen = generator()
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// function* generator2(){
//     for(let i=1; i<=5; i++){
//         yield i
//     }
// }
// const gen2 = generator2()
// console.log(gen2.next())
// console.log(gen2.next())
// console.log(gen2.next())
// console.log(gen2.next())
// console.log(gen2.next())
// console.log(gen2.next()) 

// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }   
//     }
// }
// console.log(add(2)(3)(4))

const form = document.querySelector("form");
const API_KEY = "9257fcd585c62e0d50b0906898e4b24a";
const weatherInfo = document.querySelector(".info");
const searchHistory = document.querySelector(".historybtn");

let cityHistory = JSON.parse(localStorage.getItem("cityHistory")) || []

async function getData(searchCity){
    if(searchCity){
        try{
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`)
            const data = await res.json()
            if(data.cod == 200){
                weatherInfo.innerHTML = `<p>City: ${data.name}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>`
            } else {
                weatherInfo.innerHTML = `<p>City not found. Please try again.</p>`
            }
            console.log("City: " + data.name)
            console.log("Temperature: " + (data.main.temp.toFixed(1)) + "°C")
            console.log("Weather: " + data.weather[0].description)
            console.log("Humidity: " + data.main.humidity + "%")
            console.log("Wind Speed: " + data.wind.speed + " m/s")
            let cityHistory = JSON.parse(localStorage.getItem("cityHistory")) || []
            cityHistory.push(searchCity)
            localStorage.setItem("cityHistory", JSON.stringify(cityHistory))
        } catch (error) {
            console.error("Error fetching weather data: " + error)
        }
    } else {
        alert("Please enter a city name")
    }
}

form.addEventListener("submit" , async function(event) {
    event.preventDefault();
    const searchCity = city.value;
    console.log(searchCity)
    await getData(searchCity)
});

function displayHistory(){
    const history = JSON.parse(localStorage.getItem("cityHistory")) || []
    searchHistory.innerHTML = ""
    history.forEach(city => {
        const btn = document.createElement("button")
        btn.innerText = city
        btn.addEventListener("click", () => {
            document.querySelector("#city").value = city
            form.dispatchEvent(new Event("submit"))
        })
        searchHistory.appendChild(btn)
    })
}