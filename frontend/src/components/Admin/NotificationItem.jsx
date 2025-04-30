import React from "react";

export function NotificationItem({ notification }) 
{
    return (
        <tr className="border-b border-[#e5e5e5] text-[#666666] manrope">
          <td className="py-3 px-4">{notification.id}</td>
          <td className="py-3 px-4">{notification.sender?.name}</td>
          <td className="py-3 px-4">{notification.user?.name}</td>
          <td className="py-3 px-4">{notification.type}</td>
          <td className="py-3 px-4">{notification.message}</td>
          <td className="py-3 px-4">{notification.created_at}</td>
        </tr>
    );
}