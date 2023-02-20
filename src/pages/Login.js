import { Button, Stack, TextField, MenuItem, Autocomplete } from '@mui/material'
import { Box, Container } from '@mui/system'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'



const Login = () => {
   const theme = useTheme();
  //  const [newpass, setNewpass] = useState('');;
  //  const [confirmpass, setConfirmpass] = useState('');
  //  const [degree, setDegree] = useState('');
  const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'ReactJS']
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    degree: "",
    newpass:"",
    confirmpass: ""

  })
 let name, value;
  const updateData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({
      ...user,
      [name]: value

    })
    console.log(name, value)
  }
  const  submitData = async () => {

    const [firstname, lastname, email, degree, newpass, confirmpass] = user;
    const response = await fetch("https://userrecord-234ba-default-rtdb.firebaseio.com/record.json", {
      method: 'POST',
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        degree,
        newpass,
        confirmpass,

      })

    });

    if(response) {
      setUser({
        firstname: "",
        lastname: "",
        email: "",
        degree: "",
        newpass:"",
        confirmpass: ""
    
      })
      alert("data has been submitted")
    }
    else {
      alert("data is not been submitted")
    }

  }

  return (
    <>
    <Box className = 'box'>
      <Container className = 'container' maxWidth='sm' disableGutters={useMediaQuery(theme.breakpoints.only('xs'))} >
        <form method='POST'>
        <Stack direction='row' spacing={8} marginBottom={4}>

          <TextField  InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle color='primary'/>
            </InputAdornment>
          ),
        }}
        variant="standard"
        color="primary"
        required
        label = 'firstName'
        name = 'firstname'
        autoComplete='none'
        value={user.firstname}
        onChange = {updateData}
        />

           <TextField  InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle color='primary'/>
            </InputAdornment>
          
          ),
        }}
       
        variant="standard"
        color="primary"
        required
        label = 'lastName'
        name = 'lastname'
        autoComplete='none'
        value={user.lastname}
        onChange = {updateData}
        />
        </Stack>


        <Stack direction='row' 
        spacing={8}
        sx={{display:'flex',
             
             alignItems:'center'

        
        
        
        }}>

          <TextField  InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    < EmailOutlinedIcon color='primary' />
                  </InputAdornment>
                ),
              }}
              variant="standard"
              color="primary"
              required
              type='email'
              name = 'email'
              autoComplete='none'
              value={user.email}
              onChange = {updateData}

            />


           <TextField  InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SchoolOutlinedIcon color='primary'/>
            </InputAdornment>
          ),
        }}
        
        variant="standard"
        color="primary"
        required
        label = 'Select your last degree'
        select
        sx={{width:'220px'}}
        name = 'degree'
        value={user.degree}
        onChange = {updateData}
              >
                <MenuItem value ='metric'>Metric</MenuItem>
                <MenuItem value ='FSC'>FSC</MenuItem>
                <MenuItem value ='Bachelor'>Bachelor</MenuItem>
              </TextField>
        </Stack>

        {/* for setting password and confirming the password */}

        <Stack marginBottom={4}  >
          <Autocomplete options={skills}
          renderInput = {(params) => <TextField sx={{width:'93%'}} {...params} label = "Skills" variant='standard' color='primary'  />}
          >
            
          </Autocomplete>
        </Stack>


        <Stack direction='row' spacing={8} marginTop = {4}>
          <TextField variant='standard'
          sx={{
            width:'40%'
          }}
           type='password'
            label = 'set password'
            name = 'newpass'
            value={user.newpass}
            onChange = {updateData}
            />
          <TextField variant='standard'
          sx={{
            width:'40%'
          }}
           type='password'
           label = 'Confirm password' 
           autoComplete='none'
           name = 'confirmpass'
           value={user.confirmpass}
           onChange = {updateData}
      
          error = {user.newpass !== user.confirmpass}
          helperText = {user.newpass !== user.confirmpass ? 'password do not match': 'password match'}
          />
        </Stack>

      

        <Stack
        direction='row' 
        marginTop={4} 
        sx={{display:'flex',
        justifyContent:'center',
        alignItems:'center'
          
          }}>

            {
             user.newpass !== user.confirmpass ?
              <Button variant='contained'
               color='error'
              size='medium'>Submit</Button> :

               <Button variant='contained'
               component={Link} to = {'/home'}
                color='primary'
                size='small' onClick={() => submitData}>Sign In</Button>
            }
        </Stack>

        <Stack sx={{dipslay:'flex', justifyContent:'center'}} direction = 'row' >
          
        </Stack>
       
       

        </form>
      </Container>

    </Box>
 
    
    </>
  )
}

export default Login