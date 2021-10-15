

const url = 'https://stark-plateau-00189.herokuapp.com/posts';

fetch(url)
.then(res => res.json())
.then(data=>{

    // console.log(data[0]);
    // if(data[0].note){
    //     document.getElementById("note-text").innerText = `NOTE : ${data[0].note}` 
    // }
    // else{
    //     document.getElementById("note-text").style.visibility = "hidden"; 
    // }
    document.getElementById("algo-text").innerText = `Do you know the Time Complexity of ${data[0].title} ?` 
    document.getElementById("avg-time-comp-text").innerText = data[0].avg_time
    document.getElementById("best-time-comp-text").innerText = data[0].best_time
    document.getElementById("worst-time-comp-text").innerText = data[0].worst_time
    document.getElementById("loader").style.visibility = "hidden";
    document.getElementById("main-container").style.visibility="visible"
     
})
.catch(err => err);

document.getElementById("next").addEventListener("click", myFunction);

function myFunction() {
    fetch(url)
    .then(result=>{
    return result.json();
    })
    .then(data=>{
        // console.log(data[0]);
        // if(data[0].note){
        //     document.getElementById("note-text").innerText = `NOTE : ${data[0].note}` 
        // }
        // else{
        //     document.getElementById("note-text").style.visibility = "hidden";
        //     // document.getElementById("note-text").style.visibility = "hidden";
        // }
        document.getElementById("algo-text").innerText = `Do you know the Time Complexity of ${data[0].title} ?` 
        document.getElementById("avg-time-comp-text").innerText = data[0].avg_time
        document.getElementById("best-time-comp-text").innerText = data[0].best_time
        document.getElementById("worst-time-comp-text").innerText = data[0].worst_time
    })

}






