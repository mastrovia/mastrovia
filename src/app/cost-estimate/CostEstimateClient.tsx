"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import AnimatedButton from "@/components/common/animated-button";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const URL =
  "https://script.google.com/macros/s/AKfycbyKmZGV2PTPI_1NhkvAYDhnN9sdmdR4suMYuMwbTCCK_4pkjKuUkXrtAe0_MzjM85pX/exec";

import { industries, services, projectTypes, currentStages, timelines } from "@/data/calculatorData";

interface FormData {
  industry: string;
  service: string;
  projectType: string;
  currentStage: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  details: string;
}

// Per-step editorial context shown in the left panel.
const stepMeta = [
  { kicker: "Tell us where you operate", title: "Industry & service" },
  { kicker: "Define the shape of the work", title: "Project scope" },
  { kicker: "Show us your starting line", title: "Current stage" },
  { kicker: "Set the pace", title: "Timeline" },
  { kicker: "Almost done", title: "Your details" },
];

// ---- Reusable option card -----------------------------------------------
function OptionCard({
  selected,
  onClick,
  label,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`group relative flex items-center justify-between gap-3 rounded-2xl border px-5 py-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        selected
          ? "border-primary bg-primary/[0.06] ring-1 ring-primary/40"
          : "border-border/70 hover:border-foreground/30 hover:bg-muted/40"
      }`}
    >
      <span
        className={`text-sm sm:text-base font-medium tracking-tight transition-colors ${
          selected ? "text-foreground" : "text-foreground/75"
        }`}
      >
        {label}
      </span>
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
          selected
            ? "border-primary bg-primary text-primary-foreground scale-100"
            : "border-border/80 scale-90"
        }`}
      >
        <Check
          className={`h-3 w-3 transition-opacity duration-200 ${
            selected ? "opacity-100" : "opacity-0"
          }`}
        />
      </span>
    </button>
  );
}

export default function CostEstimateClient() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    industry: "",
    service: "",
    projectType: "",
    currentStage: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  // Running "brief" of selections for the left panel.
  const brief = [
    { label: "Industry", value: industries.find((i) => i.value === formData.industry)?.label },
    { label: "Service", value: services.find((s) => s.value === formData.service)?.label },
    { label: "Scope", value: projectTypes.find((p) => p.value === formData.projectType)?.label },
    { label: "Stage", value: currentStages.find((s) => s.value === formData.currentStage)?.label },
    { label: "Timeline", value: timelines.find((t) => t.value === formData.timeline)?.label },
  ].filter((b) => b.value);

  const handleNext = () => {
    if (currentStep === 1 && (!formData.industry || !formData.service)) {
      toast.error("Please select both industry and service");
      return;
    }
    if (currentStep === 2 && !formData.projectType) {
      toast.error("Please select a project type");
      return;
    }
    if (currentStep === 3 && !formData.currentStage) {
      toast.error("Please select your current stage");
      return;
    }
    if (currentStep === 4 && !formData.timeline) {
      toast.error("Please select a timeline");
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const submitFormData = new FormData();
      submitFormData.append("name", formData.name);
      submitFormData.append("email", formData.email.toLowerCase());
      submitFormData.append("phone", formData.phone);

      const projectDetails = `
