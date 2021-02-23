declare module "react-table" {
  export type Cell = {
    render: (type: string) => any;
    getCellProps: () => any;
    column: Column;
    row: Row;
    state: any;
    value: any;
  };

  export type Row = {
    index: number;
    cells: Cell[];
    getRowProps: () => any;
    original: any;
  };

  export interface HeaderColumn {
    accessor: string | ((originalRow: any) => string);
    Header?: string | ((props: Api) => JSX.Element | string);
    Filter?: string | ((props: Api) => JSX.Element | string);
    Cell?: string | ((cell: Cell) => JSX.Element | string);
    id?: string | number;
    minWidth?: string | number;
    maxWidth?: string | number;
    width?: string | number;
    canSortBy?: boolean;
    sortByFn?: (a: any, b: any, desc: boolean) => 0 | 1 | -1;
    defaultSortDesc?: boolean;
  }

  export interface Column extends HeaderColumn {
    id: string | number;
  }

  export type Page = Row[];

  export interface EnhancedColumn extends Column {
    render: (type: string) => any;
    getHeaderProps: (userProps?: any) => any;
    getSortByToggleProps: (userProps?: any) => any;
    sorted: boolean;
    sortedDesc: boolean;
    sortedIndex: number;
  }

  export type HeaderGroup = {
    headers: EnhancedColumn[];
    getRowProps: (userProps?: any) => any;
  };

  export type Hooks = {
    beforeRender: [];
    columns: [];
    headerGroups: [];
    headers: [];
    rows: Row[];
    row: [];
    renderableRows: [];
    getTableProps: [];
    getRowProps: [];
    getHeaderRowProps: [];
    getHeaderProps: [];
    getCellProps: [];
  };

  export interface Api
    extends TableProps,
      UseRowsValues,
      UseFiltersValues,
      UsePaginationValues,
      UseColumnsValues {
    hooks: Hooks;
    rows: Row[];
    columns: EnhancedColumn[];
    getTableProps: (userProps?: any) => any;
    getRowProps: (userProps?: any) => any;
    prepareRow: (row: Row) => any;
    getSelectRowToggleProps: (userProps?: any) => any;
    toggleSelectAll: (forcedState: boolean) => any;
  }

  export interface TableProps {
    data: any[];
    columns: HeaderColumn[];
    state?: any;
    debug?: boolean;
    sortByFn?: (a: any, b: any, desc: boolean) => 0 | 1 | -1;
    manualSorting?: boolean;
    disableSorting?: boolean;
    defaultSortDesc?: boolean;
    disableMultiSort?: boolean;
    initialState?: { pageIndex?: number, pageSize?: number};
    getTableBodyProps?: any;
  }

  export interface RowsProps {
    subRowsKey: string;
  }

  export interface FiltersProps {
    filterFn: () => void;
    manualFilters: boolean;
    disableFilters: boolean;
    setFilter: () => any;
    setAllFilters: () => any;
  }

  export interface UsePaginationValues {
    nextPage: () => any;
    previousPage: () => any;
    setPageSize: (size: number) => any;
    gotoPage: (page: number) => any;
    canPreviousPage: boolean;
    canNextPage: boolean;
    page: Page;
    pageOptions: [];
    pageCount: number;
  }

  export interface UseRowsValues {
    rows: Row[];
  }

  export interface UseColumnsValues {
    columns: EnhancedColumn[];
    headerGroups: HeaderGroup[];
    headers: EnhancedColumn[];
  }

  export interface UseFiltersValues {
    setFilter: () => any;
    setAllFilters: () => any;
  }

  export function useTable(props: TableProps, ...plugins: any[]): Api;

  export function useSortBy(
    props: TableProps
  ): TableProps & {
    rows: Row[];
  };

  export function useGroupBy(props: TableProps): TableProps & { rows: Row[] };

  export function usePagination(props: TableProps): UsePaginationValues;

  export const actions: any;
}