import Image from "next/image";
import { InfoLdg } from "@/types";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

interface InfoLandingProps {
  data: InfoLdg;
  reverse?: boolean;
}

export default function InfoLanding({ data, reverse = false }: InfoLandingProps) {
  return (
    <section className={`py-20 bg-background relative`}>
      <MaxWidthWrapper>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className={`flex-1 ${reverse ? 'order-2 md:order-1' : 'order-1'}`}> 
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              {data.title}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {data.description}
            </p>
            <ul className="mb-8 space-y-4">
              {data.list.map((item, index) => (
                <li key={index} className="flex items-center text-muted-foreground">
                  <span className="mr-3 text-green-500">✔</span>
                  {item.title}
                </li>
              ))}
            </ul>
            <Button size="lg" className="font-bold">
              Learn More
            </Button>
          </div>
          <div className={`flex-1 flex justify-center ${reverse ? 'order-1 md:order-2' : 'order-2'}`}> 
            <Card className="rounded-2xl shadow-2xl max-w-full w-[400px] overflow-hidden flex items-center justify-center">
              <div className="aspect-video w-full h-auto">
                <Image
                  className="object-cover w-full h-auto"
                  src={data.image}
                  alt={data.title}
                  width={1000}
                  height={500}
                  priority={true}
                />
              </div>
            </Card>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
