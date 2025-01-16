'use client'
import React from 'react'
import { useState } from 'react';
import NavBar from '../navbar/page'
import { Box, TextField, Button, Typography, Grid, MenuItem, Select, InputLabel, FormControl, Grid2 } from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
function page() {
  const [formData, setFormData] = useState({
    name: '',
    alias: '',
    description: '',
    missionOutcome: '',
    watermarkText: '',
    organizationalGoals: '',
    domains: '',
    admin: '',
    owner: '',
    homePageImage1: '',
    homePageImage2: '',
    homePageImage3: ''
  });
  const [errors, setErrors] = useState({

  });


  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters long';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name must contain only alphabets.';
    }

    // Alias validation
    if (!formData.alias.trim()) {
      newErrors.alias = 'Alias is required';
    } else if (formData.alias.length < 3) {
      newErrors.alias = 'Alias must be at least 3 characters long';
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.alias)) {
      newErrors.alias = 'Alias must contain only alphanumeric characters and underscores.';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (!formData.missionOutcome.trim()) {
      newErrors.missionOutcome = 'missionOutcome is required';
    }

    if (!formData.watermarkText.trim()) {
      newErrors.watermarkText = 'watermarkText is required';
    }
    if (!formData.organizationalGoals.trim()) {
      newErrors.organizationalGoals = 'organizationalGoals is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  // Handle change for all input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);

  };

  // Handle file input change
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.preventDefault();
    if (validate()) {
      console.log('Form Submitted', formData);
    } else {
      console.log('Validation failed');
    }
  };

  return (
    <div>
      <NavBar />
      <Box
        sx={{
          // maxWidth: '900px',
          margin: '20px auto',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
        }}
      >
        {/* Title */}
        <Typography variant="h5" fontWeight="bold" marginBottom="20px">
          Create Collection
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}
          >
            {/* Name */}
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" fontWeight="bold" gutterBottom>
                Name
              </Typography>
              <TextField
                fullWidth
                label=""
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name} // Shows error state if there's an error
                helperText={errors.name}
              />

            </Grid>

            {/* Alias */}
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" fontWeight="bold" gutterBottom>
                Alias
              </Typography>
              <TextField
                fullWidth
                label=""
                variant="outlined"
                name="alias"
                value={formData.alias}
                error={!!errors.alias} // Shows error state if there's an error
                helperText={errors.alias}
                onChange={handleChange}
              />
            </Grid>

            {/* Description */}
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" fontWeight="bold" gutterBottom>
                Description
              </Typography>
              <TextField
                fullWidth
                label=""
                variant="outlined"
                multiline
                rows={4}
                name="description"
                value={formData.description}
                error={!!errors.description} // Shows error state if there's an error
                helperText={errors.description}
                onChange={handleChange}
              />
            </Grid>

            {/* Mission/Outcome */}
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" fontWeight="bold" gutterBottom>
                Mission/Outcome
              </Typography>
              <TextField
                fullWidth
                label=""
                variant="outlined"
                multiline
                rows={4}
                name="missionOutcome"
                value={formData.missionOutcome}
                error={!!errors.missionOutcome} // Shows error state if there's an error
                helperText={errors.missionOutcome}
                onChange={handleChange}
              />
            </Grid>

            {/* Preview Watermark Text */}
            <Grid item xs={12} sm={12}>
              <Grid item xs={6} sm={6} sx={{ paddingRight: '10px' }}>
                <Typography variant="body1" fontWeight="bold" gutterBottom>
                  Preview Watermark Text
                </Typography>
                <TextField
                  fullWidth
                  label=""
                  variant="outlined"
                  name="watermarkText"
                  value={formData.watermarkText}
                  error={!!errors.watermarkText} // Shows error state if there's an error
                  helperText={errors.watermarkText}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            {/* Organisational Goals */}

            <Grid item xs={12} sm={6}>
              <Typography variant="body1" fontWeight="bold" gutterBottom>
                Organisational Goals
              </Typography>
              <TextField
                fullWidth
                label=""
                variant="outlined"
                name="organizationalGoals"
                value={formData.organizationalGoals}
                error={!!errors.organizationalGoals} // Shows error state if there's an error
                helperText={errors.organizationalGoals}
                onChange={handleChange}
              />

            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Typography variant="body1" fontWeight="bold" gutterBottom>
                  Domains
                </Typography>
                <Select
                  variant="outlined"
                  name="domains"
                  value={formData.domains || ""} // Default to empty string if not set
                  onChange={handleChange}
                  displayEmpty // Ensures the placeholder "Select One" is shown when value i

                >
                  <MenuItem value="" disabled>
                    Select
                  </MenuItem>
                  <MenuItem value="domain1">Domain 1</MenuItem>
                  <MenuItem value="domain2">Domain 2</MenuItem>
                  <MenuItem value="domain3">Domain 3</MenuItem>
                </Select>
              </FormControl>

            </Grid>
            <Grid item xs={12} sm={12}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: '', justifyContent: '', marginBottom: '20px' }}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: '#000', color: '#fff', textTransform: 'none' }}
                    startIcon={<ControlPointIcon />}
                  >
                    Add More
                  </Button>
                </Box>
              </Grid>
            </Grid>


            <Grid xs={6} md={6} className='formGoals'><FormControl fullWidth required>
              <Typography variant="body1" fontWeight="bold" gutterBottom>
                Organisational Goals
              </Typography>
              <Select
                name="owner"
                value={formData.owner || ""} // Ensures default is empty
                displayEmpty
                onChange={handleChange}
              >
                {/* Placeholder option */}
                <MenuItem value="" disabled>
                  Select
                </MenuItem>
                <MenuItem value="Owner 1">Owner 1</MenuItem>
                <MenuItem value="Owner 2">Owner 2</MenuItem>
              </Select>
            </FormControl>
              <FormControl fullWidth required>
                <Typography variant="body1" fontWeight="bold" gutterBottom>
                  Organisational Goals
                </Typography>
                <Select
                  name="owner"
                  value={formData.owner || ""} // Ensures default is empty
                  displayEmpty
                  onChange={handleChange}
                >
                  {/* Placeholder option */}
                  <MenuItem value="" disabled>
                    Select
                  </MenuItem>
                  <MenuItem value="Owner 1">Owner 1</MenuItem>
                  <MenuItem value="Owner 2">Owner 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={6} md={6}>
              <div>

                <Grid item xs={12} md={12} sx={{ paddingLeft: '16px' }}>
                  <Typography variant="body1" fontWeight="bold" gutterBottom>
                    Home Page Image
                  </Typography>
                  <Button
                    variant="outlined"
                    component="label"
                    sx={{ width: '100%', padding: '20px', borderStyle: 'dashed', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
                  >
                    <CloudDownloadIcon className='cloudicon' sx={{
                      fontSize: '50px'
                    }} />

                    <Typography className='headingImageCloud'>
                      Drag and Drop to Upload File
                    </Typography>

                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      name='homePageImage1'
                      onChange={handleFileChange}
                    />

                    <Button
                      sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        marginTop: '10px',
                      }}
                    >
                      Select an Image
                    </Button>
                  </Button>
                </Grid>
              </div></Grid>


            <Grid xs={12} sm={12}>





            </Grid>


            <Grid item xs={12} md={6}>
              <Typography variant="body1" fontWeight="bold" gutterBottom >
                Home Page Image22
              </Typography>
              <Button
                variant="outlined"
                component="label"
                sx={{
                  width: '100%', padding: '20px', borderStyle: 'dashed',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '20px'
                }}
              >
                <CloudDownloadIcon className='cloudicon' sx={{
                  fontSize: '50px'
                }} />

                <Typography className='headingImageCloud'>
                  Drag and Drop to Upload File
                </Typography>

                <input
                  type="file"
                  name="homePageImage2"
                  hidden
                  onChange={handleFileChange}
                />
                <Button
                  sx={{
                    backgroundColor: 'black',
                    color: 'white'
                  }}
                >Select an Image</Button>
              </Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="body1" fontWeight="bold" gutterBottom>
                Home Page Image33
              </Typography>
              <Button
                variant="outlined"
                component="label"
                sx={{
                  width: '100%',
                  padding: '20px',
                  borderStyle: 'dashed',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '20px'
                }}
              >

                <CloudDownloadIcon className='cloudicon' sx={{
                  fontSize: '50px'
                }} />

                <Typography className='headingImageCloud'>
                  Drag and Drop to Upload File
                </Typography>
                <input type="file"
                  hidden
                  name='homePageImage3'
                  onChange={handleFileChange}
                />
                <Button
                  sx={{
                    backgroundColor: 'black',
                    color: 'white'
                  }}
                >Select an Image</Button>
              </Button>
            </Grid>


            <div style={{

              marginLeft: 'auto'
            }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end", // Align buttons to the right
                  gap: "10px", // Add space between the buttons
                  marginTop: "20px",
                  marginRight: "auto"
                }}
              >
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "red", color: "#fff", textTransform: "none" }}
                >
                  Cancel
                </Button>
                <Button
                  type='submit'
                  variant="contained"
                  sx={{ backgroundColor: "#000", color: "#fff", textTransform: "none" }}
                >
                  Save
                </Button>
              </Box>
            </div>
          </Grid>
        </form>
      </Box>
    </div>
  )
}

export default page
