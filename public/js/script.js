const url='http://localhost:3000/search?q=';
const searchInput=document.getElementById('search');
searchInput.addEventListener('keyup',search)

async function search(){
    let text=searchInput.value;
    const res=await fetch(url+text);
    const data=await res.json();
    console.log(data);
    let container=document.getElementById('movies');
    container.innerHTML='';
    data.forEach( movie => {
        let div=document.createElement('div');
        div.innerHTML=`<h5>${movie.name}</h5>
        <ul>
            <li>Rating: ${movie.rating}</li>
            <li>Date: ${movie.date} </li>
            <li>Watched: ${movie.watched}</li>
        </ul>`;
        container.appendChild(div);
    });
}

