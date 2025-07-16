import MovieFacade from './movieFacade';

const movieFacade = new MovieFacade();

// Using the facade to handle all movie-watching operations
movieFacade.watchMovie("Goat 🍾🎉");
movieFacade.getSnacks("Popcorn");
movieFacade.endMovie();
