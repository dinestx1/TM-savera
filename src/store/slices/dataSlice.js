import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// const API_URL = "https://api.ixbooking.in/api/v0.1/user/";
const API_URL = "http://localhost:8000/";






  export const getData = createAsyncThunk("auth/getData", async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}me`, {  withCredentials: true });
      return response.data ;

    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  });

    export const getCompany = createAsyncThunk("auth/getCompany", async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}company/get-company`, {  headers: {
            'x-company-url': 'tmsavera.com' 
          }, withCredentials: true });
      return response.data ;

    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  });
    
  
  export const getContact = createAsyncThunk("auth/getContact", async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}company/get-contact`, { headers: {
            'x-company-url': 'tmsavera.com' 
          }, withCredentials: true });
      return response.data ;

    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  });


    export const getProjects = createAsyncThunk("auth/getProjects", async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}company/get-project`, { headers: {
            'x-company-url': 'tmsavera.com' 
          }, withCredentials: true });
      return response.data ;

    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  });


    export const getProjectsId = createAsyncThunk("auth/getProjectsId", async ({projectId}, { rejectWithValue }) => {
    try {
      console.log("projectId",projectId)
      const response = await axios.get(`${API_URL}company/get-project/${projectId}`, { headers: {
            'x-company-url': 'tmsavera.com' 
          }, withCredentials: true });
      return response.data ;

    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  });

  export const logoutUser = createAsyncThunk("auth/logOut", async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}logOut`,{}, {  withCredentials: true });
  
      return response.message;
  
    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  });
  



  export const sendMsg = createAsyncThunk("auth/sendMsg", async (data, { rejectWithValue }) => {
    try {
      
      const response = await axios.post(`${API_URL}send`,data, {  withCredentials: true });
      return { status: response.status,message:response?.data.message };

    } catch (err) {
      return rejectWithValue(err.response?.data || "Something went wrong");
    }
  });


// export const checkAuth = createAsyncThunk("auth/checkAuth", async (_, { rejectWithValue, dispatch }) => {
//     try {
//       const response = await axios.get(`${API_URL}check-auth`, { withCredentials: true });
//       if (response.data.isAuthenticated) {
//         dispatch(getData()); // Fetch user data if authenticated
//       }
//       return { status: response.status, data: response.data };
//     } catch (err) {
//       return rejectWithValue(err.response?.data || "Something went wrong");
//     }
//   });
  
//   export const sendOtpForgot = createAsyncThunk("auth/sendOtpForgot", async (data, { rejectWithValue }) => {
    
//     try {
//       const response = await axios.post(`${API_URL}forget-user`, data, { withCredentials: true });
 
//       return {
//         status: response.status,
//         data: response.data,
//         message: response.data?.message || "Success",
//       };
//     } catch (err) {
//       return rejectWithValue({
//         status: err.response?.status || 500,
//         data: err.response?.data || null,
//         message: err.response?.data?.message || "Something went wrong",
//       });
//     }
//   });


//   export const verifyOtpForgot = createAsyncThunk("auth/verifyOtpForgot", async (data, { rejectWithValue }) => {
  
//     try {
//       const response = await axios.post(`${API_URL}forget-password`, data, { withCredentials: true });
//       return {
//         status: response.status,
//         data: response.data,
//         message: response.data?.message || "Success",
//       };
//     } catch (err) {
//       return rejectWithValue({
//         status: err.response?.status || 500,
//         data: err.response?.data || null,
//         message: err.response?.data?.message || "Something went wrong",
//       });
//     }
//   });





//   export const generateOtp = createAsyncThunk("auth/generateOtp", async (data, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${API_URL}generate-otp`, data, { withCredentials: true });
//       return {
//         status: response.status,
//         data: response.data,
//         message: response.data?.message || "Success",
//       };
//     } catch (err) {
//       return rejectWithValue({
//         status: err.response?.status || 500,
//         data: err.response?.data || null,
//         message: err.response?.data?.message || "Something went wrong",
//       });
//     }
//   });
  
//   export const verifyOtp = createAsyncThunk("auth/verifyOtp", async (data, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${API_URL}verify-otp`, data, { withCredentials: true });
//       return {
//         status: response.status,
//         data: response.data,
//         message: response.data?.message || "Success",
//       };
//     } catch (err) {
//       return rejectWithValue({
//         status: err.response?.status || 500,
//         data: err.response?.data || null,
//         message: err.response?.data?.message || "Something went wrong",
//       });
//     }
//   });

// export const registerUser = createAsyncThunk("auth/register", async (data, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${API_URL}register`, data);
//       return { status: response.status, data: response.data };
//     } catch (err) {
//       return rejectWithValue(err.response?.data || "Something went wrong");
//     }
//   });
  
//   export const loginUser = createAsyncThunk("auth/login", async (data, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${API_URL}login`, data, { withCredentials: true });
//       return { status: response.status, data: response.data };
//     } catch (err) {
//       return rejectWithValue(err.response?.data || "Something went wrong");
//     }
//   });


//   export const googleLogin = createAsyncThunk(
//     "auth/googleLogin",
//     async (_, { rejectWithValue }) => {
//       try {

