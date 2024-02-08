import { Box } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";
import React from "react";

const TableBodyCustom = function (props) {
  const { children, data, headCells, isCallInitialization, naDataImage } =
    props;

  if (isCallInitialization && data.length) {
    return <TableBody>{children}</TableBody>;
  }
  if (isCallInitialization && (data.length == 0 || !data.length)) {
    return (
      <TableBody>
        <TableRow>
          <TableCell className="no-data" colSpan={headCells.length + 1}>
            <Box py={6}>
              <img style={{ height: "200px" }} src={naDataImage} alt="" />
            </Box>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }
  return null;
};

TableBodyCustom.propTypes = {
  children: PropTypes.element,
  data: PropTypes.array,
  headCells: PropTypes.array,
  isCallInitialization: PropTypes.bool,
  naDataImage: PropTypes.string,
};

TableBodyCustom.defaultProps = {
  children: null,
  data: [],
  headCells: [],
  isCallInitialization: true,
  naDataImage: "#",
};

export default TableBodyCustom;
