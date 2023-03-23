import { DataGrid, GridColumnMenu } from '@mui/x-data-grid';
import { Button } from '@mui/material';

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
  { field: 'id', headerName: 'ID', minWidth: 50 },
  { field: 'licensePlate', headerName: 'License Plate', minWidth: 250 },
  { field: 'entryTime', headerName: 'Entry Time', flex: 0.5, minWidth: 250 },
  { field: 'exitTime', headerName: 'Exit Time', flex: 0.5, minWidth: 250 },
  { field: 'action', headerName: 'Action', minWidth: 200,
    renderCell: (params) => (
      <div className='flex flex-row justify-evenly w-full'>
        <Button variant="outlined" color='warning' size="medium">Edit</Button>
        <Button variant="contained" color='error' size="medium">Delete</Button>
      </div>
    )
  }
];

const AdminTable = ({ vehicles, col}) => {
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

export default AdminTable;