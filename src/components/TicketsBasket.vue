<template>
  <div class="basket-container">
    <button>Total({{}})</button>
  </div>
</template>

<script>
export default {
  name: "BasketContainer",
  props: []
  //   ,
  //   data() {
  //     return {
  //       reservedSeats: []
  //     };
  //   },
  //   computed: {
  //     Total() {
  //       let total = 0;
  //       this.seats.forEach(seat => {
  //         total += seat.price * seat.qty;
  //       });
  //       return total;
  //     }
  //   },

  //   methods: {
  //     // Remove item by its index
  //     removeItem(index) {
  //       this.seat.splice(index, 1);
  //     }
  //   }
};
</script>

<style lang="scss" scoped>
.basket-container {
  background-color: rgb(216, 14, 14);
  position: absolute;
  display: flex;

  align-self: flex-end;
  justify-content: center;
  border-radius: inherit;
  width: 200px;
  align-items: center;
  align-self: right;
}
</style>