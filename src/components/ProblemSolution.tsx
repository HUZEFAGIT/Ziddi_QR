import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { AlertTriangle, Shield, Sparkles, Users } from "lucide-react";

interface ProblemProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const problems: ProblemProps[] = [
  {
    icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
    title: "Unsafe Solutions",
    description: "Leaving phone numbers on dashboards is risky and exposes your privacy."
  },
  {
    icon: <Users className="w-8 h-8 text-orange-500" />,
    title: "Inconvenient Contact",
    description: "Writing notes, finding paper, or shouting in parking lots - not cool!"
  },
];

const solutions: ProblemProps[] = [
  {
    icon: <Shield className="w-8 h-8 text-green-500" />,
    title: "Privacy Protected",
    description: "QR se Judo, Personal Info ke bina - your details stay completely safe."
  },
  {
    icon: <Sparkles className="w-8 h-8 text-purple-500" />,
    title: "Style + Attitude",
    description: "Express your personality with 50+ desi characters. Style bhi, Safety bhi!"
  },
];

export const ProblemSolution = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            ZiddiQR?
          </span>
        </h2>
        <p className="text-xl text-muted-foreground">
          We solve real problems with Indian attitude and smart technology.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Problems Section */}
        <div>
          <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">
            ❌ Old Problems
          </h3>
          <div className="space-y-6">
            {problems.map((problem) => (
              <Card key={problem.title} className="border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {problem.icon}
                    {problem.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {problem.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div>
          <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">
            ✅ ZiddiQR Solutions
          </h3>
          <div className="space-y-6">
            {solutions.map((solution) => (
              <Card key={solution.title} className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {solution.icon}
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
