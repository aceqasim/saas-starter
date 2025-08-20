// components/sections/hero-landing.jsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroLanding() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Soft theme blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 size-96 bg-primary/20 rounded-full mix-blend-soft-light  blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 size-96 bg-secondary/20 rounded-full mix-blend-soft-light  blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/3 size-64 bg-accent/20 rounded-full mix-blend-soft-light  blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block px-6 py-2 mb-8 rounded-full bg-muted text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
            ✨ AI-Powered BrandKit Generator ✨
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-primary">🚀 Create Your </span> <span className="text-primary">Complete Brand Identity</span>  <span className="text-primary">in Seconds</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto">
            Generate stunning logos, color palettes, typography, brand guidelines, and marketing materials with our advanced AI technology. No design skills required.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
            <Button size="lg" className="text-xl font-bold">
              🚀 Generate Your BrandKit Now
            </Button>
            <Button variant="outline" size="lg" className="text-xl font-bold border-primary text-primary hover:bg-primary/10">
              🎬 Watch Demo
            </Button>
          </div>

          <div className="relative">
            <Card className="rounded-3xl bg-background/95 backdrop-blur-sm p-8">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="rounded-2xl border bg-muted flex flex-col items-center justify-center p-6">
                    <div className="text-5xl mb-4">🎨</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Logo Design</h3>
                    <p className="text-muted-foreground text-center">Unique logos tailored to your brand</p>
                  </div>
                  <div className="rounded-2xl border bg-muted flex flex-col items-center justify-center p-6">
                    <div className="text-5xl mb-4">🌈</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Color Palette</h3>
                    <p className="text-muted-foreground text-center">Harmonious color combinations</p>
                  </div>
                  <div className="rounded-2xl border bg-muted flex flex-col items-center justify-center p-6">
                    <div className="text-5xl mb-4">🔤</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Typography</h3>
                    <p className="text-muted-foreground text-center">Perfect font pairings</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Decorative blobs */}
            <div className="absolute -bottom-8 -right-8 size-32 bg-primary/30 rounded-full mix-blend-soft-light  blur-xl opacity-70 animate-pulse" />
            <div className="absolute -top-8 -left-8 size-40 bg-secondary/30 rounded-full mix-blend-soft-light  blur-xl opacity-70 animate-pulse" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}