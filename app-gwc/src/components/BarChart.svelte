<script context="module">
    import { Bar } from 'svelte-chartjs';
    import {
        Chart,
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale,
    } from 'chart.js';

    /**
	 * @type {{ chartData: any; }}
	 */
    let props;

    Chart.register(
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale
    );
</script>

<Bar data={props.chartData} options={{ responsive: true }} />


