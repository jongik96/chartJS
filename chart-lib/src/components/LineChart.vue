<template>
    <div>
        <canvas ref="lineChart" id="lineChart"></canvas>
    </div>    
</template>

<script>
// import Chart from 'chart.js';
export default {
    mounted(){
        
        const chart = new this.$_Chart(
            this.$refs.lineChart.getContext('2d'),
            {
                type: 'line',
                data: {
                    labels: [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                    ],
                    datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 45],
                    }]
                },
                options: {}
            }
        );
        console.log(chart);
    }
}
</script>

<style>

</style>