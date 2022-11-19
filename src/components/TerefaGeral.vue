<template>
    <BoxGeral>
        <div class="columns">
            <div class="column is-4">
                {{tarefa.descricao || 'Tarefa sem descrição' }}
            </div>
            <div class="column is-3">
                {{ tarefa.projeto?.nome || 'N/D' }}
            </div>
            <div class="column">
                <CronometroGeral :tempoEmSegundos='tarefa.duracaoEmSegundos'/>
            </div>
        </div>
    </BoxGeral>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CronometroGeral from './CronometroGeral.vue';
import ITarefa from '../interfaces/ITarefa.vue';
import BoxGeral from './BoxGeral.vue';

export default defineComponent ({
    name: 'TarefaGeral',
    components: { 
        CronometroGeral,
        BoxGeral
    },
    props: {
        tarefa: {
            type: Object as PropType<typeof ITarefa>,
            required: true
        }
    }
})
</script>

