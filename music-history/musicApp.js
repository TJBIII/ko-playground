function Track (data) {
  this.title = ko.observable(data.title);
  this.artist = ko.observable(data.artist);
  this.genre = ko.observable(data.genre);
}


var MusicViewModel = function (startingTracks) {
  var self = this;

  self.tracks = ko.observableArray(startingTracks);

  self.trackTitle = ko.observable();
  self.trackArtist = ko.observable();
  self.trackGenre = ko.observable();

  self.availableGenres = ['Rap', 'Rock', 'Pop', 'Country', 'Electronic', 'Blues', 'Jazz'];

  self.addTrack = function () {
    if (self.trackTitle() != "" && self.trackArtist() != ""){
      var newTrack = new Track({
        title: self.trackTitle(),
        artist: self.trackArtist(),
        genre: self.trackGenre()
      });

      self.tracks.push(newTrack);

      //reset fields
      self.trackTitle("");
      self.trackArtist("");
    }
  }

  self.removeTrack = function (track) {
    self.tracks.remove(track)
  }

}


var tracks = [{title: 'Juicy', artist: 'Notorious BIG', genre: 'Rap'},
              {title: 'Doomsday', artist: 'MF DOOM', genre:'Rap'},
              {title: 'Born Under A Bad Sign', artist: 'Albert King', genre:'Blues'}
             ];

ko.applyBindings(MusicViewModel(tracks));