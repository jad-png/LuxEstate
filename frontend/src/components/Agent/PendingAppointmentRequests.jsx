import React from "react";
import { AppointmentRequestRow } from "./AppointmentRequestRow";

export function PendingAppointmentRequests() {
  const appointmentRequests = [
    {
      clientName: "Alice Smith",
      requestedDate: "2025-04-22",
      requestedTime: "14:00",
      purpose: "Discuss property needs for a penthouse",
    },
    {
      clientName: "Bob Johnson",
      requestedDate: "2025-04-23",
      requestedTime: "10:00",
      purpose: "Inquire about villa pricing",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e5e5e5] mb-6">
      <h2 className="text-xl font-semibold dm-serif text-[#262626] mb-4">
        Pending Appointment Requests
      </h2>
      {appointmentRequests.length > 0 ? (
        <table className="w-full text-left manrope">
          <thead>
            <tr className="border-b border-[#e5e5e5] text-[#666666]">
              <th className="py-2 px-4">Client Name</th>
              <th className="py-2 px-4">Requested Date</th>
              <th className="py-2 px-4">Requested Time</th>
              <th className="py-2 px-4">Purpose</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointmentRequests.map((request, index) => (
              <AppointmentRequestRow
                key={index}
                clientName={request.clientName}
                requestedDate={request.requestedDate}
                requestedTime={request.requestedTime}
                purpose={request.purpose}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-[#666666] manrope">
          No pending appointment requests.
        </p>
      )}
    </div>
  );
}
