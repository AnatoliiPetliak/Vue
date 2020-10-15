<template>
  <div class="booking-tiscets-hall-container">
    <div class="monitor">CINEMA SCREEN</div>
    <h1>{{ movie.name }}</h1>
    <h2>{{ movieSessionTime }}</h2>
    <div class="theatre">
      <div
        class="seat"
        v-for="(item, index) in hallSeats"
        :key="index"
        @click="smth"
        :class="{ active: isActive }"
      >
        <seat
          class="initial"
          :seat="item"
          @click="chooseSeat"
          :class="{ active: (picked = !picked) }"
        />
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
      picked: false,
      isActive: false,
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
        seat.picked = !seat.picked;
        // this.isActive = !this.isActive;
        console.log(seat.seatNumber);
        this.$emit("choose-seat", seat);
      }
    },

    smth() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss">
h1 {
  font-size: 24px;
  color: aliceblue;
}
h1 > h2 {
  text-align: center;
}
.picked {
  color: #161414;
}
.active {
  background-color: rgba(29, 31, 31, 0.6);
}
.monitor {
  text-align: center;
  width: 600px;
  height: 50px;

  border: solid 1em rgb(131, 108, 108);
  background: rgba(0, 0, 0, 0.8);
  border-radius: 0.5em;
}
.booking-tiscets-hall-container {
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 900px;
  height: 500px;
  color: aliceblue;
  margin: 60px;
  background: rgba(67, 89, 107, 0.6);

  border-radius: 25px;
}

.theatre {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.cinema-seats:hover {
  background-color: rgb(116, 116, 199);
  transition: floor($number: 4);
}
.seat:hover {
  background-color: rgb(31, 38, 43);
  text-decoration-color: #161414;
}
.seat {
  text-align: center;
  font-size: 24px;
  color: aliceblue;
  background: rgb(147, 147, 231);
  width: 50px;
  height: 100px;
  border-radius: 10px;
  border: black;
  border-block-end-color: brown;
  border-width: 5px;
  margin: 3px;
  cursor: pointer;
}
</style>