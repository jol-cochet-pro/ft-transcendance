
export type DataPoint = { date: Date; money: number };

export class StatisticsApi {

    static findOne = async () => {
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
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return generateDataset(new Date(2025, 1, 1))
    }
}