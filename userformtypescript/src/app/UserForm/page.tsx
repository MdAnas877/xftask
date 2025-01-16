'use client'
import React, { FC } from "react";
import {
    TextField,
    Typography,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    RadioGroup,
    Radio,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Slider,
    TextareaAutosize,
} from '@mui/material';
import Grid from "@mui/material/Grid2";

const UserForm: FC = () => {
    return (
        <>
            <div style={{ padding: '20px', maxWidth: '1250px', margin: 'auto' }}>
                <Typography variant="h4" fontWeight="bold" marginBottom="20px" align="center">
                    User Form
                </Typography>

                <form className="formContainer">
                    <Typography variant="h6" fontWeight="bold" marginBottom="10px">
                        Personal Information
                    </Typography>

                    <Grid container spacing={2}>

                        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 12 }}>
                            <TextField label="Full Name" fullWidth required />
                        </Grid>

                        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 12 }}>
                            <TextField label="Email" fullWidth required />
                        </Grid>


                        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 12 }}>
                            <TextField label="Phone Number" type="tel" fullWidth required />
                        </Grid>

                        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 12 }}>
                            <TextField label="Date of Birth" type="date" fullWidth InputLabelProps={{ shrink: true }} required />                        </Grid>

                        <Grid size={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
                            <Typography variant="body1">Gender:</Typography>
                            <div className="radioGender">
                                <RadioGroup row >

                                    <div className="genderRadio">
                                        <div>

                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        </div>
                                        <div>

                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        </div>

                                        <div>
                                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                                        </div>
                                    </div>
                                </RadioGroup>
                            </div>
                        </Grid>
                    </Grid>


                    <Typography variant="h6" fontWeight="bold" marginTop="20px" marginBottom="10px">
                        Address Information
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid size={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
                            <TextField label="Address Line 1" fullWidth required />
                        </Grid>

                        <Grid size={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
                            <TextField label="Address Line 2" fullWidth />
                        </Grid>


                        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 12 }}>
                            <TextField label="City" fullWidth required />
                        </Grid>


                        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 12 }}>
                            <TextField label="State" fullWidth required />
                        </Grid>

                        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 12 }}>
                            <FormControl fullWidth required>
                                <InputLabel>Country</InputLabel>
                                <Select>
                                    <MenuItem value="india">India</MenuItem>
                                    <MenuItem value="usa">USA</MenuItem>
                                    <MenuItem value="uk">UK</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 12 }}>
                            <TextField label="ZIP Code" type="number" fullWidth required />
                        </Grid>
                    </Grid>
                    <Typography variant="h6" fontWeight="bold" marginTop="20px" marginBottom="10px">
                        Preferences and Feedback
                    </Typography>

                    <Grid container spacing={2}>

                        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 12 }}>
                            <Typography variant="body1">Favorite Products:</Typography>
                            <FormGroup row>

                                <div className="favoriteProduct">
                                    <div>

                                        <FormControlLabel control={<Checkbox />} label="Option A" />
                                    </div>
                                    <div>

                                        <FormControlLabel control={<Checkbox />} label="Option B" />
                                    </div>
                                    <div>
                                        <FormControlLabel control={<Checkbox />} label="Option C" />
                                    </div>
                                </div>
                            </FormGroup>
                        </Grid>

                        <Grid size={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
                            <Typography>Overall Satisfaction:</Typography>
                            <Slider defaultValue={50} step={10} marks min={0} max={100} />
                        </Grid>

                        <Grid size={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
                            {/* <TextareaAutosize
                                minRows={4}
                                placeholder="Feedback Message"
                                style={{ width: '100%', padding: '10px', borderColor: '#ccc' }}
                            /> */}
                            <TextField
                                fullWidth
                                label=""
                                variant="outlined"
                                multiline
                                placeholder="Feedback Message"
                                rows={4}
                            />
                        </Grid>
                    </Grid>

                    <Typography variant="h6" fontWeight="bold" marginTop="20px" marginBottom="10px">
                        Event Registration
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 12 }}>
                            <FormControl fullWidth required>
                                <InputLabel>Event Type</InputLabel>
                                <Select>
                                    <MenuItem value="workshop">Workshop</MenuItem>
                                    <MenuItem value="webinar">Webinar</MenuItem>
                                    <MenuItem value="conference">Conference</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 12 }}>
                            <TextField label="Preferred Date" type="date" fullWidth InputLabelProps={{ shrink: true }} required />
                        </Grid>

                        <Grid size={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
                            <TextField label="Time Slot" type="time" fullWidth InputLabelProps={{ shrink: true }} required />
                        </Grid>
                    </Grid>


                    <Typography variant="h6" fontWeight="bold" marginTop="20px" marginBottom="10px">
                        File Upload
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 12 }}>
                            <Button variant="outlined" component="label" fullWidth>
                                Upload Profile Picture
                                <input type="file" hidden />
                            </Button>
                        </Grid>

                        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 12 }}>
                            <Button variant="outlined" component="label" fullWidth>
                                Upload Resume
                                <input type="file" hidden />
                            </Button>
                        </Grid>
                    </Grid>

                    <Typography variant="h6" fontWeight="bold" marginTop="20px" marginBottom="10px">
                        Survey
                    </Typography>

                    <Grid container spacing={2}>

                        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 12 }}>
                            <FormControl fullWidth required>
                                <InputLabel>Age Group</InputLabel>
                                <Select>
                                    <MenuItem value="under_18">Under 18</MenuItem>
                                    <MenuItem value="18_25">18-25</MenuItem>
                                    <MenuItem value="26_40">26-40</MenuItem>
                                    <MenuItem value="41_plus">41+</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 12 }}>
                            <FormControlLabel control={<Checkbox />} label="Subscribe to Newsletter?" />
                        </Grid>
                    </Grid>

                    <Typography variant="h6" fontWeight="bold" marginTop="20px" marginBottom="10px">
                        Payment Information
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid size={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
                            <Typography variant="body1">Payment Method:</Typography>
                            <RadioGroup row>
                                <div className="paymentMethods">
                                    <div>

                                        <FormControlLabel value="credit" control={<Radio />} label="Credit Card" />
                                    </div>
                                    <div>

                                        <FormControlLabel value="debit" control={<Radio />} label="Debit Card" />
                                    </div>
                                    <div>

                                        <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
                                    </div>
                                </div>
                            </RadioGroup>
                        </Grid>

                        <Grid size={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
                            <Button variant="outlined" component="label" fullWidth>
                                Upload Payment Receipt
                                <input type="file" hidden />
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} marginTop="20px">

                        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 12 }}>
                            <Button variant="contained" color="primary" fullWidth>
                                Submit
                            </Button>
                        </Grid>

                        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 12 }}>
                            <Button variant="outlined" color="secondary" fullWidth>
                                Reset
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>

        </>
    );
}

export default UserForm;
