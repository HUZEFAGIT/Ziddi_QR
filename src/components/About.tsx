import { Statistics } from "./Statistics";
import qr1 from "../assets/qr1.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={qr1}
            alt="ZiddiQR Dashboard Sticker on Car"
            className="w-full h-auto max-w-[400px] md:max-w-[450px] object-contain rounded-lg mx-auto"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  The Problem{" "}
                </span>
                We Solve
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                <strong>Difficulty contacting vehicle owners when:</strong>
              </p>
              <ul className="text-lg text-muted-foreground mt-2 space-y-2">
                <li>• A car is blocking someone</li>
                <li>• It's parked improperly</li>
                <li>• There's been minor damage or emergency</li>
                <li>• Traditional solutions are unsafe & not cool</li>
              </ul>
              <p className="text-lg font-semibold text-primary mt-4">
                ZiddiQR offers a <em>secure, stylish, and smart solution</em> 🚗✨
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
