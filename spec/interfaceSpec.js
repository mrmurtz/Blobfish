// expect(htmlfile).not(to(includes("the note we gave")))

describe("Interface", function(){

  var app;
  var htmlfile;

  it("injects html", function(){
    app = new App();
    makeOL();
    app.createNote("the note we gave");
    // console.log(document);
    // console.log("next thing is....")
    // console.log(document.getElementById('BlobList'));
    document.getElementById('BlobList').appendChild(addLi());
    updateHomeDisplay();
    // htmlfile = readTextFile("http://127.0.0.1:8125/")
    htmlfile = html2text(htmlfile);
    expect(htmlfile).to(includes("the note we gave"));
  });




});

function html2text(html) {
    var tag = document.createElement('div');
    tag.innerHTML = html;

    return tag.innerText;
}

function makeOL() {
  var list = document.createElement('ol');
  list.setAttribute("id", "BlobList");
  document.getElementById('uiList').appendChild(list);
}

//
// function readTextFile(file)
// {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 var allText = rawFile.responseText;
//                 alert(allText);
//             }
//         }
//     }
//     rawFile.send(null);
// }
