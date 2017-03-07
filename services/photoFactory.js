angular.module("appPhoto").factory("photoFactory", function ()
{
  var photos = [
    { id: 1,  nom: ' img1' ,  src: 'dist/img/photo/img1.jpg' } ,
    { id: 2,  nom: ' img2' ,  src: 'dist/img/photo/img2.jpg' } ,
    { id: 3,  nom: ' img3' ,  src: 'dist/img/photo/img3.jpg' } ,
    { id: 4,  nom: ' img4' ,  src: 'dist/img/photo/img4.jpg' },
    { id: 5,  nom: ' img4' ,  src: 'dist/img/photo/img5.jpg' },
    { id: 6,  nom: ' img4' ,  src: 'dist/img/photo/img6.jpg' }
  ] ;
  var getPhotos = function()
  {
    return photos;
  } ;
  

  var addClient = function(client)
  {
    var client = prepareClient(client) ;
    clients. push({ id: client. id,  nom: client. nom,  prenom: client. prenom} ) ;
  } ;
  function prepareClient(client)
  {
    client. id = clients.length + 1;
    return client;
  }
  return {
    getPhotos:  getPhotos,
    addClient:  addClient
  } ;
}) ;