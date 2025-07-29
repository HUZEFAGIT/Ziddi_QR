import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { ImageCarousel } from "./ImageCarousel"; // Import the carousel
import { ShoppingCart } from "lucide-react";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-12 md:py-20 gap-8">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              ZiddiQR
            </span>{" "}
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          <strong>Apni Gaadi, Apni Pehchaan!</strong> <em>Style bhi, Safety bhi!</em>
        </p>

        <div className="mt-6">
          <ImageCarousel />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button className="text-lg px-8 py-3">
            <ShoppingCart className="mr-2 w-5 h-5" />
            Buy on Amazon
          </Button>

          <a
            href="https://flipkart.com/ziddiqr"
            target="_blank"
            className={`text-lg px-8 py-3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            <ShoppingCart className="mr-2 w-5 h-5" />
            Buy on Flipkart
          </a>
        </div>

        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
          <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
            🔒 Privacy Protected
          </span>
          <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
            🎨 50+ Characters
          </span>
          <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
            🇮🇳 Made for India
          </span>
        </div>
      </div>

      <div className="z-10">
        <HeroCards />
      </div>

      <div className="shadow"></div>
    </section>
  );
};
