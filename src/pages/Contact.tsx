import { motion } from "motion/react";
import AnimatedButton from "../components/animated-button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const URL =
  "https://script.google.com/macros/s/AKfycbyKmZGV2PTPI_1NhkvAYDhnN9sdmdR4suMYuMwbTCCK_4pkjKuUkXrtAe0_MzjM85pX/exec";

export default function ContactPage() {
  const [data, setData] = useState<{ [key: string]: string }>({});
  const [submitDataLoading, setSubmitDataLoading] = useState(false);

  const submitData = async () => {
    if (!data?.email && !data?.phone) return;
    if (!data?.query) return;

    try {
      setSubmitDataLoading(true);
      const formData = new FormData();
      for (const key of Object.keys(data)) formData.append(key, data[key]);

      const response = await fetch(URL, { method: "POST", body: formData });
      await response.json();

      // Reset form
      const resetData: { [key: string]: string } = {};
      Object.keys(data).forEach((key) => (resetData[key] = ""));
      setData(resetData);

      alert("Message sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    } finally {
      setSubmitDataLoading(false);
    }
  };

  return (
    <div id="contact" className="container mx-auto px-4 max-w-2xl py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-card border border-border p-8 md:p-12 rounded-3xl shadow-2xl relative"
      >
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground shadow-xl">
          <Send className="w-10 h-10" />
        </div>

        <div className="flex flex-col gap-8 mt-6">
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-bold alumni-sans uppercase tracking-tight">
              Let’s Start a Project
            </h2>
            <p className="text-muted-foreground text-sm">
              Ready to elevate your digital presence? Fill out the form below
              and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Name
              </label>
              <Input
                disabled={submitDataLoading}
                className="bg-muted/50 border-none focus-visible:ring-1 focus-visible:ring-primary"
                value={data?.name || ""}
                onChange={(e) =>
                  setData((pre) => ({ ...pre, name: e.target.value }))
                }
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground transition-all">
                Email *
              </label>
              <Input
                disabled={submitDataLoading}
                type="email"
                className="bg-muted/50 border-none"
                value={data?.email || ""}
                onChange={(e) =>
                  setData((pre) => ({
                    ...pre,
                    email: e.target.value.toLowerCase(),
                  }))
                }
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Phone
              </label>
              <Input
                disabled={submitDataLoading}
                className="bg-muted/50 border-none"
                value={data?.phone || ""}
                onChange={(e) =>
                  setData((pre) => ({ ...pre, phone: e.target.value }))
                }
                placeholder="+1 234 567 890"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Business Type
              </label>
              <Input
                disabled={submitDataLoading}
                className="bg-muted/50 border-none"
                value={data?.websiteType || ""}
                onChange={(e) =>
                  setData((pre) => ({ ...pre, websiteType: e.target.value }))
                }
                placeholder="E-commerce, SaaS, etc."
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Tell us about your project *
            </label>
            <Textarea
              disabled={submitDataLoading}
              rows={4}
              className="bg-muted/50 border-none resize-none"
              value={data?.query || ""}
              onChange={(e) =>
                setData((pre) => ({ ...pre, query: e.target.value }))
              }
              placeholder="I need a new website for my business..."
            />
          </div>

          <AnimatedButton
            disabled={
              (!data?.email && !data?.phone) ||
              !data?.query ||
              submitDataLoading
            }
            onClick={submitData}
            className="w-full py-8 text-lg font-bold uppercase tracking-widest"
          >
            {submitDataLoading ? "Sending..." : "Send Message"}
          </AnimatedButton>
        </div>
      </motion.div>
    </div>
  );
}
