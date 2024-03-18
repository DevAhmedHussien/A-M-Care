import { Typography,Box,TextField ,Button} from '@mui/material';
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import ProviderPricing from './ProviderPricing';

export default function ProvidersFaces(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <>
        <Box 
        sx={{
            p:2,
            flexWrap:'wrap',
            mt:5,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            gap:10
        }}>
            <ProviderPricing/>
            <ProviderPricing/>
            <ProviderPricing/>
            <ProviderPricing/>
        </Box>
        <Typography variant='h2' color={colors.primary[200]}
            sx={{textAlign:'center',fontWeight:'700',mt:5}}>
                <span 
            style={{color:'#3399ff',}}>Providers </span>  Who Care for You
            </Typography>
            <Typography variant='h5' color={colors.primary[200]}
            sx={{textAlign:'center',fontWeight:'700',p:4}}>
                All of A&M’s programs use the most up-to-date medical knowledge to give you the best results possible.<br/> Providers are committed to giving you the respect and care you deserve. Each provider is dedicated to your health and licensed to treat <br/>your condition.
                <a href='www.google.com'> See all of our providers →</a>
            </Typography>
        </>
    )
}