import './Dashboard.css';

import { Chart } from "react-google-charts";

export const data = [
    [
        "Mês",
        "Qnt"
    ],
    ["Jan", 15],
    ["Fev", 15],
    ["Mar", 25],
    ["Abr", 15],
    ["Mai", 5],
    ["Jun", 65],
    ["Jul", 11],
    ["Ago", 19],
    ["Set", 1],
    ["Out", 15],
    ["Nov", 15],
    ["Dez", 15],
];

export const options = {
    chart: {
        title: "Clientes",
    },
};

const Dashboard = () => {
    return (
        <section className="dashboard">
            <div className="grafico">
                <Chart
                    chartType="Line"
                    width="100%"
                    height="100%"
                    data={data}
                    options={options}
                />
            </div>

            <div className="menuDashboard">
                <button>
                    Clientes:
                    <span>30</span>
                </button>

                <button>
                    Portfolio:
                    <span>10</span>
                </button>

                <button>
                    Design:
                    <span>10</span>
                </button>
            </div>
        </section>
    )
}

export default Dashboard;