// components/sections/preview-landing.jsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PreviewLanding() {
  const brandElements = [
    { title: "Logo Design", desc: "Unique logos tailored to your brand", icon: "🎨" },
    { title: "Color Palette", desc: "Harmonious color combinations", icon: "🌈" },
    { title: "Typography", desc: "Perfect font pairings", icon: "🔤" },
    { title: "Brand Guidelines", desc: "Complete style documentation", icon: "📋" },
    { title: "Social Media Kits", desc: "Ready-to-use templates", icon: "📱" },
    { title: "Business Cards", desc: "Professional card designs", icon: "💳" },
    // { title: "Letterheads", desc: "Formal document templates", icon: "📄" },
    // { title: "Email Signatures", desc: "Professional email templates", icon: "✉️" },
    // { title: "Presentation Templates", desc: "Stunning slide designs", icon: "📊" }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Everything You Need for a <span className="text-primary">Complete Brand</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our AI generates all the essential brand elements in seconds, saving you weeks of design work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandElements.map((element, index) => (
            <Card key={index} className="rounded-2xl border bg-muted p-8 flex flex-col items-center">
              <CardContent className="flex flex-col items-center p-0">
                <div className="text-5xl mb-4">{element.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{element.title}</h3>
                <p className="text-muted-foreground text-center">{element.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="text-lg font-bold">
            🎨 Generate Your Complete BrandKit
          </Button>
        </div>
      </div>
    </section>
  );
}