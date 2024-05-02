import { Box } from "@chakra-ui/react";
import { Outlet, ScrollRestoration } from "react-router-dom";

export function Root() {
  return (
    <Box>
      <Outlet />
      <ScrollRestoration />
    </Box>
  );
}
