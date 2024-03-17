import { Typography,Box} from '@mui/material';
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
export default function CardS({ 
// dir,  
ques='',
typ1='',
typ2='',
typ3='',
typ4=''
}){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        
        <Box variant='div'
            sx = {{
                
                // direction:dir,
                p:5,
                m:'80px auto',
                display:'flex',
                // flexWrap:'wrap',
                justifyContent:'center',
                alignItems:'start',
                gap:3
            }}>
                <img src=''alt=''    style={{ 
                        height:'400px',
                        width: '30%' , p:4,
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'start',
                        gap:2,
                        borderRadius:'10px',
                        transition:'170ms',
                        background:'linear-gradient(to top right, rgba(235, 245, 255, 0.3) 40%, rgba(243, 246, 249, 0.2) 100%)',
                        border:'1px solid #e5eaf299',
                    }}
                        />
                <Box variant='div'
                sx = {{
                    width:'60%',
                    p:1,
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'start',
                    gap:5
                }}
                >
                    <Typography variant='h4' color={colors.primary[300]}
                    sx={{}}>
                        {ques}
                    <span 
                    style={{color:colors.primary[200]}}> {typ1} </span> 
                    </Typography>
                    <Typography variant='h4' color={colors.primary[200]}
                    sx={{}}>
                        {typ2}
                    </Typography>
                    <Typography variant='h4' color={colors.primary[200]}
                    sx={{}}>
                        {typ3}
                    </Typography>
                    <Typography variant='h4' color={colors.primary[200]}
                    sx={{}}>
                        {typ4}
                    </Typography>
                </Box>
            </Box>
    )
}