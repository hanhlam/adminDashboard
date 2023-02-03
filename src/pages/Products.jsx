import { products } from "../dummyData";
import * as React from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";

const ProductStyle = styled.div`
  padding: 20px;
  -webkit-box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
  -moz-box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
  box-shadow: 14px 19px 34px 9px rgba(224, 224, 224, 1);
  margin: 10px 30px;
  height: 600px;
`;

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "product",
    headerName: "Product",
    width: 150,
  },
  {
    field: "values",
    headerName: "Price",
    width: 150,
  },
];

export default function Products() {
  return (
    <ProductStyle>
      <DataGrid rows={products} columns={columns} />
    </ProductStyle>
  );
}
