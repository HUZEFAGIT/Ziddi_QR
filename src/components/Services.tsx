import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface CharacterProps {
  name: string;
  description: string;
  vibe: string;
  region: string;
  attitude: string;
  popular?: boolean;
}
 
const topCharacters: CharacterProps[] = [
  {
    name: "IT Baba",
    description: "Geeky specs, hoodie, headphones",
    vibe: "Cool coder",
    region: "Pune/Bangalore",
    attitude: "I build the internet. Don't mess.",
    popular: true,
  },
  {
    name: "Sher-e-Punjab", 
    description: "Turban, aviators, thick beard",
    vibe: "Proud & powerful",
    region: "Punjab",
    attitude: "I don't honk. People move.",
    popular: true,
  },
  {
    name: "Mumbai Don",
    description: "Gold chain, shades, slicked hair", 
    vibe: "Street-smart boss",
    region: "Maharashtra",
    attitude: "Boss of the block.",
  },
  {
    name: "Swagwali Dilli Girl",
    description: "Nose pin, shades, smirk",
    vibe: "Confident & fearless", 
    region: "Delhi NCR",
    attitude: "Move your car, or I'll move you.",
    popular: true,
  },
  {
    name: "Desi Warrior",
    description: "Inspired by Shivaji Maharaj, mustache, turban",
    vibe: "Brave and noble",
    region: "Maharashtra",
    attitude: "My code is honor.",
  },
  {
    name: "Jatt Muscleman",
    description: "Gym-built, flexing arms, vest",
    vibe: "Aggressive protector",
    region: "Haryana/Punjab", 
    attitude: "Muscle is the message.",
  },
];

export const Services = () => {
  return (
    <section id="characters" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Choose Your{" "}
            </span>
            Character
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Pick from our top 10 attitude-packed desi characters that represent your vibe. 
            Each one tells the world who you are - with style! 🎭
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Badge variant="secondary" className="text-sm">Regional Pride</Badge>
            <Badge variant="secondary" className="text-sm">Cultural Identity</Badge>
            <Badge variant="secondary" className="text-sm">Attitude Expression</Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 w-full">
          {topCharacters.map(({ name, description, vibe, attitude, popular }: CharacterProps) => (
            <Card
              key={name}
              className={`relative ${popular ? "border-primary" : ""}`}
            >
              {popular && (
                <Badge className="absolute -top-2 -right-2 bg-primary">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {name}
                  <Badge variant="outline">{vibe}</Badge>
                </CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent>
                <blockquote className="text-sm italic border-l-4 border-primary pl-4">
                  "{attitude}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
