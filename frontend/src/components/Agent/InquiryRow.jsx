import React from "react";

export function InquiryRow({ clientName, property, date, time, status }) {
    return (
    <tr className="border-b border-[#e5e5e5] text-[#666666] manrope">
      <td className="py-3 px-4">{clientName}</td>
      <td className="py-3 px-4">{property}</td>
      <td className="py-3 px-4">{date}</td>
      <td className="py-3 px-4">{time}</td>
      <td className="py-3 px-4">{status}</td>
    </tr>
  );
}
