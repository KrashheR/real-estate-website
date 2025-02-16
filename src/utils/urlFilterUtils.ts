import {
  BuildingFilterMode,
  DEFAULT_FILTER_MODE,
} from '../constants/filterModes';

export const getFilterModeFromUrl = (
  searchParams: URLSearchParams,
): BuildingFilterMode => {
  const filterMode = searchParams.get('filter-mode');

  if (
    filterMode &&
    Object.values(BuildingFilterMode).includes(filterMode as BuildingFilterMode)
  ) {
    return filterMode as BuildingFilterMode;
  }

  return DEFAULT_FILTER_MODE;
};
