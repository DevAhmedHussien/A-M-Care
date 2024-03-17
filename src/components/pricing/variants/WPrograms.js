import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import { Typography,Box} from '@mui/material';
import ProgramsCards from './ProgramsCards';
export default function WPrograms(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <>
        <Box variant='div'
            sx={{
            //height:'100%',
            mt:5}}>
            <Typography variant='h3' color={colors.primary[200]}
            sx={{textAlign:'center',fontWeight:'700'}}> A&M Weight Management   <span 
            style={{color:'#3399ff'}}>Programs</span>  </Typography>
            <Typography variant='h5'  sx={{textAlign:'center',fontWeight:'500',mt:1}} color={colors.primary[900]}>
                <a style={{color:'#3399ff'}} href='https://'>Our Providers</a> are here to help and care for your needs</Typography>
            <Box 
            sx={{
                p:5,
                m:'80px auto',
                display:'flex',
                flexWrap:'wrap',
                justifyContent:'center',
                alignItems:'center',
                gap:3}}>
                <ProgramsCards/>
                <ProgramsCards/>
                <ProgramsCards/>
                <ProgramsCards/>
                <ProgramsCards/>
                {/* <ProgramsCards/> */}
            </Box>
        </Box>
        </>
    )
}