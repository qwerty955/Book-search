let nameFilter="ebooks";
function radios(nameFIL) {
    nameFilter=nameFIL;
}
function searchBooks (g){
    if (g!=""&&g!=" "){
        fetch("https://www.googleapis.com/books/v1/volumes?q="+g+"&filter="+nameFilter)
        .then(function (ev){
            return ev.json();
        })
        .then(function (e){
        for (let i=0;i<e.items.length;i++){
            let cr = document.createElement("div");
            let cr2 = document.createElement("img");
            let cr3 = document.createElement("a");
            let cr4 = document.createElement("a");
            cr.className="book";
            cr2.id=i;
            cr4.id="4"+i
            cr3.id="3"+i
            cr2.setAttribute("alt",i);
            cr.append(cr2);
            cr.append(cr3);
            cr.append(cr4)
            document.body.appendChild(cr);
            document.getElementById("3"+i).setAttribute("href",e.items[i].volumeInfo.previewLink);
            document.getElementById("3"+i).setAttribute("target","_blanck");
            document.getElementById("3"+i).innerHTML=e.items[i].searchInfo?.textSnippet;
            document.getElementById("4"+i).setAttribute("href",e.items[i].volumeInfo.canonicalVolumeLink);
            document.getElementById("4"+i).setAttribute("target","_blanck");
            document.getElementById("4"+i).innerHTML=e.items[i].volumeInfo.title;
            document.getElementById(i).setAttribute("src",e.items[i].volumeInfo.imageLinks.thumbnail);
        }
        
        })
    }
}