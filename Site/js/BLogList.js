function BlogList()
{
    let [Publications, setPublications] = React.useState([]);

    React.useState(() => {
        async function obtenirBlog() {
   
            await fetch('http://localhost:3000/blog')
            .then(reponse => reponse.json())    
            .then(json => setPublications(json)) 
            }
        obtenirBlog();
    }, [])
    
    return <>
        <div className="row justify-content-center  ">
        {Publications.map((Publication) => <BlogCard key={Publication.id} {...Publication}></BlogCard>)}
        </div>
        
        </> 
    
}