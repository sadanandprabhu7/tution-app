import { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
const SearchEntity = () => {
  //data and fetching state
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefetching, setIsRefetching] = useState(false);
  const [rowCount, setRowCount] = useState(0);

  //table state
  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  //if you want to avoid useEffect, look at the React Query example instead
  useEffect(() => {
    const fetchData = async () => {
      if (!data.length) {
        setIsLoading(true);
      } else {
        setIsRefetching(true);
      }

      // const url = new URL(
      //   '/api/data',
      //   process.env.NODE_ENV === 'production'
      //     ? 'https://www.material-react-table.com'
      //     : 'http://localhost:3000',
      // );
      // url.searchParams.set(
      //   'start',
      //   `${pagination.pageIndex * pagination.pageSize}`,
      // );
      // url.searchParams.set('size', `${pagination.pageSize}`);
      // url.searchParams.set('filters', JSON.stringify(columnFilters ?? []));
      // url.searchParams.set('globalFilter', globalFilter ?? '');
      // url.searchParams.set('sorting', JSON.stringify(sorting ?? []));

      try {
        var myHeaders = new Headers();
        myHeaders.append(
          "Authorization",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzUyOWI4MGM2NWE3MjgzNzQ1ZjE5ZCIsImlhdCI6MTcwNzQyMjk5OH0.iLWqOHbJ53LAJdgsNniw6_KBpC3iJidN0F7AufOQ0JI"
        );

        var requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        const response = await fetch(
          "http://localhost:3000/allTeachers",
          requestOptions
        );
        const json = await response.json();
        setData(json);
        console.log(json, "data++++++++++++++");
        setRowCount(json.length);
      } catch (error) {
        setIsError(true);
        console.error(error);
        return;
      }
      setIsError(false);
      setIsLoading(false);
      setIsRefetching(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    columnFilters,
    globalFilter,
    pagination.pageIndex,
    pagination.pageSize,
    sorting,
  ]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "first_name",
        header: "First Name",
      },
      //column definitions...
      {
        accessorKey: "last_name",
        header: "Last Name",
      },
      // {
      //   accessorKey: "address",
      //   header: "Address",
      // },
      // {
      //   accessorKey: "state",
      //   header: "State",
      // },
      // {
      //   accessorKey: "phoneNumber",
      //   header: "Phone Number",
      // },
      //end
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    // enableRowSelection: true,
    enableColumnActions: false,
    enableColumnFilters: false,
    // enablePagination: false,
    // enableSorting: false,
    enableColumnResizing: true,
    muiTableBodyProps: {
      sx: {
        //stripe the rows, make odd rows a darker color
        // "& td:nth-of-type(odd)": {
        //   backgroundColor: "#f5f5f5",
        // },
        backgroundColor: "#f5f5f5",
      },
    },
    muiTableBodyCellProps: {
      sx: {
        borderRight: "2px solid #e0e0e0", //add a border between columns
      },
    },

    getRowId: (row) => row.phoneNumber,
    initialState: { showColumnFilters: true },
    manualFiltering: true,
    manualPagination: true,
    manualSorting: true,
    muiToolbarAlertBannerProps: isError
      ? {
          color: "error",
          children: "Error loading data",
        }
      : undefined,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    rowCount,
    state: {
      columnFilters,
      globalFilter,
      isLoading,
      pagination,
      showAlertBanner: isError,
      showProgressBars: isRefetching,
      sorting,
    },
  });

  return <MaterialReactTable table={table} />;
};

export default SearchEntity;
