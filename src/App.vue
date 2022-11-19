<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">    
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <NotificacoesGeral />
      <router-view/>
    </div>
  </main>    
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import BarraLateral from '@/components/BarraLateral.vue';
import NotificacoesGeral from './components/NotificacoesGeral.vue';

export default defineComponent({
  name: 'App',
  data () {
    return {
      modoEscuroAtivo: false
    }
  },
  components: {
    BarraLateral,
    NotificacoesGeral
  },
  methods: {
    trocarTema (modoescuroAtivo: boolean) {
      this.modoEscuroAtivo = modoescuroAtivo
    }
  }
})
</script>

<style>
  .lista {
    padding: 1.25rem;
  }
  main {
    --bg-primario: #fff;
    --texto-primario: #000;
  }
  main.modo-escuro {
    --bg-primario: #2b2d42;
    --texto-primario: #ddd;
  }
  .conteudo {
    background-color: var(--bg-primario);
  }
</style>

