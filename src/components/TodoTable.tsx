import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const mockTodos = [
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

function TodoTable() {
  return (
    <Container>
      <Table>
        <TableHead>
          <TableCell>Task</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Status</TableCell>
        </TableHead>
        {mockTodos.map((task) => {
          return (
            <TableRow>
              {" "}
              <TableCell>{task.text}</TableCell>
              <TableCell>{task.category}</TableCell>
              <TableCell>{task.date.toLocaleDateString()}</TableCell>
              <TableCell>{task.status}</TableCell>
            </TableRow>
          );
        })}
      </Table>
    </Container>
  );
}

export default TodoTable;
