import { tokens } from '../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import { Typography,Box,TextField ,Button} from '@mui/material';
import MainPricing from './MainPricing';
import WPrograms from './WPrograms';
export default function Princing(){
    const theme = useTheme();
const colors = tokens(theme.palette.mode);
    return(
        <>
        <Box sx={{}}>
            <MainPricing/>
            <WPrograms/>
        </Box>
        </>
    )
}