import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState(0);
  const [budget, setBudget] = useState("");
  const [rating, setRating] = useState(0);

  const [newrating, setNewRating] = useState(0);

  const [movieList, setMovieList] = useState([]);

  const addMovie = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      genre: genre,
      budget: budget,
      rating: rating,
    }).then(() => {
      setMovieList([
        ...movieList,
        {
          name: name,
          genre: genre,
          budget: budget,
          rating: rating,
        },
      ]);
    });
  };

  const getMovies = () => {
    Axios.get("http://localhost:3001/movies").then((response) => {
      setMovieList(response.data);
      
    });
  };

  const updateMovieRating = (id) => {
    Axios.put("http://localhost:3001/update", { rating: newrating, id: id }).then(
      (response) => {
        setMovieList(
          movieList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  name: val.name,
                  budget: val.budget,
                  genre: val.genre,
                  rating: newrating,
                }
              : val;
          })
        );
      }
    );
  };

  const deleteMovie = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setMovieList(
        movieList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  return (
    <div className="container">
      <div className="detail">
        <label>Movie Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Genre:</label>
        <input
          type="text"
          onChange={(event) => {
            setGenre(event.target.value);
          }}
        />
        <label>Budget:</label>
        <input
          type="number"
          onChange={(event) => {
            setBudget(event.target.value);
          }}
        />
      
        <label>Rating:</label>
        <input
          type="number"
          onChange={(event) => {
            setRating(event.target.value);
          }}
        />
        <button onClick={addMovie}>Add Movie</button>
      </div>
      <div className="movies">
        <button onClick={getMovies}>Show All Movie</button>

        {movieList.map((val, key) => {
          return (
            <div className="movie">
              <div>
                <h3>Movie Name: <span>{val.name}</span></h3>
                <h3>Movie genre:<span> {val.genre}</span></h3>
                <h3>Budget:<span> {val.budget}</span></h3>
                <h3>Rating:<span> {val.rating}</span></h3>
         
              </div>
              <div>
                <input
                  type="number"
                  placeholder="more than 0"
                  onChange={(event) => {
                    setNewRating(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateMovieRating(val.id);
                  }}
                >
                 
                  Update Rating
                </button>

                <button
                  onClick={() => {
                    deleteMovie(val.id);
                  }}
                >
                  Delete Movie
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;