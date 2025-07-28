import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";
import { Star, Quote, Users } from "lucide-react";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex justify-between items-start gap-6 w-full max-w-[900px] h-auto">
      {/* Customer Testimonial */}
      <Card className="flex-1 max-w-[280px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt="Preet Singh"
              src="https://i.pravatar.cc/150?img=2"
            />
            <AvatarFallback>PS</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Preet Singh</CardTitle>
            <CardDescription className="text-primary">
              Car Owner, Delhi
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="pb-2">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="relative">
            <Quote className="w-4 h-4 text-primary absolute -top-1 -left-1" />
            <p className="pl-3 italic text-sm">
              "Amazing quality! Waterproof and looks premium on my dashboard. Got contacted twice this month - privacy totally protected. Worth every rupee!"
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between items-center">
          <Badge variant="outline" className="text-xs">
            Verified Purchase
          </Badge>
          <span className="text-xs text-muted-foreground">2 weeks ago</span>
        </CardFooter>
      </Card>

      {/* Most Popular Pack - Updated */}
      <Card className="flex-1 max-w-[280px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-2 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Twin Pack
            </div>
            <Badge className="text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white">
              Most Popular
            </Badge>
          </CardTitle>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-primary">₹199</span>
            <span className="text-sm line-through text-muted-foreground">₹398</span>
            <span className="text-muted-foreground text-sm">/pack</span>
          </div>

          <CardDescription className="text-sm">
            <strong>Set of 2 Premium Car Stickers</strong> - Mix & match any characters! 
            Perfect for couples, family cars, or gift to friends. 
            <span className="text-green-600 font-medium">Save 50%!</span>
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-2">
          <div className="flex flex-wrap gap-1 mb-3">
            <Badge variant="secondary" className="text-xs">🚗 2 Stickers</Badge>
            <Badge variant="secondary" className="text-xs">🎨 Any Characters</Badge>
            <Badge variant="secondary" className="text-xs">💧 Waterproof</Badge>
          </div>
          
          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            🔥 Grab This Deal - ₹199
          </Button>
          
          <p className="text-xs text-center text-muted-foreground mt-2">
            ⚡ Limited Time: <strong>50% OFF</strong> • Free Delivery Across India
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
