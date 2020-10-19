<template>
  <div class="booking-tiscets-hall-container">
    <h1>{{ movie.name }}</h1>
    <h2>{{ movieSessionTime }}</h2>
    <div class="theatre">
      <div
        class="seat"
        v-for="(item, index) in hallSeats"
        :key="index"
        :class="{ picked: item.picked, booked: item.isBooked }"
        @click="chooseSeat(item)"
      >
        <seat class="initial" :seat="item" />
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
          seatType: "standart",
          picked: false
        },
        {
          seatNumber: 2,
          seatRow: 1,
          seatType: "standart",
          isBooked: true,
          picked: false
        },
        {
          seatNumber: 3,
          seatRow: 1,
          seatType: "standart",
          picked: false
        },
        {
          seatNumber: 4,
          seatRow: 1,
          seatType: "standart",
          isBooked: true,
          picked: false
        },
        {
          seatNumber: 5,
          seatRow: 1,
          seatType: "standart",
          picked: false
        }
      ]
    };
  },
  methods: {
    chooseSeat(seat) {
      if (!seat.isBooked) {
        seat.picked = !seat.picked;
        this.$emit("choose-seat", seat);
      }
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
.active {
  background-color: rgba(29, 31, 31, 0.6);
}

.booking-tiscets-hall-container {
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80%;
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
.picked {
  color: #161414;
  background-color: rgba(29, 31, 31, 0.6);
}

.booked {
  color: #161414;
  background-color: yellow;
}
</style>