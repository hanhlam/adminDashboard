import { TextField, Alert } from "@mui/material";
import styled from "styled-components";
import { userProfiles } from "../dummyData";
import { useParams } from "react-router-dom";
import { Person, Call, Email } from "@mui/icons-material";

const ContainerStyle = styled.div`
  display: flex;
  margin: 10px 30px;
  flex-direction: column;
  .content {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    .displayUser {
      display: flex;
      flex: 1;
      flex-direction: column;
      border-radius: 10px;
      padding: 30px;
      -webkit-box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
      -moz-box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
      box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
      .info {
        font-size: 14px;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        .icon {
          margin-right: 5px;
        }
      }
      .profilePic {
        display: flex;
        color: grey;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 30px;
        img {
          border-radius: 50%;
          width: 60px;
          height: 60px;
          margin-right: 10px;
        }
        align-items: center;
        .position {
          font-weight: 400;
        }
      }
    }
    .editUser {
      flex: 2;
      display: flex;
      margin-left: 30px;
      flex-direction: column;
      border-radius: 10px;
      padding: 30px;
      -webkit-box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
      -moz-box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
      box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
      > .input {
        margin-top: 20px;
      }
      .buttonContainer {
        display: flex;
        justify-content: flex-end;
        margin-top: 30px;
        button {
          width: 100px;
          border: none;
          border-radius: 5px;
          background-color: #2727b4;
          color: white;
          cursor: pointer;
          padding: 4px 10px;
          margin-right: 10px;
        }
      }
    }
  }
`;
export default function User() {
  let { userId } = useParams();
  console.log(userId);
  const user = userProfiles.find((el) => el.id == userId);
  const userName = user.name.replace(/\s+/g, "");
  return (
    <ContainerStyle>
      <h1>Edit User</h1>
      <Alert severity="info">
        Changes will not be saved once you navigate away. No backend setup so
        data is not saved.
      </Alert>
      <div className="content">
        <div className="displayUser">
          <div className="profilePic">
            <img src={user.img} alt={userName} />
            <div>
              <div>{user.name}</div>
              <div className="position">{user.title}</div>
            </div>
          </div>
          <div className="info">
            <Person className="icon" />
            {`${userName}01`}
          </div>
          <div className="info">
            <Call className="icon" /> 408-111-1111
          </div>
          <div className="info">
            <Email className="icon" />
            {`${userName.toLowerCase()}@gmail.com`}
          </div>
        </div>
        <form className="editUser">
          <TextField className="input" label="Name" variant="standard" />
          <TextField className="input" label="User Name" variant="standard" />
          <TextField
            className="input"
            label="Email"
            type="email"
            variant="standard"
          />
          <TextField
            className="input"
            label="Phone Number"
            type="tel"
            pattern="[0-9]{1}-[0-9]{3}-[0-9]{4}"
            variant="standard"
          />
          <div className="buttonContainer">
            <button>Update</button>
          </div>
        </form>
      </div>
    </ContainerStyle>
  );
}
