import React from "react";


const ProfilePage = () => {
    
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        let name=form.name.value
        let phone=form.phone.value
        
        let image=form.image.files[0]
     
        let formData=new FormData()
        formData.append("name",name)
        formData.append("phone",phone)
       
        formData.append("image",image)
        console.log(name,phone,image)
        console.log("cloi")
        
        
    }
    return <h2>Will work...</h2>
 

  // return (
  //   <div style={{ height: "75vh" }}>
  //     <Grid container>
  //       <Grid item xs={12} md={6}>
  //         <Box display={"flex"} justifyContent="center" padding={"20px"}>
  //           <Box sx={{ width: "100%", p: 2 }}>
  //             <Card>
  //               {/* <CardHeader
        
  //       title={'name'}
  //       subheader="role"
  //     /> */}
  //               <CardMedia
  //                 component="img"
  //                 height="194"
  //                 image={{}}
  //                 alt="Paella dish"
  //                 sx={{ objectFit: "contain" }}
  //               />
  //               <CardContent>
  //                 <Typography>g</Typography>
  //                 <Typography>g</Typography>
  //               </CardContent>
  //             </Card>
  //           </Box>
  //         </Box>
  //       </Grid>
  //       <Grid item xs={6}>
  //         <Box display={"flex"} justifyContent="center" padding={"20px"}>
  //           <Box sx={{ width: "100%", p: 2 }}>
  //             <Card>
        
  //               <CardMedia
  //                 component="img"
  //                 height="194"
  //                 image={{}}
  //                 alt="Paella dish"
  //                 sx={{ objectFit: "contain" }}
  //               />
  //               <CardContent>
  //                 <Box display={"flex"} justifyContent="space-between">
  //                 <form onSubmit={handleLogin} encType="multipart/form-data">
  //                   <Box
  //                     display={"flex"}
  //                     width={"400px"}
  //                     flexDirection="column"
  //                     alignItems={"center"}
  //                     justifyContent="center"
  //                     sx={{ background: "white", color: "black" }}
  //                   >
  //                     <Typography variant="h3" padding={3} textAlign="center">
  //                       Change Info
  //                     </Typography>
  //                     <TextField
  //                       sx={{
  //                         bgcolor: "white",
  //                         border: "none",
  //                         borderRadius: "5px",
  //                       }}
  //                       margin="normal"
  //                       type={"text"}
  //                       placeholder="Enter Your Name"
  //                       variant="outlined"
  //                       name="name"
                        
                        
  //                     />

  //                     <TextField
  //                       sx={{
  //                         bgcolor: "white",
  //                         border: "none",
  //                         borderRadius: "5px",
  //                       }}
  //                       margin="normal"
  //                       type={"text"}
  //                       placeholder="Enter Your Phone Number"
  //                       variant="outlined"
  //                       name="phone"
  //                     />
  //                      <input
  //               type="file"
  //               className="form-control mb-4 p-2"
              
  //               name='image'
  //             />
  //                     <Button
  //                       sx={{ marginTop: 3 }}
  //                       variant="contained"
  //                       color="warning"
  //                       type="submit"
  //                     >
  //                       Submit
  //                     </Button>
  //                   </Box>
                    
  //                 </form>
  //                 </Box>
  //               </CardContent>
  //             </Card>
  //           </Box>
  //         </Box>
  //       </Grid>
  //     </Grid>
  //   </div>
  // );
};

export default ProfilePage;
