import React from "react";
import { PendingAppointmentRequests } from "../../components/Agent/PendingAppointmentRequests";
import { ConfirmedAppointments } from "../../components/Agent/ConfirmedAppointments";
import { RequestAppointmentForm } from "../../components/Agent/RequestAppointmentForm";
import { SimulatedAppointments } from "../../components/Agent/SimulatedAppointments";

export function ManageAppointmentsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold dm-serif text-[#262626] mb-6">
        Manage Appointments
      </h1>

      <PendingAppointmentRequests />
      <ConfirmedAppointments />
      <SimulatedAppointments />
      <RequestAppointmentForm />
    </div>
  );
}

export default ManageAppointmentsPage;