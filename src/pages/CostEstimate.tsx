import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedButton from "@/components/animated-button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/seo";
import { toast } from "sonner";

const URL =
  "https://script.google.com/macros/s/AKfycbyKmZGV2PTPI_1NhkvAYDhnN9sdmdR4suMYuMwbTCCK_4pkjKuUkXrtAe0_MzjM85pX/exec";

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

const industries = [
  { value: "ecommerce", label: "E-Commerce & Retail" },
  { value: "saas", label: "SaaS & Software" },
  { value: "healthcare", label: "Healthcare & Medical" },
  { value: "education", label: "Education & E-Learning" },
  { value: "finance", label: "Finance & Fintech" },
  { value: "realestate", label: "Real Estate & Property" },
  { value: "hospitality", label: "Hospitality & Travel" },
  { value: "other", label: "Other" },
];

const services = [
  { value: "web-app", label: "Web Application" },
  { value: "mobile-app", label: "Mobile Application" },
  { value: "website", label: "Website" },
  { value: "ecommerce", label: "E-Commerce Platform" },
  { value: "dashboard", label: "Dashboard & Analytics" },
  { value: "api", label: "API & Backend" },
];

const projectTypes = [
  { value: "full-product", label: "Build Full Product" },
  { value: "mvp", label: "Start With MVP" },
  { value: "update", label: "Update Existing Product" },
];

const currentStages = [
  { value: "idea", label: "I Have an Idea" },
  { value: "design", label: "I Have Brand Design" },
  { value: "mvp", label: "I Have MVP" },
  { value: "complete", label: "I Have Everything Ready" },
];

