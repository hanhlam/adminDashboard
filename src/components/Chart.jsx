import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  Line,
  CartesianGrid,
  Tooltip,
} from "recharts";
import styled from "styled-components";

const ChartStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
  -webkit-box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
  -moz-box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
  box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
  margin: 30px;
  border-radius: 10px;
`;

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <ChartStyle>
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data} style={{ display: "flex" }}>
          <XAxis dataKey="name" stroke="#5550bd"></XAxis>
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfef" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </ChartStyle>
  );
}
