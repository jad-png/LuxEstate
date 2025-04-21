import React from "react";

export function AppointmentRequestRow({
  clientName,
  requestedDate,
  requestedTime,
  purpose,
}) {
  return (
    <tr className="border-b border-[#e5e5e5] text-[#666666] manrope">
      <td className="py-3 px-4">{clientName}</td>
      <td className="py-3 px-4">{requestedDate}</td>
      <td className="py-3 px-4">{requestedTime}</td>
      <td className="py-3 px-4">{purpose}</td>
      <td className="py-3 px-4">
        <button className="px-3 py-1 bg-[#a27d56] text-white manrope rounded-lg hover:bg-[#8b6a47] mr-2">
          Approve
        </button>
        <button className="px-3 py-1 border border-[#e5e5e5] text-[#666666] manrope rounded-lg hover:bg-[#f5f5f5]">
          Decline
        </button>
      </td>
    </tr>
  );
}
