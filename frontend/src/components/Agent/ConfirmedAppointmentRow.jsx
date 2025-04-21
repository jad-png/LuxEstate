import React from "react";

export function ConfirmedAppointmentRow({ clientName, date, time, purpose }) {
  return (
    <tr className="border-b border-[#e5e5e5] text-[#666666] manrope">
      <td className="py-3 px-4">{clientName}</td>
      <td className="py-3 px-4">{date}</td>
      <td className="py-3 px-4">{time}</td>
      <td className="py-3 px-4">{purpose}</td>
      <td className="py-3 px-4">
        <button className="px-3 py-1 border border-[#e5e5e5] text-[#666666] manrope rounded-lg hover:bg-[#f5f5f5]">
          Cancel
        </button>
      </td>
    </tr>
  );
}
