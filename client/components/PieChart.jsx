import React from "react";

export default function PieChart({
  data,
  labels,
  colors,
  height = 300,
  donut = true,
}) {
  if (!data || data.length === 0) return null;

  const size = 200;
  const radius = donut ? 70 : 80;
  const innerRadius = donut ? 45 : 0;
  const cx = 100;
  const cy = 100;

  let currentAngle = -90;
  const slices = data.map((value, index) => {
    const sliceAngle = (value / data.reduce((a, b) => a + b, 0)) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + sliceAngle;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = cx + radius * Math.cos(startRad);
    const y1 = cy + radius * Math.sin(startRad);
    const x2 = cx + radius * Math.cos(endRad);
    const y2 = cy + radius * Math.sin(endRad);

    const largeArc = sliceAngle > 180 ? 1 : 0;

    let path = `M ${cx} ${cy} L ${x1} ${y1}`;
    if (donut) {
      path += ` M ${x1} ${y1}`;
    }
    path += ` A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`;

    if (donut) {
      const ix1 = cx + innerRadius * Math.cos(endRad);
      const iy1 = cy + innerRadius * Math.sin(endRad);
      const ix2 = cx + innerRadius * Math.cos(startRad);
      const iy2 = cy + innerRadius * Math.sin(startRad);
      path += ` L ${ix1} ${iy1}`;
      path += ` A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${ix2} ${iy2} Z`;
    } else {
      path += ` L ${cx} ${cy} Z`;
    }

    currentAngle = endAngle;

    return {
      path,
      color: colors[index] || "#667eea",
      label: labels[index],
      value: value,
      percentage: ((value / data.reduce((a, b) => a + b, 0)) * 100).toFixed(1),
    };
  });

  return (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        style={{ flex: "0 0 auto" }}
      >
        {slices.map((slice, index) => (
          <path
            key={index}
            d={slice.path}
            fill={slice.color}
            stroke="white"
            strokeWidth="2"
          />
        ))}
      </svg>
      <div style={{ flex: 1 }}>
        {slices.map((slice, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: index < slices.length - 1 ? "12px" : "0",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "2px",
                background: slice.color,
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#1f2937",
                }}
              >
                {slice.label}
              </div>
              <div style={{ fontSize: "12px", color: "#9ca3af" }}>
                {slice.percentage}% of total
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
