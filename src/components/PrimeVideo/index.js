// Write your code here

import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )
  console.log('Prime')
  return (
    <div className="prime-home">
      <img
        className="prime-logo"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="movies-slider-cont">
        <h1 className="label-headings">Action</h1>
        <MoviesSlider moviesList={actionMoviesList} />
        <h1 className="label-headings">Comedy</h1>
        <MoviesSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
