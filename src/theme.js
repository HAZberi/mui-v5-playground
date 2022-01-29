import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: (props) => ({
          ...(props.ownerState.variant === "body3" && {
            fontSize: 13,
          }),
        }),
      },
    },
  },
});

export default theme;