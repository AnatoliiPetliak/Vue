<template>
  <div>
    <div>{{ seat.seatNumber }}/{{ seat.seatRow }}</div>
  </div>
</template>

<script>
export default {
  name: "Seat",
  props: ["seat"]
};
</script>

<style scoped>
</style>

