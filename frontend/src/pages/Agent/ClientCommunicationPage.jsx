import React, { useEffect, useState } from "react";
import { InquiryRow } from "../../components/Agent/InquiryRow";
import api from "../../services/api";

export function ClientCommunicationPage() {
  const [clients, setClients] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [formData, setFormData] = useState({
      userId: "",
      type: "",
      data: { message: "" }
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientsResponse = await api.get("/clients");
        const apiResponse = clientsResponse.data;
        setClients(apiResponse);

        const inquiriesResponse = await api.get("/visit-request");
        setInquiries(inquiriesResponse.data);
        
      } catch (error) {
        setError("failed to load clients");
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message") {
      setFormData((prev) => ({
        ...prev,
        data: { ...prev.data, message: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await api.post("/notifications", {
        user_id: parseInt(formData.userId),
        type: formData.type,
        data: formData.data,
      });
      setSuccess("Notification sent successfully");
      setFormData({ userId: "", type: "", data: { message: "" } });
    } catch (error) {
      setError(error.response?.data?.message || "Failed to send notification.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container mx-auto px-4 py-12 bg-[#faf6f3]">
      <h1 className="text-3xl font-semibold dm-serif text-[#2c241e] mb-6">
        Client Communication
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e5e5e5] mb-6">
        <h2 className="text-xl font-semibold dm-serif text-[#2c241e] mb-4">
          Client Inquiries
        </h2>
        {inquiries.length > 0 ? (
          <table className="w-full text-left manrope">
            <thead>
              <tr className="border-b border-[#e5e5e5] text-[#8b8570]">
                <th className="py-2 px-4">Client Name</th>
                <th className="py-2 px-4">Property</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Time</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inquiry) => (
                <InquiryRow
                key={inquiry.id}
                clientName={inquiry.client?.name || "Unknown"}
                property={inquiry.property?.title || "Unknown"}
                date={inquiry.date}
                time={inquiry.time}
                status={inquiry.status}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-[#8b8570] manrope">
            No client inquiries at this time.
          </p>
        )}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e5e5e5]">
        <h2 className="text-xl font-semibold dm-serif text-[#2c241e] mb-4">
          Send Notification
        </h2>
        {success && <p className="text-[#c78960] manrope mb-4">{success}</p>}
        {error && <p className="text-red-600 manrope mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-[#8b8570] manrope mb-1">
              Select Client *
            </label>
            <select
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#8b8570] manrope focus:outline-none focus:border-[#c78960]"
            >
              <option value="">Select a client</option>
              {clients.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.name} ({client.email})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-[#8b8570] manrope mb-1">
              Notification Type *
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#8b8570] manrope focus:outline-none focus:border-[#c78960]"
            >
              <option value="">Select a type</option>
              <option value="ContactAccepted">Contact Accepted</option>
              <option value="AppointmentScheduled">Appointment Scheduled</option>
              <option value="NewPropertyPosted">New Property Posted</option>
              <option value="VisitRequestCreated">Visit Request Created</option>
              <option value="VisitRequestStatusUpdated">
                Visit Request Status Updated
              </option>
            </select>
          </div>
          <div>
            
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-3 bg-[#c78960] text-white manrope rounded-lg hover:bg-[#8b8570] disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Notification"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ClientCommunicationPage;
