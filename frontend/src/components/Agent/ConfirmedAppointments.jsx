import React, { useEffect, useState } from "react";
import { ConfirmedAppointmentRow } from "./ConfirmedAppointmentRow";
import api from "../../services/api";

export function ConfirmedAppointments() {
  const [confirmedAppointments, setConrfimedAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [formData, setFormData] = useState({
    status: "",
  });

  const fetchConfirmedAppointments = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await api.get("/appointments");
      const apiResponse = response.data;

      const confirmedAppointments = apiResponse.filter(
        (confirmedAppointment) => confirmedAppointment.status === "Completed"
      );

      setConrfimedAppointments(confirmedAppointments);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError("Failed to load appointments");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConfirmedAppointments();
  }, []);

  const handleChage = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancelResolve = async (appointmentId, status) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await api.patch(`/appointments/${appointmentId}/resolve`, {
        status: status,
      });

      setLoading(false);
      setError(null);
      fetchConfirmedAppointments();
    } catch (error) {
      setError("Failed to update appointment");
      setLoading(false);
    }
  };

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
            {confirmedAppointments.map((appointment) => (
              <ConfirmedAppointmentRow
                key={appointment.id}
                appointmentId={appointment.id}
                clientName={appointment.client?.name || "Unknown"}
                requestedDate={appointment.date || "Unknown"}
                requestedTime={appointment.time || "Unknown"}
                status={appointment.status || "Unknown"}
                resolveAppointment={handleCancelResolve}
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
