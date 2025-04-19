import React from "react";
import { OrderItem } from "./OrderItem";

export function OrderTable({ orderHistory }) {
  return (
    <div className="bg-white p-6 shadow-sm border border-[#e5e5e5]">
      <h2 className="text-xl font-semibold dm-serif text-[#262626] mb-4">
        Order History
      </h2>
      {orderHistory.length > 0 ? (
        <table className="w-full text-left manrope">
          <thead>
            <tr className="border-b border-[#e5e5e5] text-[#666666]">
              <th className="py-2 px-4">Order ID</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Total</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {orderHistory.map((order) => (
              <OrderItem
                key={order.id}
                id={order.id}
                date={order.date}
                total={order.total}
                status={order.status}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-[#666666] manrope">You have no orders yet.</p>
      )}
    </div>
  );
}
