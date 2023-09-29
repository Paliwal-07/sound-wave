"use client";

import { RotateLoader } from "react-spinners";

import Box from "@/components/Box";

const Loading = () => {
  return ( 
    <Box className="h-full flex items-center justify-center gap-2">
      <RotateLoader color="#22c55e" size={20} />
    </Box>
  );
}
 
export default Loading;
