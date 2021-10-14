const url = 'http://localhost:3000/posts';

fetch(url)
.then(res => res.json())
.then(data=>{
    console.log(data[0]);
    document.getElementById("algo-text").innerText = `Do you know the Time Complexity of ${data[0].title} ?` 
    document.getElementById("avg-time-comp-text").innerText = data[0].avg_time
    document.getElementById("best-time-comp-text").innerText = data[0].best_time
})
.catch(err => err);

document.getElementById("next").addEventListener("click", myFunction);

function myFunction() {
    fetch(url)
    .then(result=>{
    return result.json();
    })
    .then(data=>{
        console.log(data[0]);
        document.getElementById("algo-text").innerText = `Do you know the Time Complexity of ${data[0].title} ?` 
        document.getElementById("avg-time-comp-text").innerText = data[0].avg_time
        document.getElementById("best-time-comp-text").innerText = data[0].best_time
    })

}






