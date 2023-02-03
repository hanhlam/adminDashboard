import { Visibility } from "@mui/icons-material";
import styled from "styled-components";
import { userProfiles } from "./../dummyData";

const WidgetSmStyle = styled.div`
  flex: 1;
  padding: 15px;
  -webkit-box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
  -moz-box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
  box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
  margin: 20px 5px 5px 30px;
  border-radius: 10px;
  ul {
    list-style: none;
    padding-inline-start: 0px;
  }
  .widgetTitle {
    font-size: 20px;
    font-weight: 800;
  }
  .userWrapper {
    display: flex;
    font-size: 14px;
    > * {
      margin: 4px 8px;
    }

    img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
    }
    .userPositionWrapper {
      display: flex;
      flex: 1;
      min-width: 150px;
      align-items: start;
      flex-direction: column;

      .userName {
        font-weight: 600;
      }
      .userPosition {
        font-weight: 300;
      }
    }
    button {
      display: flex;
      max-width: 100px;
      height: 30px;
      font-size: 10px;
      align-items: center;
      border-radius: 10%;
      color: #555;
      cursor: pointer;
      border: #a1a1a1;
      .visibilityIcon {
        margin-right: 5px;
      }
    }
  }
`;

const User = ({ data }) => {
  const { name, title, img } = data;
  return (
    <div className="userWrapper">
      <img src={img} alt={name} />
      <div className="userPositionWrapper">
        <span className="userName">{name}</span>
        <span className="userTitle">{title}</span>
      </div>
      <button>
        <Visibility className="visibilityIcon" /> DISPLAY{" "}
      </button>
    </div>
  );
};

export default function WidgetSm() {
  return (
    <WidgetSmStyle>
      <h3>New Members</h3>
      <ul className="userList">
        {userProfiles.map((user, i) => (
          <li key={i}>
            <User data={user} />
          </li>
        ))}
      </ul>
    </WidgetSmStyle>
  );
}
