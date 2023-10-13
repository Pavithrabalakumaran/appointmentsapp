// Write your code here
// Write your code here
import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails} = props
  const {id, name, date, isFavourite} = appointmentDetails
  const likeImageUrl = isFavourite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const likeTextClassName = isFavourite ? 'button active' : 'button'
  const postedTime = format(date)

  const onClickFavourite = () => {
    const {toggleIsFav} = props
    toggleIsFav(id)
  }

  return (
    <li className="appointment-item">
      <div className="appointment-container">
        <div className="username-time-container">
          <p className="name"> {name}</p>
          <p className="date">{date}</p>
          <p className="time">{postedTime} ago</p>
        </div>
        <div className="favourite-container">
          <img src={likeImageUrl} alt="star" className="like-image" />
          <button
            className={likeTextClassName}
            type="button"
            onClick={onClickFavourite}
          >
            Favourite
          </button>
        </div>
      </div>
    </li>
  )
}

export default AppointmentItem
