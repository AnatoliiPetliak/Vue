<template>
  <div class="booking-tiscets-hall-container">
    <h1>{{ movie.name }}</h1>
    <h2>{{ movieSessionTime }}</h2>
    <!-- <div class="booking-header"></div>
    <div class="monitor"></div> -->
    <div class="monitor">CINEMA SCREEN</div>
    <div class="theatre">
      <div class="cinema-seats left">
        <div class="cinema-row row-1">
          <div class="seat" v-for="(item, index) in hallSeats" :key="index">
            <Seat :seat="item" @click.native="chooseSeat(item)"> </Seat>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Seat from "./Seat";

export default {
  name: "CinemaHall",
  props: ["movieSession"],
  components: {
    Seat
  },
  data() {
    return {
      movie: {
        name: "5th element"
      },
      movieSessionTime: "21:45",
      hallSeats: [
        {
          seatNumber: 1,
          seatRow: 1,
          seatType: "standart"
        },
        {
          seatNumber: 2,
          seatRow: 1,
          seatType: "standart",
          isBooked: true
        },
        {
          seatNumber: 3,
          seatRow: 1,
          seatType: "standart"
        },
        {
          seatNumber: 4,
          seatRow: 1,
          seatType: "standart",
          isBooked: true
        },
        {
          seatNumber: 5,
          seatRow: 1,
          seatType: "standart"
        }
      ]
    };
  },
  methods: {
    chooseSeat(seat) {
      if (!seat.isBooked) {
        this.$emit("choose-seat", seat);
      }
    },

    smth() {
      console.log(1);
    }

    //     $('.cinema-seats .seat').on('click', function() {
    //   $(this).toggleClass('active');
    // }
  }
};
</script>

<style lang="scss">
.monitor {
  text-align: center;
  width: 600px;
  height: 50px;

  border: solid 1em rgb(131, 108, 108);
  background: rgba(0, 0, 0, 0.8);
  border-radius: 0.5em;
}
.booking-tiscets-hall-container {
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 900px;
  height: 500px;
  color: aliceblue;
  margin: 60px;
  background: rgb(67, 89, 107);
  border-block-start-color: red;
  border-width: 3px;
  border-radius: 25px;
}
.main-hall {
  background-color: yellow;
  border: violet;
  border-radius: 5px;
  box-shadow: white;
  color: black;
}

.theatre {
  display: flex;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cinema-seats {
  display: flex;

  .seat {
    cursor: pointer;

    &:hover:before {
      content: "";
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 7px;
    }

    &.active {
      color: black;
    }

    &.active:before {
      content: "";
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 7px;
    }
  }
}

// Left Seats
.left {
  .cinema-row {
    transform: skew(-15deg);
    margin: 0 6px;
  }

  .seat {
    width: 35px;
    height: 50px;
    border-radius: 7px;
    background: linear-gradient(
      to top,
      #761818,
      #761818,
      #761818,
      #761818,
      #761818,
      #b54041,
      #f3686a
    );
    margin-bottom: 10px;
    transform: skew(20deg);
    margin-top: -32px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }

  .row-2 {
    transform: skew(-13deg);

    .seat {
      transform: skew(18deg);
    }
  }
}
</style>