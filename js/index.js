// Your code goes here


// # 1 Welcome Alert @ clicking on header tag

document.querySelector("body > header > div > h1").addEventListener("click", function(event){
   return alert("Welcome To The Fun Bus Website!");
})


// #2 color change @ rezize the frame 

function changeBackground(event1) {
    document.body.style.backgroundColor = 'yellow'
}
window.addEventListener('resize', changeBackground);

// #3 page leave alert @keypush

document.addEventListener("keydown", function(event){
    return alert("Are you sure you want to leave this website?!");
 })

 // #4 double click on h2 makes color change

 const h2color = document.querySelector("body > div > section:nth-child(2) > div.text-content > h2");

    h2color.addEventListener("dblclick", function(event){
    
    h2color.style.color = "lightblue";

   }
 );

 // #5

   const welcomeh2 = document.querySelector("body > div > header > h2");

   welcomeh2.addEventListener("mouseover", function(event){
   
   welcomeh2.style.color = "yellow" 
   } 
);
