import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { IconButton, IconButtonProps } from "@mui/material";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[400]),
  "&:hover": {
    color: theme.palette.getContrastText(purple[400]),
    backgroundColor: purple[400],
  },
}));

const ColorIconButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[400]),
  "&:hover": {
    backgroundColor: purple[400],
    border: "none",
  },
  "&:focus": {
    outline: "none",
  },
}));

const ColorIcon = styled(IconButton)<IconButtonProps>(() => ({
  color: purple[400],
}));

export { ColorIconButton, ColorButton, ColorIcon };
