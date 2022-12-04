<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <img v-if="productSend.loading" class='load-img' src='https://retchhh.files.wordpress.com/2015/03/loading1.gif'/>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col" v-for="(item, index) in productsSend" :key="index">
          
            <div class="card shadow-sm">
              <RouterLink :to="`/detail/${item.category}/${item.id}`">
              <img
                class="bd-placeholder-img card-img-top"
                :src="item.image"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />
            </RouterLink>
              <div class="card-body">
                <p class="card-text text-center text-muted text-capitalize">{{ item.description.length>100 ? item.description.substr(0,100)+ '...' : item.description}}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-info"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-warning"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import {mapGetters} from 'vuex'
export default {
  data() {
    return {
     
    };
  },
  
  computed:{
    ...mapGetters(['productsSend','productSend'])
  }
};
</script>


<style scoped>
.card-img-top {
  width: 65%;
  height:200px;
  object-fit:contain;
  margin:2% 15%
  
}
.load-img{
  position:absolute;
  bottom:0;
  left:25%;
  width:50%;
  height:90vh;
  z-index:999;

}

</style>