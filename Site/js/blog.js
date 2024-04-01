
function AjouterCommentaire() {
    fetch(`http://localhost:3000/commentaire?id=${ObtenirIdBlog()}`,
    {
        method: 'POST',
        body: JSON.stringify({
            id: ObtenirIdBlog(),
            contenu: $("textarea").val(),
            datePublication: getFormattedDate(),
            publication : 'publication ' + ObtenirIdBlog()

        })
    }
    )
}




function ObtenirIdBlog() {
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');
    return id
}
function App()
{
    let blogId = ObtenirIdBlog()
    return <>
        <Header />
        <div className="text-center p-5 bg-dark">
        <img src="/Image/Logo.png" alt="" className="img-fluid " style={{ height: '400px', width: '100%' }}></img>
        </div>
        
         <BlogDetails >{blogId}</BlogDetails>
         <CommentList Id = {blogId}></CommentList>
         <AddComment ></AddComment>
        <Footer />
            </>
}

$(".ajoutCom").click(AjouterCommentaire)

ReactDOM.createRoot(document.querySelector('#root')).render(<App />);