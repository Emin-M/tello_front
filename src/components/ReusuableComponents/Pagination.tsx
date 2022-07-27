import React, { useState } from "react";
import { Pagination } from "@mui/material";
import { useSearchParams } from "react-router-dom";

type Props = {
  count: number;
  color: "primary" | "secondary";
  size: "small" | "medium" | "large" | undefined;
};

const SimplePagination = ({ count, color, size }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  let page = searchParams.get("page") || 1;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    value === 1
      ? searchParams.delete("page")
      : searchParams.set("page", value.toString());
    setSearchParams(searchParams);
  };

  return (
    <Pagination
      count={Math.ceil(count / 6)}
      color={color}
      size={size}
      onChange={handleChange}
      page={Number(page)}
    />
  );
};

export default SimplePagination;
