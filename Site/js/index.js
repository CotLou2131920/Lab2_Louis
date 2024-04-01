



function ajouterBlog() {
    fetch('http://localhost:3000/blog',
    {
        method: 'POST',
        body: JSON.stringify({
            titre: $("input").val(),
            auteur: $(".auteur").val(),
            contenu: $("textarea").val(),
            datePublication: getFormattedDate(),

        })
    })
}


// Obtenez la date actuelle au format JJ/MM/AAAA
function getFormattedDate() {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Les mois sont indexés à partir de zéro
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  }

  

  $(".ajoutBlog").click(ajouterBlog)



  function App()
  {
      return <>
           <Header />
           <section>
            <form action="/search" method="get" className="">
                <div className="row w-100">
                    <div className="col-8 col-md-6 recherche">
                        <input type="submit" value="Search" className="col-4 col-md-2" />
                        <input type="text" name="search" placeholder="" className="col-7 col-md-9" />
                    </div>
                    <div className="col-8 d-flex text-center col-md-6 trier">
                        <label className="col-8 col-md-6">Trier par :</label>
                        <select name="dropdown" className="col-10 col-md-6">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                </div>
            </form>
            </section>
           <BlogList/>
           <Footer />
      </>
  }
  

ReactDOM.createRoot(document.querySelector('#root')).render(<App />);
 