Cost Estimate Request:
Industry: ${industries.find((i) => i.value === formData.industry)?.label}
Service: ${services.find((s) => s.value === formData.service)?.label}
Project Type: ${projectTypes.find((p) => p.value === formData.projectType)?.label}
Current Stage: ${currentStages.find((s) => s.value === formData.currentStage)?.label}
Timeline: ${timelines.find((t) => t.value === formData.timeline)?.label}
${formData.details ? `\nAdditional Details: ${formData.details}` : ""}
      `.trim();

      submitFormData.append("query", projectDetails);
      submitFormData.append("websiteType", "Cost Estimate Request");

      const response = await fetch(URL, {
        method: "POST",
        body: submitFormData,
      });
      await response.json();

      toast.success(
        "Thank you! We'll send you the detailed estimate within 24 hours."
      );

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const meta = stepMeta[currentStep - 1];
  const inputClass =
    "w-full rounded-2xl border border-border/70 bg-background/60 px-4 py-3.5 text-base tracking-tight transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 placeholder:text-muted-foreground/60";

  return (
    <main className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-background text-foreground">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 right-0 h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[30rem] w-[30rem] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Top row */}
        <div className="flex items-center justify-between mb-10 sm:mb-16">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back home
          </Link>
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Project Estimate
          </span>
        </div>

        {/* Mobile compact header */}
        <div className="lg:hidden mb-8">
          <div className="flex items-end justify-between mb-3">
            <span className="font-alumni font-semibold leading-none text-foreground text-6xl">
              {String(currentStep).padStart(2, "0")}
              <span className="text-2xl text-muted-foreground align-top">/{String(totalSteps).padStart(2, "0")}</span>
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground pb-2">
              {meta.kicker}
            </span>
          </div>
          <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-full bg-primary"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">
          {/* LEFT — editorial panel (desktop) */}
          <div className="hidden lg:flex lg:sticky lg:top-24 flex-col gap-10">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                {meta.kicker}
              </p>
              <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="font-alumni font-semibold leading-[0.78] tracking-tight text-foreground text-[10rem] xl:text-[13rem]"
                  >
                    {String(currentStep).padStart(2, "0")}
                  </motion.div>
                </AnimatePresence>
              </div>
              <p className="mt-2 font-alumni text-2xl text-muted-foreground">
                of {String(totalSteps).padStart(2, "0")} — {meta.title}
              </p>
            </div>

            {/* Progress */}
            <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full bg-primary"
                initial={false}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>

            {/* Running brief */}
            <div className="min-h-[6rem]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/50 mb-4">
                Your brief
              </p>
              {brief.length === 0 ? (
                <p className="text-sm text-muted-foreground font-sans max-w-xs leading-relaxed">
                  As you answer, your project brief takes shape here.
                </p>
              ) : (
                <ul className="space-y-2.5">
                  <AnimatePresence initial={false}>
                    {brief.map((item) => (
                      <motion.li
                        key={item.label}
                        layout
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-baseline justify-between gap-4 border-b border-border/40 pb-2.5"
                      >
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">
                          {item.label}
                        </span>
                        <span className="text-sm font-medium tracking-tight text-right">
                          {item.value}
                        </span>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>
          </div>

          {/* RIGHT — active step */}
          <div className="min-h-[28rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Step 1: Industry & Service */}
                {currentStep === 1 && (
                  <div className="space-y-10">
                    <div>
                      <h2 className="text-3xl sm:text-4xl tracking-tight max-w-xl mb-2">
                        What industry are you in?
                      </h2>
                      <p className="text-muted-foreground font-sans mb-6">
                        Select your business domain.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {industries.map((industry) => (
                          <OptionCard
                            key={industry.value}
                            label={industry.label}
                            selected={formData.industry === industry.value}
                            onClick={() => setFormData({ ...formData, industry: industry.value })}
                          />
                        ))}
                      </div>
                    </div>

                    <div>
                      <h2 className="text-3xl sm:text-4xl tracking-tight max-w-xl mb-2">
                        What service do you need?
                      </h2>
                      <p className="text-muted-foreground font-sans mb-6">
                        Choose the type of solution.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {services.map((service) => (
                          <OptionCard
                            key={service.value}
                            label={service.label}
                            selected={formData.service === service.value}
                            onClick={() => setFormData({ ...formData, service: service.value })}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Project Type */}
                {currentStep === 2 && (
                  <div>
                    <h2 className="text-3xl sm:text-4xl tracking-tight max-w-xl mb-2">
                      What&apos;s your project scope?
                    </h2>
                    <p className="text-muted-foreground font-sans mb-6">
                      Select the type of engagement.
                    </p>
                    <div className="grid gap-3">
                      {projectTypes.map((type) => (
                        <OptionCard
                          key={type.value}
                          label={type.label}
                          selected={formData.projectType === type.value}
                          onClick={() => setFormData({ ...formData, projectType: type.value })}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Current Stage */}
                {currentStep === 3 && (
                  <div>
                    <h2 className="text-3xl sm:text-4xl tracking-tight max-w-xl mb-2">
                      Where are you starting from?
                    </h2>
                    <p className="text-muted-foreground font-sans mb-6">
                      Tell us your current stage.
                    </p>
                    <div className="grid gap-3">
                      {currentStages.map((stage) => (
                        <OptionCard
                          key={stage.value}
                          label={stage.label}
                          selected={formData.currentStage === stage.value}
                          onClick={() => setFormData({ ...formData, currentStage: stage.value })}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Timeline */}
                {currentStep === 4 && (
                  <div>
                    <h2 className="text-3xl sm:text-4xl tracking-tight max-w-xl mb-2">
                      What&apos;s your timeline?
                    </h2>
                    <p className="text-muted-foreground font-sans mb-6">
                      When do you need this completed?
                    </p>
                    <div className="grid gap-3">
                      {timelines.map((timeline) => (
                        <OptionCard
                          key={timeline.value}
                          label={timeline.label}
                          selected={formData.timeline === timeline.value}
                          onClick={() => setFormData({ ...formData, timeline: timeline.value })}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 5: Contact Details */}
                {currentStep === 5 && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="mb-2">
                      <h2 className="text-3xl sm:text-4xl tracking-tight max-w-xl mb-2">
                        Where should we send it?
                      </h2>
                      <p className="text-muted-foreground font-sans">
                        Enter your details and we&apos;ll send the detailed breakdown within 24 hours.
                      </p>
                    </div>

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={inputClass}
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputClass}
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={inputClass}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <label htmlFor="details" className="block text-sm font-medium mb-2">
                        Additional Details <span className="text-muted-foreground font-normal">(optional)</span>
                      </label>
                      <textarea
                        id="details"
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        rows={3}
                        className={`${inputClass} resize-none`}
                        placeholder="Any specific requirements..."
                      />
                    </div>

                    <AnimatedButton
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 text-sm font-semibold uppercase tracking-wide"
                    >
                      {isSubmitting ? "Submitting..." : "Get My Estimate"}
                    </AnimatedButton>
                  </form>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            {currentStep < 5 ? (
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-border/50">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all ${
                    currentStep === 1
                      ? "opacity-40 cursor-not-allowed"
                      : "hover:bg-muted"
                  }`}
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>

                <AnimatedButton onClick={handleNext} className="inline-flex items-center gap-2 px-8 py-3">
                  Continue <ArrowRight className="h-4 w-4" />
                </AnimatedButton>
              </div>
            ) : (
              <div className="flex justify-start mt-10 pt-6 border-t border-border/50">
                <button
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium hover:bg-muted transition-all"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
