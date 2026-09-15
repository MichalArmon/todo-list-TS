import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import { DataGrid, type GridColDef } from "@mui/x-data-grid";
const rows = [
  {
    id: "cn283h323",

    text: "To do homework",

    category: "School",

    date: new Date(2025, 6, 1),

    status: "Pending",
  },

  {
    id: "cv4233wf",

    text: "To do dishes",

    category: "Home",

    date: new Date(2025, 5, 29),

    status: "Pending",
  },
];
const columns: GridColDef[] = [
  { field: "text", headerName: "Task", flex: 2 },
  { field: "category", headerName: "Category", flex: 1 },
  { field: "date", headerName: "Date", flex: 1 },
  { field: "status", headerName: "Status", flex: 1 },
];

function TodoTable() {
  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          sx={{ width: "100%", height: "100%" }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Container>
    // <Container>
    //   <Table>
    //     <TableHead>
    //       <TableCell>Task</TableCell>
    //       <TableCell>Category</TableCell>
    //       <TableCell>Date</TableCell>
    //       <TableCell>Status</TableCell>
    //     </TableHead>
    //     {mockTodos.map((task) => {
    //       return (
    //         <TableRow>
    //           {" "}
    //           <TableCell>{task.text}</TableCell>
    //           <TableCell>{task.category}</TableCell>
    //           <TableCell>{task.date.toLocaleDateString()}</TableCell>
    //           <TableCell>{task.status}</TableCell>
    //         </TableRow>
    //       );
    //     })}
    //   </Table>
    // </Container>
  );
}

export default TodoTable;
