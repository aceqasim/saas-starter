// components/sections/features.jsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Features() {
  const features = [
    {
      title: "AI-Powered Generation",
      desc: "Our advanced AI creates unique brand elements tailored to your specifications",
      icon: "🤖",
      cta: "Try AI Generation"
    },
    {
      title: "Complete Brand Identity",
      desc: "Logos, colors, fonts, and guidelines in one cohesive package",
      icon: "🎯",
      cta: "Explore Brand Elements"
    },
    {
      title: "Customization Options",
      desc: "Fine-tune every element to match your vision perfectly",
      icon: "🔧",
      cta: "Customize Your Brand"
    },
    {
      title: "Multiple Export Formats",
      desc: "Get your brandkit in all the formats you need for web and print",
      icon: "📤",
      cta: "See Export Options"
    },
    {
      title: "Brand Consistency",
      desc: "Ensure your brand looks professional across all platforms",
      icon: "✅",
      cta: "Ensure Consistency"
    },
    {
      title: "Rapid Iteration",
      desc: "Generate multiple variations quickly to find the perfect fit",
      icon: "🚀",
      cta: "Generate Variations"
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Powerful <span className="text-primary">Features</span> for Modern Brands
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to create a professional brand identity in minutes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="rounded-2xl border bg-muted p-8 flex flex-col h-full">
              <CardContent className="flex flex-col h-full p-0">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground mb-6 grow">{feature.desc}</p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  {feature.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="text-xl font-bold">
            🚀 Start Creating Your BrandKit
          </Button>
        </div>
      </div>
    </section>
  );
}