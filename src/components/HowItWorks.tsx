import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Megaphone, Map, Plane, Gift } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Megaphone className="w-10 h-10" />,
    title: "Choose Your Character",
    description:
      "Pick from 50+ attitude-packed desi characters that represent your vibe - from IT Baba to Sher-e-Punjab to Mumbai Don.",
  },
  {
    icon: <Map className="w-10 h-10" />,
    title: "Stick on Dashboard", 
    description:
      "Place your waterproof, UV-resistant ZiddiQR sticker on your car's dashboard. Visible but stylish.",
  },
  {
    icon: <Plane className="w-10 h-10" />,
    title: "Get Contacted Safely",
    description:
      "When someone needs to reach you, they scan your QR code. No phone number revealed - messages come through our secure platform.",
  },
  {
    icon: <Gift className="w-10 h-10" />,
    title: "Respond When You Want",
    description:
      "Check messages on your ZiddiQR dashboard or app. Reply when convenient. Your privacy, your choice.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          ZiddiQR{" "}
        </span>
        Works
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Four simple steps to upgrade your car contact game with style and security.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
