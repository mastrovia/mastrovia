import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO of TechNext",
    content:
      "Mastrovia transformed our digital presence with a speed and aesthetic level we didn't think was possible in this industry.",
    avatar: "https://i.pravatar.cc/150?u=john",
    initials: "JD",
  },
  {
    name: "Jane Smith",
    role: "Founder of CreativeFlow",
    content:
      "The level of design detail and performance optimization they bring to the table is simply industry-leading. Highly recommended.",
    avatar: "https://i.pravatar.cc/150?u=jane",
    initials: "JS",
  },
  {
    name: "Alex Johnson",
    role: "CTO of GlobalTech",
    content:
      "Exceptional technical partners. They don't just develop; they architect scalable solutions that last. A true asset to our team.",
    avatar: "https://i.pravatar.cc/150?u=alex",
    initials: "AJ",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-muted/20 relative overflow-hidden"
    >
      {/* Dynamic background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-7xl font-bold alumni-sans uppercase tracking-tight">
            Client <span className="text-primary italic">Voices</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-sans">
            Don't just take our word for it. Here is what leading industry
            experts have to say about working with Mastrovia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/40 bg-background/50 backdrop-blur-md p-8 rounded-[2rem] hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col justify-between">
                <CardContent className="p-0 space-y-8">
                  <div className="bg-primary/10 w-12 h-12 rounded-2xl flex items-center justify-center">
                    <Quote className="w-6 h-6 text-primary fill-primary/20" />
                  </div>

                  <p className="text-lg font-medium leading-[1.6] italic opacity-90 font-sans">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4 pt-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback className="bg-primary/10 text-primary font-bold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <h4 className="font-bold text-sm tracking-tight">
                        {testimonial.name}
                      </h4>
                      <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
