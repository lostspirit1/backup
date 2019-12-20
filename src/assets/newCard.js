

const useStyles2 = (muiBaseTheme => ({
    card: {
        border: "0",
        marginTop: 20,
        borderRadius: "4px",
        color: "rgba(0, 0, 0, 0.87)",
        background: "#fff",
        maxWidth: 300,
        maxHeight: 300,
        boxShadow:
          "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
          "&:hover": {
            boxShadow: "0px 12px 40px -12.125px rgba(0,0,0,0.5)",
          },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
        wordWrap: "break-word",
        fontSize: ".875rem",
        transition: "all 300ms linear",

    },
    media: {
      height: "130px",
      paddingTop: "56.25%",
      backgroundSize: 'cover'
    },
    content: {
      textAlign: "left",
      padding: muiBaseTheme.spacing(3)
    },
    divider: {
      margin: `${muiBaseTheme.spacing(3)}px 0`
    },
    heading: {
      fontWeight: "bold"
    },
    subheading: {
      lineHeight: 1.8
    },
    avatar: {
      display: "inline-block",
      border: "2px solid white",
      "&:not(:first-of-type)": {
        marginLeft: -muiBaseTheme.spacing()
      }
    },
    price: {
        fontSize: "20px",
        textAlign: "center",
        color: '#fc3003',
        padding: 10,
        fontWeight: "bold"
    },
    name: {
        fontSize: "20px",
        textAlign: "center",
        justifyItems: "center",
        color: '#000',
        padding: 10,
    },
  }))

  export default useStyles2;