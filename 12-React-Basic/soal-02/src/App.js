import { Component } from "react";
import MovieCard from "./MovieCard";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movieList: [],
      isLoading: true,
    };
  }

  fetchMovieList = async () => {
    try {
      const url = "https://api.jikan.moe/v3/top/anime";
      const response = await fetch(url);
      const movies = await response.json();

      this.setState({ movieList: movies.top });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchMovieList();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.movieList !== prevState.movieList) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">Anime List</h1>
        {this.state.isLoading && <h2>Loading...</h2>}
        <div className="container my-5">
          <div id="daftar-anime" className="row">
            {this.state.movieList?.map((anime) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-3" key={anime.mal_id}>
                <MovieCard movie={anime} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
