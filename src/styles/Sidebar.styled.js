import styled from "styled-components";

const SidebarStyle = styled.div`
  flex: 1;
  background-color: #e6e6f052;
  height: calc(100vh - 50px);
  nav {
    color: #555;
    padding: 20px;
    .navMenu {
      margin-bottom: 10px;
      .navTitle {
        display: flex;
        color: #a4a4a9;
        font-size: 14px;
      }
    }
    .navLinks {
      list-style: none;
      a {
        color: #555;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-size: 14px;
        padding: 5px;
        &:hover,
        &:active {
          border-radius: 10px;
          background-color: #b1b1b552;
        }
      }
    }
  }
`;

export default SidebarStyle;
