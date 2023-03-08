import React from "react";

export default function Icon({icon, text}) {
    return (
        <div className="sidebar-icon group">
            {icon}
        <span class="sidebar-text group-hover:scale-100">
            {text}
        </span>
        </div>
    );
}