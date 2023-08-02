import React, { useState, useRef } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { CardContent, CardHeader, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Avatar from "@mui/material/Avatar";
import Img from "../src/images/x-circle.svg";
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import "./style.css";
import Dropdown from "./Dropdown";
import { Calendar } from "react-feather";
import { theme } from "./Theme";
import { styled } from "@mui/system";

export const Popup = ({ handleClose, isActive }) => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Card
          sx={{
            width: "53vw",
            height: "71vh",
            overflow: "auto",
            paddingBottom: "15px",
          }}
        >
          <CardHeader
            sx={{
              backgroundColor: "rgba(134, 134, 134, 0.20)",
              borderRadius: "5px 5px 0px 0px",
              background: "rgba(134, 134, 134, 0.20)",
              height: { xl: "50px", lg: "40px", md: "30px", sm: "35px" },
              borderBottom: "1px solid rgba(134, 134, 134, 0.10)",
            }}
            title={
              <Typography
                variant="h6"
                sx={{
                  ml: 2,
                }}
              >
                Add Payment History
              </Typography>
            }
            action={
              <Avatar
                onClick={handleClose}
                src={Img}
                sx={{
                  marginLeft: "auto",
                  height: "auto",
                  width: "auto",
                  display: "flex",
                  marginTop: { xl: "22px", lg: "10px", md: "6px", sm: "9px" },
                  marginRight: {
                    xl: "40px",
                    lg: "23px",
                    md: "25px",
                    sm: "18px",
                  },
                  alignItems: "center",
                }}
              />
            }
          />
          <CardContent>
            <Box mx={2}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "500",
                  fontFamily: "Heebo",
                  mt: 2,
                  margin: "3.5px",
                  paddingTop: "34px",
                  marginBottom: "12px",
                  fontSize: { xl: "16px", lg: "14px", md: "12px", sm: "10px" },
                }}
              >
                Organization Name
              </Typography>
              <TextField
                fullWidth
                id="outlined-basic"
                rows={1}
                variant="outlined"
                sx={{
                  // paddingLeft: "23px",
                  "@media (min-width: 600px)": {
                    "& input": {
                      height: "13px",
                      //  width: "43vw",
                    },
                  },
                  "@media (min-width: 960px)": {
                    "& input": {
                      height: "13px",
                      //width: "43.4vw",
                    },
                  },
                  "@media (min-width: 1280px)": {
                    "& input": {
                      height: "13px",
                      //width: "46vw",
                    },
                    "@media (min-width: 1920px)": {
                      "& input": {
                        height: "24px",
                        //width: "48.1vw",
                      },
                    },
                  },
                }}
              />

              <Grid
                container
                variant="subtitle1"
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 4 }}
                mt={3}
                sx={{
                  height: { xl: "98px", lg: "89px", md: "88px", sm: "82px" },
                }}
              >
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      mb: 1,
                    }}
                  >
                    Amount
                  </Typography>
                  <TextField
                    fullWidth
                    sx={{
                      // paddingLeft: "23px",
                      "@media (min-width: 600px)": {
                        "& input": {
                          height: "13px",
                          //  width: "43vw",
                        },
                      },
                      "@media (min-width: 960px)": {
                        "& input": {
                          height: "13px",
                          //width: "43.4vw",
                        },
                      },
                      "@media (min-width: 1280px)": {
                        "& input": {
                          height: "13px",
                          //width: "46vw",
                        },
                        "@media (min-width: 1920px)": {
                          "& input": {
                            height: "24px",
                            //width: "48.1vw",
                          },
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      mb: 1,
                    }}
                  >
                    Date
                  </Typography>

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="   "
                        slots={{
                          openPickerIcon: Calendar,
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            fullWidth
                            variant="standard"
                            sx={{
                              height: "50px",
                            }}
                          />
                        )}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={4}>
                  <Typography mb={1}>Status</Typography>
                  <Dropdown />
                </Grid>
              </Grid>

              <Typography
                variant="subtitle1"
                sx={{
                  margin: "4px",
                  mb: 2,
                  mt: 4.5,
                }}
              >
                Upload Payment Invoice
              </Typography>
              <Box border={"1px solid rgba(0, 0, 0, 0.20)"}>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileSelect}
                  fullWidth
                  sx={{
                    // paddingLeft: "23px",
                    "@media (min-width: 600px)": {
                      "& input": {
                        height: "13px",
                        //  width: "43vw",
                      },
                    },
                    "@media (min-width: 960px)": {
                      "& input": {
                        height: "13px",
                        //width: "43.4vw",
                      },
                    },
                    "@media (min-width: 1280px)": {
                      "& input": {
                        height: "13px",
                        //width: "46vw",
                      },
                      "@media (min-width: 1920px)": {
                        "& input": {
                          height: "24px",
                          //width: "48.1vw",
                        },
                      },
                    },
                  }}
                />
                <Button
                  onClick={() => fileInputRef.current.click()}
                  sx={{
                    width: {
                      xl: "169px",
                      lg: "151px",
                      md: "134px",
                      sm: "110px",
                    },
                    height: { xl: "54px", lg: "47px", md: "36px", sm: "32px" },
                    background: "rgba(134, 134, 134, 0.40)",
                    color: "#1E1E1E",
                    margin: "5px",
                    textTransform: "none",
                    borderRadius: "5px",
                  }}
                >
                  Browse File
                </Button>

                <span style={{ fontWeight: "bold", marginLeft: "69px" }}>
                  {selectedFile ? selectedFile.name : "No File Selected"}
                </span>
              </Box>

              <p>
                <Button
                  sx={{
                    width: {
                      xl: "169px",
                      lg: "151px",
                      md: "134px",
                      sm: "110px",
                    },
                    height: { xl: "54px", lg: "47px", md: "36px", sm: "32px" },
                    backgroundColor: "#9F77EB",
                    fontFamily: "heebo",
                    fontSize: {
                      xl: "16px",
                      lg: "14px",
                      md: "12px",
                      sm: "10px",
                    },
                    padding: { sm: "7px" },
                    fontWeight: "500!important",
                    borderRadius: "5px",
                    textTransform: "none",
                    color: "#FFF",
                    mt: 5,
                    ":hover": {
                      bgcolor: "#9F77EB",
                      color: "white",
                    },
                  }}
                >
                  Add Payment
                </Button>
              </p>
            </Box>
          </CardContent>
        </Card>
      </ThemeProvider>
    </>
  );
};