//         window.location.href = `${API_URL}google`;
//       } catch (err) {
//         return rejectWithValue(err.message || "Google login failed");
//       }
//     }
//   );

  const initialState = {
    company: null,
    id: null,
    contact:null,
    projects:[],
    project:null,
    isAuthenticated: false,
    loading:false,
    message: null,
    error: null,
    errordata:null
  };
  
  // Auth Slice
  const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
     
    },
    extraReducers: (builder) => {
      builder
        // Handle Login
        // .addCase(loginUser.pending, (state) => {
        //   state.loading = true;
        //   state.error = null;
        // })
        // .addCase(loginUser.fulfilled, (state, action) => {
        //   state.loading = false;
        //   state.isAuthenticated = true;
        //   state.user = action.payload;
        // })
        // .addCase(loginUser.rejected, (state, action) => {
        //   state.loading = false;
        //   state.error = action.payload;
        // })
  
        //check-auth
        // .addCase(checkAuth.pending, (state) => {
        //   state.loading = true;
        //   state.error = null;
        // })
        // .addCase(checkAuth.fulfilled, (state, action) => {
        //   state.loading = false;
        //   state.isAuthenticated = action.payload.isAuthenticated;
        // })
        // .addCase(checkAuth.rejected, (state, action) => {
        //   state.loading = false;
        //   state.isAuthenticated = false;
        //   state.user = null;
        //   state.error = action.payload;
        // })
  
        // Handle Get Data
        .addCase(getData.pending, (state) => {
          state.loading= true;
          state.errordata = null;
        })
        .addCase(getData.fulfilled, (state, action) => {
          state.loading = false;
          state.isAuthenticated = true;
          state.user = action.payload;
        })
        .addCase(getData.rejected, (state, action) => {
          state.loading = false;
          state.isAuthenticated = false;
          state.user = null;
          state.errordata = action.payload;
        })


        .addCase(getCompany.pending, (state) => {
          state.loading= true;
          state.errordata = null;
        })
        
        .addCase(getCompany.fulfilled, (state, action) => {
          state.loading = false;
          state.company = action.payload;
          state.id=action.payload.id
        })
        .addCase(getCompany.rejected, (state, action) => {
          state.loading = false;
          state.company = null;
          state.errordata = action.payload;
        })




        .addCase(getProjects.pending, (state) => {
          state.loading= true;
          state.errordata = null;
        })
        
        .addCase(getProjects.fulfilled, (state, action) => {
          state.loading = false;
          state.projects = action.payload;
        
        })
        .addCase(getProjects.rejected, (state, action) => {
          state.loading = false;
          state.projects= null;
          state.errordata = action.payload;
        })


        .addCase(getProjectsId.pending, (state) => {
          state.loading= true;
          state.errordata = null;
        })
        
        .addCase(getProjectsId.fulfilled, (state, action) => {
          state.loading = false;
          state.project = action.payload;
        
        })
        .addCase(getProjectsId.rejected, (state, action) => {
          state.loading = false;
          state.project= null;
          state.errordata = action.payload;
        })




        .addCase(getContact.pending, (state) => {
          state.loading= true;
          state.errordata = null;
        })

        .addCase(getContact.fulfilled, (state, action) => {
          state.loading = false;
          state.contact = action.payload;
        })
        .addCase(getContact.rejected, (state, action) => {
          state.loading = false;
          state.contact = null;
          state.errordata = action.payload;
        })
  
        // Handle Logout
        // .addCase(logoutUser.pending, (state) => {
        //   state.loading = true;
        // })
        // .addCase(logoutUser.fulfilled, (state) => {
        //   state.loading = false;
        //   state.isAuthenticated = false;
        //   state.user = null;
        // })
        // .addCase(logoutUser.rejected, (state, action) => {
        //   state.loading = false;
        //   state.error = action.payload;
        // })
  
        //forget
      
   // Generate OTP
    // .addCase(generateOtp.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(generateOtp.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.otpSent = true;
    //   state.message = action.payload.message;
    // })
    // .addCase(generateOtp.rejected, (state, action) => {
    //   state.loading = false;
    //   state.otpSent = false;
    //   state.error = action.payload;
    // })

    // Verify OTP
    // .addCase(verifyOtp.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(verifyOtp.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.otpVerified = true;
    //   state.message = action.payload.message;
    // })
    // .addCase(verifyOtp.rejected, (state, action) => {
    //   state.loading = false;
    //   state.otpVerified = false;
    //   state.error = action.payload;
    // })


     //send otp forgot
    // .addCase(sendOtpForgot.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(sendOtpForgot.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.otpSent = true;
    //   state.message = action.payload.message;
    // })
    // .addCase(sendOtpForgot.rejected, (state, action) => {
    //   state.loading = false;
    //   state.otpSent = false;
    //   state.error = action.payload;
    // })


    //verify otp forgot
    // .addCase(verifyOtpForgot.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(verifyOtpForgot.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.otpVerified = true;
    //   state.message = action.payload.message;
    // })
    // .addCase(verifyOtpForgot.rejected, (state, action) => {
    //   state.loading = false;
    //   state.otpVerified = false;
    //   state.error = action.payload;
    // })

    // Register User
    // .addCase(registerUser.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(registerUser.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.isAuthenticated = true;
    //   state.user = action.payload.data;
    //   state.message=action.payload.message;
    // })
    // .addCase(registerUser.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // })

    //google login
    // .addCase(googleLogin.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(googleLogin.fulfilled, (state) => {
    //   state.loading = false;
    // })
    // .addCase(googleLogin.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // })

   //send
   .addCase(sendMsg.pending, (state) => {
    state.loading = true;
    state.error = null;
  })
  .addCase(sendMsg.fulfilled, (state, action) => {
    state.loading = false;
    state.message = action.payload.message;
  })
  .addCase(sendMsg.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload || action.error.message;
  })



       
    },
  });
  





  export default dataSlice.reducer;

