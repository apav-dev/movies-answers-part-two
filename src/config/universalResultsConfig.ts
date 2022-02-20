import { ActorCard } from '../components/cards/ActorCard';
import { MovieCard } from '../components/cards/MovieCard';
import { VerticalConfig } from '../components/UniversalResults';
import ActorsSection from '../sections/ActorsSection';
import MoviesSection from '../sections/MoviesSection';

export type UniversalResultsConfig = Record<string, VerticalConfig>;

export const universalResultsConfig: UniversalResultsConfig = {
  movie: {
    cardConfig: {
      CardComponent: MovieCard,
      showOrdinal: false
    },
    SectionComponent: MoviesSection
  },
  actors: {
    cardConfig: {
      CardComponent: ActorCard,
      showOrdinal: false
    },
    SectionComponent: ActorsSection
  }
}