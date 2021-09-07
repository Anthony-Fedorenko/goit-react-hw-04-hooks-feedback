import React from "react";
import PropTypes from 'prop-types'
import style from './FeedbackOtions.module.css'

const FeedbackOptions = ({clickButton, options}) => (
    <div>
        {options.map((option) => (
            <button name={option} key={option} type='button' onClick={clickButton}
                className={style.good}>{option}</button>
        )
        )}
    </div>
)

FeedbackOptions.propTypes = {
    clickButton: PropTypes.func.isRequired,
    options: PropTypes.array,
}

export default FeedbackOptions