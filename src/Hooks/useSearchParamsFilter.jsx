import React from "react";
import { useSearchParams } from "react-router-dom";

const useSearchParamsFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // const removeAllFilter

  const updateSearchParams = (filterName) => {
    const keys = searchParams.keys();

    const prevSearchParams = {};

    for (var key of keys) {
      prevSearchParams[key] = searchParams.getAll(key);
    }
    console.log("prevsearchparamshooks:", prevSearchParams);
    setSearchParams({ ...prevSearchParams, ...filterName });
  };
  console.log("serachhook;", searchParams);
  return updateSearchParams;
  //   return { searchParams, UpdateSearchParams };
};

export default useSearchParamsFilter;
