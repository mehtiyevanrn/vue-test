<script setup>
import { RouterLink, RouterView } from "vue-router";
import store from "../store";
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              active-class="active"
              aria-current="page"
              to="/"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              active-class="active"
              aria-current="page"
              to="/product"
              >Product</RouterLink
            >
          </li>
        </ul>
        <ul class="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
          <li class="cart">
            <RouterLink to="/baskets"
              ><i class="fa-solid fa-cart-shopping"></i>
              <sup class="badge bg-danger b_cart">
                0
                <!-- {{ basketSend === null ? '0' : basketSend.length }} -->
              </sup></RouterLink
            >
          </li>
          <li
            v-if="store.getters.tokenSend"
            @click="tokendelete()"
            class="nav-item btn-sm rounded-pill me-5"
          >
            <RouterLink to="/registr" class="btn btn-danger"> Logout </RouterLink>
          </li>
          <li v-else class="nav-item  btn-sm rounded-pill me-5">
            <RouterLink to="/registr" class="btn btn-info"> Registr </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import {mapGetters} from "vuex"
export default {
  data() {},
  methods: {
    tokendelete() {
      store.commit("logout");
    },
    computed :{
      ...mapGetters(['basketSend'])
    }
  },
};
</script>

<style scoped>
.active {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}
.b_cart{
  border-radius: 50%;
  position: relative;
  top: -20px;
  left: -10px;
  font-size:10px
}

.cart i{
   font-size: 25px;
  color: #13a5bf
}

</style>