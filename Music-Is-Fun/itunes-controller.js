function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
function draw(results){

  var template = ''
  for(let i = 0; i < results.length; i++) {
    const song = results[i];
    template += `

<div class="card" style="width: 18rem;">
    
    <div class="card-body">
    <h1 class="card-text">Artist: ${song.artist}</h1>
      <img class="card-img-top" src="${song.albumArt}" alt="Card image cap">
      <h2 class="card-title">Title: ${song.title}</h2>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">collection: ${song.collection}</li>
      <li class="list-group-item">price: ${song.price}</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link btn btn-warning">preview: ${song.preview}</a>
    </div>
  </div>

  `
  }

  document.getElementById('songs').innerHTML = template
  console.log(results)
}
}