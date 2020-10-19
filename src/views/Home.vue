<template>
  <div class="home">
    <hr />
    <div class="catalog-list">
      <MovieSessionList
        :movieSessions="movieSessionsExtended"
        @select-session="selectMovieSession"
      />
    </div>
  </div>
</template>

<script>
import MovieSessionList from "../components/MovieSessionList";
// @ is an alias to /src

export default {
  name: "MovieCatalog",
  components: { MovieSessionList },
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
          movieTime: ["10:00", "20:00", "23:45"]
        },
        {
          movieId: 5,
          movieTime: ["10.00", "20:00", "23:45"]
        }
      ]
    };
  },
  methods: {
    selectMovieSession(session) {
      this.selectedMovieSession = session;
    },
    getMovieName(id) {
      return this.movies.find(m => m.id == id);
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
        movie: this.getMovieName(m.movieId)
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
