function nowPlaying(arr) {
    let [artistName, trackName, duration] = arr;
    console.log(`Now Playing: ${trackName} - ${artistName} [${duration}]`);
}
nowPlaying(['Number One', 'Nelly', '4:09']);