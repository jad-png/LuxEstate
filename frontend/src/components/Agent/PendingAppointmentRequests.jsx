import React, { useEffect, useState } from "react";
import { AppointmentRequestRow } from "./AppointmentRequestRow";
import api from "../../services/api";

export function PendingAppointmentRequests() {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    status: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  
  const fetchAppointments = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await api.get("/appointments");
      const apiResponse = response.data;
      const pendingAppointments = apiResponse.filter(
        (appointment) => appointment.status === "Scheduled"
      );
      setAppointments(apiResponse);

      setLoading(false);
    } catch (error) {
      setError("Failed to load appointments");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await api.post("/appointments", {
        status: formData.status,
      });
      setSuccess("Appointment status updated successfully");
      setFormData({ status: "" });
    } catch (error) {
      setError(
        error.response?.data?.message || "Failed to update appointment."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResolve = async (appointmentId, status) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await api.patch(`appointments/${appointmentId}/resolve`, {
        status: status,
      });

      setSuccess("Appointment status updated successfully");
      await fetchAppointments();
    
    } catch (error) {
      setError(
        error.response?.data?.message || "Failed to resolve appointment"
      );
      console.error("Resolve error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e5e5e5] mb-6">
      <h2 className="text-xl font-semibold dm-serif text-[#262626] mb-4">
        Pending Appointment Requests
      </h2>
      {appointments.length > 0 ? (
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
            {appointments.map((appointment) => (
              <AppointmentRequestRow
                key={appointment.id}
                clientName={appointment.client.name}
                requestedDate={appointment.date}
                requestedTime={appointment.time}
                purpose={appointment.status}
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
