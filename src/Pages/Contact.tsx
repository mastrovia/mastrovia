import { motion } from "motion/react";
import Button from "../Components/Button";
import { useState } from "react";

const URL =
  "https://script.google.com/macros/s/AKfycbyKmZGV2PTPI_1NhkvAYDhnN9sdmdR4suMYuMwbTCCK_4pkjKuUkXrtAe0_MzjM85pX/exec";

export default function ContactPage() {
  const [data, setData] = useState<{ [key: string]: string }>({});
  const [submitDataLoading, setSubmitDataLoading] = useState(false);

  const submitData = async () => {
    if (!data?.email && !data?.phone) return console.log("Invalid entry");
    if (!data?.query) return console.log("Invalid entry");

    try {
      setSubmitDataLoading(true);
      const formData = new FormData();
      for (const key of Object.keys(data)) formData.append(key, data[key]);
      const response = await fetch(URL, { method: "POST", body: formData });
      console.log(await response.json());
      for (const key of Object.keys(data)) setData((pre) => ({ ...pre, [key]: "" }));
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitDataLoading(false);
    }
  };

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto max-w-xl px-4 py-10 flex flex-row items-center gap-10 h-[80vh] min-h-max max-h-[600px]"
    >
      <div className="w-[100%] flex flex-col gap-5">
        <h1 className="text-center font-bold text-5xl uppercase alumni-sans">Let’s talk</h1>
        <p className="text-center dim">
          Have an inquiry or some feedback for us? <br />
          Fill out form below to contact our team
        </p>
        <div className="flex flex-col gap-2">
          <input
            disabled={submitDataLoading}
            type="text"
            className="w-full border border-[var(--border)] py-3 px-4"
            value={data?.name}
            onChange={(e) => setData((pre) => ({ ...pre, name: e?.target.value }))}
            placeholder="Name"
          />
          <input
            disabled={submitDataLoading}
            type="text"
            className="w-full border border-[var(--border)] py-3 px-4"
            value={data?.email}
            onChange={(e) => setData((pre) => ({ ...pre, email: e?.target.value?.toLowerCase() }))}
            placeholder="Email *"
          />
          <input
            disabled={submitDataLoading}
            type="text"
            className="w-full border border-[var(--border)] py-3 px-4"
            value={data?.phone}
            onChange={(e) => setData((pre) => ({ ...pre, phone: e?.target.value }))}
            placeholder="Phone *"
          />
          <input
            disabled={submitDataLoading}
            type="text"
            className="w-full border border-[var(--border)] py-3 px-4"
            value={data?.websiteType}
            onChange={(e) => setData((pre) => ({ ...pre, websiteType: e?.target.value }))}
            placeholder="Website/Business type"
          />
          <input
            disabled={submitDataLoading}
            type="text"
            className="w-full border border-[var(--border)] py-3 px-4"
            value={data?.currentWebsite}
            onChange={(e) => setData((pre) => ({ ...pre, currentWebsite: e?.target.value }))}
            placeholder="Current website (if any)"
          />
          <textarea
            disabled={submitDataLoading}
            className="w-full border border-[var(--border)] py-3 px-4"
            value={data?.query}
            onChange={(e) => setData((pre) => ({ ...pre, query: e?.target.value }))}
            placeholder="How can we help you ? *"
          />
        </div>
        <Button
          disabled={(!data?.email && !data?.phone) || !data?.query || submitDataLoading}
          onClick={() => submitData()}
        >
          Submit
        </Button>
      </div>
    </motion.div>
  );
}
