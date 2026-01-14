import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedButton from "@/components/animated-button";
import { ArrowRight, ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/seo";
import { toast } from "sonner";

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

const steps = [
  {
    id: 1,
    title: "Industry & Service",
    description: "Tell us about your business domain",
  },
  {
    id: 2,
    title: "Project Type",
    description: "What are you looking to build?",
  },
  {
    id: 3,
    title: "Current Stage",
    description: "Where are you in your journey?",
  },
  {
    id: 4,
    title: "Timeline",
    description: "When do you need this delivered?",
  },
  {
    id: 5,
    title: "Contact Details",
    description: "Let's get in touch",
  },
];

const industries = [
  { value: "ecommerce", label: "E-Commerce & Retail", icon: "🛍️" },
  { value: "saas", label: "SaaS & Software", icon: "💻" },
  { value: "healthcare", label: "Healthcare & Medical", icon: "🏥" },
  { value: "education", label: "Education & E-Learning", icon: "📚" },
  { value: "finance", label: "Finance & Fintech", icon: "💰" },
  { value: "realestate", label: "Real Estate & Property", icon: "🏢" },
  { value: "hospitality", label: "Hospitality & Travel", icon: "✈️" },
  { value: "other", label: "Other", icon: "🎯" },
];

const services = [
  { value: "web-app", label: "Web Application", icon: "🌐" },
  { value: "mobile-app", label: "Mobile Application", icon: "📱" },
  { value: "website", label: "Website", icon: "🖥️" },
  { value: "ecommerce", label: "E-Commerce Platform", icon: "🛒" },
  { value: "dashboard", label: "Dashboard & Analytics", icon: "📊" },
  { value: "api", label: "API & Backend", icon: "⚙️" },
];

const projectTypes = [
  {
    value: "full-product",
    label: "Build Full Product",
    description: "Complete end-to-end solution",
    icon: "🚀",
  },
  {
    value: "mvp",
    label: "Start With MVP",
    description: "Minimum viable product to test the market",
    icon: "⚡",
  },
  {
    value: "update",
    label: "Update Existing Product",
    description: "Enhance or modernize current solution",
    icon: "🔄",
  },
];

const currentStages = [
  {
    value: "idea",
    label: "I Have an Idea",
    description: "Starting from concept phase",
    icon: "💡",
  },
  {
    value: "design",
    label: "I Have Brand Design",
    description: "Design assets ready",
    icon: "🎨",
  },
  {
    value: "mvp",
    label: "I Have MVP",
    description: "Working prototype exists",
    icon: "🛠️",
  },
  {
    value: "complete",
    label: "I Have All of It",
    description: "Full specifications ready",
    icon: "✅",
  },
];

const timelines = [
  {
    value: "urgent",
    label: "Urgent",
    description: "Need it ASAP (1-2 months)",
    icon: "🔥",
  },
  {
    value: "standard",
    label: "Standard Need",
    description: "Normal timeline (2-4 months)",
    icon: "📅",
  },
  {
    value: "flexible",
    label: "No Hurry",
    description: "Flexible timeline (4+ months)",
    icon: "🌱",
  },
];

export default function CostEstimatePage() {
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

  const handleNext = () => {
    // Validation for each step
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

    if (currentStep < 5) {
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

    // Validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      // TODO: Replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted:", formData);
      toast.success("Thank you! We'll get back to you within 24 hours.");

      // Reset form or redirect
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = (currentStep / 5) * 100;

  return (
    <>
      <SEO
        title="Cost Estimate - Get Your Project Quote | Mastrovia"
        description="Get a personalized cost estimate for your digital project. Answer a few questions and we'll provide you with a detailed quote."
        keywords="cost estimate, project quote, web development pricing, app development cost"
      />

      <div className="min-h-screen bg-background py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Free Cost Estimation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold alumni-sans uppercase mb-4"
            >
              Get Your Project
              <br />
              <span className="text-primary italic">Estimate</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Answer a few quick questions and we'll provide you with a detailed
              cost estimate for your project.
            </motion.p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between mb-4">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`flex-1 text-center ${
                    step.id !== steps.length ? "mr-2" : ""
                  }`}
                >
                  <div
                    className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      currentStep >= step.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      step.id
                    )}
                  </div>
                  <p className="text-xs mt-2 font-medium hidden md:block">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Form Steps */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-border/40 bg-card/30 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12">
                  {/* Step 1: Industry & Service */}
                  {currentStep === 1 && (
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">
                          What's your industry?
                        </h2>
                        <p className="text-muted-foreground text-sm mb-6">
                          Select the industry that best describes your business
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {industries.map((industry) => (
                            <button
                              key={industry.value}
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  industry: industry.value,
                                })
                              }
                              className={`p-4 rounded-xl border-2 transition-all duration-300 text-left hover:border-primary/50 ${
                                formData.industry === industry.value
                                  ? "border-primary bg-primary/10"
                                  : "border-border/40 bg-background/50"
                              }`}
                            >
                              <div className="text-2xl mb-2">
                                {industry.icon}
                              </div>
                              <p className="text-sm font-medium">
                                {industry.label}
                              </p>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h2 className="text-2xl font-bold mb-2">
                          What service do you need?
                        </h2>
                        <p className="text-muted-foreground text-sm mb-6">
                          Choose the type of solution you're looking for
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {services.map((service) => (
                            <button
                              key={service.value}
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  service: service.value,
                                })
                              }
                              className={`p-4 rounded-xl border-2 transition-all duration-300 text-left hover:border-primary/50 ${
                                formData.service === service.value
                                  ? "border-primary bg-primary/10"
                                  : "border-border/40 bg-background/50"
                              }`}
                            >
                              <div className="text-2xl mb-2">
                                {service.icon}
                              </div>
                              <p className="text-sm font-medium">
                                {service.label}
                              </p>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Project Type */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">
                          What type of project?
                        </h2>
                        <p className="text-muted-foreground text-sm mb-6">
                          Select the scope of your project
                        </p>
                      </div>
                      <div className="space-y-4">
                        {projectTypes.map((type) => (
                          <button
                            key={type.value}
                            onClick={() =>
                              setFormData({
                                ...formData,
                                projectType: type.value,
                              })
                            }
                            className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left hover:border-primary/50 ${
                              formData.projectType === type.value
                                ? "border-primary bg-primary/10"
                                : "border-border/40 bg-background/50"
                            }`}
                          >
                            <div className="flex items-start gap-4">
                              <div className="text-3xl">{type.icon}</div>
                              <div className="flex-1">
                                <h3 className="text-lg font-bold mb-1">
                                  {type.label}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {type.description}
                                </p>
                              </div>
                              {formData.projectType === type.value && (
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Current Stage */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">
                          What's your current stage?
                        </h2>
                        <p className="text-muted-foreground text-sm mb-6">
                          Tell us where you are in your project journey
                        </p>
                      </div>
                      <div className="space-y-4">
                        {currentStages.map((stage) => (
                          <button
                            key={stage.value}
                            onClick={() =>
                              setFormData({
                                ...formData,
                                currentStage: stage.value,
                              })
                            }
                            className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left hover:border-primary/50 ${
                              formData.currentStage === stage.value
                                ? "border-primary bg-primary/10"
                                : "border-border/40 bg-background/50"
                            }`}
                          >
                            <div className="flex items-start gap-4">
                              <div className="text-3xl">{stage.icon}</div>
                              <div className="flex-1">
                                <h3 className="text-lg font-bold mb-1">
                                  {stage.label}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {stage.description}
                                </p>
                              </div>
                              {formData.currentStage === stage.value && (
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 4: Timeline */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">
                          What's your timeline?
                        </h2>
                        <p className="text-muted-foreground text-sm mb-6">
                          When do you need this project completed?
                        </p>
                      </div>
                      <div className="space-y-4">
                        {timelines.map((timeline) => (
                          <button
                            key={timeline.value}
                            onClick={() =>
                              setFormData({
                                ...formData,
                                timeline: timeline.value,
                              })
                            }
                            className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left hover:border-primary/50 ${
                              formData.timeline === timeline.value
                                ? "border-primary bg-primary/10"
                                : "border-border/40 bg-background/50"
                            }`}
                          >
                            <div className="flex items-start gap-4">
                              <div className="text-3xl">{timeline.icon}</div>
                              <div className="flex-1">
                                <h3 className="text-lg font-bold mb-1">
                                  {timeline.label}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                  {timeline.description}
                                </p>
                              </div>
                              {formData.timeline === timeline.value && (
                                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 5: Contact Details */}
                  {currentStep === 5 && (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">
                          Almost there! Let's connect
                        </h2>
                        <p className="text-muted-foreground text-sm mb-6">
                          Share your contact details so we can send you the
                          estimate
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Full Name{" "}
                            <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl border border-border/40 bg-background/50 focus:border-primary focus:outline-none transition-colors"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Email Address{" "}
                            <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 rounded-xl border border-border/40 bg-background/50 focus:border-primary focus:outline-none transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Phone Number{" "}
                            <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 rounded-xl border border-border/40 bg-background/50 focus:border-primary focus:outline-none transition-colors"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Additional Details (Optional)
                          </label>
                          <textarea
                            value={formData.details}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                details: e.target.value,
                              })
                            }
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl border border-border/40 bg-background/50 focus:border-primary focus:outline-none transition-colors resize-none"
                            placeholder="Tell us more about your project requirements..."
                          />
                        </div>
                      </div>

                      <div className="pt-4">
                        <AnimatedButton
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-6 text-sm font-bold uppercase tracking-wider rounded-xl"
                        >
                          {isSubmitting ? "Submitting..." : "Get My Estimate"}
                        </AnimatedButton>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* Navigation Buttons */}
              {currentStep < 5 && (
                <div className="flex justify-between mt-8">
                  <button
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                      currentStep === 1
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-muted"
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>

                  <AnimatedButton
                    onClick={handleNext}
                    className="flex items-center gap-2 px-8 py-3 rounded-xl"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </AnimatedButton>
                </div>
              )}

              {currentStep === 5 && (
                <div className="flex justify-start mt-8">
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium hover:bg-muted transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Summary Badge */}
          {currentStep > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 rounded-xl border border-border/40 bg-muted/20"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-muted-foreground">
                Your Selections
              </h3>
              <div className="flex flex-wrap gap-2">
                {formData.industry && (
                  <Badge variant="secondary" className="px-3 py-1">
                    {
                      industries.find((i) => i.value === formData.industry)
                        ?.label
                    }
                  </Badge>
                )}
                {formData.service && (
                  <Badge variant="secondary" className="px-3 py-1">
                    {services.find((s) => s.value === formData.service)?.label}
                  </Badge>
                )}
                {formData.projectType && (
                  <Badge variant="secondary" className="px-3 py-1">
                    {
                      projectTypes.find((p) => p.value === formData.projectType)
                        ?.label
                    }
                  </Badge>
                )}
                {formData.currentStage && (
                  <Badge variant="secondary" className="px-3 py-1">
                    {
                      currentStages.find(
                        (s) => s.value === formData.currentStage
                      )?.label
                    }
                  </Badge>
                )}
                {formData.timeline && (
                  <Badge variant="secondary" className="px-3 py-1">
                    {
                      timelines.find((t) => t.value === formData.timeline)
                        ?.label
                    }
                  </Badge>
                )}
              </div>
            </motion.div>
          )}

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
