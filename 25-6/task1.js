const  fetchrequest = fetch("https://jsonplaceholder.typicode.com/posts")
const response = fetchrequest.then((response)=>{
    return response.json();
})

 fetchrequest.catch(err => { alert(`requrst error: ${err}`)})
 response.then((data) =>{
    writePosts(data);
})



 const container = document.getElementById("do");
 function writePosts(data)
{
    let template =' ';
    data.forEach(e=> {
        template += `
        <div class ="op">
         <h3>titale: ${e.title}</h3>
         <p>body: ${e.body}</p>
        </div>`
        
    });
    container.innerHTML = template
} 
     
     