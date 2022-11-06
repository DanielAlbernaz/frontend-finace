<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import BarraLateral from '@/components/BarraLateral.vue';
import FormularioGeral from '@/components/FormularioGeral.vue';
import TerefaGeral from './components/TerefaGeral.vue';
import ITarefa from './interfaces/ITarefa.vue';
import BoxGeral from '@/components/BoxGeral.vue';

export default defineComponent({
  name: 'App',
  data () {
    return {
      tarefas: [] as typeof ITarefa[],
      modoEscuroAtivo: false
    }
  },
  components: {
    BarraLateral,
    FormularioGeral,
    TerefaGeral,
    BoxGeral
  },
  computed: {
    listaEstaVazia () : boolean {
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa (tarefa: typeof ITarefa) {
      this.tarefas.push(tarefa);
    },
    trocarTema (modoescuroAtivo: boolean) {
      this.modoEscuroAtivo = modoescuroAtivo
    }
  }
})
</script>


<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">    
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <FormularioGeral @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
        <TerefaGeral v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>     

         <BoxGeral v-if="listaEstaVazia">
          Você não esta muito produtivo hoje :(
        </BoxGeral>  
      </div>     
    </div>
  </main>  
  <router-view/>
</template>

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

