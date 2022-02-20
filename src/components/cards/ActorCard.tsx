import { CardProps } from "../../models/cardComponent";

interface Actor {
  name: string,
  primaryPhoto?: {
    image: {
      url: string
  }
},
  c_bio?: string
}

const actorCardCssStyles = {
  outerContainer: 'min-w-1/3 h-96 relative flex flex-col justify-center',
  actorHeadshot: 'absolute z-10 h-full w-2/5 top-0 left-8 bg-cover shadow-headshot',
  innerContainer: 'h-80 bg-gray-100 flex justify-end text-gray-800',
  actorInfoContainer: 'w-1/2 flex flex-col items-center  my-8 mr-2 bg-white shadow-bio',
  actorNameText: 'text-3xl truncate text-ellipsis font-bold w-64 text-center font-display',
  actorBioText: 'text-xs overflow-y-hidden text-ellipsis w-64 text-justify font-body max-h-56 pt-4'
}

export function ActorCard(props: CardProps): JSX.Element {
  const actor = props.result.rawData as unknown as Actor;

  return (
    <div className={actorCardCssStyles.outerContainer} >
      <div 
        className={actorCardCssStyles.actorHeadshot} 
        style={{ backgroundImage: `url(${actor.primaryPhoto?.image.url})` }}>
      </div>
      <div className={actorCardCssStyles.innerContainer}>
        <div className={actorCardCssStyles.actorInfoContainer} >
          <span className={actorCardCssStyles.actorNameText}>
            {actor.name}
          </span>
          <div className={actorCardCssStyles.actorBioText}>
            {actor.c_bio}
          </div>
        </div>
      </div>
    </div>
  )
}