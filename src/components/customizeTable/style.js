const tableStyle = (theme) => ({
  table: {
    minWidth: 400,
    borderRadius: "1em",
    overflow: "hidden"
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  },
  tableSortTitle: {
    "& .sortIcon": {
      position: "absolute",
      right: "-26px"
    }
  },
  isHelpicon: {
    "& .sortIcon": {
      position: "relative",
      right: "auto"
    }
  },
  TableContainer: { borderRadius: "1em" },
  mainGrid: { marginTop: "1%", marginBottom: "1%" },
  patientTable: {
    minWidth: 0,
    borderRadius: "0.3em",
    overflow: "hidden"
  },
  expirtItemGrid: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "5px",
    width: "inherit"
  },
  clearButton: {
    backgroundColor: theme.palette.primary.dark,
    margin: "0.5%",
    textTransform: "capitalize",
    lineHeight: 0.9,
    padding: "9px 25px",
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark
    }
  },
  closeButton: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark
    },
    textTransform: "capitalize",
    height: "32px",
    padding: "9px 15px",
    fontSize: "14px"
  },
  statusModalHeader: {
    display: "flex",
    height: "50px",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    padding: "1%"
  },
  statusModalPadding: {
    padding: "1%"
  },
  statusHeadingText: {
    textAlign: "center",
    width: "90%",
    color: "#fff",
    fontSize: "16px"
  },
  statusRoot: {
    maxWidth: "69%"
  },
  marginBackButton: {
    marginTop: "2%",
    marginLeft: "2%"
  },
  cellTextHeader: {
    // fontSize: "80%",
    fontSize: "13px",
    fontStyle: "Helvetica, Arial,sans-serif",
    color: theme.palette.primary.dark,
    fontWeight: "bold"
  },
  cellTextHeaderOffer: {
    // fontSize: "80%",
    fontSize: "13px",
    fontStyle: "Helvetica, Arial,sans-serif",
    color: theme.palette.tableColor.tableHeaderTextColor,
    fontWeight: "bold",
    "&:hover": {
      color: theme.palette.tableColor.tableHeaderTextColor
    }
  },
  cellText: {
    // fontSize: "80%",
    fontSize: "12.5px",
    fontStyle: "Helvetica, Arial,sans-serif",
    color: "#000"
  },
  cellHeadSign: {
    cursor: "pointer",
    "&:hover": {
      background: "#eeeeee"
    }
  },
  modalRoot: {
    width: "400",
    height: "auto",
    maxHeight: "400px",
    maxWidth: "450px"
  },
  modalRootAcc: {
    width: "300px",
    height: "auto",
    maxHeight: "400px",
    maxWidth: "450px"
  },
  modalRootXs: {
    width: "80%"
  },
  modalRootUpload: {
    width: "40%",
    marginTop: "10%",
    height: "auto",
    padding: "30px",
    paddingTop: "10px",
    alignItems: "center",
    justifyContent: "center"
  },
  selectDropdown: { fontSize: "14px" },
  menuItem: {
    fontSize: "14px"
  },
  cellTextDiscription: {
    fontSize: "80%",
    fontStyle: "Helvetica, Arial,sans-serif",
    color: theme.palette.primary.main
  },
  successText: {
    color: "gray",
    fontSize: "large"
  },
  patientNameColor: {
    // fontSize: "80%",
    fontSize: "12.5px",
    fontStyle: "Helvetica, Arial,sans-serif",
    color: theme.palette.tableColor.clickable
  },
  margin: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around"
  },
  marginTop: {
    margin: "1%"
  },
  modalDiv: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "stretch"
  },
  modalCard: {
    width: "30%",
    marginTop: "10%",
    height: "auto",
    padding: "30px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  searchContainer: {
    display: "flex",
    paddingLeft: "10px",
    flexDirection: "row",
    padding: "1%"
  },
  buttonStyle: {
    backgroundColor: theme.palette.primary.main,
    margin: "0.5%",
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      boxShadow: `0 14px 26px -12px rgb(153 153 153 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(153 153 153 / 20%)`
    },
    textTransform: "capitalize",
    padding: "9px 25px",
    fontSize: "14px",
    lineHeight: "0.9",
    borderRadius: "3px",
    height: "32px"
  },
  ExportButtonStyle: {
    backgroundColor: theme.palette.primary.main,
    margin: "0.5%",
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      boxShadow: `0 14px 26px -12px rgb(153 153 153 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(153 153 153 / 20%)`
    },
    textTransform: "capitalize",
    padding: "9px 25px",
    fontSize: "14px",
    lineHeight: "0.9",
    borderRadius: "3px",
    height: "32px"
  },
  activeInputColor: {
    // "& .MuiSelect-nativeInput": {
    //   position: "inherit",
    //   width: "auto",
    // },
  },
  resize: {
    fontSize: "14px",
    fontStyle: "Helvetica, Arial,sans-serif",
    color: theme.palette.primary.dark
  },
  dialogBoxDropDown: {
    width: "auto",
    color: theme.palette.primary.dark,
    overflow: "hidden",
    marginRight: "2%",
    marginLeft: "2%",
    fontSize: ".7rem",
    boxSizing: "border-box",
    fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "200",
    lineHeight: "1.5",
    "&:hover": {
      backgroundColor: "#00aab4",
      color: "#fff"
    }
  },
  searchWrapper: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  root: {
    width: "30%",
    "&.focused": {
      color: theme.palette.primary.main,
      fontSize: "90%",
      fontStyle: "Helvetica, Arial,sans-serif"
    }
  },
  rootOverLay: {
    width: "30%",
    padding: "1%",
    position: "absolute",
    zIndex: 5000,
    cursor: "pointer",
    backgroundColor: theme.palette.primary.contrastText,
    boxShadow: "1px 1px 2px white, 0 0 25px #d6d0d0, 0 0 5px #737373"
  },
  rootPagination: {
    flexShrink: 0
  },
  tableHeader: {
    backgroundColor: theme.palette.tableColor.header,
    borderTop: `2px solid ${theme.palette.tableColor.borderTop}`
  },
  overLayBox: {
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      width: "91%"
    },
    [theme.breakpoints.up("sm")]: {
      width: "30%"
    },
    padding: "1%",
    zIndex: 999,
    cursor: "pointer",
    backgroundColor: theme.palette.primary.contrastText,
    boxShadow: "1px 1px 2px white, 0 0 25px #d6d0d0, 0 0 5px #737373"
  },
  bottonPage: {
    borderRadius: "100%",
    backgroundColor: theme.palette.tableColor.paggination,
    fontSize: "14px",
    color: "#fff",
    height: "34px",
    "&:hover": {
      backgroundColor: theme.palette.tableColor.paggination
    }
  },
  inputBox: {
    margin: "10px",
    marginTop: "20px",
    color: "#bfbdbd"
  },
  fullInput: {
    width: "93.2%",
    "&.focused": {
      color: theme.palette.primary.main,
      fontSize: "90%",
      fontStyle: "Helvetica, Arial,sans-serif"
    }
  },
  halfInput: {
    width: "87%",
    "&.focused": {
      color: theme.palette.primary.main,
      fontSize: "90%",
      fontStyle: "Helvetica, Arial,sans-serif"
    }
  },
  halfInputSingle: {
    width: "87%",
    "&.focused": {
      color: theme.palette.primary.main,
      fontSize: "90%",
      fontStyle: "Helvetica, Arial,sans-serif"
    }
  },
  withoutOption: {
    width: "26.8%",
    "&.focused": {
      color: theme.palette.primary.main,
      fontSize: "90%",
      fontStyle: "Helvetica, Arial,sans-serif"
    }
  },
  quaterInput: {
    width: "73%",
    "&.focused": {
      color: theme.palette.primary.main,
      fontSize: "90%",
      fontStyle: "Helvetica, Arial,sans-serif"
    }
  },
  activeInputLableColor: {
    fontSize: "14px",
    "&.focused": {
      color: theme.palette.primary.main
    }
  },
  chipContainer: {
    maxHeight: "10px"
  },
  activeInputLableBestOffer: {
    fontSize: "130%",
    "&.focused": {
      color: theme.palette.primary.main
    }
  },
  FName: {
    width: "10%"
  },
  ClientID: {
    width: "10%"
  },
  Email: {
    width: "10%"
  },
  Phone: {
    width: "10%"
  },
  Role: {
    width: "10%"
  },
  Created_date: {
    width: "10%"
  },
  status: {
    width: "10%"
  },
  DBA_Name: {
    width: "20%"
  },
  E_mail: {
    width: "10%"
  },
  OwnershipType: {
    width: "15%"
  },
  Contact_Name: {
    width: "15%"
  },
  Phone: {
    width: "10%"
  },
  Creation_Date: {
    width: "10%"
  },
  Update_Date: {
    width: "10%"
  },
  activityDBAName: {
    width: "10%"
  },
  activityEMail: {
    width: "10%"
  },
  activityOwnershipType: {
    width: "10%"
  },
  activityContactName: {
    width: "10%"
  },
  activityPhone: {
    width: "10%"
  },
  activityCreationDate: {
    width: "10%"
  },
  activityUpdateDate: {
    width: "10%"
  },
  noDataImage: {
    height: "200px"
  },
  buttonBlink: {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  appSvgIcons: {
    position: "relative",
    height: "40px",
    width: "40px",
    cursor: "pointer",
    color: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default tableStyle;
