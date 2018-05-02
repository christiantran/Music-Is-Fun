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
    
    <div>
      <h3>title: ${song.title}</h3>
      <img src ="${song.albumArt}"</h3>
      <h3>artist: ${song.artist}</h3>
      <h3>collection: ${song.collection}</h3>
      <h3>price: ${song.price}</h3>
      <h3>preview: ${song.preview}</h3>
    </div>
    `
  }
  document.getElementById('songs').innerHTML = template
  console.log(results)
}
}