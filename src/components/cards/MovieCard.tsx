import { CardProps } from "../../models/cardComponent";

interface Movie {
  name: string,
  description?: string,
  c_poster?: {
    url: string
  },
  c_genres?: string[],
  c_mpaRating?: string,
  c_runtime?: string
}

const movieCardCssStyles = {
  container: 'w-64 h-96 flex flex-col rounded-lg relative group',
  textPanel: 'absolute top-0 bottom-0 right-0 left-0 w-full rounded-lg bg-gray-200 object-cover opacity-0 transition duration-300 ease-linear group-hover:opacity-90',
  moviePosterContainer: 'w-full h-96 bg-cover rounded-lg shadow-movie',
  textContainer: 'w-60 px-4 mt-1 mb-2 flex flex-col font-body text-gray-800 absolute opacity-0 transition duration-500 group-hover:opacity-100',
  descriptionContainer: 'flex flex-col mt-4',
  descriptionText: 'text-sm',
  headingText: 'font-display text-lg',
  movieInfoList: 'space-x-1 text-sm'
}

export function MovieCard(props: CardProps): JSX.Element {
  const movie = props.result.rawData as unknown as Movie;

  return ( <div></div>)
}