function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function draw(results) {

    var template = ''
    for (let i = 0; i < results.length; i++) {
      const song = results[i];
      template += `

  <div class="row">
  <div class="col-sm-6">
    <div class="card mb-5">
      <div class="card-body">
      <img class="card-img-top" src="${song.albumArt}" alt="Card image cap">
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card text-right">
      <div class="card-body">
      <h1 class="card-text">Artist: ${song.artist}</h1>
      <h3 class="card-title">Title: ${song.title}</h3>
      <h5 class="list-group-item">collection: ${song.collection}</h5>
      <h5 class="list-group-item">price: ${song.price}</h5>
    <div class="card-body">
    <audio controls><a href="#" class="card-link btn btn-danger">${song.preview}</a></audio>
  </div>
      </div>
    </div>
  </div>
</div>

  `
    }

    document.getElementById('songs').innerHTML = template
    console.log(results)
  }
}