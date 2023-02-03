import styled from "styled-components";
import { latestTransactions } from "../dummyData";

const WidgetLgStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  padding: 20px;
  -webkit-box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
  -moz-box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
  box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
  margin: 20px 30px 5px 30px;
  border-radius: 10px;
  tr {
    text-align: left;
  }
  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    object-fit: cover;
    padding-right: 8px;
  }
  td > div {
    display: flex;
    align-items: center;
  }
  .status {
    border-radius: 10%;
    padding: 2px;
    &.declined {
      background-color: #ffcfda;
      border-color: #ffcfda0f;
    }
    &.approved {
      background-color: #d5f0d5;
      border-color: #d5f0d517;
    }
    &.pending {
      background-color: #cbedff;
      border-color: #e6f6ff26;
    }
  }
`;

export default function WidgetLg() {
  return (
    <WidgetLgStyle>
      <h3>Latest Transactions</h3>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {latestTransactions.map(({ name, date, amount, status, img }) => {
            return (
              <tr key={name}>
                <td>
                  <div>
                    <img src={img} alt={name} />
                    <span>{name}</span>
                  </div>
                </td>
                <td>{date}</td>
                <td>{amount}</td>
                <td>
                  <button className={`${status.toLowerCase()} status`}>
                    {status}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </WidgetLgStyle>
  );
}
