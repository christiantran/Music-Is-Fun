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
  <div class="col-sm-5 offset-1">
    <div class="card mb-5" style="width: 20rem">
      <div class="card-body">
      <img class="card-img-top" src="${song.albumArt}" alt="Card image cap">
      </div>
    </div>
  </div>
  <div class="col-sm-5">
    <div class="card text-right">
      <div class="card-body">
      <h2 class="card-text">Artist: ${song.artist}</h2>
      <h3 class="list-group-item mb-2">Title: ${song.title}</h3>
      <h5 class="card-title">collection: ${song.collection}</h5>
      <a href="https://www.apple.com/itunes/music/" class="btn btn-outline-danger" role="button" aria-pressed="true">price: $${song.price}</a>
      <div class="card-body">
    <audio controls controlsList="nodownload" src="${song.preview}"></audio>
  </div>
      </div>
    </div>
  </div>
</div>

  `
    }

    //$( "div" ).filter( document.getElementById( "unique" ) );
    //$( "div" ).filter( $( "#unique" ) );
    //$("p").filter(".intro")

    document.getElementById('songs').innerHTML = template
    console.log(results)
  }

//to pause music when another button is clicked
  window.addEventListener("play", function(evt)
{
    if(window.$_currentlyPlaying && window.$_currentlyPlaying != evt.target)
    {
        window.$_currentlyPlaying.pause();
    } 
    window.$_currentlyPlaying = evt.target;
}, true);


}