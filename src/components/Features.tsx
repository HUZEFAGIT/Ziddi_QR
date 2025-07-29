import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Scan & Contact Safely",
    description:
      "Revolutionary QR technology lets people contact you instantly without revealing your phone number. Messages come through our secure platform - you stay in control.",
    image: "https://img.icons8.com/color/144/qr-code--v1.png",
  },
  {
    title: "50+ Desi Characters",
    description:
      "From IT Baba to Sher-e-Punjab, Mumbai Don to Swagwali Dilli Girl - choose characters that represent your personality, region, and attitude. Made for Indians, by Indians.",
    image: "https://img.icons8.com/color/144/group.png",
  },
  {
    title: "Weather-Proof Quality",
    description:
      "Built for Indian conditions! 100% waterproof, UV-resistant, heat-tolerant stickers that survive monsoons, summers, and daily wear. Premium adhesive, zero residue removal.",
    image: "https://img.icons8.com/color/144/shield.png",
  },
];

const featureList: string[] = [
  "QR Scan Technology",
  "Privacy Protection",
  "50+ Characters",
  "Indian Regional Pride", 
  "Waterproof Design",
  "UV & Heat Resistant",
  "Easy Car Installation",
  "Secure Messaging",
  "24/7 Platform Support",
  "Cultural Diversity",
  "Attitude Expression",
  "Zero Phone Sharing",
];

const FeatureSlider = () => {
  // Duplicate the list for seamless infinite scroll
  const repeatedList = [...featureList, ...featureList];
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-4 animate-feature-marquee"
        style={{
          width: `${featureList.length * 2 * 160}px`,
        }}
      >
        {repeatedList.map((feature, idx) => (
          <div key={feature + idx} className="flex-shrink-0 flex items-center justify-center" style={{ width: 150 }}>
            <Badge variant="secondary" className="text-sm w-full text-center whitespace-nowrap flex items-center justify-center">
              {feature}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Why Choose{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          ZiddiQR
        </span>
      </h2>

      <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
        India's first attitude-driven QR contact solution. <strong>Apni Gaadi, Apni Pehchaan!</strong> 🚗🇮🇳
      </p>

      {/* Feature slider */}
      <FeatureSlider />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title} className="hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </CardContent>

            <CardFooter className="flex justify-center">
              <img
                src={image}
                alt={`${title} feature illustration`}
                className="w-[120px] h-[120px] object-contain filter brightness-0 dark:brightness-0 dark:invert"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
