<template>
      <FormularioGeral @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
        <BoxGeral v-if="listaEstaVazia">
          Você não esta muito produtivo hoje :(
        </BoxGeral> 
        <TerefaGeral v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>     
    </div> 
  <router-view/>
</template>


<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import FormularioGeral from '@/components/FormularioGeral.vue';
import TerefaGeral from '@/components/TerefaGeral.vue';
import ITarefa from '@/interfaces/ITarefa.vue';
import BoxGeral from '@/components/BoxGeral.vue';

export default defineComponent({
  name: 'App',
  data () {
    return {
      tarefas: [] as typeof ITarefa[]
    }
  },
  components: {
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
    }
  }
})
</script>
