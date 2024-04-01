function BlogCard( Publication ) {
    
    return  <>
        <div className=" border border-secondary col-8 col-md-3  m-5  " >
            <a href={`blog.html?id=${Publication.id}`}><img src="/Image/Logo.png" alt="" className=" card-img-top  p-3 d-flex "></img></a>
            <h2 className = "text-center bg-secondary bg-opacity-50 m-3 ">{Publication.titre}</h2>
            <p className="text-center p-3">{Publication.contenu}</p>
        </div>
    </>
}