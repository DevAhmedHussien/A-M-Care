import { Typography,Box,TextField ,Button} from '@mui/material';
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import ProviderPricing from './ProviderPricing';

export default function providersFaces(){
    // const theme = useTheme();
    // const colors = tokens(theme.palette.mode);
    return (
        <>
        <ProviderPricing/>
        </>
    )
}