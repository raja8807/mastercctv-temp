import React from "react";
import { AgGridReact } from "ag-grid-react";
import { themeBalham } from "ag-grid-community";

const CustomTable = ({
  isLoading,
  hasSelection,
  rowData = [],
  onSelectionChanged = () => {},
  columnDefs = [],
  height = 400,
  getHighlight = ()=>{},
}) => {
  return (
    <div style={{ height, transition: "0s" }}>
      <AgGridReact
        loading={isLoading}
        rowData={rowData}
        selection={
          hasSelection && {
            mode: "multiRow",
          }
        }
        getRowStyle={(data) => {
          return {
            backgroundColor: getHighlight(data) && "#00480784",
          };
        }}
        onSelectionChanged={onSelectionChanged}
        columnDefs={[...columnDefs]}
        theme={themeBalham}
      />
    </div>
  );
};

export default CustomTable;
