import AnimatedButton from "./animated-button";
import { Check, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PricingCard() {
  const availablePoints = [
    "Static website",
    "Integration help",
    "Complete documentation",
  ];
  const unAvailablePoints = [
    "24x7 phone & email support",
    "20GB Cloud storage",
    "API Access",
    "Sketch Files",
  ];

  return (
    <Card className="w-full max-w-sm border-2 border-border/50 hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-sans">
          Basic Plan
        </CardTitle>
        <CardDescription>
          Perfect for small projects and startups.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-extrabold tracking-tight">$49</span>
          <span className="text-muted-foreground">/month</span>
        </div>

        <ul className="space-y-3">
          {availablePoints.map((point, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm">
              <div className="bg-primary/10 p-1 rounded-full">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-foreground/80">{point}</span>
            </li>
          ))}
          {unAvailablePoints.map((point, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 text-sm opacity-50"
            >
              <X className="w-4 h-4 ml-0.5" />
              <span className="line-through">{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <AnimatedButton className="w-full py-6">Choose Plan</AnimatedButton>
      </CardFooter>
    </Card>
  );
}
