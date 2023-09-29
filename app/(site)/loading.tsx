"use client";

import { BounceLoader,RotateLoader } from "react-spinners";

import Box from "@/components/Box";

const Loading = () => {
  return ( 
    <Box className="h-full flex items-center justify-center">
      <RotateLoader color="#22c55e" size={40} />
    </Box>
  );
}
 
export default Loading;
