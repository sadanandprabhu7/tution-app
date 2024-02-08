import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import { Typography } from "@mui/material";
import tableStyle from "./style";

const useStyles = makeStyles(tableStyle);

export default function TablePaginationActions(props) {
  const classes = useStyles();
  const theme = useTheme();

  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 1);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage)));
  };

  return (
    <div className={classes.rootPagination}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 1}
        variant="body2"
        aria-label="first page"
      >
        {theme.direction === "rtl" ? (
          <Typography>Last</Typography>
        ) : (
          <Typography variant="body2">First</Typography>
        )}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 1}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <Typography>Previous</Typography>
        ) : (
          <Typography variant="body2">Previous</Typography>
        )}
      </IconButton>
      <IconButton
        onClick={handleFirstPageButtonClick}
        aria-label="first page"
        className={classes.bottonPage}
      >
        <Typography variant="body2">{page}</Typography>
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={
          rowsPerPage.label ? true : page >= Math.ceil(count / rowsPerPage)
        }
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <Typography variant="body2">Next</Typography>
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={
          rowsPerPage.label ? true : page >= Math.ceil(count / rowsPerPage)
        }
        aria-label="last page"
      >
        {theme.direction === "rtl" ? (
          <FirstPageIcon />
        ) : (
          <Typography variant="body2">Last</Typography>
        )}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
