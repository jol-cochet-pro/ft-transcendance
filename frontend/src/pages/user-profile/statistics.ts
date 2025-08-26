import {
  Chart,
  type ChartConfiguration,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import Canvas from "../../react/canvas";
import Component from "../../react/component";
import { StatisticsApi, type DataPoint } from "../../api/statistics";
import Loader from "../../components/loader";

export type StatisticsProps = {
  config: ChartConfiguration<"line">;
}

export default class Statistics extends Component<StatisticsProps> {


  private initConfig = (data: DataPoint[]): ChartConfiguration<"line"> => {
    const chartData: ChartData<"line"> = {
      labels: data.map(el => el.date.toLocaleDateString("fr-FR", { day: "2-digit", month: "short" })),
      datasets: [
        {
          data: data.map(el => el.money),
          backgroundColor: "rgba(40, 40, 48, 1)",
          borderColor: "rgba(215, 195, 60, 1)",
          borderWidth: 1,
          pointRadius: 1,
          pointHoverRadius: 2
        },
      ],
    };

    const options: ChartOptions<"line"> = {
      responsive: true,
      maintainAspectRatio: false, 
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true },
      },
      scales: {
        y: { beginAtZero: true, grid: { display: false } },
        x: { grid: { display: false } },
      },
      aspectRatio: 3.5,
    };

    return { type: "line", data: chartData, options };
  }

  public componentDidMount() {
    StatisticsApi.findOne().then((res) => 
      this.setState(() => ({ config: this.initConfig(res) })
    ));
  }

  public renderCanvas = (canvas: HTMLCanvasElement): void => {
    const ctx = canvas.getContext("2d");
    if (!ctx || !this.state?.config) return;
    new Chart(ctx, this.state.config);
  };

  public render(): string {
    return `
      <section class="flex flex-col gap-3">
        <h2> Statistiques </h2>
        <div class="grid gap-2">
          <div class="flex flex-col w-full h-fit bg-surface p-4 rounded-lg gap-4 overflow-auto">
            <h3 class="flex items-center gap-2">
              Historique
              <i data-lucide="banknote" class="w-8 h-8 stroke-primary"></i>
            </h3>
            <div class="flex justify-center items-center ${!this.state?.config ? "p-24" : ""}">
              ${this.state?.config ? new Canvas(this.renderCanvas) : new Loader() }
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
