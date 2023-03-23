import * as React from 'react';
import { DataGrid, GridColumnMenu } from '@mui/x-data-grid';

const CustomColumnMenu = (props) => {
    return (
      <GridColumnMenu
        {...props}
        components={{
          ColumnMenuColumnsItem: null,
        }}
      />
    );
}

const columns = [
  { field: 'id', headerName: 'ID', flex: 0.5 },
  { field: 'licensePlate', headerName: 'License Plate', flex: 0.5 },
  { field: 'entryTime', headerName: 'Entry Time', flex: 0.5 },
];

const UserTable = ({ vehicles, col}) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={vehicles}
        columns={col ? [...columns, col] : columns}
        slots={{ columnMenu: CustomColumnMenu }}
      />
    </div>
  );
}

export default UserTable;