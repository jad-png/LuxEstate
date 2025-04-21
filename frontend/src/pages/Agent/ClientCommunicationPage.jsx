import React from "react";
import { InquiryRow } from "../../components/Agent/InquiryRow";

export function ClientCommunicationPage() {
  const inquiries = [
    {
      clientName: "Alice Smith",
      email: "alice.smith@email.com",
      message:
        "I'm interested in the Manhattan Penthouse. Can I schedule a visit?",
      dateSubmitted: "2025-04-18",
    },
    {
      clientName: "Bob Johnson",
      email: "bob.johnson@email.com",
      message:
        "Could you provide more details about the Brooklyn Heights Villa?",
      dateSubmitted: "2025-04-19",
    },
  ];

  const clients = [
    { name: "Alice Smith", email: "alice.smith@email.com" },
    { name: "Bob Johnson", email: "bob.johnson@email.com" },
    { name: "Charlie Brown", email: "charlie.brown@email.com" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold dm-serif text-[#262626] mb-6">
        Client Communication
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e5e5e5] mb-6">
        <h2 className="text-xl font-semibold dm-serif text-[#262626] mb-4">
          Client Inquiries
        </h2>
        {inquiries.length > 0 ? (
          <table className="w-full text-left manrope">
            <thead>
              <tr className="border-b border-[#e5e5e5] text-[#666666]">
                <th className="py-2 px-4">Client Name</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Message</th>
                <th className="py-2 px-4">Date Submitted</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inquiry, index) => (
                <InquiryRow
                  key={index}
                  clientName={inquiry.clientName}
                  email={inquiry.email}
                  message={inquiry.message}
                  dateSubmitted={inquiry.dateSubmitted}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-[#666666] manrope">
            No client inquiries at this time.
          </p>
        )}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e5e5e5]">
        <h2 className="text-xl font-semibold dm-serif text-[#262626] mb-4">
          Send Notification/Message
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Select Client
            </label>
            <select className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]">
              {clients.map((client, index) => (
                <option key={index} value={client.email}>
                  {client.name} ({client.email})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Subject
            </label>
            <input
              type="text"
              placeholder="Enter the subject"
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
            />
          </div>
          <div>
            <label className="block text-sm text-[#666666] manrope mb-1">
              Message
            </label>
            <textarea
              placeholder="Write your message here"
              className="w-full p-3 border border-[#e5e5e5] rounded-lg text-[#666666] manrope focus:outline-none focus:border-[#a27d56] h-32 resize-none"
            />
          </div>
          <button className="w-full px-4 py-3 bg-[#a27d56] text-white manrope rounded-lg hover:bg-[#8b6a47]">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClientCommunicationPage;
