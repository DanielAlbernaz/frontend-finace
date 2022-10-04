<script>
import api from "@/services/api";
import { defineComponent, onMounted } from '@vue/runtime-core';

export default defineComponent({
  setup() {
    var result;       

    const data = {
      email: "daniel@daniel.com",
      password: "123"
    };

    const qualquercoisa = () =>  api.get("auth/user/{UserId}").then((response) => (
      console.log(response.data.data.token)
    ));

    const header = {
      headers: {
        Authorization: 'Bearer ' + qualquercoisa,
      }
    }

    const asd = () =>  api.post("produtos", data, header).then((response) => (
      console.log(response.data.data.token)
    ));


    var dataRegister = {
      name: "Daniel",
      email: "daniel@daniel.com",
      password: "123"
    };

    const register = () =>  api.post("auth/register", dataRegister).then((response) => (
      response.data.data.id
    ));
  
    onMounted(qualquercoisa);
    
  },
})
</script>


<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
