import { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Select,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import {
  filterData,
  getFilterData,
  getFilterValues,
} from "../utils/filterData";
import Image from "next/image";

const SearchFilters = () => {
  const router = useRouter();
  const [filters, setFilters] = useState(filterData);

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;
    const values = getFilterValues(filterValues);
    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query });
  };

  return (
    <div>
      <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
        {filters.map((filter) => (
          <Box key={filter.queryName}>
            <Select
              placeholder={filter.placeholder}
              w="fit-content"
              p="2"
              onChange={(e) =>
                searchProperties({ [filter.queryName]: e.target.value })
              }
            >
              {filter?.items?.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.name}
                </option>
              ))}
            </Select>
          </Box>
        ))}
      </Flex>
    </div>
  );
};

export default SearchFilters;
