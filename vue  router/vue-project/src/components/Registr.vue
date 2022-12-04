<template>
    <div class="container">
        <div class="row my-5">
            <div class="col-6 offset-3 m-auto">
                <form @submit.prevent="send" class="d-flex flex-column">
                    <input class='form-control my-2' v-model="user.email" type='text' placeholder="username"/>
                    <input class='form-control my-2' v-model="user.password" type='password' placeholder="password"/>
                    <p class="btn btn-outline-info" @click="user.isLogin =!user.isLogin">Qeydiyyatiniz varmi?</p>
                    <button  :class="{'btn':true,'btn-success' : user.isLogin,'btn-primary' : !user.isLogin}" type="submit">{{user.isLogin ? 'Daxil ol' : "Qeydiyyatdan kec"}}</button>
                </form>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    data() {
        return{
            user:{
            email: "",
            password:'',
            isLogin : false
        }
        }
       
    },
    methods:{
        send(){
            this.$store.dispatch('setToken',this.user)
            // this.$router.replace('/product')
        }
    },
}
</script>


<style scoped>
.col-6{ 
    height:400px;
     
}
</style>