// components/sections/testimonials.jsx
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Rivera",
      role: "Startup Founder",
      content: "BrandKit Generator saved us weeks of design work and thousands in agency fees. We had a complete brand identity in minutes that looked like it was created by a top design firm.",
      avatar: "AR",
      company: "TechStart Inc."
    },
    {
      name: "Sophie Chen",
      role: "Marketing Director",
      content: "The AI-generated brand guidelines were incredibly professional. Our team was able to implement them across all our marketing materials immediately. The consistency is amazing!",
      avatar: "SC",
      company: "GrowthCo"
    },
    {
      name: "Marcus Johnson",
      role: "Freelance Designer",
      content: "As a designer, I was skeptical at first, but this tool has become an essential part of my workflow. It helps me explore creative directions I wouldn't have considered and saves me hours of work.",
      avatar: "MJ",
      company: "DesignStudio"
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Loved by <span className="text-primary">Brands Worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See what our customers have to say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="rounded-2xl border bg-muted p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="size-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">{testimonial.name}</h3>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                    <p className="text-primary text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-6">"{testimonial.content}"</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="size-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="text-xl font-bold">
            🌟 Join Our Happy Customers
          </Button>
        </div>
      </div>
    </section>
  );
}