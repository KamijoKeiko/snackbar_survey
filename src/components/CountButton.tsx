import {FC, ReactNode} from "react";
import Button from "@mui/material/Button";

type Props = {
  onClick?: () => void;
  variant? : "contained" | "outlined" | "text";
  children: ReactNode
}

export const CountButton: FC<Props> = ({onClick, variant="contained", children}: Props) => {
  return (
    <>
      <Button
        onClick={onClick}
        variant={variant}
        color="primary">
        {children}
      </Button>


    </>
  )
}