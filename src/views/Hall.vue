<template>
  <div class="tickets-hall">
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
.tickets-hall {
  display: flex;
  justify-content: center;

  background-color: rgba(63, 86, 95, 0.6);
}
</style>
