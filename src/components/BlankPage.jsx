import styled from "styled-components";

const BlankStyle = styled.div`
  padding: 20px;
  -webkit-box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
  -moz-box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
  box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
  margin: 10px 30px;
  border-radius: 10px;
`;
export default function BlankPage() {
  return (
    <BlankStyle>
      Hi there. These pages are not implemented and are meant to test routes and
      layouts.
    </BlankStyle>
  );
}
