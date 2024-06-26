const  fetchrequest = fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
const response = fetchrequest.then((response)=>{
    return response.json();
})

 fetchrequest.catch(err => { alert(`requrst error: ${err}`)})
 response.then((data) =>{
    writePosts(data);
})



 const container = document.getElementById("jo");
 function writePosts(data)
{
    let template =' ';
    data.forEach(k=> {
        template += `
        <div class ="op">
         <h4>name: ${k.name}</h4>
         <p>email: ${k.email}</p>
         <p>body: ${k.body}</p>
        </div>`
        
    });
    container.innerHTML = template
} 