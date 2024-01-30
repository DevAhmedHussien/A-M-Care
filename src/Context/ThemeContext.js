
     import { createContext, useState, useMemo } from "react";
     import { createTheme } from "@mui/material/styles";
     // color design tokens export
     export const tokens = (mode) => ({
     ...(mode === "dark"
     ? {
          grey: {
               100: "#e0e0e0",
               200: "#c2c2c2",
               300: "#a3a3a3",
               400: "#858585",
               500: "#666666",
               600: "#525252",
               700: "#3d3d3d",
               800: "#292929",
               900: "#141414",
          },
          primary: {
               100: "#1f242d", // backGround
               200: "#a3a3a3", // text for  greeting
               300: "#c2c2c2", // text title 
               400: "#4db5ff", // backGround Button
               500: "#1f1f38", // text for button 
               600: "#4db5ff", // icons color
               700: "#0c101b", // icons cards 
               800: "#080b12", // icons back ground 
               900: "#040509",
               950:"#253546", //cards innerAbout me and experience and projects and contact me 
               1000 :"linear-gradient(rgb(77 181 255), #cdcdcd00)" // backgroundphotoheader
          },
          greenAccent: {
               100: "#dbf5ee",
               200: "#b7ebde",
               300: "#94e2cd",
               400: "#70d8bd",
               500: "#4cceac",
               600: "#3da58a",
               700: "#2e7c67",
               800: "#1e5245",
               900: "#0f2922",
          },
          redAccent: {
               100: "#f8dcdb",
               200: "#f1b9b7",
               300: "#e99592",
               400: "#e2726e",
               500: "#db4f4a",
               600: "#af3f3b",
               700: "#832f2c",
               800: "#58201e",
               900: "#2c100f",
          },
          blueAccent: {
               100: "#e1e2fe",
               200: "#c3c6fd",
               300: "#a4a9fc",
               400: "#868dfb",
               500: "#6870fa",
               600: "#535ac8",
               700: "#3e4396",
               800: "#2a2d64",
               900: "#151632",
          },
          }
     : {
          grey: {
               100: "#141414",
               200: "#292929",
               300: "#3d3d3d",
               400: "#525252",
               500: "#666666",
               600: "#858585",
               700: "#a3a3a3",
               800: "#c2c2c2",
               900: "#e0e0e0",
          },
          primary: {
               100: "#eee", //backGround  
               200: "#000000",
               300: "#000000",
               400: "#000000",
               500: "#000000", // manually changed #141b2d  //
               600: "#1F2A40",
               700: "#727681",
               800: "#a1a4ab",
               900: "#d0d1d5",
               1000 :"linear-gradient(silver, white)"
          },
          greenAccent: {
               100: "#0f2922",
               200: "#1e5245",
               300: "#2e7c67",
               400: "#3da58a",
               500: "#4cceac",
               600: "#70d8bd",
               700: "#94e2cd",
               800: "#b7ebde",
               900: "#dbf5ee",
          },
          redAccent: {
               100: "#2c100f",
               200: "#58201e",
               300: "#832f2c",
               400: "#af3f3b",
               500: "#db4f4a",
               600: "#e2726e",
               700: "#e99592",
               800: "#f1b9b7",
               900: "#f8dcdb",
          },
          blueAccent: {
               100: "#151632",
               200: "#2a2d64",
               300: "#3e4396",
               400: "#535ac8",
               500: "#6870fa",
               600: "#868dfb",
               700: "#a4a9fc",
               800: "#c3c6fd",
               900: "#e1e2fe",
          },
          }),
     });
     // mui theme settings
     export const themeSettings = (mode) => { 
     const colors = tokens(mode);
     return {
     palette: {
          mode: mode,
          ...(mode === "dark"
          ? {
               // palette values for dark mode
               primary: {
               main: colors.primary[500],
               },
               secondary: {
               main: colors.greenAccent[500],
               },
               neutral: {
               dark: colors.grey[700],
               main: colors.grey[500],
               light: colors.grey[100],
               },
               background: {
               default: colors.primary[500],
               },
               }
          : {
               // palette values for light mode
               primary: {
               main: colors.primary[100],
               },
               secondary: {
               main: colors.greenAccent[500],
               },
               neutral: {
               dark: colors.grey[700],
               main: colors.grey[500],
               light: colors.grey[100],
               },
               background: {
               default: "#fcfcfc",
               },
               }),
     },
     typography: {
          fontFamily: ["AhmedBold"],
          fontWeightLight:300,
          fontSize: 12,
          h1: {
          fontFamily: ["AhmedBold"],
          fontWeightLight: 600,
          fontSize: 40,
          },
          h2: {
          fontFamily: ["AhmedBold"],
          fontWeightLight: 600,
          fontSize: 32,
          },
          h3: {
          fontFamily: ["AhmedBold"],
          fontWeightLight: 600,
          fontSize: 24,
          },
          h4: {
          fontFamily: ["AhmedBold"],
          fontWeightLight: 600,
          fontSize: 20,
          },
          h5: {
          fontFamily: ["AhmedBold"],
          fontWeightLight: 600,
          fontSize: 16,
          },
          h6: {
          fontFamily: ["AhmedBold"],
          fontWeightLight: 600,
          fontSize: 14,
          },
     },
     };
     };
     // context for color mode
     export const ColorModeContext = createContext({
     toggleColorMode: () => {},
     });
     export const useMode = () => {
     const [mode, setMode] = useState("dark");
          const toggleColorMode = () =>{
                    setMode((prev) => (prev === "light" ? "dark" : "light"))
               };
     const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
     return [theme, toggleColorMode];
     };
