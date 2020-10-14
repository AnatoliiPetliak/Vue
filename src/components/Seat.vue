<template>
  <div>{{ seat.seatNumber }}/{{ seat.seatRow }}</div>
</template>

<script>
export default {
  name: "Seat",
  props: ["seat"]
};
</script>

