function BlogDetails(Publication)
{
    let [Publications, setPublications] = React.useState([]);

    React.useState(() =>{ async function obtenirBlog() {
   
    fetch(`http://localhost:3000/blog?id=${Publication.children}`)	
    .then(reponse => reponse.json())    
    .then(json => {setPublications(json[0]); })
    }   obtenirBlog();
    }, [])
    

    if (Publications == null)
    {
        return <h1 className="text-center">Publication non valide</h1>
    }
    else
    {
        return <>
        <div className=" container d-flex  flex-column align-self-center ">
            <h1 className="text-center">{Publications.titre}</h1> 
            <p className="text-center">{Publications.auteur}</p>
            <p className="text-center">{Publications.datePublication}</p>
        </div>
        <div className="text-center container bg-dark w-25">
        <img src="/Image/Logo.png" alt="" className="img-fluid "></img>
        </div>
        <div className="ContenuBlog container d-flex  flex-column align-self-center">
            <h3 className="text-center">Caption</h3> 
            <p className="text-center">{Publications.contenu}</p>
        </div>
    </>
    }


}

function obtenirBlog() {
   
    fetch(`http://localhost:3000/blog?id=${ObtenirIdBlog()}`)	
    .then(reponse => reponse.json())    
    .then(json => {
        $(".InfoBlog").append(`<h1 class="text-center">${json[0].titre}</h1> 
        <p class="text-center">${json[0].auteur}</p>
        <p class="text-center">${json[0].datePublication}</p>`)
        $(".ContenuBlog").append(`<h3 class="text-center">Caption</h3> <p class="text-center">${json[0].contenu}</p>`)
    })
    .catch(error => console.log(error))

}

