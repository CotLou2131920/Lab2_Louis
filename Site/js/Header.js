function Header()
{
    return<>
        <header>
        <h1>CEPI - Blog</h1>
    </header>
    <div className="d-flex">
    <img src="/Image/logo.png" alt="" className="col-2 logo"></img>
        <nav className="navbar navbar-expand-md menu ">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="col-12">
                    <a href="index.html" className="">Accueil</a> 
                    <a href="#" className="">Produits</a> 
                    <a href="#" className="">Panier</a> 
                    <a href="#" className="">Contact</a>
                    <img src="/Image/Profil.png" alt="" className=""></img>
                </div>
                </div>
            </div>
        </nav>
    </div>
    
    </> 
}