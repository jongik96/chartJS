import Chart from 'chart.js'
export default {
    install(Vue) {
        Vue.prototype.$_Chart = Chart;

        // xx.vue
        // this.$_Chart => 차트 접근
    }
}