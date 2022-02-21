import { VerticalResultsDisplay } from "../components/VerticalResults";
import { SectionComponent, SectionConfig } from "../models/sectionComponent";
import { StandardCard } from "../components/cards/StandardCard";

const verticalResultsContainerCssStyles = { container: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8' }

const MoviesSection: SectionComponent = function (props: SectionConfig): JSX.Element | null {
  const { results, cardConfig, header } = props;
  
  if (results.length === 0) {
    return null;
  }
  const cardComponent = cardConfig?.CardComponent || StandardCard;
  
  return (
    <section>
      {header}
      <VerticalResultsDisplay
        results={results}
        CardComponent={cardComponent}
        {...(cardConfig && { cardConfig })}
        customCssClasses={verticalResultsContainerCssStyles}
      />
    </section>
  );
}
export default MoviesSection;