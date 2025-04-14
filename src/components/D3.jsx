import { Radar } from "react-chartjs-2";
import { scaleLinear } from "d3-scale";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from "chart.js";
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const D3 = () => {
    const skills = [
        { name: 'React', level: 4 },
        { name: 'UX Design', level: 5 },
        { name: 'Figma', level: 5 },
        { name: 'JavaScript', level: 4 },
        { name: 'Node.js', level: 3 },
        { name: 'REST API', level: 3 },
    ]

    const scale = scaleLinear().domain([0, 5]).range([0, 6]);

    const data = {
        labels: skills.map(s => (s.name)),
        datasets: [{
            label: "skills level",
            data: skills.map(s => scale(s.level)),
            backgroundColor: "rgba(255, 77, 0, 0.3)",
            borderColor: "#00FF87",
            pointBackgroundColor: "#6E00FF",
            borderWidth: 2
        }]
    }

    const options = {
        scales: {
            r: {
                suggestedMin: 0,
                suggestedMax: 6,
                ticks: {
                    stepSize: 3,
                    backdropColor: "transparent",
                    color: "#666"
                },
                pointLabels: {
                    font: {
                        size: 12
                    },
                    color: "#333"
                },
                grid: {
                    color: "#ccc"
                },
                angleLines: {
                    color: "#ddd"
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: (context) => `Level: ${context.raw}`
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false
    };
    return (
        <div style={{ width: "300px", height: "300px" }}>
            <Radar data={data}
                options={options}
            />
        </div>
    )
}

export default D3;