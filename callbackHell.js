//callback hell =callbacks arenested within  other callbacks to the  degree where
                    //the code is  difficult to  read.
                    //old pattern to handle synchronous functions
                    //use promises +async\await to avoid callback hell
  
                    
function task1(callback){
    setTimeout(() =>{
        console.log("task 1 complete");
        callback();
    } , 2000);
    
}

function task2(callback){
    setTimeout(() =>{
        console.log("task 2 complete");
        callback();
    },1000);
    
}

function task3(callback){
    setTimeout(() =>{
        console.log("task 3 complete");
        callback();
    },3000);
    
}
function task4(callback){
    setTimeout(()=>{
        console.log("task 4 complete");
        callback();
    },1500);
}  

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=> console.log("all tasks are complete"));

            
        })
    });
});

// callback within a callback


