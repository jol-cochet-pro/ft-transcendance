import {
  Chart,
  type ChartConfiguration,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import Canvas from "../../react/canvas";
import Component from "../../react/component";

type DataPoint = { date: Date; money: number };

function generateDataset(start: Date): DataPoint[] {
  const dataset: DataPoint[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0); // normaliser à minuit

  const current = new Date(start);
  current.setHours(0, 0, 0, 0);

  while (current <= today) {
    dataset.push({ date: new Date(current), money: Math.random() * 100 });
    current.setDate(current.getDate() + 1);
  }

  return dataset;
}

export const data = generateDataset(new Date(2025, 0, 1))
console.log(data.length)

export default class Statistics extends Component {

  public renderCanvas = (canvas: HTMLCanvasElement): void => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const chartData: ChartData<"line"> = {
        labels: data.map(el => el.date.toLocaleDateString("fr-FR", { day: "2-digit", month: "short" })),
        datasets: [
        {
            data: data.map(el => el.money),
            backgroundColor: "rgba(40, 40, 48, 1)",
            borderColor: "rgba(215, 195, 60, 1)",
            borderWidth: 1,
        },
        ],
    };

    const options: ChartOptions<"line"> = {
        responsive: true,
        maintainAspectRatio: false,  // important pour éviter le "stretch"
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
        },
        scales: {
            y: { beginAtZero: true, grid: { display: false } },
            x: { grid: { display: false } },
        },
    };

    const config: ChartConfiguration<"line"> = { type: "line", data: chartData, options };

    new Chart(ctx, config);

  };

  public render(): string {
    return `
      <section class="flex flex-col gap-3">
        <h2> Statistiques </h2>
        <div class="grid gap-2">
          <div class="flex flex-col w-full bg-surface p-4 rounded-lg gap-4 h-[300px]">
            <h3 class="flex items-center gap-2">Historique<i data-lucide="banknote" class="w-8 h-8 stroke-primary"></i></h3>
            ${new Canvas(this.renderCanvas)}
          </div>
        </div>
      </section>
    `;
  }
}
