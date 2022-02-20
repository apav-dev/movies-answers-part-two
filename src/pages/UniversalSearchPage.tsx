import UniversalResults from '../components/UniversalResults';
import DirectAnswer from '../components/DirectAnswer';
import { UniversalResultsConfig } from '../config/universalResultsConfig';
import SpellCheck from '../components/SpellCheck';
import usePageSetupEffect from '../hooks/usePageSetupEffect';

// const universalResultsFilterConfig = {
//   show: true,
//   customCssClasses: {
//     nlpFilter: 'border rounded-3xl px-3 py-1.5 text-sm font-medium italic text-gray-800 mr-2',
//   },
//   cssCompositionMethod: "assign",
// };

export default function UniversalSearchPage(props: { universalResultsConfig: UniversalResultsConfig}) {
  const { universalResultsConfig } = props;
  usePageSetupEffect();

  return (
    <div>
      <SpellCheck />
      <DirectAnswer 
        customCssClasses={{ 
          container: 'p-4 border rounded-lg shadow-movie bg-gray-200 w-1/3', 
          fieldValueTitle: 'mb-4 text-gray-700 font-body', 
          fieldValueDescription: 'font-bold text-xl text-gray-800 font-display text-3xl',
        }}
        cssCompositionMethod='assign'/>
      <UniversalResults
        appliedFiltersConfig={{
          show: true,
          customCssClasses: {
            nlpFilter: 'border rounded-3xl px-3 py-1.5 text-sm font-medium italic text-gray-800 mr-2',
          },
          cssCompositionMethod: "assign",
        }}
        verticalConfigs={universalResultsConfig}
        cssCompositionMethod="assign"
      />
    </div>
  );
}