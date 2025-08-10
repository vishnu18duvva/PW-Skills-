function createPlaylist(playlistName) {
    let songs = [];

    function addSong(songName, artist) {
        songs.push({ songName, artist });
    }

    function listSongs() {
        console.log(`Playlist: ${playlistName}`);
        songs.forEach((song, index) => {
            console.log(`${index + 1}. ${song.songName} - ${song.artist}`);
        });
    }

    return { addSong, listSongs };
}

// Example usage
const myPlaylist = createPlaylist("Chill Vibes");
myPlaylist.addSong("Perfect", "Ed Sheeran");
myPlaylist.addSong("Someone Like You", "Adele");
myPlaylist.listSongs();
