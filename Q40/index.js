// define the make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling 3 functions & creating 3 variables with different values
var album1 = make_album("Adele", "Album title 1");
var album2 = make_album("James", "Album title 2");
// calling a make_album function with tracks parameter
var album3 = make_album("Lady Gaga", "Album title 3", 10);
// printing the variables
console.log(album1);
console.log(album2);
console.log(album3);
