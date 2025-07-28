import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  character?: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://i.pravatar.cc/150?img=1",
    name: "Rajesh Kumar",
    userName: "@rajesh_dev",
    comment: "IT Baba perfectly represents my tech vibe! Got 3 messages in first week. Privacy ka guarantee hai - no direct calls, only secure messages. Best purchase for my car! 🚗💻",
    character: "IT Baba"
  },
  {
    image: "https://i.pravatar.cc/150?img=2", 
    name: "Preet Singh",
    userName: "@preet_punjabi",
    comment: "Sher-e-Punjab wala character dekh kar hi log respect dete hain! Parking issue solve ho gaya, and attitude bhi show off kar diya. QR scan kar ke message aaya - bilkul safe! 🦁",
    character: "Sher-e-Punjab"
  },
  {
    image: "https://i.pravatar.cc/150?img=3",
    name: "Sneha Sharma", 
    userName: "@sneha_delhi",
    comment: "Swagwali Dilli Girl is exactly my personality! Love how I can stay connected without sharing my phone number. The sticker quality is amazing - monsoon mein bhi intact hai! ✨",
    character: "Swagwali Dilli Girl"
  },
  {
    image: "https://i.pravatar.cc/150?img=4",
    name: "Amit Patil",
    userName: "@amit_mumbai", 
    comment: "Mumbai Don character se log samajh jate hain ki main boss hun! Privacy protection sabse best feature hai. Someone messaged about parking - responded when I wanted to. Perfect! 💪",
    character: "Mumbai Don"
  },
  {
    image: "https://i.pravatar.cc/150?img=5",
    name: "Captain Vikram",
    userName: "@captain_vik",
    comment: "Army Kid character se discipline aur respect dono mil jata hai. Waterproof quality excellent hai - 6 months se laga hai, brand new jaisa lag raha hai. Highly recommended for defense personnel! 🇮🇳",
    character: "Army Kid"
  },
  {
    image: "https://i.pravatar.cc/150?img=6",
    name: "Rohit Jain",
    userName: "@rohit_rider",
    comment: "Rider X perfect hai mere bike ke liye! QR code through secure messaging system works flawlessly. No more leaving phone numbers on bikes. Safety + Style = ZiddiQR! 🏍️",
    character: "Rider X"
  },
  {
    image: "https://i.pravatar.cc/150?img=7",
    name: "Ananya Reddy",
    userName: "@ananya_blr",
    comment: "As a female car owner, privacy was my biggest concern. ZiddiQR solved it perfectly! Choose any character, stay safe, stay connected. The app dashboard is super user-friendly too! 👩‍💼",
  },
  {
    image: "https://i.pravatar.cc/150?img=8", 
    name: "Harpreet Kaur",
    userName: "@harpreet_jalandhar",
    comment: "Jatt Muscleman character dekh kar log automatically space de dete hain! 😄 But seriously, the privacy protection is top-notch. Messages come through app, I reply when I want. Brilliant concept! 💪",
    character: "Jatt Muscleman"
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials" 
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold  md:text-center">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          India Loves{" "}
        </span>
        ZiddiQR
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Real reviews from real customers across India. See how ZiddiQR is changing the way we connect - with attitude and privacy! 🚗✨
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment, character }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden hover:shadow-lg transition-shadow"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt={`${name} profile picture`}
                    src={image}
                  />
                  <AvatarFallback>
                    {name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription className="flex flex-col">
                    <span>{userName}</span>
                    {character && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full mt-1 self-start">
                        {character}
                      </span>
                    )}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm leading-relaxed">{comment}</p>
              </CardContent>
            </Card>
          )
        )}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-lg text-muted-foreground mb-4">
          Join thousands of satisfied customers across India!
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-sm">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
            ⭐⭐⭐⭐⭐ 4.8/5 Rating
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
            🚗 10,000+ Cars Protected
          </span>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
            🇮🇳 Available Pan-India
          </span>
        </div>
      </div>
    </section>
  );
};
