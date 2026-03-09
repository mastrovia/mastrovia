import CostEstimateClient from "./CostEstimateClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cost Calculator - Get Your Project Estimate | Mastrovia",
  description: "Calculate the cost of your digital project. Get an instant estimate based on your requirements.",
  keywords: "cost calculator, project estimate, web development pricing, app development cost",
};

export default function CostEstimatePage() {
  return <CostEstimateClient />;
}
