import React from "react";

export function InquiryRow({ clientName, email, message, dateSubmitted }) {
  return (
    <tr className="border-b border-[#e5e5e5] text-[#666666] manrope">
      <td className="py-3 px-4">{clientName}</td>
      <td className="py-3 px-4">{email}</td>
      <td className="py-3 px-4">{message}</td>
      <td className="py-3 px-4">{dateSubmitted}</td>
    </tr>
  );
}
