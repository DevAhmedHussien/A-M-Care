import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MultiActionAreaCard from './Card';
export default function WeightM(){
    return(
        <>
        <Box variant='div'
        sx={{
            height:'90vh',
            mt:5
        }}>
            <Typography variant='h3'
            sx={{textAlign:'center',fontWeight:'700'}}> We Can Help You With </Typography>
            <Box variant='div'
            sx={{mt:10,display:'flex',justifyContent:'center',alignItems:'center',gap:10}}
            >
                <MultiActionAreaCard/>
            </Box>
            
        </Box>
        </>
    )
}