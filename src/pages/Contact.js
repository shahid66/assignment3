import { Call, Mail, SupportAgent } from "@mui/icons-material";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Contact = () => {
  return (
    <Box sx={{height:"80vh"}}>
    <Box sx={{my:10, ml:10, "& h4":{fontWeight:"bold", mb:2}, "@media (max-width:600px)":{
        "& p":{
            paddingRight:"30px"
        }
    } }}>
      <Typography variant="h4">Contact My Resturant</Typography>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ad iure
        eligendi tenetur exercitationem, nihil voluptatum harum. Vero iste
        numquam deserunt, doloremque nihil doloribus dignissimos vitae aliquid
        ut voluptatem? Quam nobis quaerat hic ab! Et sapiente similique dolorem
        eaque sint consectetur optio necessitatibus. Explicabo veritatis itaque
        expedita nihil aliquid distinctio.
      </p>
    </Box>
    <Box sx={{width:"600px",ml:10, mb:5, "@media (max-width:600px)":{
        width:"270px",
        
    }}}>
        <TableContainer component={Paper}>
            <Table aria-label="contact table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{bgcolor:"black",color:"white"}} align="center">Contact Details</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <SupportAgent sx={{color:"red",pt:1}} /> 123456789
                        </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell>
                            <Mail sx={{color:"red",pt:1}} /> kk.shahid66@gmail.com
                        </TableCell>
                        
                    </TableRow>
                    <TableRow>
                    <TableCell>
                            <Call sx={{color:"red",pt:1}} /> 01736631284
                        </TableCell>
                    </TableRow>



                </TableBody>
            </Table>
        </TableContainer>
    </Box>
    </Box>
  );
};

export default Contact;
