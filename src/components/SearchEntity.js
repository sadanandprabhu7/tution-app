import React from "react";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import { Field, Form, Formik } from "formik";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import moment from "moment";
import TextField from "@mui/material/TextField";
import TableContainer from "@mui/material/TableContainer";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Fade from "@mui/material/Fade";
import {
  Box,
  Button,
  Divider,
  Grid,
  InputLabel,
  Typography,
} from "@mui/material";
// import { commonStyle } from "../../assets/style/js/commonStyle";
import CustomTable from "../components/customizeTable/CustomTable";
// import CoustomButton from "../../../../components/CustomButtons/Button";
import tableStyle from "../components/customizeTable/style";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import { makeStyles } from "@mui/material/styles";
import { connect } from "react-redux";
import { useSnackbar } from "notistack";
import CloseIcon from "@mui/icons-material/Close";
// import { TablePageData } from "../../utils/constants";
const TablePageData = {
  lastPage: 1,
  from: 0,
  to: 5,
  total: 0,
  perPageOptions: [5, 10, 25],
};

const useStyles = makeStyles(tableStyle);

const headCellsItems = [
  {
    id: "ProcessorName",
    label: "Processor",
    isSort: true,
    sortProperty: "ProcessorName",
    actionsCellStyle: "left",
  },
  {
    id: "LastCalcMonthYear",
    label: "Last Calculation Date",
    isSort: true,
    sortProperty: "LastCalcMonthYear",
    actionsCellStyle: "center",
  },
  {
    id: "Status",
    label: "Status",
    isSort: true,
    sortProperty: "Status",
    actionsCellStyle: "center",
  },
];

const SearchEntity = ({ payout }) => {
  const classes = useStyles();
  const oldTheme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);
  const [lastCalcData, setLastCalculationData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [initialCall, setInitialCall] = React.useState(true);
  const [pageDetails, setPageDetails] = React.useState({ ...TablePageData });
  const [order, setOrder] = React.useState("desc");
  const [orderBy, setOrderBy] = React.useState("ProcessorName");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangeRowsPerPage = (event) => {
    setPage(1);
    setRowsPerPage(event.target.value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const theme = createTheme({
    ...oldTheme,
    overrides: {
      MuiAutocomplete: {
        inputRoot: {
          padding: "0px",
        },
        input: {
          padding: "0px",
        },
      },
      MuiOutlinedInput: {
        root: {
          background: "#F9FAFF 0% 0% no-repeat",
          borderRadius: "6px",
          height: "44px",
        },
      },
    },
  });

  const handleFiltersModal = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (payout.lastCalcDate) {
      const content = get(payout.lastCalcDate, "data", []);
      const { count } = payout.lastCalcDate;
      setLastCalculationData(content);
      setPageDetails({
        ...pageDetails,
        lastPage: Math.ceil(count / rowsPerPage),
        from: page === 1 ? 1 : (page - 1) * rowsPerPage + 1,
        to: page * rowsPerPage < count ? page * rowsPerPage : count,
        total: count,
      });
      setRowsPerPage(count);
    }
  }, [payout.lastCalcDate]);

  return (
    <>
      <div>
        Last calculation date sada :{" "}
        <span
          onClick={handleFiltersModal}
          style={{ cursor: "pointer", color: "#0093c9" }}
        >
          {`${lastCalcData[0]?.LastCalcMonthYear} (${lastCalcData[0]?.ProcessorName})`}
        </span>
      </div>
      <Modal
        open={open}
        onClose={onClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-labelledby="sasdasd"
        aria-describedby="simpleasdasdasdan"
      >
        <Fade in={open}>
          <ThemeProvider theme={theme}>
            <Paper
              style={{
                width: "35%",
                height: "60%",
                padding: theme.spacing(2, 4, 3),
              }}
            >
              <Grid
                style={{
                  justifyContent: "space-between",
                }}
                spacing={4}
                container
              >
                <Grid item>Count : {lastCalcData.length}</Grid>
                <Grid item>
                  <Typography style={{ textDecorationLine: "underline" }}>
                    Last Calculation By Processor
                  </Typography>
                </Grid>
                <Grid
                  item
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CloseIcon onClick={onClose} style={{ cursor: "pointer" }} />
                </Grid>
              </Grid>

              <TableContainer
                className={classes.TableContainer}
                component={Paper}
                style={{ margin: "2rem 0" }}
              >
                <CustomTable
                  page={page}
                  order={order}
                  orderBy={orderBy}
                  setOrder={setOrder}
                  setOrderBy={setOrderBy}
                  data={lastCalcData}
                  headCells={headCellsItems}
                  dataParameter={false}
                  processorParameter={false}
                  isCallInitialization={initialCall}
                  selected={false}
                  setSelected={false}
                  isSelection={false}
                  rowsPerPage={rowsPerPage}
                  pageDetails={pageDetails}
                  handleChangePage={handleChangePage}
                  handleChangeRowsPerPage={handleChangeRowsPerPage}
                  totalCount={pageDetails.total}
                  paginationFlag={false}
                >
                  {lastCalcData.map((row) => {
                    return (
                      <TableRow className={classes.cellHeadSign}>
                        <TableCell className={classes.cellText} align="left">
                          {row.ProcessorName}
                        </TableCell>
                        <TableCell align="center" className={classes.cellText}>
                          {row.LastCalcMonthYear}
                        </TableCell>
                        <TableCell align="center" className={classes.cellText}>
                          {row.Status}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </CustomTable>
              </TableContainer>
            </Paper>
          </ThemeProvider>
        </Fade>
      </Modal>
    </>
  );
};

SearchEntity.propTypes = {};

SearchEntity.defaultProps = {};
const mapStateToProps = ({ payout }) => ({
  payout,
});

export default connect(mapStateToProps, {})(SearchEntity);
