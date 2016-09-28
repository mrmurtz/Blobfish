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
    // headline gets last notes abbr headline
    var headline = app.mapNotes().slice(-1)[0];
    // index is the position of that headline ^
    var index = app.mapNotes().lastIndexOf(headline);
    // creates <li id="headline-0"></li>
    item.setAttribute("id", "headline-" + index);
    // append the actual string to the item
    item.appendChild(document.createTextNode(headline));
    console.log(item);
    document.getElementById('full-view').appendChild(addArticle(index));
    addLiListener(item, index);
    return item;
  }

  function addArticle(index) {
    var article = document.createElement('p');
    article.setAttribute("style", "display:none");
    article.setAttribute("id", "article-" + index);
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
