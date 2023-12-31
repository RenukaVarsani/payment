import { createTheme } from "@mui/material";

const breakpoints = {
  values: {
    xs: 0, // Extra small devices (portrait phones)
    sm: 600, // Small devices (landscape phones)
    md: 900, // Medium devices (tablets)
    lg: 1200, // Large devices (desktops)
    xl: 1440, // Extra large devices (large desktops)
    xxl: 1700,
  },
};

const { up } = createTheme({ breakpoints }).breakpoints;

export const theme = createTheme({
  breakpoints,
  typography: {
    body1: {
      fontFamily: "Heebo",
      fontWeight: 500,
      letterSpacing: 0,

      [up("xs")]: {
        fontSize: "10px",
      },

      [up("sm")]: {
        fontSize: "11px",
      },

      [up("md")]: {
        fontSize: "11px",
      },

      [up("lg")]: {
        fontSize: "12px",
      },

      [up("xl")]: {
        fontSize: "14px",
      },

      [up("xxl")]: {
        fontSize: "16px",
      },
    },

    body2: {
      fontFamily: "Heebo",
      fontWeight: 400,
      letterSpacing: 0,

      [up("xs")]: {
        fontSize: "10px",
      },

      [up("sm")]: {
        fontSize: "11px",
      },

      [up("md")]: {
        fontSize: "11px",
      },

      [up("lg")]: {
        fontSize: "12px",
      },

      [up("xl")]: {
        fontSize: "13px",
      },

      [up("xxl")]: {
        fontSize: "14px",
      },
    },

    subtitle1: {
      fontFamily: "Heebo",
      fontWeight: 400,
      letterSpacing: 0,

      [up("xs")]: {
        fontSize: "10px",
      },

      [up("sm")]: {
        fontSize: "11px",
      },

      [up("md")]: {
        fontSize: "11px",
      },

      [up("lg")]: {
        fontSize: "12px",
      },

      [up("xl")]: {
        fontSize: "14px",
      },

      [up("xxl")]: {
        fontSize: "15px",
      },
    },

    h4: {
      fontFamily: "Poppins",
      fontWeight: 600,
      letterSpacing: 0,

      [up("xs")]: {
        fontSize: "15px",
      },

      [up("sm")]: {
        fontSize: "17px",
      },

      [up("md")]: {
        fontSize: "18px",
      },

      [up("lg")]: {
        fontSize: "20px",
      },

      [up("xl")]: {
        fontSize: "22px",
      },

      [up("xxl")]: {
        fontSize: "24px",
      },
    },

    h5: {
      fontFamily: "Heebo",
      fontWeight: 500,
      letterSpacing: 0,

      [up("xs")]: {
        fontSize: "10px",
      },

      [up("sm")]: {
        fontSize: "11px",
      },

      [up("md")]: {
        fontSize: "12px",
      },

      [up("lg")]: {
        fontSize: "14px",
      },

      [up("xl")]: {
        fontSize: "16px",
      },

      [up("xxl")]: {
        fontSize: "18px",
      },
    },

    h6: {
      fontFamily: "Poppins",
      fontWeight: 600,
      letterSpacing: 0,

      [up("xs")]: {
        fontSize: "14px",
      },

      [up("sm")]: {
        fontSize: "15px",
      },

      [up("md")]: {
        fontSize: "16px",
      },

      [up("lg")]: {
        fontSize: "17px",
      },

      [up("xl")]: {
        fontSize: "18px",
      },

      [up("xxl")]: {
        fontSize: "20px",
      },
    },

  },

  components: {
    // MuiBox: {

    //     styleOverrides: {

    //       root: {

    //         "&::-webkit-scrollbar": {

    //             width: "0.4em",

    //           },

    //           "&::-webkit-scrollbar-track": {

    //             background: "#D9D9D9",

    //             borderRadius: "5px",

    //           },

    //           "&::-webkit-scrollbar-thumb": {

    //             background: "#868686",

    //             borderRadius: "5px",

    //           },

    //       },

    //     },

    //   },

    MuiMenu: {
      styleOverrides: {
        paper: {
          height: "30vh",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",

          "&::-webkit-scrollbar": {
            width: "0.4em",
          },

          "&::-webkit-scrollbar-track": {
            background: "#D9D9D9",
            borderRadius: "5px",
          },

          "&::-webkit-scrollbar-thumb": {
            background: "#868686",

            borderRadius: "5px",
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: "Heebo",
          fontWeight: 400,
          letterSpacing: 0,

          [up("xs")]: {
            fontSize: "10px",
          },

          [up("sm")]: {
            fontSize: "11px",
          },

          [up("md")]: {
            fontSize: "12px",
          },

          [up("lg")]: {
            fontSize: "13px",
          },

          [up("xl")]: {
            fontSize: "15px",
          },

          [up("xxl")]: {
            fontSize: "16px",
          },
        },

        //   alternative: {

        //     fontFamily: "Heebo",

        //     fontWeight: 500,

        //     letterSpacing: 0,

        //     [up("xs")]: {

        //       fontSize: "10px",

        //     },

        //     [up("sm")]: {

        //       fontSize: "12px",

        //     },

        //     [up("md")]: {

        //       fontSize: "14px",

        //     },

        //     [up("lg")]: {

        //       fontSize: "16px",

        //     },

        //     [up("xl")]: {

        //       fontSize: "18px",

        //     },

        //     [up("xxl")]: {

        //       fontSize: "20px",

        //     },

        //   },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Heebo",
          fontWeight: 500,
          borderRadius: "5px",
          textTransform: "none",

          [up("xs")]: {
            fontSize: "10px",
          },

          [up("sm")]: {
            fontSize: "11px",
          },

          [up("md")]: {
            fontSize: "11px",
          },

          [up("lg")]: {
            fontSize: "12px",
          },

          [up("xl")]: {
            fontSize: "14px",
          },

          [up("xxl")]: {
            fontSize: "16px",
          },
        },
      },
    },
  },
});
