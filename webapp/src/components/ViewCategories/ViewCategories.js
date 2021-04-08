import React from 'react'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles((theme) => ({
  text: {
    lineHeight: '1.43',
    letterSpacing: '0.25px',
    textAlign: 'left',
    color: 'rgba(0, 0, 0, 0.6)'
  }
}))

const ViewCategories = ({ categories }) => {
  const classes = useStyles()

  return (
    <>
      {JSON.parse(categories).map((categoriesItem, index) => (
        <Typography
          key={index}
          className={classes.text}
          id={index}
          variant="body1"
        >
          {categoriesItem.category}
        </Typography>
      ))}
    </>
  )
}

ViewCategories.propTypes = {
  categories: PropTypes.any
}

export default ViewCategories