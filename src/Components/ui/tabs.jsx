import React, { useState } from "react";

export function Tabs({ defaultValue, onValueChange, children }) {
  const [active, setActive] = useState(defaultValue);

  const handleChange = (val) => {
    setActive(val);
    if (onValueChange) onValueChange(val);
  };

  return React.Children.map(children, (child) =>
    React.cloneElement(child, { active, onChange: handleChange })
  );
}

export function TabsList({ children, className = "", active, onChange }) {
  return (
    <div className={`flex space-x-2 ${className}`}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { active, onChange })
      )}
    </div>
  );
}

export function TabsTrigger({ value, children, active, onChange }) {
  const isActive = active === value;
  return (
    <button
      onClick={() => onChange(value)}
      className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
        isActive ? "bg-orange-500 text-white" : "bg-gray-200 hover:bg-gray-300"
      }`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, active }) {
  if (active !== value) return null;
  return <div className="mt-4">{children}</div>;
}
