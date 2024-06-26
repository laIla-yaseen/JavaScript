const  fetchrequest = fetch("https://jsonplaceholder.typicode.com/albums?userId=1")
const response = fetchrequest.then((response)=>{
    return response.json();
})

 fetchrequest.catch(err => { alert(`requrst error: ${err}`)})
 response.then((data) =>{
    writePosts(data);
})



 const container = document.getElementById("mo");
 function writePosts(data)
{
    let template =' ';
    data.forEach(m=> {
        template += `
        <div class ="op">
         <p> title:${m.title}<p>
         
        </div>`
        
    });
    container.innerHTML = template
} 