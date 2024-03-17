import { Typography,Box,TextField ,Button} from '@mui/material';
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';

export default function ProviderPricing(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <>
        <Box sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            gap:5
        }}>
            <Box variant='div'>
                <img src='' alt=''
                style={{   
                    width:'100%',
                    borderRadius:'50%'
                }}/>
                <Typography variant="h4" >HealthAndSafetyOutlinedIcon</Typography>
            </Box>
            <Box>
                <img src='' alt=''
                style={{   
                    width:'100%',
                    borderRadius:'50%'
                }}/>
                <Typography variant="h4" >asd</Typography>
            </Box>
            <Box>
                <img src='' alt=''
                style={{   
                    width:'100%',
                    borderRadius:'50%'
                }}/>
                <Typography variant="h4" >asd</Typography>
            </Box>
            <Box>
                <img src='' alt=''
                style={{   
                    width:'100%',
                    borderRadius:'50%'
                }}/>
                <Typography variant="h4" >sdasd</Typography>
            </Box>
        </Box>
        </>
    )
}