import { Chrono } from "react-chrono";

const items = [
  { title: "Inception", cardTitle: "Jan 2025 - Feb 2025" },
  { title: "Elaboration", cardTitle: "Feb 2025 - Mar 2025" },
  { title: "Construction", cardTitle: "Apr 2025 - Aug 2025" },
  { title: "Transition", cardTitle: "Sep 2025" },
];

export default function Cronogram() {
  return (
    <div
    style={{
      width: "100%",
      height: "600px",
      background: "var(--ifm-background-surface-color)",
      borderRadius: "1rem",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      padding: "1rem",
    }}
  >
      <Chrono items={items}
        mode="HORIZONTAL"
        scrollable
        cardHeight={150}
        hideControls={false}
        theme={{
          primary: "#2563eb", 
          secondary: "#93c5fd",
          cardBgColor: "#f8fafc",
          titleColor: "#111827",
          titleColorActive: "#2563eb",
        }} />
    </div>
  );
}
