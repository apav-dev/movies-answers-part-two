import { VerticalResultsDisplay } from "../components/VerticalResults";
import { SectionComponent, SectionConfig } from "../models/sectionComponent";
import { StandardCard } from "../components/cards/StandardCard";

const verticalResultsContainerCssStyles = { container: 'flex overflow-x-auto space-x-12' }

const ActorsSection: SectionComponent = function (props: SectionConfig): JSX.Element | null {
  const { results, cardConfig, header } = props;
  
  if (results.length === 0) {
    return null;
  }
  const cardComponent = cardConfig?.CardComponent || StandardCard;
  
  return (
    <section>
      
    </section>
  );
}
export default ActorsSection;