const timelines = [
  { value: "urgent", label: "Urgent (1-2 months)" },
  { value: "standard", label: "Standard (2-4 months)" },
  { value: "flexible", label: "Flexible (4+ months)" },
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

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

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
      // Prepare form data for Google Apps Script
      const submitFormData = new FormData();
      submitFormData.append("name", formData.name);
      submitFormData.append("email", formData.email.toLowerCase());
      submitFormData.append("phone", formData.phone);

      // Combine all project details into the query field
      const projectDetails = `
Cost Estimate Request:
Industry: ${industries.find((i) => i.value === formData.industry)?.label}
Service: ${services.find((s) => s.value === formData.service)?.label}
Project Type: ${
        projectTypes.find((p) => p.value === formData.projectType)?.label
      }
Current Stage: ${
        currentStages.find((s) => s.value === formData.currentStage)?.label
      }
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
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Cost Calculator - Get Your Project Estimate | Mastrovia"
        description="Calculate the cost of your digital project. Get an instant estimate based on your requirements."
        keywords="cost calculator, project estimate, web development pricing, app development cost"
      />

      <div className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Project Cost Calculator
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Answer a few questions to get your personalized estimate
            </motion.p>
          </div>

          {/* Main Content - 2 Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Placeholder / Results */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:sticky lg:top-24"
            >
              <Card className="border-border bg-card overflow-hidden">
                <CardContent className="p-0">
                  {/* Placeholder Image Area */}
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border-b border-border">
                    <div className="text-center p-8">
                      <div className="text-6xl font-bold text-primary/20 mb-4">
                        {currentStep < 5 ? "?" : "✓"}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {currentStep < 5
                          ? "Complete the form to see your estimate"
                          : "Almost there! Just need your contact details"}
                      </p>
                    </div>
                  </div>

                  {/* Summary Section */}
                  <div className="p-8">
                    <h3 className="text-lg font-semibold mb-4">Your Project</h3>
                    <div className="space-y-3 text-sm">
                      {formData.industry && (
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">
                            Industry
                          </span>
                          <span className="font-medium">
                            {
                              industries.find(
                                (i) => i.value === formData.industry
                              )?.label
                            }
                          </span>
                        </div>
                      )}
                      {formData.service && (
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Service</span>
                          <span className="font-medium">
                            {
                              services.find((s) => s.value === formData.service)
                                ?.label
                            }
                          </span>
                        </div>
                      )}
                      {formData.projectType && (
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">
                            Project Type
                          </span>
                          <span className="font-medium">
                            {
                              projectTypes.find(
                                (p) => p.value === formData.projectType
                              )?.label
                            }
                          </span>
                        </div>
                      )}
                      {formData.currentStage && (
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">
                            Current Stage
                          </span>
                          <span className="font-medium">
                            {
                              currentStages.find(
                                (s) => s.value === formData.currentStage
                              )?.label
                            }
                          </span>
                        </div>
                      )}
                      {formData.timeline && (
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">
                            Timeline
                          </span>
                          <span className="font-medium">
                            {
                              timelines.find(
                                (t) => t.value === formData.timeline
                              )?.label
                            }
                          </span>
                        </div>
                      )}
                    </div>

                    {currentStep === 5 && (
                      <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                        <p className="text-sm text-muted-foreground">
                          We'll send you a detailed cost breakdown and project
                          proposal to your email.
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Calculator Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-border bg-card">
                <CardContent className="p-8">
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">
                        Step {currentStep} of {totalSteps}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {Math.round(progress)}% Complete
                      </span>
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
                      transition={{ duration: 0.2 }}
                      className="min-h-[400px]"
                    >
                      {/* Step 1: Industry & Service */}
                      {currentStep === 1 && (
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-xl font-semibold mb-2">
                              What industry are you in?
                            </h2>
                            <p className="text-sm text-muted-foreground mb-4">
                              Select your business domain
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                              {industries.map((industry) => (
                                <button
                                  key={industry.value}
                                  type="button"
                                  onClick={() =>
                                    setFormData({
                                      ...formData,
                                      industry: industry.value,
                                    })
                                  }
                                  className={`px-4 py-3 text-sm font-medium rounded-lg border-2 transition-all text-left ${
                                    formData.industry === industry.value
                                      ? "border-primary bg-primary/5"
                                      : "border-border hover:border-primary/50"
                                  }`}
                                >
                                  {industry.label}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h2 className="text-xl font-semibold mb-2">
                              What service do you need?
                            </h2>
                            <p className="text-sm text-muted-foreground mb-4">
                              Choose the type of solution
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                              {services.map((service) => (
                                <button
                                  key={service.value}
                                  type="button"
                                  onClick={() =>
                                    setFormData({
                                      ...formData,
                                      service: service.value,
                                    })
                                  }
                                  className={`px-4 py-3 text-sm font-medium rounded-lg border-2 transition-all text-left ${
                                    formData.service === service.value
                                      ? "border-primary bg-primary/5"
                                      : "border-border hover:border-primary/50"
                                  }`}
                                >
                                  {service.label}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Project Type */}
                      {currentStep === 2 && (
                        <div className="space-y-4">
                          <div>
                            <h2 className="text-xl font-semibold mb-2">
                              What's your project scope?
                            </h2>
                            <p className="text-sm text-muted-foreground mb-4">
                              Select the type of project
                            </p>
                          </div>
                          <div className="space-y-3">
                            {projectTypes.map((type) => (
                              <button
                                key={type.value}
                                type="button"
                                onClick={() =>
                                  setFormData({
                                    ...formData,
                                    projectType: type.value,
                                  })
                                }
                                className={`w-full px-6 py-4 text-left font-medium rounded-lg border-2 transition-all ${
                                  formData.projectType === type.value
                                    ? "border-primary bg-primary/5"
                                    : "border-border hover:border-primary/50"
                                }`}
                              >
                                {type.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Step 3: Current Stage */}
                      {currentStep === 3 && (
                        <div className="space-y-4">
                          <div>
                            <h2 className="text-xl font-semibold mb-2">
                              Where are you starting from?
                            </h2>
                            <p className="text-sm text-muted-foreground mb-4">
                              Tell us your current stage
                            </p>
                          </div>
                          <div className="space-y-3">
                            {currentStages.map((stage) => (
                              <button
                                key={stage.value}
                                type="button"
                                onClick={() =>
                                  setFormData({
                                    ...formData,
                                    currentStage: stage.value,
                                  })
                                }
                                className={`w-full px-6 py-4 text-left font-medium rounded-lg border-2 transition-all ${
                                  formData.currentStage === stage.value
                                    ? "border-primary bg-primary/5"
                                    : "border-border hover:border-primary/50"
                                }`}
                              >
                                {stage.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Step 4: Timeline */}
                      {currentStep === 4 && (
                        <div className="space-y-4">
                          <div>
                            <h2 className="text-xl font-semibold mb-2">
                              What's your timeline?
                            </h2>
                            <p className="text-sm text-muted-foreground mb-4">
                              When do you need this completed?
                            </p>
                          </div>
                          <div className="space-y-3">
                            {timelines.map((timeline) => (
                              <button
                                key={timeline.value}
                                type="button"
                                onClick={() =>
                                  setFormData({
                                    ...formData,
                                    timeline: timeline.value,
                                  })
                                }
                                className={`w-full px-6 py-4 text-left font-medium rounded-lg border-2 transition-all ${
                                  formData.timeline === timeline.value
                                    ? "border-primary bg-primary/5"
                                    : "border-border hover:border-primary/50"
                                }`}
                              >
                                {timeline.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Step 5: Contact Details */}
                      {currentStep === 5 && (
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div>
                            <h2 className="text-xl font-semibold mb-2">
                              Where should we send your estimate?
                            </h2>
                            <p className="text-sm text-muted-foreground mb-6">
                              Enter your contact details to receive the detailed
                              cost breakdown
                            </p>
                          </div>

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
                                setFormData({
                                  ...formData,
                                  name: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
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
                              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
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
                              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors"
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
                              rows={3}
                              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors resize-none"
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

                  {/* Navigation Buttons */}
                  {currentStep < 5 && (
                    <div className="flex justify-between mt-8 pt-6 border-t border-border">
                      <button
                        onClick={handleBack}
                        disabled={currentStep === 1}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
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
                        className="flex items-center gap-2 px-8 py-3"
                      >
                        Continue
                        <ArrowRight className="w-4 h-4" />
                      </AnimatedButton>
                    </div>
                  )}

                  {currentStep === 5 && (
                    <div className="flex justify-start mt-8 pt-6 border-t border-border">
                      <button
                        onClick={handleBack}
                        className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium hover:bg-muted transition-all"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                      </button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
