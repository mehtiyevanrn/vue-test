<template>
  <div class="container my-3">
    <button class="btn btn-info" @click="send()">
      <i class="fa-solid fa-arrow-left"></i>
    </button>
    <h1 class="text-center mb-5">PRODUCT</h1>
    <img
      v-if="productSend.loading"
      class="load-img"
      src="https://retchhh.files.wordpress.com/2015/03/loading1.gif"
    />
    <div v-else class="row">
      <div class="col-6">
        <img :src="productSend.product.image" />
      </div>
      <div class="col-6">
        <ul class="list-group p-2">
          <li class="list-group-item p-3">
            <b>Title :</b> {{ productSend.product.title }}
          </li>
          <li class="list-group-item p-3">
            <b>Category :</b> {{ productSend.product.category }}
          </li>
          <li class="list-group-item p-3">
            <b>Description :</b> {{ productSend.product.description }}
          </li>
          <li class="list-group-item p-3">
            <b>Price :</b> {{ productSend.product.price }}
          </li>
          <li class="list-group-item p-3">
            <b>Rate :</b> <span v-html="stars"> </span>
          </li>
          <li class="list-group-item p-3 d-flex justify-content-end">
            <button
              class="btn btn-success"
              @click="basketAdd(productSend.product.id)"
            >
              <i class="fa-solid fa-cart-shopping"></i> Sebete at
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  created() {
    let id = this.$route.params.id;
    this.$store.dispatch("getProduct", id);
  },
  methods: {
    send() {
      this.$router.back();
    },
    basketAdd(id){
      this.$store.commit('addBasket',id)
    }
  },
  computed: {
    stars() {
      if (this.productSend.product !== "") {
        let star_rate = Math.round(this.productSend.product.rating["rate"]);
        let data = "";
        for (let i = 0; i < star_rate; i++) {
          data += `<i style="color:gold;" class="fa-solid fa-star"></i>`;
        }
        return data;
      }
    },
    ...mapGetters(["productSend"]),
  },
};
</script>
<style scoped>
img {
  width: 350px;
  height: 350px;
}
.load-img {
  position: absolute;
  bottom: 0;
  left: 25%;
  width: 50%;
  height: 90vh;
  z-index: 999;
}
</style>