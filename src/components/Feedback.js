import React, {useState, useEffect} from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";



export default function Feedback () {
    const [good, setGood] = useState(0)
    const [bad, setBad] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [totalFeedback, setTotalFeedback] = useState(0)
    const [positiveFeedback, setPositiveFeedback] = useState(0)

    const onClick = e => {
        const {name} = e.target
        switch (name) {
            case 'good' :
                setGood(state => state + 1)
                break
            case 'bad' :
                setBad(state => state + 1)
                break
            case 'neutral' :
                setNeutral(state => state + 1)
                break
            default:
                return
        }
    }
    useEffect(() => {
        setTotalFeedback(good + bad + neutral)
        setPositiveFeedback((good * 100 / (good + bad + neutral)).toFixed(0))
    }, [good, bad, neutral])

    return (
        <Section title={'Please leave feedback'}>
            <FeedbackOptions
                clickButton={onClick}
                options={['good', 'neutral', 'bad']}
            />
            <h2>Statistics</h2>
            {totalFeedback > 0 ?
                <Statistics
                    good={good}
                    bad={bad}
                    neutral={neutral}
                    total={totalFeedback}
                    positive={positiveFeedback}
                />
                :
                <Notification
                    message={'No feedback given'}/>
            }

        </Section>
    )
}
