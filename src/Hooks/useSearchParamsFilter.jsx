import React from "react";
import { useSearchParams } from "react-router-dom";

const useSearchParamsFilter = (filterComponentName) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParams = useSearchParams();

  // const removeAllFilter

  const updateSearchParams = (filterName) => {
    const keys = searchParams.keys();

    const prevSearchParams = {};

    for (var key of keys) {
      prevSearchParams[key] = searchParams.getAll(key);
    }

    setSearchParams({ ...prevSearchParams, ...filterName });
  };
  const componentParams = filterComponentName
    ? filterParams[0].getAll(filterComponentName)
    : [];

  return [updateSearchParams, componentParams];
};

export default useSearchParamsFilter;
