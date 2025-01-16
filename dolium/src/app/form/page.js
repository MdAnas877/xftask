'use client';

import React from 'react';
import {
  Grid,
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

function UserForm() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <Typography variant="h4" fontWeight="bold" marginBottom="20px" align="center">
        User Form
      </Typography>

      <form>
        {/* Personal Information */}
        <Typography variant="h6" fontWeight="bold" marginBottom="10px">
          Personal Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="Full Name" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Email Address" type="email" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Phone Number" type="tel" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Date of Birth" type="date" fullWidth InputLabelProps={{ shrink: true }} required />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Gender:</Typography>
            <RadioGroup row>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </Grid>
        </Grid>

        {/* Address Information */}
        <Typography variant="h6" fontWeight="bold" marginTop="20px" marginBottom="10px">
          Address Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Address Line 1" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Address Line 2" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="City" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="State" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel>Country</InputLabel>
              <Select>
                <MenuItem value="india">India</MenuItem>
                <MenuItem value="usa">USA</MenuItem>
                <MenuItem value="uk">UK</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="ZIP Code" type="number" fullWidth required />
          </Grid>
        </Grid>

        {/* Preferences and Feedback */}
        <Typography variant="h6" fontWeight="bold" marginTop="20px" marginBottom="10px">
          Preferences and Feedback
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1">Favorite Products:</Typography>
            <FormGroup row>
              <FormControlLabel control={<Checkbox />} label="Option A" />
              <FormControlLabel control={<Checkbox />} label="Option B" />
              <FormControlLabel control={<Checkbox />} label="Option C" />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <Typography>Overall Satisfaction:</Typography>
            <Slider defaultValue={50} step={10} marks min={0} max={100} />
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              minRows={4}
              placeholder="Feedback Message"
              style={{ width: '100%', padding: '10px', borderColor: '#ccc' }}
            />
          </Grid>
        </Grid>

        {/* Event Registration */}
        <Typography variant="h6" fontWeight="bold" marginTop="20px" marginBottom="10px">
          Event Registration
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel>Event Type</InputLabel>
              <Select>
                <MenuItem value="workshop">Workshop</MenuItem>
                <MenuItem value="webinar">Webinar</MenuItem>
                <MenuItem value="conference">Conference</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Preferred Date" type="date" fullWidth InputLabelProps={{ shrink: true }} required />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Time Slot" type="time" fullWidth InputLabelProps={{ shrink: true }} required />
          </Grid>
        </Grid>

        {/* File Upload */}
        <Typography variant="h6" fontWeight="bold" marginTop="20px" marginBottom="10px">
          File Upload
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button variant="outlined" component="label" fullWidth>
              Upload Profile Picture
              <input type="file" hidden />
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="outlined" component="label" fullWidth>
              Upload Resume
              <input type="file" hidden />
            </Button>
          </Grid>
        </Grid>

        {/* Survey */}
        <Typography variant="h6" fontWeight="bold" marginTop="20px" marginBottom="10px">
          Survey
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12}>
            <FormControlLabel control={<Checkbox />} label="Subscribe to Newsletter?" />
          </Grid>
        </Grid>

        {/* Payment Information */}
        <Typography variant="h6" fontWeight="bold" marginTop="20px" marginBottom="10px">
          Payment Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1">Payment Method:</Typography>
            <RadioGroup row>
              <FormControlLabel value="credit" control={<Radio />} label="Credit Card" />
              <FormControlLabel value="debit" control={<Radio />} label="Debit Card" />
              <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" component="label" fullWidth>
              Upload Payment Receipt
              <input type="file" hidden />
            </Button>
          </Grid>
        </Grid>

        {/* Submit and Reset */}
        <Grid container spacing={2} marginTop="20px">
          <Grid item xs={6}>
            <Button variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined" color="secondary" fullWidth>
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default UserForm;
