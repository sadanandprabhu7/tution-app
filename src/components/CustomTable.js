import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
} from "@mui/material";

const UserProfileTable = ({ userData, onUpdate }) => {
  const [editableField, setEditableField] = useState(null);

  const handleEditClick = (field) => {
    setEditableField(field);
  };

  const handleUpdateClick = () => {
    setEditableField(null);
    onUpdate();
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {Object.entries(userData).map(([field, data]) => (
            <TableRow key={field}>
              <TableCell component="th" scope="row">
                {field}
              </TableCell>
              <TableCell align="left">
                {editableField === field ? (
                  <TextField
                    size="small"
                    variant="standard"
                    fullWidth
                    value={data}
                    onChange={(e) => onUpdate(field, e.target.value)}
                    onBlur={() => setEditableField(null)}
                  />
                ) : (
                  <div onClick={() => handleEditClick(field)}>{data}</div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {editableField && (
        <Button variant="contained" color="primary" onClick={handleUpdateClick}>
          Update
        </Button>
      )}
    </TableContainer>
  );
};

export default UserProfileTable;
