import React from "react";

export function ScheduleAppointment() {
  const agents = [
    { id: "1", name: "John Doe" },
    { id: "2", name: "Jane Smith" },
    { id: "3", name: "Michael Brown" },
  ];

  return (
    <div className="min-h-screen bg-[#f8f3e9] flex items-center justify-center py-12 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md border border-[#e5e5e5] w-full">
        <h1 className="text-2xl font-semibold dm-serif text-[#262626] mb-6 text-center">
          Schedule an Appointment
        </h1>

        <form className="space-y-6">
          {/* Agent Dropdown */}
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Select Agent
            </label>
            <select
              name="agentId"
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            >
              {agents.map((agent) => (
                <option key={agent.id} value={agent.id}>
                  {agent.name}
                </option>
              ))}
            </select>
          </div>

          {/* Preferred Date */}
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Preferred Date
            </label>
            <input
              type="date"
              name="date"
              min={new Date().toISOString().split("T")[0]}
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            />
          </div>

          {/* Time Slot */}
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Preferred Time
            </label>
            <select
              name="time"
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            >
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Describe your property needs"
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56] h-32 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-3 bg-[#a27d56] text-white manrope rounded-lg hover:bg-[#8b6a47]"
          >
            Schedule Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
