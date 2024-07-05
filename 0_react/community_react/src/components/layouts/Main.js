import Grid from "@mui/material/Grid";
// import { styled } from '@emotion/styled';



const Main = ({children}) => {
    return ( 
        <>
        <Grid 
            container
            my={3}
            spacing={1}
            direction={"column"}
            alignItems={"center"}

            >
            {children}
        </Grid>
        </>
     );
}


// const StyledMain = styled.main`
//     width: 70vw;
//     margin: 0 auto;
// `


export default Main;