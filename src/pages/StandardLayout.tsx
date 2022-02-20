import Navigation from '../components/Navigation';
import { SearchTypeEnum, useAnswersState } from '@yext/answers-headless-react';
import { universalResultsConfig } from '../config/universalResultsConfig';
import { LayoutComponent } from '../PageRouter';
import SearchBar from '../components/SearchBar';
import SampleVisualSearchBar from '../components/VisualAutocomplete/SampleVisualSearchBar';

const navLinks = [
  {
    to: '/',
    label: 'All'
  },
  ...Object.entries(universalResultsConfig).map(([verticalKey, config]) => ({
    to: verticalKey,
    label: config.label || verticalKey
  }))
]

const searchBarCssStyles = {
  container: 'h-12 font-display text-xl w-2/5', 
  logoContainer: 'hidden', 
  inputContainer: 'inline-flex items-center justify-between w-full mt-1',
  inputDropdownContainer: 'bg-white border rounded-lg border-gray-200 w-full overflow-hidden text-black',
}

/**
 * A LayoutComponent that provides a SearchBar and Navigation tabs to a given page.
 */
const StandardLayout: LayoutComponent = ({ page }) => {
  const isVertical = useAnswersState(s => s.meta.searchType) === SearchTypeEnum.Vertical;

  return (
    <>
      {/* {isVertical
        ? 
        : <SampleVisualSearchBar />
      } */}
      <SearchBar
        placeholder='Search...'
        screenReaderInstructionsId='SearchBar__srInstructions'
        customCssClasses={searchBarCssStyles}
        cssCompositionMethod='assign'
      />
      {/* <Navigation links={navLinks} */}
      {page}
    </>
  )
}
export default StandardLayout;