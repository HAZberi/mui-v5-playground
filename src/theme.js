import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: (props) => ({
          ...(props.ownerState.variant === "body3" && {
            fontSize: 9,
            color: "blue",
          }),
        }),
      },
    },
  },
});

export default theme;