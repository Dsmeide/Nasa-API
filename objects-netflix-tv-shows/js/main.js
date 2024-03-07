//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixTVShow {
    constructor(genre, length, rating, season) {
        this.genre = genre;
        this.length = length;
        this.rating = rating;
        this.season = season;
    }
    start() {
        alert('starting');
    }
    pause() {
        alert('paused');
    }
    fastForward() {
        alert('fast forwarding');
    }
}

let avatar = new NetflixTVShow('action', 18, 'PG', 1);
