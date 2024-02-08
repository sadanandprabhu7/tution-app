import React from "react";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/material/styles";
import TableFooter from "@mui/material/TableFooter";
import Paper from "@mui/material/Paper";
import tableStyle from "./style";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import Pagination from "./Pagination";
import noDataImage from "../../assets/img/noDataImage.png";

export default function CustomTable(props) {
  const useStyles = makeStyles(tableStyle);
  const classes = useStyles();

  const {
    data,
    page,
    headCells,
    children,
    pageDetails,
    isCallInitialization,
    isHelpicon,
    paginationFlag,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    totalCount,
  } = props;
  return (
    <Table
      // style={{
      //   width: "max-content",
      // }}
      className={classes.table}
    >
      {/* <Paper
        style={{
          width: "100%",
          // overflowX: "auto",
        }}
      > */}
      <TableHeader {...props} />
      <TableBody
        headCells={headCells}
        data={data}
        isCallInitialization={isCallInitialization}
        isHelpicon={isHelpicon}
        naDataImage={noDataImage}
        style={{ overflowY: !paginationFlag ? "scroll" : "" }}
      >
        {children}
      </TableBody>
      {/* </Paper> */}
      {paginationFlag && data.length ? (
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[
                ...pageDetails.perPageOptions,
                {
                  label: "All",
                  value: totalCount,
                },
              ]}
              // colSpan={15}
              align="right"
              labelDisplayedRows={() =>
                `${pageDetails.from}-${pageDetails.to} of ${totalCount}`
              }
              count={totalCount}
              page={page}
              rowsPerPage={rowsPerPage}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                MenuProps: { classes: { paper: classes.selectDropdown } },
              }}
              classes={{ menuItem: classes.menuItem }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={Pagination}
            />
          </TableRow>
        </TableFooter>
      ) : (
        ""
      )}
    </Table>
  );
}
CustomTable.propTypes = {
  data: PropTypes.any,
  totalCount: PropTypes.any,
  headCells: PropTypes.any,
  children: PropTypes.any,
  isCallInitialization: PropTypes.bool,
  isHelpicon: PropTypes.bool,
  paginationFlag: PropTypes.bool,
  rowsPerPage: PropTypes.any,
  handleChangePage: PropTypes.func,
  handleChangeRowsPerPage: PropTypes.func,
  page: PropTypes.number,
  pageDetails: PropTypes.func,
  totalCount: PropTypes.any,
};
CustomTable.defaultProps = {
  data: [],
  page: 0,
  headCells: [],
  children: "",
  isCallInitialization: false,
  isHelpicon: false,
  paginationFlag: true,
  rowsPerPage: 5,
  handleChangePage: () => {},
  handleChangeRowsPerPage: () => {},
  pageDetails: {},
};
