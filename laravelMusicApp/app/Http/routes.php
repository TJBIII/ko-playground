<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/music', function () {
    return view('music');
});


Route::get('/tracks', function () {
  //send some starting tracks

  $track1 = array( 'title' => 'Juicy',
                   'artist' => 'Notorioius BIG',
                   'genre' => 'Rap');

  $track2 = array( 'title' => 'Doomsday',
                   'artist' => 'MF DOOM',
                   'genre' => 'Rap');

  $track3 = array( 'title' => 'Born Under A Bad Sign',
                   'artist' => 'Albert King',
                   'genre' => 'Blues');

  $tracks = array($track1, $track2, $track3);

  return response()->json($tracks);
});
