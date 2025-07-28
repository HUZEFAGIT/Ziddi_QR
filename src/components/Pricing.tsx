import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Check, ShoppingCart, Car, Bike } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
  link: string;
}

const pricingList: PricingProps[] = [
  {
    title: "Twin Pack",
    popular: PopularPlanType.NO,
    price: 199,
    description: "Perfect starter pack! Set of 2 premium car stickers with any characters you choose.",
    buttonText: "Buy on Amazon",
    benefitList: [
      "2 Premium QR Car Stickers",
      "Choose any 2 characters",
      "Waterproof & UV resistant", 
      "Lifetime QR support",
      "Privacy protected messaging",
      "Free delivery across India",
      "Save ₹99 vs individual",
    ],
    link: "https://amazon.in/ziddiqr-twin",
  },
  {
    title: "Car Pack (4)",  
    popular: PopularPlanType.YES,
    price: 349,
    description: "Most popular! Set of 4 car stickers - perfect for family cars or gifting friends.",
    buttonText: "Buy on Flipkart",
    benefitList: [
      "4 Premium QR Car Stickers",
      "Mix & match any characters",
      "Waterproof & UV resistant",
      "Lifetime QR support",
      "Privacy protected messaging", 
      "Premium gift box packaging",
      "Save ₹247 vs individual",
      "Perfect for family vehicles",
    ],
    link: "https://flipkart.com/ziddiqr-car-pack",
  },
  {
    title: "Ultimate Pack",
    popular: PopularPlanType.NO, 
    price: 449,
    description: "Complete solution! 4 car stickers + 2 bike stickers for all your vehicles.",
    buttonText: "Buy on Amazon",
    benefitList: [
      "4 Premium QR Car Stickers",
      "2 Premium QR Bike Stickers",
      "All character options available",
      "Waterproof & UV resistant",
      "Lifetime QR support", 
      "Privacy protected messaging",
      "Premium gift packaging",
      "Save ₹345 vs individual",
      "Complete vehicle coverage",
    ],
    link: "https://amazon.in/ziddiqr-ultimate",
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Simple{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Pricing
        </span>
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Choose your ZiddiQR pack. Mix & match any characters. <strong>Starting from ₹199</strong> 🏷️
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                <div className="flex items-center gap-2">
                  {pricing.title === "Ultimate Pack" && (
                    <div className="flex gap-1">
                      <Car className="w-4 h-4 text-primary" />
                      <Bike className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  {pricing.title !== "Ultimate Pack" && <Car className="w-4 h-4 text-primary" />}
                  {pricing.title}
                </div>
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">₹{pricing.price}</span>
                <span className="text-muted-foreground"> /pack</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button 
                asChild
                className="w-full"
              >
                <a href={pricing.link} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="mr-2 w-4 h-4" />
                  {pricing.buttonText}
                </a>
              </Button>
            </CardContent>

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
