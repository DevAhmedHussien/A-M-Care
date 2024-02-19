import GppGoodIcon from '@mui/icons-material/GppGood';
import { Typography,Box} from '@mui/material';
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';

export default function InnerCardWeightMan({description}){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);  
    return (
        <>
        <Box
            sx={{display:'flex',justifyContent:'start',alignItems:'center',gap:1, }}>
                <GppGoodIcon sx={{color:'#3399ff', fontSize:'17px' }}/>
                <Typography variant='h6' color = {colors.primary[200]} >{description}</Typography>
        </Box>
        </>
    )
}