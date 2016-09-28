blobListen('#document').ready(function(){

  var app = new App();
  makeOL();

  blobListen('create').click(function(){
    var note = document.getElementById("new-note").value;
    app.createNote(note);
    document.getElementById('BlobList').appendChild(addLi());
    updateHomeDisplay();
  });

//  Helper functions follow

  function updateHomeDisplay() {
    uiHome();
  }

  function uiHome(){
    blobListen('uiCreateNote').show();
    blobListen('uiList').show();
  }

  function makeOL() {
    var list = document.createElement('ol');
    list.setAttribute("id", "BlobList");
    document.getElementById('uiList').appendChild(list);
  }

  function addLi() {
    // creates <li></li>
    var item = document.createElement('li');
    // headline gets last notes abbr headline as a string
    var headline = app.mapNotes().slice(-1)[0];
    // index is the position of that headline in the arrb_notes array^
    var index = app.mapNotes().lastIndexOf(headline);
    // creates <li id="headline-0"></li>
    item.setAttribute("id", "headline-" + index);
    // append the actual string to the item (which is the li)
    item.appendChild(document.createTextNode(headline));
    document.getElementById('full-view').appendChild(addArticle(index));
    addLiListener(item, index);
    return item;
  }

  function addArticle(index) {
    // article is <p></p>
    var article = document.createElement('p');
    // set style="display:none" in the <p>p</p>
    article.setAttribute("style", "display:none");
    // adds the id="article and the index number to the p"
    article.setAttribute("id", "article-" + index);
    // saving the full article we want in fullNote var
    var fullNote = app.notes[index];
    article.appendChild(document.createTextNode(fullNote));
    var button = createCloseBtn();
    article.appendChild(button);
    addCloseListener(button, index);
    return article;
  }

  function createCloseBtn() {
    var close = document.createElement("input");
    close.setAttribute("id", "close");
    close.setAttribute("type", "submit");
    close.setAttribute("value", "close");
    return close;
  }

  function addLiListener(item, index) {
    item.addEventListener('click', function(){
      blobListen('container').hide();
      blobListen('article-'+index).show();
    }, false);
  }

  function addCloseListener(close, index) {
    close.addEventListener('click', function(){
      blobListen('container').show();
      blobListen('article-'+index).hide();
    }, false);
  }

});
