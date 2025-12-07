import React from "react";

export default function BarChart({
  data,
  labels,
  horizontal = false,
  height = 300,
}) {
  if (!data || data.length === 0) return null;

  const padding = 50;
  const maxValue = Math.max(...data);

  if (horizontal) {
    // Horizontal bar chart
    const chartWidth = 800 - padding * 2;
    const chartHeight = height - padding * 2;
    const barHeight = chartHeight / data.length;

    return (
      <div className="chart-container" style={{ height }}>
        <svg
          width="100%"
          height={height}
          viewBox={`0 0 800 ${height}`}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Y-axis */}
          <line
            x1={padding}
            y1={padding}
            x2={padding}
            y2={height - padding}
            stroke="#e5e7eb"
            strokeWidth="2"
          />

          {/* X-axis */}
          <line
            x1={padding}
            y1={height - padding}
            x2={800 - padding}
            y2={height - padding}
            stroke="#e5e7eb"
            strokeWidth="2"
          />

          {/* X-axis labels (amounts) */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
            const value = Math.round(maxValue * ratio);
            const x = padding + chartWidth * ratio;
            return (
              <g key={`x-label-${i}`}>
                <text
                  x={x}
                  y={height - padding + 20}
                  textAnchor="middle"
                  fontSize="12"
                  fill="#9ca3af"
                >
                  ${(value / 1000).toFixed(0)}k
                </text>
              </g>
            );
          })}

          {/* Bars */}
          {data.map((value, index) => {
            const y = padding + index * barHeight;
            const barWidth = (value / maxValue) * chartWidth;
            const percentage = ((value / maxValue) * 100).toFixed(1);

            return (
              <g key={`bar-${index}`}>
                <rect
                  x={padding}
                  y={y + barHeight * 0.25}
                  width={barWidth}
                  height={barHeight * 0.5}
                  fill="#7c3aed"
                  rx="4"
                />
                <text
                  x={padding - 10}
                  y={y + barHeight * 0.5 + 4}
                  textAnchor="end"
                  fontSize="13"
                  fill="#1f2937"
                  fontWeight="500"
                >
                  {labels[index]}
                </text>
                <text
                  x={padding + barWidth + 10}
                  y={y + barHeight * 0.5 + 4}
                  fontSize="12"
                  fill="#6b7280"
                >
                  ${(value / 1000).toFixed(1)}k ({percentage}%)
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    );
  }

  // Vertical bar chart
  const chartWidth = 800 - padding * 2;
  const chartHeight = height - padding * 2;
  const barWidth = (chartWidth / data.length) * 0.6;
  const spacing = chartWidth / data.length;

  return (
    <div className="chart-container" style={{ height }}>
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
          const value = (maxValue / 4) * i;
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

        {/* Bars */}
        {data.map((value, index) => {
          const x = padding + index * spacing + (spacing - barWidth) / 2;
          const barHeight = (value / maxValue) * chartHeight;
          const y = padding + chartHeight - barHeight;

          return (
            <g key={`bar-${index}`}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill="#7c3aed"
                rx="4"
              />
              {labels && (
                <text
                  x={x + barWidth / 2}
                  y={padding + chartHeight + 20}
                  textAnchor="middle"
                  fontSize="12"
                  fill="#9ca3af"
                >
                  {labels[index]}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
