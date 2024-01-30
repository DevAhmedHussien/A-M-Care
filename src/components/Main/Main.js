import mainPhoto from '../../images/coverMain.jpg'
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
export default function Main(){
    return (
        <>
        <Box component ='div' 
        sx={{display:'flex' ,justifyContent:'center' ,gap:'50px' ,mb:2 ,// background:'#9DBC98'
        }}>
            <div style={{padding:'50px'}}>
                <h4>No Insurance Needed</h4>
                <h2>Healthcare for John, Jane, Everyone .</h2>
                <h1>Upfront pricing with no hidden fees.</h1>
                <Button variant="contained" >Contained</Button>
            </div>
            <div>
                <img src={mainPhoto} alt="" style={{width:'500px', height:'600px',borderRadius:'10px'}}/> 
            </div>
        </Box>


        </>
    )
}