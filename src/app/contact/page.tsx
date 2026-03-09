import ContactClient from "./ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Mastrovia",
  description: "Get in touch with Mastrovia for your next big digital project. We scale brands through high-performance digital architecture.",
};

export default function ContactPage() {
  return <ContactClient />;
}
