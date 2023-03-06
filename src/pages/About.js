import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const About = () => {
  return (
    <Box sx={{
      height:"100vh",
      alignItems:"center",
      justifyContent:"center",
      display:"flex",
      p:2,
      textAlign:"center",
      "& h4":{
        fontWeight:"bold",
        my:2,
        fontSize:"2rem"
      },
      "& p":{
        textAlign:"justify"
      }
    }}>
      <Box>
      <Typography variant="h4">Welcome To My Resturant</Typography>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque autem
        repellat, necessitatibus aspernatur facere soluta laborum iste molestias
        doloremque eveniet officia perferendis, animi quod nam. Maxime quaerat
        voluptatem beatae aliquid labore omnis? Rerum consequatur,
        exercitationem deleniti tempora nobis dolorem quam quidem sapiente ullam
        debitis voluptates sequi nisi, expedita officia necessitatibus fugiat
        recusandae amet illum? Unde quaerat aut, provident aliquam, a itaque
        praesentium eaque odit soluta vitae nihil obcaecati nesciunt hic! Ullam
        placeat a assumenda adipisci sit! Aliquam blanditiis iusto sapiente
        porro suscipit ab laboriosam quod consequuntur tempore dolores velit
        consectetur facere repellendus maiores optio, maxime nostrum id
        voluptate eos corporis.
      </p>
      <br />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi ab unde facilis totam earum. Quisquam veniam nemo soluta optio porro repellat enim aliquid, reprehenderit rerum dignissimos tempora animi molestiae at cum? Laborum, illo aliquam aut deleniti excepturi delectus? Illo, distinctio perferendis minima exercitationem fugiat excepturi? Impedit nam eos corrupti odit fuga aperiam labore repellat cumque unde autem vero odio vitae explicabo dolores, consequatur, aliquam dolorem quasi. Iusto amet et numquam, tempore rem sunt accusantium repellendus sint. Asperiores distinctio optio consequuntur necessitatibus dignissimos eaque, ad obcaecati aspernatur reiciendis, dolor ratione ex odit, dolorem quasi totam ipsam minima. Ratione harum ipsam voluptatum.
        
      </p>
      </Box>
    </Box>
  );
};

export default About;
