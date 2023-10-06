// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  console.log('Movie Item')
  return (
    <Popup
      modal
      trigger={
        <img className="thumbnail-style" src={thumbnailUrl} alt="thumbnail" />
      }
      className="popup-content"
    >
      {close => (
        <div className="inner-popup">
          <IoMdClose
            data-testid="closeButton"
            className="close-icon"
            onClick={() => close()}
          />
          <ReactPlayer
            className="player-style"
            url={videoUrl}
            controls="true"
          />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
