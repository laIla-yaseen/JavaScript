const  fetchrequest = fetch("https://jsonplaceholder.typicode.com/todos")
const response = fetchrequest.then((response)=>{
    return response.json();
})

 fetchrequest.catch(err => { alert(`requrst error: ${err}`)})
 response.then((data) =>{
    writePosts(data);
})



 const container = document.getElementById("lo");
 function writePosts(data)
{
    let template =' ';
    if(template===true){
        
    data.forEach(m=> {
        template += `
        <div class ="op">
         <p> title:${m.title}<p>
         <input checked>${completed}</inpu>
        </div>`
        
    });
    }
    container.innerHTML = template
} 
//let template =' ';
//data.forEach(m=> {
  //  template += `
    //<div class ="op">
     //<p> title:${m.title}<p>
     //<input checked>$</inpu>
    //</div>`
    
//});