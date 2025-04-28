import React from "react";

export function ConfirmedAppointmentRow({
  appointmentId,
  clientName,
  requestedDate,
  requestedTime,
  status,
  resolveAppointment,
}) {
  const handleCancel = () => {
    resolveAppointment(appointmentId, "Cancelled");
  }
  return (
    <tr className="border-b border-[#e5e5e5] text-[#666666] manrope">
      <td className="py-3 px-4">{clientName}</td>
      <td className="py-3 px-4">{requestedDate}</td>
      <td className="py-3 px-4">{requestedTime}</td>
      <td className="py-3 px-4">{status}</td>
      <td className="py-3 px-4">
        <button 
          onClick={handleCancel}
          className="px-3 py-1 border border-[#e5e5e5] text-[#666666] manrope rounded-lg hover:bg-[#f5f5f5]">
          Cancel
        </button>
      </td>
    </tr>
  );
}
