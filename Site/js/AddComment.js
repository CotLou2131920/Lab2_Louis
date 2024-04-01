function AddComment() {
    

    return <>
     <div className="ContenuBlog container d-flex  flex-column align-self-center">
    </div>
    <div className="container d-flex  flex-column align-self-center " style={{height: "300px"}}>
        <h3 className="">Commentaires</h3>
        <textarea name=""  id="" cols="30" rows="10"></textarea>
        <button type="button" className="ajoutCom btn btn-primary mt-3 align-self-end " onClick={AjouterCommentaire}>Envoyer</button>
    </div>
    </>
}


// Obtenez la date actuelle au format JJ/MM/AAAA
function getFormattedDate() {
  const now = new Date();
  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Les mois sont indexés à partir de zéro
  const year = now.getFullYear();
  return `${day}/${month}/${year}`;
}

