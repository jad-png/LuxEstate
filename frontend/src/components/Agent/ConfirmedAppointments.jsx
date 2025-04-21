import React from "react";
import { ConfirmedAppointmentRow } from "./ConfirmedAppointmentRow";

export function ConfirmedAppointments() {
  const confirmedAppointments = [
    {
      clientName: "Charlie Brown",
      date: "2025-04-25",
      time: "11:00",
      purpose: "Consultation for Upper East Side Condo",
    },
    {
      clientName: "Dana White",
      date: "2025-04-26",
      time: "15:00",
      purpose: "Discuss budget for Manhattan Penthouse",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e5e5e5] mb-6">
      <h2 className="text-xl font-semibold dm-serif text-[#262626] mb-4">
        Confirmed Appointments
      </h2>
      {confirmedAppointments.length > 0 ? (
        <table className="w-full text-left manrope">
          <thead>
            <tr className="border-b border-[#e5e5e5] text-[#666666]">
              <th className="py-2 px-4">Client Name</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Time</th>
              <th className="py-2 px-4">Purpose</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {confirmedAppointments.map((appointment, index) => (
              <ConfirmedAppointmentRow
                key={index}
                clientName={appointment.clientName}
                date={appointment.date}
                time={appointment.time}
                purpose={appointment.purpose}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-[#666666] manrope">No confirmed appointments.</p>
      )}
    </div>
  );
}
