<html>
<head>
  <meta charset="UTF-8">
  <title>KO Music History</title>
  <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">
</head>
<body>
  <h1>KO MUSIC HISTORY</h1>


  <div>
    <h3>Add a Track</h3>
    <form action="submit">
      <label for="trackTitle">Title:</label>
      <input data-bind="value: trackTitle" />
      <label for="trackArtist">Artist:</label>
      <input data-bind="value: trackArtist" />
      <label for="trackTitle">Genre:</label>
      <select data-bind="options: availableGenres, value: trackGenre"></select>
    </form>
    <button data-bind="click: addTrack">Add Track</button>
  </div>

  <div>
    <h3>Track List (<span data-bind="text: tracks().length"></span>)</h3>
    <div data-bind="foreach: tracks">
      <h5>Title: <span data-bind="text: title"></span></h5>
      <h5>Artist: <span data-bind="text: artist"></span></h5>
      <h5>Genre: <span data-bind="text: genre"></span></h5>
      <button data-bind="click: removeTrack">Remove Track</button>
    </div>
  </div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-debug.js"></script>
  <script src="js/musicApp.js"></script>
</body>
</html>