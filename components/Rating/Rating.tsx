import { useEffect, useState } from 'react'
import styles from './Rating.module.css'
import cn from 'classnames'
import StarIcon from './star.svg'
import { RatingProps } from './Rating.props'

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  className,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArr, setRatingArr] = useState<JSX.Element[]>(
    new Array(5).fill(<></>),
  )
  useEffect(() => {
    constructRating(rating)
  }, [rating])

  const constructRating = (currentRate: number) => {
    const updArr = ratingArr.map((r: JSX.Element, i: number) => {
      return (
        <StarIcon
          className={cn(styles.star, {
            [styles.filled]: i < currentRate,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onClick={() => changeDisplay(i + 1)}
        />
      )
    })
    setRatingArr(updArr)
  }

  const changeDisplay = (i: number) => {
    constructRating(i)
  }

  return (
    <div {...props}>
      {ratingArr.map((r, i) => (
        <span key={i}> {r} </span>
      ))}
    </div>
  )
}
