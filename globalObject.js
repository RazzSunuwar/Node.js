let time = 0;

// setInterval(function(){
//     time += 2
//     console.log(time + ' Seconds have passed')
// }, 2000);
// // Message will be appear in every 2 seconds in terimal while running app.

let timer = setInterval(function(){
    time += 2
    console.log(time + ' seconds have passed');
    if(time >= 5){
        clearInterval(timer);
    }
}, 3000);

// Run 2,4 & 6 on console

console.log(__dirname); //this will tell the location of present file
console.log(__filename); //this will show the directory and files
