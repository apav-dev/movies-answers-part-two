import { ActorCard } from '../components/cards/ActorCard';
import { MovieCard } from '../components/cards/MovieCard';
import { VerticalConfig } from '../components/UniversalResults';
import ActorsSection from '../sections/ActorsSection';
import MoviesSection from '../sections/MoviesSection';

/* 
  Adding a new config for a vertical section looks like:
  
  [verticalKey]: {
    cardConfig: {
      CardComponent: [custom card component]
    },
    SectionComponent: [custom section component]
  }

*/

export type UniversalResultsConfig = Record<string, VerticalConfig>;

export const universalResultsConfig: UniversalResultsConfig = {
  movie: {
    cardConfig: {
      CardComponent: MovieCard,
    },
    SectionComponent: MoviesSection,
  },
  actors: {
    cardConfig: {
      CardComponent: ActorCard,
    },
    SectionComponent: ActorsSection
  }
}