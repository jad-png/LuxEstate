import React from "react";

export function RequestAppointmentForm() {
  // const [formData, setFormData] = useState({
  //   status: "",
  // });

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [success, setSuccess] = useState(null);
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError(null);
  //   setSuccess(null);
  //   try {
  //     await api.post("/appointments", {
  //       status: formData.status,
  //     });
  //     setSuccess("Appointment status updated successfully");
  //     setFormData({ status: "" });
  //   } catch (error) {
  //     setError(
  //       error.response?.data?.message || "Failed to update appointment."
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e5e5e5]">
      <h2 className="text-xl font-semibold dm-serif text-[#262626] mb-4">
        Request an Appointment (Client View - Simulated)
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-[#666666] manrope mb-1">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm text-[#666666] manrope mb-1">
              Preferred Date
            </label>
            <input
              type="date"
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm text-[#666666] manrope mb-1">
              Preferred Time
            </label>
            <input
              type="time"
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm text-[#666666] manrope mb-1">
            Purpose of Appointment
          </label>
          <textarea
            placeholder="Describe your property needs"
            className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56] h-24 resize-none"
          />
        </div>
        <button className="w-full px-4 py-3 bg-[#a27d56] text-white manrope rounded-lg hover:bg-[#8b6a47]">
          Submit Request
        </button>
      </div>
    </div>
  );
}
