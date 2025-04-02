const movie = {
    title: 'KGF',
    duration: 90,
    stars: ['Yash', 'ABC', 'DEF']
};

function printMovie(movie) {
    console.log(`${movie.title} lasts for ${movie.duration} minutes. Stars: ${movie.stars.join(', ')}.`);
}
printMovie(movie);