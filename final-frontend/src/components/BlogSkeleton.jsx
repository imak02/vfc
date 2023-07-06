import { Box, Skeleton } from "@mui/material";
import React from "react";

const BlogSkeleton = () => {
  return (
    <Box>
      <Skeleton height={50} sx={{width:{xs:100, md:500}}}  />
      <Skeleton variant="rectangular" height={200} sx={{ mb: 1 }} />
      <Box
        sx={{
          display: "flex",
          gap: 5,
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <Skeleton variant="circular" height={50} width={50} />
          <Skeleton variant="text" width={100} />
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Skeleton variant="circular" height={30} width={30} />
          <Skeleton variant="circular" height={30} width={30} />
          <Skeleton variant="circular" height={30} width={30} />
        </Box>
      </Box>
    </Box>
  );
};

export default BlogSkeleton;
