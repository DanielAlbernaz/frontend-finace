import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TarefaView from '../views/TarefaView.vue'
import ProjetosView from '../views/ProjetosView.vue'
import FormularioView from '../views/Projetos/FormularioView.vue'
import ListaView from '../views/Projetos/ListaView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Tarefas',
    component: TarefaView
  },
  {
    path: '/projetos',
    component: ProjetosView,
    children: [
      {
        path: '',
        name: 'Projetos',
        component: ListaView
      },
      {
        path: 'novo',
        name: 'Novo projetos',
        component: FormularioView
      },
      {
        path: ':id',
        name: 'Editar projeto',
        component: FormularioView,
        props: true
      },
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
