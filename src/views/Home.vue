<template>
  <div class="home">
    <hr />
    <div class="catalog-list">
      <movie-details
        v-for="(movie, index) in movies"
        :key="index"
        v-bind:movie="movie"
        @sentMovie="showChildArticle"
      />

      <MovieSessionList
        :movieSessions="movieSessionsExtended"
        @select-session="selectMovieSession"
      />
    </div>
    {{ selectedMovieSession.movieId || "not selected" }}
  </div>
</template>

<script>
import MovieDetails from "../components/MovieDetails";
import MovieSessionList from "../components/MovieSessionList";
// @ is an alias to /src

export default {
  name: "MovieCatalog",
  data() {
    return {
      isInfoPopupVisible: false,
      selectedMovieSession: {},
      movies: [
        {
          id: 1,
          image: "1.jpg",
          name: "Kalone",
          year: 1983,
          director: "Anatoliy Petlayk",
          plot: "Story about"
        },
        {
          id: 2,
          image: "2.jpg",
          name: "Frida Kalo",
          year: 1985,
          director: "Demaka",
          plot: "Dawn of developer."
        },

        {
          id: 3,
          image: "3.jpg",
          name: "Klaustrofobu",
          year: 1985,
          director: "Demaka",
          plot: "Dawn of developer."
        },
        {
          id: 4,
          image: "4.jpg",
          name: "House 3",
          year: 1985,
          director: "Demaka",
          plot: "Dawn of developer."
        },
        {
          id: 5,
          image: "5.jpg",
          name: "Mulan",
          year: 1985,
          director: "Demaka",
          plot: "Dawn of developer."
        },
        {
          id: 6,
          image: "6.jpg",
          name: "Avangard",
          year: 1985,
          director: "Demaka",
          plot: "Dawn of developer."
        },
        {
          id: 7,
          image: "7.jpg",
          name: "Kalone",
          year: 1983,
          director: "Anatoliy Petlayk",
          plot: "Story about"
        },
        {
          id: 8,
          image: "8.jpg",
          name: "Frida Kalo",
          year: 1985,
          director: "Demaka",
          plot: "Dawn of developer."
        },

        {
          id: 9,
          image: "9.jpg",
          name: "Klaustrofobu",
          year: 1985,
          director: "Demaka",
          plot: "Dawn of developer."
        },
        {
          id: 10,
          image: "10.jpg",
          name: "House 3",
          year: 1985,
          director: "Demaka",
          plot: "Dawn of developer."
        },
        {
          id: 11,
          image: "11.jpg",
          name: "Mulan",
          year: 1985,
          director: "Demaka",
          plot: "Dawn of developer."
        },
        {
          id: 12,
          image: "12.jpg",
          name: "Avangard",
          year: 1985,
          director: "Demaka",
          plot: "Dawn of developer."
        },
        {
          id: 13,
          image: "13.jpg",
          name: "Klaustrofobu",
          year: 1985,
          director: "Demaka",
          plot: "Dawn of developer."
        },
        {
          id: 14,
          image: "14.jpg",
          name: "House 3",
          year: 1985,
          director: "Demaka",
          plot: "Dawn of developer."
        },
        {
          id: 15,
          image: "15.jpg",
          name: "Mulan",
          year: 1985,
          director: "Demaka",
          plot: "Dawn of developer."
        },
        {
          id: 16,
          image: "16.jpg",
          name: "Avangard",
          year: 1985,
          director: "Demaka",
          plot: "Dawn of developer."
        }
      ],
      movieSessions: [
        {
          movieId: 1,
          movieTime: ["12:00", "15:45"]
        },

        {
          movieId: 2,
          movieTime: ["20:00", "23:45"]
        },

        {
          movieId: 3,
          movieTime: ["20:00", "23:45"]
        },
        {
          movieId: 4,
          movieTime: ["20:00", "23:45"]
        },
        {
          movieId: 5,
          movieTime: ["20:00", "23:45"]
        },
        {
          movieId: 6,
          movieTime: ["20:00", "23:45"]
        },
        {
          movieId: 7,
          movieTime: ["12:00", "15:45"]
        },

        {
          movieId: 8,
          movieTime: ["20:00", "23:45"]
        },

        {
          movieId: 9,
          movieTime: ["20:00", "23:45"]
        },
        {
          movieId: 10,
          movieTime: ["20:00", "23:45"]
        },
        {
          movieId: 11,
          movieTime: ["20:00", "23:45"]
        },
        {
          movieId: 12,
          movieTime: ["20:00", "23:45"]
        },
        {
          movieId: 13,
          movieTime: ["20:00", "23:45"]
        },
        {
          movieId: 14,
          movieTime: ["20:00", "23:45"]
        },
        {
          movieId: 15,
          movieTime: ["20:00", "23:45"]
        },
        {
          movieId: 16,
          movieTime: ["20:00", "23:45"]
        }
      ]
    };
  },
  components: { MovieDetails, MovieSessionList },
  methods: {
    selectMovieSession(session) {
      this.selectedMovieSession = session;
    },
    getMovieName(id) {
      return this.movies.find(m => m.id == id).name;
    },
    showPopupInfo() {
      this.isInfoPopupVisible = true;
    },
    closePopupInfo() {
      this.isInfoPopupVisible = false;
    },
    showChildArticle(data) {
      console.log(data);
    }
  },
  computed: {
    movieSessionsExtended() {
      return this.movieSessions.map(m => ({
        ...m,
        movieName: this.getMovieName(m.movieId)
      }));
    }
  }
};
</script>
<style lang="scss">
.home {
  max-width: 900px;
  margin: 0 auto;
}

.catalog-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}
</style>
