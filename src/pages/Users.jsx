import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { userProfiles } from "../dummyData";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import { useState } from "react";
import { Alert } from "@mui/material";

const AlertStyle = styled.div`
  margin: 10px 30px;
  border-radius: 10px;
`;

const UsersStyle = styled.div`
  padding: 20px;
  -webkit-box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
  -moz-box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
  box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
  margin: 10px 30px;
  border-radius: 10px;
  height: 600px;
  .nameCol {
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      height: 32px;
      width: 32px;
      border-radius: 50%;
      margin-right: 5px;
    }
  }
  .statusCol {
    display: flex;
    flex-direction: row;
    align-items: center;
    .status {
      height: 10px;
      width: 10px;
      border-radius: 50%;
      margin-right: 5px;
      &.active {
        background-color: #25b125;
      }
      &.inactive {
        background-color: red;
      }
    }
  }
  .editButton {
    border: none;
    border-radius: 5px;
    background-color: #25b125;
    color: white;
    cursor: pointer;
    padding: 4px 10px;
    margin-right: 10px;
  }
  .deleteButton {
    border: none;
    color: red;
    cursor: pointer;
  }
`;

export default function Users() {
  const [userList, setUserList] = useState(userProfiles);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="nameCol">
            <img src={params.row.img} alt={params.row.name} />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "title", headerName: "Position", width: 300 },
    {
      field: "status",
      headerName: "Status",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="statusCol">
            <div className={`status ${params.row.status}`}></div>
            {params.row.status}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className="editButton">edit</button>
            </Link>
            <DeleteOutline
              className="deleteButton"
              onClick={() => handleClick(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  let handleClick = (index) => {
    setUserList(userList.filter((el) => el.id !== index));
  };

  return (
    <>
      <AlertStyle>
        <Alert severity="info">
          Clicking edit will navigate to a page displaying user info. Clicking
          delete will remove the user from the list. Changes will not be saved
          once you navigate away. No backend setup so data is not saved.
        </Alert>
      </AlertStyle>

      <UsersStyle>
        <DataGrid
          rows={userList}
          columns={columns}
          checkboxSelection
          disableSelectionOnClick
        />
      </UsersStyle>
    </>
  );
}
