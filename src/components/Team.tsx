import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import C1 from "@/assets/Characters/C1.png";
import C2 from "@/assets/Characters/C2.png";
import C3 from "@/assets/Characters/C3.png";
import C4 from "@/assets/Characters/C4.png";

import C5 from "@/assets/Characters/C5.png";
import C6 from "@/assets/Characters/C6.png";
import C7 from "@/assets/Characters/C7.png";
import C8 from "@/assets/Characters/C8.png";
import C9 from "@/assets/Characters/C9.png";
import C10 from "@/assets/Characters/C10.png";


interface CharacterProps {
  imageUrl: string;
  name: string;
  region: string;
  tagline: string;
}

const characterList: CharacterProps[] = [
  {
    imageUrl: C8,
    name: "Boss Lady",
    region: "Delhi NCR",
    tagline: "Move your car, or I’ll move you.",
  },
  {
    imageUrl: C1,
    name: "Sher-e-Punjab",
    region: "Punjab",
    tagline: "I don’t honk. People move.",
  },
  {
    imageUrl: C9,
    name: "Desi Warrior",
    region: "Maharashtra",
    tagline: "My code is honor.",
  },
  {
    imageUrl: C10,
    name: "UP Bhaiya",
    region: "Uttar Pradesh",
    tagline: "Tu scan kar, baaki main dekh lunga.",
  },
  {
    imageUrl: C4,
    name: "Swaggy Boy",
    region: "Pan-India",
    tagline: "Style is my superpower.",
  },
  {
    imageUrl: C5,
    name: "Veer Hanuman",
    region: "Divine",
    tagline: "Power. Devotion. Fearless.",
  },
  {
    imageUrl: C2,
    name: "Jatt Muscleman",
    region: "Haryana/Punjab",
    tagline: "Muscle is the message.",
  },
  {
    imageUrl: C7,
    name: "Ghost Coder",
    region: "Unknown",
    tagline: "Code is my mask.",
  },
  {
    imageUrl: C3,
    name: "Moustachio Bhai",
    region: "Rajasthan",
    tagline: "Mooch ho toh Nathulal jaisi.",
  },
  {
    imageUrl: C6,
    name: "Highway Monk",
    region: "Pan-India",
    tagline: "Born to ride, wired to roam.",
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
