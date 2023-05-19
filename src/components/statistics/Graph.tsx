import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface dataGoalsProps {
  valueTotal1: number;
  valueTotal2: number;
  valueTotal3: number;
  valueTotal4: number;
  valueTotal5: number;
  valueTotal6: number;
  valueTotal7: number;
  valueTotal8: number;
  valuePorcentage1: string;
  valuePorcentage2: string;
  valuePorcentage3: string;
  valuePorcentage4: string;
  valuePorcentage5: string;
  valuePorcentage6: string;
  valuePorcentage7: string;
  valuePorcentage8: string;
}

export function Graph(props: dataGoalsProps) {
  const data = [
    {
      tempo: "0-15",
      goals: props.valueTotal1,
      percentage: parseInt(props.valuePorcentage1.replace("%", "")),
    },
    {
      tempo: "16-30",
      goals: props.valueTotal2,
      percentage: parseInt(props.valuePorcentage2.replace("%", "")),
    },
    {
      tempo: "31-45",
      goals: props.valueTotal3,
      percentage: parseInt(props.valuePorcentage3.replace("%", "")),
    },
    {
      tempo: "46-60",
      goals: props.valueTotal4,
      percentage: parseInt(props.valuePorcentage4.replace("%", "")),
    },
    {
      tempo: "61-75",
      goals: props.valueTotal5,
      percentage: parseInt(props.valuePorcentage5.replace("%", "")),
    },
    {
      tempo: "76-90",
      goals: props.valueTotal6,
      percentage: parseInt(props.valuePorcentage6.replace("%", "")),
    },
    {
      tempo: "91-105",
      goals: props.valueTotal7,
      percentage: parseInt(props.valuePorcentage7.replace("%", "")),
    },
    {
      tempo: "106-120",
      goals: props.valueTotal8,
      percentage: parseInt(props.valuePorcentage8.replace("%", "")),
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="tempo" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="percentage" fill="#DAA520" />
      </BarChart>
    </ResponsiveContainer>
  );
}
