<template>
  <div>
    <h2>
      Hello from Hall!
    </h2>
    <BookingTicketsHall />
  </div>
</template>

<script>
import BookingTicketsHall from "../components/BookingTicketsHall";

export default {
  name: "Hall",
  components: { BookingTicketsHall }
};
</script>

<style lang="scss" scoped>
h2 {
  color: aliceblue;
}
</style>
