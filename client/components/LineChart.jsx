import React from "react";

export default function LineChart({
  data,
  labels,
  xLabel,
  yLabel,
  height = 300,
}) {
  if (!data || data.length === 0) return null;

  const padding = 50;
  const chartWidth = 800 - padding * 2;
  const chartHeight = height - padding * 2;

  const maxValue = Math.max(...data);
  const minValue = 0;
  const range = maxValue - minValue || 1;

  // Calculate points for the line
  const points = data.map((value, index) => {
    const x = padding + (index / (data.length - 1)) * chartWidth;
    const y =
      padding + chartHeight - ((value - minValue) / range) * chartHeight;
    return { x, y, value };
  });

  // Create path for the line
  const pathData = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  // Create area path
  const areaPathData = `${pathData} L ${points[points.length - 1].x} ${padding + chartHeight} L ${padding} ${padding + chartHeight} Z`;

  return (
    <div className="chart-container">
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 800 ${height}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={`grid-${i}`}
            x1={padding}
            y1={padding + (chartHeight / 4) * i}
            x2={800 - padding}
            y2={padding + (chartHeight / 4) * i}
            stroke="#f3f4f6"
            strokeWidth="1"
          />
        ))}

        {/* Y-axis */}
        <line
          x1={padding}
          y1={padding}
          x2={padding}
          y2={padding + chartHeight}
          stroke="#e5e7eb"
          strokeWidth="2"
        />

        {/* X-axis */}
        <line
          x1={padding}
          y1={padding + chartHeight}
          x2={800 - padding}
          y2={padding + chartHeight}
          stroke="#e5e7eb"
          strokeWidth="2"
        />

        {/* Y-axis labels */}
        {[0, 1, 2, 3, 4].map((i) => {
          const value = minValue + (range / 4) * i;
          return (
            <text
              key={`y-label-${i}`}
              x={padding - 10}
              y={padding + chartHeight - (chartHeight / 4) * i + 4}
              textAnchor="end"
              fontSize="12"
              fill="#9ca3af"
            >
              ${(value / 1000).toFixed(0)}k
            </text>
          );
        })}

        {/* X-axis labels */}
        {labels &&
          labels.map((label, index) => (
            <text
              key={`x-label-${index}`}
              x={points[index]?.x || 0}
              y={padding + chartHeight + 20}
              textAnchor="middle"
              fontSize="12"
              fill="#9ca3af"
            >
              {label}
            </text>
          ))}

        {/* Area fill */}
        <path d={areaPathData} fill="rgba(124, 58, 237, 0.1)" stroke="none" />

        {/* Line */}
        <path
          d={pathData}
          fill="none"
          stroke="#7c3aed"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Data points */}
        {points.map((point, index) => (
          <g key={`point-${index}`}>
            <circle cx={point.x} cy={point.y} r="4" fill="#7c3aed" />
            {/* Tooltip on hover - static display for last point */}
            {index === points.length - 1 && (
              <g>
                <rect
                  x={point.x - 50}
                  y={point.y - 30}
                  width="100"
                  height="24"
                  fill="#1f2937"
                  rx="4"
                />
                <text
                  x={point.x}
                  y={point.y - 10}
                  textAnchor="middle"
                  fontSize="12"
                  fill="white"
                  fontWeight="500"
                >
                  ${point.value}
                </text>
              </g>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
