import HeaderAll from '../../container/HeaderAll/HeaderAll'
import './Contact.css'
import { TextField, Typography, Button } from '@mui/material'

type Props = {}

const Contact = (props: Props) => {
    return (
        <>
            <HeaderAll />
            <div className="back5">CONTACT</div>
            <Typography variant="h5" align="center">
                Get in touch
            </Typography>
            <div className="contact">
                <div className="right-contact">
                    <form className="form">
                        <h4>Please leave your contacts</h4>
                        <h5 className="name">Name</h5>
                        <div>
                            <TextField
                                variant="outlined"
                                size="small"
                                placeholder="Your name"
                                fullWidth
                            />
                        </div>
                        <h5 className="name">Email</h5>
                        <div>
                            <TextField
                                size="small"
                                placeholder="Emile"
                                fullWidth
                            />
                        </div>
                        <h5 className="name">Message</h5>
                        <textarea
                            className="message"
                            name=""
                            id=""
                            placeholder="Your text"
                        ></textarea>
                        <Button
                            type="submit"
                            variant="outlined"
                            className="btn-contact"
                        >
                            Send
                        </Button>
                    </form>
                </div>
                <div>
                    <div className="map"></div>
                    <div className="contacts">
                        <div>
                            <p>
                                <span>Address:</span> JL.Cindelaras No.205A
                            </p>
                            <p>
                                <span>City:</span> Yogyakarta, Indonesia
                            </p>
                            <p>
                                <span>Open:</span> At 8 AM
                            </p>
                        </div>
                        <div>
                            <p>
                                <span>Phone:</span> +62 1234 432 567
                            </p>
                            <p>
                                <span>Email:</span> info@timetotravel.com
                            </p>
                            <p>
                                <span>Close:</span> At 8 PM
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
