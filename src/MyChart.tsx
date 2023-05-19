import { Chart } from "@antv/g2";
import { useEffect, useRef } from "react";

export default function MyChart() {
  const elementRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<Chart | null>(null);
  useEffect(() => {
    if (chartRef.current !== null || elementRef.current === null) {
      return;
    }
    const chart = new Chart({
      container: elementRef.current,
      width: 640,
      height: 480,
      theme: "classic"
    });

    chart
      .interval()
      .data([
        { genre: "Sports", sold: 275 },
        { genre: "Strategy", sold: 115 },
        { genre: "Action", sold: 120 },
        { genre: "Shooter", sold: 350 },
        { genre: "Other", sold: 150 },
      ])
      .encode("x", "genre")
      .encode("y", "sold")
      .encode("color", "genre");

    console.log("created")

    chart.render();

    chartRef.current = chart;
  }, []);
  return <div ref={elementRef} />;
}
