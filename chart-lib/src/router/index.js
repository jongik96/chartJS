import Vue from 'vue';
import VueRouter from 'vue-router';
import BarChart from '../components/BarChart.vue';
import LineChart from '../components/LineChart.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/barChart",
    },
    {
      path: "/barChart",
      name: "BarChart",
      component: BarChart,
    },
    {
      path: "/lineChart",
      name: "LineChart",
      component: LineChart,
    },
  ],
});