function CommentList(Publication)
{
    let [Commentaires, setCommentaires] = React.useState([]);

    React.useState(() => {
        async function obtenirCommentaires() {
   
            await  fetch(`http://localhost:3000/commentaire?id=${Publication.Id}`)
            .then(reponse => reponse.json())     
            .then(json => setCommentaires(json)) 
            }
            obtenirCommentaires();
    }, [])
    
    return <>
        <div >
        {Commentaires.map((Commentaires) => <Comment key={Commentaires.id} {...Commentaires}></Comment>)}
        </div>
        
        </> 
    
}

function obtenirCommentaire() {
   
    fetch(`http://localhost:3000/commentaire?id=${ObtenirIdBlog()}`)
    .then(reponse => reponse.json())    
    .then(json => {
        json.forEach(element => {
            $(".commentaires").append(`<div class="container d-flex   align-self-center ">
        <img src="/Image/Profil.png" alt="" class="img-fluid col-1 com" >
        <p class=" col-11 align-self-center m-3">${element.contenu}</p>
        </div>`)
        })
        
    })
    .catch(error => console.log(error))

}
