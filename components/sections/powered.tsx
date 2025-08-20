// components/sections/powered.jsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Powered() {
  const techs = [
    "Stable Diffusion",
    "GPT-4",
    "DALL-E",
    "Midjourney",
    "Adobe Firefly",
    "RunwayML",
  ];
  return (
    <section className="py-16 bg-background relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-foreground">
            Powered by <span className="text-primary">Advanced AI</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Cutting-edge technology for professional brand generation
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {techs.map((tech, index) => (
            <Card key={index} className="font-medium text-xl px-6 py-3 rounded-xl border bg-muted text-foreground">
              {tech}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="text-lg font-bold border-primary text-primary hover:bg-primary/10">
            🤖 Learn About Our AI Technology
          </Button>
        </div>
      </div>
    </section>
  );
}