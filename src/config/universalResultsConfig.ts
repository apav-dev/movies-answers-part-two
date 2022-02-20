import { MovieCard } from '../components/cards/MovieCard';
import { VerticalConfig } from '../components/UniversalResults';
import MoviesSection from '../sections/MoviesSection';

export type UniversalResultsConfig = Record<string, VerticalConfig>;

export const universalResultsConfig: UniversalResultsConfig = {
  movie: {
    cardConfig: {
      CardComponent: MovieCard,
      showOrdinal: false
    },
    SectionComponent: MoviesSection
  }
}