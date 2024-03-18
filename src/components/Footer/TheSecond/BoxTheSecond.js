import { Box, Button, Typography } from "@mui/material";
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined';
export default function BoxTheSecond(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <>
        <Box 
        sx={{
            
            width:'20%',
            display:'flex',
            flexDirection:'column',
            gap:1
        }}>
            {/* <AccessibilityNewOutlinedIcon  fontSize="large" sx={{color:colors.primary[300]}}/>
             */}
            <Typography variant="h3" 
            sx={{
                fontWeight:700,
                lineHeight:1
            }}> 
                pages
            </Typography>
            <Typography variant="h3"  color={colors.primary[100]}> 
                xxxxxxxxxxxx
            </Typography>
            <Typography variant="h3"  color={colors.primary[100]}> 
                xxxxxxxxxxxx
            </Typography>
            <Typography variant="h3"  color={colors.primary[100]}> 
                xxxxxxxxxxxx
            </Typography>
            <Typography variant="h3"  color={colors.primary[100]}> 
                xxxxxxxxxxxx
            </Typography>
        </Box>
        </>
    )
}