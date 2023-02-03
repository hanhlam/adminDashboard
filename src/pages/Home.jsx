import styled from "styled-components";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import Chart from "../components/Chart";
import { activeUserData } from "../dummyData";
import WidgetSm from "../components/WidgetSm";
import WidgetLg from "../components/WidgetLg";

const CardContainer = styled.div`
  display: flex;
  margin: 10px;
`;

const WidgetContainer = styled.div`
  display: flex;
`;

const CardStyle = styled.div`
  display: flex;
  flex: 1;
  border-radius: 10px;
  margin: 0px 20px;
  padding: 30px;
  flex-direction: column;
  align-items: start;
  -webkit-box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
  -moz-box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
  box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
  > div {
    padding: 5px;
    &.valueContainer {
      display: flex;
      .cardValue {
        display: flex;
        font-size: 18px;
        font-weight: 600;
      }
      .changeValue {
        display: flex;
        align-items: center;
        margin-left: 10px;
        font-size: 12px;
        .negative {
          color: red;
          font-size: 12px;
        }
        .positive {
          color: green;
          font-size: 12px;
        }
      }
    }
    &.compared {
      font-size: 12px;
      color: #555;
    }
  }
`;

const Card = ({ cardInfo }) => {
  const { title, value, change, sym } = cardInfo;
  return (
    <CardStyle className="card">
      <div className="cardTitle">{title}</div>
      <div className="valueContainer">
        <span className="cardValue">{value}</span>
        <span className="changeValue">
          {change}
          {sym}
        </span>
      </div>
      <div className="compared">Compared to last month</div>
    </CardStyle>
  );
};

const revenue = {
  title: "Revenue",
  value: "$2,415",
  change: "-11.4",
  sym: <ArrowDownward className="negative" />,
};

const sales = {
  title: "Sales",
  value: "$4,415",
  change: "-1.4",
  sym: <ArrowDownward className="negative" />,
};

const cost = {
  title: "Cost",
  value: "$2,225",
  change: "+2.4",
  sym: <ArrowUpward className="positive" />,
};

export default function Home() {
  return (
    <>
      <CardContainer>
        <Card cardInfo={revenue} />
        <Card cardInfo={sales} />
        <Card cardInfo={cost} />
      </CardContainer>
      <Chart
        title={"User Analytics"}
        data={activeUserData}
        dataKey={"Active users"}
        grid
      />
      <WidgetContainer>
        <WidgetSm />
        <WidgetLg />
      </WidgetContainer>
    </>
  );
}
