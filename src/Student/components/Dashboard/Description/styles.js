import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  heading: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "6%",
    paddingLeft: "1rem",
  },
  headingBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 480px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  buttonBox: {
    width: "10rem",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  loaderContainer: {
    alignItems: "center",
    marginTop: "40vh",
  },
  loader: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "10px",
    border: "7px solid #f3f3f3",
    borderRadius: "50%",
    borderTop: "7px solid #666666",
    width: "50px",
    height: "50px",
    animation: "spin 2s linear infinite",
  },
  container: {
    margin: "5%",
    display: "flex",
    justifyContent: "space-between",
  },
  descContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "1rem",
    display: "flex",
    alignItems: "flex-end",
  },
  contactContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "1rem",
    display: "flex",
    alignItems: "flex-end",
    marginTop: "20px",
  },
  boxHeading: {
    margin: "0px 10px",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  branchCard: {
    display: "flex",
    width: "6rem",
    height: "50px",
    alignItems: "center",
    marginTop: "1rem",
    marginInline: "0.5rem",
    justifyContent: "center",
    backgroundColor: "#334878",
    color: "#fff",
    borderRadius:'15px',
    "&:hover": {
      transform: "scale(1.1)",
    },

  },
  batchCard: {
    display: "flex",
    width: "8rem",
    height: "50px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1rem",
    marginInline: "0.5rem",
    backgroundColor: "#334878",
    color: "#fff",
    borderRadius:'15px',
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  roundsCardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "row",
    alignItems: "center",
    textAlign: "center",
  },
  roundsCard: {
    display: "flex",
    flexGrow: "1",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  boxDivider: {
    margin: "20px 0 5px",
    textAlign: "left",
  },
  infoTitle: {
    marginTop: "20px",
    marginBottom: "5px",
  },
  coopBox: {
    backgroundColor: "#E8F4FD",
    height: "5rem",
    width: "100%",
    marginBottom: "1rem",
    display: "flex",
  },
  coopBoxElements: {
    margin: "1rem",
  },
  infoIcon: {
    color: "#349FF3",
  },
  coopInfoTitle: {
    color: "#355D7E",
    fontWeight: "bold",
  },
  apply_job_button: {
    backgroundColor: "#334878",
    color: "#fff",
    width: "8rem",
    height: "4rem",
    borderRadius: "1rem",
    border: "none",
    transition: "0.1s",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#334878",
      border: "3px solid #334878",
    },
    "@media (max-width: 480px)": {
      width: "8rem",
      height: "2rem",
      borderRadius: "0.5rem",
      marginBlock: "1rem",
    },
  },
  buttonTextBox: {
    padding: "0.5rem 2rem",
    borderRadius: "1rem",
    fontSize:"1rem",
    border: "3px solid #808185",
    color: "#808185",
    boxShadow: "6px 4px 4px 0px rgba(214,214,214,0.75)",
    "@media (max-width: 480px)": {
      marginBlock: "1rem",
      height: "5rem",
    },
  },
  buttonTestBody1:{
    fontWeight:600,
    fontSize:"1.2rem"
  },
  buttonTestBody2:{
    fontWeight:500,
    fontSize:"0.9rem"
  },
  buttonTextAccepted: {
    color: "#46b069",
    border: "3px solid #46b069"
    
  },
  buttonTextRejected: {
    border: "4px solid #F70000",
    color: "#F70000",
  },
  resumeButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    borderRadius: "1rem",
    cursor: "pointer",
    width: "8rem",
    height: "3rem",
    marginBlock: "1rem",
    transition: "0.1s",
    backgroundColor: "#334878",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#334878",
      border: "3px solid #334878",
    },
  },
  additionalDetailsBox: {
    marginBlock: "1rem",
  },
  additionalDetailsHeading: {
    marginBottom: "1rem",
  },
  fontBold: {
    fontWeight: "bold",
  },
}));
