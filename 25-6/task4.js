const  fetchrequest = fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
const response = fetchrequest.then((response)=>{
    return response.json();
})

 fetchrequest.catch(err => { alert(`requrst error: ${err}`)})
 response.then((data) =>{
    writePosts(data);
})



 const container = document.getElementById("ml");
 function writePosts(data)
{
    let template =' ';
    data.forEach(g=> {
        template += `
        <div class ="op">
         <p> title: ${g.title}</p>
          <img src="${g.thumbnailUrl}" alt="">
          
         
        </div>`
        
    });
    container.innerHTML = template
} 