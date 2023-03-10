import {
    Button,
    Card,
    CardContent,
    TextareaAutosize,
    TextField,
    Typography,
} from '@mui/material'
import { useState } from 'react'
import './Reviews.css'
type Props = {}

type Review = {
    name: string
    text: string
}
const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Julie',
            text: 'Fantastic holiday in Malta for Christmas,saw lots , everything very well organised hotel standard room was not that great other than that everything was perfect',
        },
        {
            name: 'Robert',
            text: 'Travelsphere is tour of Australia was so packed that everyday wss a new adventure. Although at times a little too packed I did feel like an actual traveller rather then a tourist. The guide director who met us at Heathrow was amazing. Would recommend Travelsphere.. we will be using them again I am sure.',
        },
        {
            name: 'Alex',
            text: 'Excellent programme of touring Vietnam and Cambodia. Beautiful countries with very welcoming people. Damian the tour manager and local tour guide Tan very much added to our experience.',
        },
        {
            name: 'Sarah',
            text: 'Brilliant tour with lovely people',
        },
        {
            name: 'Wojcheh',
            text: 'Fantastic holiday with a great bunch of people fantastic guide and local guide was brilliant.Had such an amazing holiday throughout.Would recommend anyone wanting a touring holiday to definitely go to travelsphere',
        },
        {
            name: 'Nigel',
            text: 'Travelsphere have the knowledge, experience and the Tour Managers to make your holiday memorable. I have toured with them on their Best of The West (USA) tour, they are my go to travel company. If you want to see the sights, experience the country and embrace the culture then I have to recommend Travelsphere.',
        },
    ]
    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            text: e.target.value,
        }))
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All field are required')
        } else {
            setReviews((prevState: Review[]) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text: '',
            })
        }
    }
    return (
        <>
            <Typography variant="h4" align="center" sx={{ margin: '50px 0' }}>
                What they say about us
            </Typography>
            <div className="reviews">
                {reviews.map(({ name, text }: Review, i) => (
                    <Card variant="outlined" key={i}>
                        <CardContent className="review">
                            <div>Name: {name}</div>
                            <div>{text}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="review-form">
                <h4 className="leave">Please leave a review</h4>
                <div className="field">
                    <div className="formfirst">
                        <TextField
                            placeholder="Your name"
                            value={newReview.name}
                            onChange={handleName}
                            className="field-first"
                        />
                    </div>
                    <div className="area">
                        <TextareaAutosize
                            minRows={5}
                            placeholder="Your review"
                            value={newReview.text}
                            onChange={handleText}
                            className="area-field"
                        />
                    </div>
                    <Button
                        type="submit"
                        variant="outlined"
                        className="btn-form"
                    >
                        Send
                    </Button>
                </div>
            </form>
        </>
    )
}
export default Reviews
