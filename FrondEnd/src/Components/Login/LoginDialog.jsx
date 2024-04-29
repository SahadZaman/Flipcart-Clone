
import React from 'react'
import { useState, useContext } from 'react';
import { Box, Button, Dialog, TextField, Typography } from '@mui/material'
import { styled } from '@mui/system';
import { authenticateSignup, authenticateLogin } from '../../ServiesApi/Api';
import { DataContext } from '../../Context/Dataprovider';

const Component = styled(Box)({
    height: "80vh",
    width: "90vh",
});
const Image = styled(Box)({
    background: "#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;",
    height: "83%",
    width: "28%",
    padding: "45px 35px",
    "& > p, & > h5 ": {
        color: "#FFFFFF",
        fontWeight: "600",
    }
})
const Display = styled(Box)({
    display: "flex",
    height: '100%',
})
const Wraper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    padding: "25px 35px",
    flex: "1",
    "& > div,& button,& > P": {
        marginTop: "20px",
    }
})

const LoginButton = styled(Button)({
    textTransform: "none",
    background: "#fb641B",
    color: "#fff",
    height: "48px",
    borderRadius: "2px",
})
const RequestOtp = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.20);
`;
const Text = styled(Typography)({
    fontSize: "12px",
    color: "#878787",
})
const CreateAccount = styled(Typography)({
    fontSize: "14px",
    textAlign: "center",
    color: "#2874f0",
    fontWeight: "600",
    cursor: "pointer",
})
const Error = styled(Typography)({
    fontSize: "10px",
    color: "#ff6161",
    lineHeight:"0",
    marginTop:"10px",
    fontWeight:"600",
})

const accountInitialvalues = {
    login:{
        view:"login",
        heading:"Login",
        subHeading:"Get access to your Order, Whishlist and Recommendations"
    },
    signup:{
        view:"signup",
        heading:"Looks like you're new here!",
        subHeading:"sign up with your mobile number to get started",
    }
};
// onchange te initial value set up cheyyunu
const signupInitialvalue = {
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    phone:""
}

const loginInitialValues = {
    username:"",
    password:"",
}

//Using onclick fungtion
const LoginDialog = ({ open, setOpen }) => {

    const [account, toggleAccount] = useState(accountInitialvalues.login);

    // ith sign up te value's change cheyyan vendi an useState upayokichath.

    //ithil initial value pass cheyyanam ath initial object akian vakkunnath
    const [signup, setSignup] = useState(signupInitialvalue);

    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState(false);

    const {setAccount} = useContext(DataContext);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialvalues.login);
        setError(false);
    };

    const toggleSignup = () =>{
        toggleAccount(accountInitialvalues.signup);
    };
// input change ne upayokichathan key upayokich
    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }
    // Api call cheyyanam 
    const signupUser = async() => {
      let responce = await authenticateSignup(signup);
      if (!responce) return;
      setAccount(signup.firstname);
      handleClose();
      
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value});
    }
    const loginUser = async () => {
      let responce = await authenticateLogin(login);
      console.log(responce);
      if (responce.status === 200) {
        handleClose();
        setAccount(responce.data.data.firstname);
      }else{
        setError(true);
      }
    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: "unset" } }}>
            <Component>
                <Display>
                    <Image>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{ marginTop: "20px" }}>{account.subHeading}</Typography>
                    </Image>
                    {
                        account.view === 'login' ?
                            <Wraper>
                                <TextField variant='standard' onChange={(e) => onValueChange(e)} name='username' label="Enter username" />
                                
                               {error && <Error>Please enter valid username or password</Error>}
                               
                                <TextField variant='standard' onChange={(e) => onValueChange(e)} name='password' label="Enter Password" />
                                <Text>By continuing, you agree to Flipkart's Terms of Use and privacy Policy.</Text>
                                <LoginButton onClick={()=> loginUser()}> Login </LoginButton>
                                <Typography style={{ textAlign: "center" }}>OR</Typography>
                                <RequestOtp>Request OTP</RequestOtp>
                                <CreateAccount onClick={()=> toggleSignup()}>New to Flipkart? create an account</CreateAccount>
                            </Wraper>
                            :
                            <Wraper>
                                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='firstname' label="Enter Fistname" />
                                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='lastname' label="Enter Lastname" />
                                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='username' label="Enter Username" />
                                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='email' label="Enter Email" />
                                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='password' label="Enter Password" />
                                <TextField variant='standard' onChange={(e) => onInputChange(e)} name='phone' label="Enter Phone" />
                                <LoginButton onClick={() => signupUser()}> Continue </LoginButton>
                            </Wraper>
                    }
                </Display>
            </Component>
        </Dialog>
    )
}

export default LoginDialog