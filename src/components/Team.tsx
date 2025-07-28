import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CharacterProps {
  imageUrl: string;
  name: string;
  region: string;
  tagline: string;
}

const characterList: CharacterProps[] = [
  {
    imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=itbaba",
    name: "IT Baba",
    region: "Pune/Bangalore",
    tagline: "I build the internet.",
  },
  {
    imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=sherpunjab",
    name: "Sher-e-Punjab",
    region: "Punjab",
    tagline: "I don’t honk. People move.",
  },
  {
    imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=mumbaidon",
    name: "Mumbai Don",
    region: "Maharashtra",
    tagline: "Boss of the block.",
  },
  {
    imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=desiwarrior",
    name: "Desi Warrior",
    region: "Maharashtra",
    tagline: "My code is honor.",
  },
  {
    imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=jattmuscleman",
    name: "Jatt Muscleman",
    region: "Haryana/Punjab",
    tagline: "Muscle is the message.",
  },
  {
    imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=swagwalidilligirl",
    name: "Swagwali Dilli Girl",
    region: "Delhi NCR",
    tagline: "Move your car, or I’ll move you.",
  },
  {
    imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=nammatechie",
    name: "Namma Techie",
    region: "Bengaluru",
    tagline: "Sleep is for backend jobs.",
  },
  {
    imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=upbhaiya",
    name: "UP Bhaiya",
    region: "Uttar Pradesh",
    tagline: "Tu scan kar, baaki main dekh lunga.",
  },
  {
    imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=riderx",
    name: "Rider X",
    region: "Universal",
    tagline: "Born to overtake.",
  },
  {
    imageUrl: "https://api.dicebear.com/7.x/adventurer/svg?seed=bosslady",
    name: "Boss Lady",
    region: "Pan-India",
    tagline: "I run this road.",
  },
];

export const Characters = () => {
  return (
    <section
      id="characters"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold md:text-center">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Meet the
        </span>{' '}
        ZiddiQR Characters
      </h2>
      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Choose your vibe! Each ZiddiQR sticker features a unique, attitude-rich character representing India’s diversity and street-smart spirit.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 gap-y-10">
        {characterList.map(({ imageUrl, name, region, tagline }: CharacterProps) => (
          <Card
            key={name}
            className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
          >
            <CardHeader className="mt-8 flex justify-center items-center pb-2">
              <img
                src={imageUrl}
                alt={`${name} avatar`}
                className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
              />
              <CardTitle className="text-center">{name}</CardTitle>
              <CardDescription className="text-primary">
                {region}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-2">
              <p>{tagline}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
