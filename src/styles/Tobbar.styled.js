import styled from "styled-components";

const Toolbar = styled.form`
  width: 100%;
  height: 50px;
  position: sticky;
  background-color: white;
  top: 0;
  z-index: 9999;
  .topbarWrapper {
    height: 100%;
    padding: 0 px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-weight: bold;
    font-size: 30px;
    cursor: pointer;
    color: blue;
  }

  .topbarIconContainer {
    display: flex;
    cursor: pointer;
    margin-right: 1px;
    color: #555;
    & > * {
      margin: 5px;
    }
    .avatar {
      font-size: 12px;
    }
  }
`;
export default Toolbar;
