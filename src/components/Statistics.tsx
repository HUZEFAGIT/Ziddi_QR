import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface StatsProps {
  quantity: string;
  description: string;
}

const stats: StatsProps[] = [
  {
    quantity: "50+",
    description: "Unique Characters",
  },
  {
    quantity: "100%",
    description: "Privacy Protected",
  },
  {
    quantity: "24/7",
    description: "QR Support",
  },
  {
    quantity: "1M+",
    description: "Scans Completed",
  }
];


export const Statistics = () => {
  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: StatsProps) => (
          <Card key={description}>
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-4xl">{quantity}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p>{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
