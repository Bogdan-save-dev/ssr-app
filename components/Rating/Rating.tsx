import { useEffect, useState, KeyboardEvent } from 'react'
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
        <span
          className={cn(styles.star, {
            [styles.filled]: i < currentRate,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => ratingHandler(i + 1)}
        >
          <StarIcon
            onKeyDown={(e: KeyboardEvent<SVGElement>) =>
              isEditable && handleSpace(i + 1, e)
            }
            tabIndex={isEditable ? 0 : -1}
          />
        </span>
      )
    })
    setRatingArr(updArr)
  }

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return
    }
    constructRating(i)
  }

  const ratingHandler = (i: number) => {
    if (!isEditable || !setRating) {
      return
    }
    setRating(i)
  }

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code != 'Space' || !setRating) {
      return
    }
    setRating(i)
  }

  return (
    <div {...props}>
      {ratingArr.map((r, i) => (
        <span className={styles.editable} key={i}>
          {' '}
          {r}{' '}
        </span>
      ))}
    </div>
  )
}
