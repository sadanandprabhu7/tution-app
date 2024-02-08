import { Checkbox, IconButton, makeStyles } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import style from "./style";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const useStyles = makeStyles(style);

const theme = createTheme({
  overrides: {
    MuiTableSortLabel: {
      root: {
        color: "white !important",
        "&:hover": {
          color: "white !important",
        },
      },
      active: {
        color: "white !important",
        "&:hover": {
          color: "white !important",
        },
      },
      icon: {
        color: "white !important",
        "&:hover": {
          color: "white !important",
        },
      },
    },
  },
});

export default function TableHeader(props) {
  const classes = useStyles();
  const {
    order,
    setOrder,
    orderBy,
    setOrderBy,
    selected,
    setSelected,
    data,
    headCells,
    dataParameter,
    isSelection,
    showEllipsis,
    isHelpicon,
    processorParameter,
  } = props;

  const handleRequestSort = (property) => {
    const isDesc = orderBy === property && order === "desc";
    setOrder(isDesc ? "asc" : "desc");
    setOrderBy(property);
  };

  const createSortHandler = (property) => {
    handleRequestSort(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = data.map((n) => n[dataParameter]);
      const processorSelecteds = data.map((n) => n[processorParameter]);
      setSelected(newSelecteds, processorSelecteds);
      return;
    }
    setSelected([], []);
  };

  return (
    <ThemeProvider theme={theme}>
      <TableHead className={classes.tableHeader}>
        <TableRow>
          {isSelection ? (
            <TableCell
              padding="checkbox"
              className={classes.cellTextHeaderOffer}
            >
              <Checkbox
                indeterminate={
                  selected.length > 0 && selected.length < data.length
                }
                checked={
                  selected.length === data.length && selected.length !== 0
                }
                onChange={handleSelectAllClick}
                inputProps={{ "aria-label": "select all desserts" }}
                // color="primary"
                style={{ color: "white" }}
              />
            </TableCell>
          ) : null}
          {headCells.map((headCell) => {
            const sortBy = headCell.sortProperty
              ? headCell.sortProperty
              : headCell.id;
            const isSort = headCell.isSort ? headCell.isSort : false;
            return (
              <TableCell
                align={headCell.actionsCellStyle}
                key={headCell.id}
                sortDirection={orderBy === sortBy ? order : false}
                className={clsx(
                  classes.cellTextHeaderOffer,
                  isHelpicon && classes.isHelpicon
                )}
                width={headCell.width}
              >
                {isSort ? (
                  <>
                    <TableSortLabel
                      className={classes.tableSortTitle}
                      active={orderBy === sortBy}
                      direction={orderBy === sortBy ? order : "asc"}
                      onClick={() => {
                        createSortHandler(sortBy);
                      }}
                      classes={{
                        icon: "sortIcon",
                      }}
                      IconComponent={KeyboardArrowDownIcon}
                    >
                      <span className={clsx({ "ellipsis-row": showEllipsis })}>
                        {headCell.label}
                      </span>
                      {orderBy === sortBy ? (
                        <span className={classes.visuallyHidden}>
                          {order === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                        </span>
                      ) : null}
                    </TableSortLabel>
                    {isHelpicon && (
                      <Tooltip title={headCell.helpText} placement="top">
                        <IconButton edge="end" size="small">
                          <HelpOutlineOutlinedIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    )}
                  </>
                ) : (
                  <>
                    {headCell.label}
                    {isHelpicon && (
                      <Tooltip title={headCell.helpText} placement="top">
                        <IconButton edge="end" size="small">
                          <HelpOutlineOutlinedIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    )}
                  </>
                )}
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
    </ThemeProvider>
  );
}

TableHeader.defaultProps = {
  order: "",
  setOrder: () => {},
  orderBy: "",
  setOrderBy: () => {},
  selected: [],
  setSelected: () => {},
  data: [],
  headCells: [],
  dataParameter: "",
  isSelection: false,
  showEllipsis: false,
  isHelpicon: false,
};

TableHeader.propTypes = {
  order: PropTypes.string,
  setOrder: PropTypes.func,
  orderBy: PropTypes.string,
  setOrderBy: PropTypes.func,
  selected: PropTypes.array,
  setSelected: PropTypes.func,
  data: PropTypes.array,
  headCells: PropTypes.array,
  dataParameter: PropTypes.string,
  isSelection: PropTypes.bool,
  showEllipsis: PropTypes.bool,
  isHelpicon: PropTypes.bool,
};
