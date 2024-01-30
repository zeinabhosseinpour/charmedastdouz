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
    console.log("prevsearchparamshooks:", prevSearchParams);
    setSearchParams({ ...prevSearchParams, ...filterName });
  };
  console.log("serachhook;", searchParams);
  // return updateSearchParams;

  // return { searchParams, UpdateSearchParams };

  // const filterComponent = (Name) => {
  const componentParams = filterParams[0].getAll(filterComponentName);
  // console.log("componentparamshook:", componentParams);
  //   return componentParams;

  // };
  // return [updateSearchParams, filterComponent];
  return [updateSearchParams, componentParams];
};

export default useSearchParamsFilter;
