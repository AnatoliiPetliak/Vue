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
          seatType: "medium",
          picked: false
        },
        {
          seatNumber: 2,
          seatRow: 1,
          seatType: "standart",
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
          seatType: "medium",
          isBooked: true,
          picked: false
        },
        {
          seatNumber: 5,
          seatRow: 1,
          seatType: "lux",
          picked: false
        }
      ]
    };
  },
  methods: {
    chooseSeat(seat) {
      if (!seat.isBooked) {
        seat.picked = !seat.picked;
        if (seat.picked) {
          this.$emit("choose-seat", seat.seatType);
        } else {
          this.$emit("clear-local", seat.seatType);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 80%;
  color: aliceblue;
  background: rgba(67, 89, 107, 0.6);
  border-radius: 25px;
}

.theatre {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.seat {
  text-align: center;
  font-size: 24px;
  color: aliceblue;
  background: rgb(87, 87, 87);
  width: 50px;
  height: 100px;
  border-radius: 10px;

  border-width: 5px;
  margin: 3px;
  cursor: pointer;
}
.picked {
  background-color: rgba(29, 31, 31, 0.6);
}

.booked {
  background-color: rgb(150, 150, 150);
  pointer-events: none;
  opacity: 0.5;
}
</style>