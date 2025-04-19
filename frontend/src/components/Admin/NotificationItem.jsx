import React from "react";

export function NotificationItem({id, recipient, title, message, timestamp}) 
{
    return (
        <tr className="border-b border-[#e5e5e5] text-[#666666] manrope">
          <td className="py-3 px-4">{id}</td>
          <td className="py-3 px-4">{recipient}</td>
          <td className="py-3 px-4">{title}</td>
          <td className="py-3 px-4">{message}</td>
          <td className="py-3 px-4">{timestamp}</td>
        </tr>
    );
}