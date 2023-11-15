const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTVmMmU5MTczYjY4NTEwOWFiZGYyZjQ5NGM4NTJjNCIsInN1YiI6IjY1NTEzNzc5ZmQ2ZmExMDEzODBhY2E3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ePMocltvB3BzrCZ7d9Q-9mqrAIl0mlEYPCX3PQy7bR0",
  },
};

export interface Movie {
  id: number;
  backdrop: string;
  poster: string;
  overview: string;
  title: string;
  rating: number;
  date: string;
  runtime: number;
  language: string;
  genres: string[];
}

export interface Cast {
  id: number;
  name: string;
  character: string;
  photo: string;
  order: number;
}

export function getVideoByMovieId(id: number): Promise<string> {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    options
  )
    .then(async (res) => {
      const response = await res.json();
      return response.results[0].key;
    })
    .catch((err) => console.error("error:" + err));
}
export function getAltVideoByMovieId(id: number): Promise<string> {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    options
  )
    .then(async (res) => {
      const response = await res.json();
      return response.results[1].key;
    })
    .catch((err) => console.error("error:" + err));
}
export function getCastByMovieId(id: number): Promise<Cast[]> {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  )
    .then(async (res) => {
      const response = await res.json();
      return response.cast.map(
        (cast: any) =>
          ({
            id: cast.id,
            name: cast.name,
            character: cast.character,
            photo: cast.profile_path,
            order: cast.order,
          } as Cast)
      );
    })
    .catch((err) => console.error("error:" + err));
}

export function getSimliarById(id: number): Promise<Movie[]> {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
    options
  ).then(async (res) => {
    const response = await res.json();
    return response.results.map(
      (movie: any) =>
        ({
          backdrop: movie.backdrop_path,
          title: movie.title,
          rating: movie.vote_average,
          id: movie.id,
        } as Movie)
    );
  });
}

export function getPopularMoviesDB(page: number): Promise<Movie[]> {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
    options
  )
    .then(async (res) => {
      const response = await res.json();
      return response.results.map(
        (movie: any) =>
          ({
            id: movie.id,
            poster: movie.poster_path,
            title: movie.title,
            rating: movie.vote_average,
            language: movie.original_language,
            date: movie.release_date,
            runtime: movie.runtime,
            genres: movie.genres,
          } as Movie)
      );
    })
    .catch((err) => console.error("error:" + err));
}

export function getMovieById(id: number): Promise<Movie> {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  )
    .then(async (res) => {
      const response = await res.json();
      return {
        backdrop: response.backdrop_path,
        poster: response.poster_path,
        title: response.title,
        date: response.release_date,
        overview: response.overview,
        runtime: response.runtime,
        genres: response.genres,
      } as Movie;
    })
    .catch((err) => {
      console.error("Error:", err);
      throw err;
    });
}

export function getUpcomingMovies(page: number): Promise<Movie[]> {
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`,
    options
  )
    .then(async (res) => {
      const response = await res.json();
      return response.results.map(
        (movie: any) =>
          ({
            id: movie.id,
            poster: movie.poster_path,
            title: movie.title,
            rating: movie.vote_average,
            language: movie.original_language,
            date: movie.release_date,
            runtime: movie.runtime,
            genres: movie.genres,
          } as Movie)
      );
    })
    .catch((err) => console.error("error:" + err));
}

export function getTopRatedMovies(page: number): Promise<Movie[]> {
  return fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
    options
  )
    .then(async (res) => {
      const response = await res.json();
      return response.results.map(
        (movie: any) =>
          ({
            id: movie.id,
            poster: movie.poster_path,
            title: movie.title,
            rating: movie.vote_average,
            language: movie.original_language,
            date: movie.release_date,
            runtime: movie.runtime,
            genres: movie.genres,
          } as Movie)
      );
    })
    .catch((err) => console.error("error:" + err));
}
