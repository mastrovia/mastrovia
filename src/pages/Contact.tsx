import { motion } from "motion/react";
import AnimatedButton from "../components/animated-button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Send,
  Mail,
  // MapPin,
  // Phone,
  Github,
  // Twitter,
  // Linkedin,
  Instagram,
} from "lucide-react";
import { toast } from "sonner";

const URL =
  "https://script.google.com/macros/s/AKfycbyKmZGV2PTPI_1NhkvAYDhnN9sdmdR4suMYuMwbTCCK_4pkjKuUkXrtAe0_MzjM85pX/exec";

export default function ContactPage() {
  const [data, setData] = useState<{ [key: string]: string }>({});
  const [submitDataLoading, setSubmitDataLoading] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email Us",
      value: "hello@mastrovia.com",
      href: "mailto:hello@mastrovia.com",
    },
    // {
    //   icon: MapPin,
    //   label: "Visit Us",
    //   value: "HSR Layout, Bengaluru, India",
    // },
    // {
    //   icon: Phone,
    //   label: "Call Us",
    //   value: "+91 (800) 123-4567",
    //   href: "tel:+918001234567",
    // },
  ];

  const socials = [
    // { icon: Twitter, href: "#" },
    // { icon: Linkedin, href: "#" },
    { icon: Github, href: "https://github.com/mastrovia" },
    { icon: Instagram, href: "https://instagram.com/mastrovia.dev" },
  ];

  const submitData = async () => {
    if (!data?.email && !data?.phone) return;
    if (!data?.query) return;

    try {
      setSubmitDataLoading(true);
      const formData = new FormData();
      for (const key of Object.keys(data)) formData.append(key, data[key]);

      const response = await fetch(URL, { method: "POST", body: formData });
      await response.json();

      setData({});
      toast.success("Message sent successfully!")
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.")
    } finally {
      setSubmitDataLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="container mx-auto px-4 max-w-7xl py-24 sm:py-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Side: Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h2 className="text-5xl sm:text-7xl font-bold alumni-sans uppercase italic leading-none tracking-tight">
              Ready to create <br />
              <span className="text-primary">something great?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md font-sans leading-relaxed">
              Whether you have a specific project in mind or just want to
              explore possibilities, we're here to help you navigate the digital
              landscape.
            </p>
          </div>

          <div className="space-y-8">
            {contactInfo.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-5 group"
              >
                <div className="bg-primary/5 p-4 rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-xl font-semibold hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-xl font-semibold">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6 pt-8">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Follow Our Journey
            </p>
            <div className="flex gap-4">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full -z-10" />
          <div className="bg-card border border-border/50 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rotate-45 translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-700" />

            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitData();
              }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground px-1">
                    Your Name
                  </label>
                  <Input
                    disabled={submitDataLoading}
                    className="h-14 bg-muted/30 border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/20 transition-all text-base px-5"
                    value={data?.name || ""}
                    onChange={(e) =>
                      setData((pre) => ({ ...pre, name: e.target.value }))
                    }
                    placeholder="John Wick"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground px-1">
                    Email Address
                  </label>
                  <Input
                    disabled={submitDataLoading}
                    type="email"
                    className="h-14 bg-muted/30 border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/20 transition-all text-base px-5"
                    value={data?.email || ""}
                    onChange={(e) =>
                      setData((pre) => ({
                        ...pre,
                        email: e.target.value.toLowerCase(),
                      }))
                    }
                    placeholder="john@wick.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground px-1">
                    Phone (Optional)
                  </label>
                  <Input
                    disabled={submitDataLoading}
                    className="h-14 bg-muted/30 border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/20 transition-all text-base px-5"
                    value={data?.phone || ""}
                    onChange={(e) =>
                      setData((pre) => ({ ...pre, phone: e.target.value }))
                    }
                    placeholder="+91 00000 00000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground px-1">
                    Subject
                  </label>
                  <Input
                    disabled={submitDataLoading}
                    className="h-14 bg-muted/30 border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/20 transition-all text-base px-5"
                    value={data?.websiteType || ""}
                    onChange={(e) =>
                      setData((pre) => ({
                        ...pre,
                        websiteType: e.target.value,
                      }))
                    }
                    placeholder="Web Development"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground px-1">
                  Tell us about your project
                </label>
                <Textarea
                  disabled={submitDataLoading}
                  rows={5}
                  className="bg-muted/30 border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-primary/20 transition-all text-base p-5 resize-none overflow-hidden"
                  value={data?.query || ""}
                  onChange={(e) =>
                    setData((pre) => ({ ...pre, query: e.target.value }))
                  }
                  placeholder="I have a vision for..."
                  required
                />
              </div>

              <AnimatedButton
                disabled={submitDataLoading}
                className="w-full h-16 text-base font-bold uppercase tracking-[0.2em] rounded-2xl group flex items-center justify-center gap-3 overflow-hidden"
              >
                <span>
                  {submitDataLoading ? "Sending Proposal..." : "Send Message"}
                </span>
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </AnimatedButton>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
