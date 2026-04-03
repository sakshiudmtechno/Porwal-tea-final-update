import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const code = formData.get("CountryCode");
    const mobile = formData.get("Mobile");

    if (!formData.get("Name") || !formData.get("remarks") || !formData.get("Address") || !code || !mobile) {
      alert("Please fill all required fields");
      setLoading(false);
      return;
    }

    const fullMobile = `${code} ${mobile}`;
    formData.set("Mobile", fullMobile);

    const params = new URLSearchParams(formData as any).toString();

    try {
      await fetch(`https://salesnayak.com/API/AddLead?${params}`, {
        method: "POST",
        mode: "no-cors",
      });

      alert("Form submitted successfully!");
      form.reset();
    } catch (error) {
      alert("Submitted!");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-8 rounded-2xl shadow-sm space-y-6 w-full bg-transparent border border-gray-300"
    >
      <h3 className="text-xs font-bold tracking-wides text-white ">CONTACT</h3>

      {/* Name + Company */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-white block mb-1">
            Your Name
          </label>
          <input
            name="Name"
            required
             placeholder="Mobile number"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 "
          />
        </div>

        <div>
          <label className="text-sm font-medium text-white block mb-1">
            Company Name
          </label>
          <input
            name="remarks"
            required
             placeholder="Company Name "
            className="w-full px-4 py-3 rounded-xl border border-gray-200"
          />
        </div>
      </div>

      {/* Location + Phone */}
      <div className="grid md:grid-cols-2 gap-4 items-start">
        <div>
          <label className="text-sm font-medium text-white block mb-1">
            Location
          </label>
          <input
            name="Address"
            required
              placeholder="Location"
            className="w-full px-4 py-3 rounded-xl border border-gray-200"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-white block mb-2">
            Phone
          </label>

          <div className="flex gap-2">
            <select
              name="CountryCode"
              required
              className="w-[90px] px-2 py-3 rounded-xl border border-gray-200 bg-white text-sm"
            >
              <option value="">Code</option>
              <option value="+91">India (+91)</option>
              <option value="+971">UAE (+971)</option>
              <option value="+1">USA (+1)</option>
              <option value="+44">UK (+44)</option>
            </select>

            <input
              name="Mobile"
              required
              placeholder="Mobile number"
              className="flex-1   w-6 px-4 py-3 rounded-xl border border-gray-200 "
            />
          </div>

          <p className="text-xs text-white mt-1">
            We'll prepend the country code to your number.
          </p>
        </div>
      </div>

      {/* Interests */}
      <div>
        <h3 className="text-xs font-bold tracking-widest text-white  mb-3">
          WHAT ARE YOU INTERESTED IN?
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          <label className="flex items-center gap-2 border border-gray-200 p-3 rounded-xl bg-white cursor-pointer">
            <input type="checkbox" name="LeadStatus" value="21608" />
            Buy Loose/Bulk Tea
          </label>

          <label className="flex items-center gap-2 border border-gray-200 p-3 rounded-xl bg-white cursor-pointer">
            <input type="checkbox" name="LeadStatus" value="21609" />
            Private Label Packaging
          </label>

          <label className="flex items-center gap-2 border border-gray-200 p-3 rounded-xl bg-white cursor-pointer">
            <input type="checkbox" name="LeadStatus" value="21610" />
            How to Start Tea Business
          </label>
        </div>
      </div>

      {/* Hidden fields */}
      <input type="hidden" name="Companycode" value="486029" />
      <input type="hidden" name="LeadStageCode" value="23446" />
      <input type="hidden" name="LeadTypeCode" value="133465" />
      <input type="hidden" name="LeadSourceCode" value="11905" />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-green-500 to-green-700"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}