import { createStore } from 'vuex';
import axios from 'axios'
const store = createStore({
    state: {
        idToken:'',
        products:'',
        detail :{
            product:'',
            loading: false
        },
        baskets:JSON.parse(localStorage.getItem('baskets'))
    },

    mutations: {
        tokenUpdate(state,payload){
            state.idToken=payload
        },
        productsUpdate(state,payload){
            state.products=payload
        },
        tokenCheck(state){
            let token=localStorage.getItem("token")
            if(token){
                state.idToken=token
            }
        },
        logout(state){
            state.idToken='',
            localStorage.removeItem("token")
            router.replace('/registr')
         },
       
        productUpdate(state,payload){
            state.detail.product=payload
        },
        loadingUpdate(state,payload){
            state.detail.loading=payload
        },
        addBasket(state,payload){
            let basket=state.products.find(item=>{
                return item.id==payload
            })
            console.log(basket,'sebet')
            let baskets;
            if(localStorage.getItem('baskets')===null){
                baskets=[]
            } else {
                baskets=JSON.parse(localStorage.getItem('baskets'))
            }
            baskets.push(basket)
            state.baskets=baskets
            localStorage.setItem('baskets',JSON.stringify(baskets))
        },
        deletBasket(state,payload){
             state.baskets.splice(payload,1)
            console.log(state.baskets,'filter')
            localStorage.setItem('baskets',JSON.stringify(state.baskets));
            // state.baskets = deletpro;
            
        }
    },

    getters: {

        tokenSend(state){
            return state.idToken !== ""
        },
        productsSend(state){
            return state.products
        },
        productSend(state){
            return state.detail
        },
        basketSend(state){
            return state.baskets
        }
    },

    actions: {
        setToken({commit},payload){
            let link='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
            if(payload.isLogin){
                link='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
            }
            axios.post(link+'AIzaSyBrBX16vWL9fLzsJi-Cb3pfBUzSl8BtYGA',
            {email:payload.email,
            password:payload.password,
            returnSecureToken:true}
            )
            .then(({data})=>{
                commit('tokenUpdate',data.idToken)   
                localStorage.setItem("token",data.idToken)
                         
            })
            .catch(err=>console.log("error"))
        },

        getProducts({commit}){
            commit('loadingUpdate',true)
           axios.get("https://fakestoreapi.com/products").then(({ data }) => {
                commit('productsUpdate',data)
                commit('loadingUpdate',false)
                
              
              });
        },
        getProduct({commit},payload){
            commit('loadingUpdate',true)
            axios.get(`https://fakestoreapi.com/products/${payload}`).then(({ data }) => {
                commit('productUpdate',data)
                commit('loadingUpdate',false)
              });
        }
    }
})

export default store; 