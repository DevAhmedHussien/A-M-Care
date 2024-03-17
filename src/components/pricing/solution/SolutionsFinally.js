import { Typography,Box} from '@mui/material';
import { tokens } from '../../../Context/ThemeContext';
import { useTheme } from '@mui/material';
import CardS from './CardS'
export default function SolutionFinally(){
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <Box variant='div'
            sx={{
            mt:5
            }}>
            <Typography variant='h3' color={colors.primary[200]}
            sx={{textAlign:'center',fontWeight:'700'}}>
                <span 
            style={{color:'#3399ff'}}>The Solution</span> That Finally Works!
            </Typography>
            <Typography variant='h5'  sx={{textAlign:'center',fontWeight:'500',mt:1}} color={colors.primary[900]}>
                <a style={{
                    color:'#3399ff'
                }} 
                href='https://'> Stop </a>
        wasting years and your hard-earned money on fads and gimmicks that aren’t backed by science.
            </Typography>
            <CardS 
                // dir='rtl'
                ques=' Struggling to lose weight ? '
                typ1={`If you’ve tried everything, only to see \n the number on the scale grow even larger, there is still hope.`}
                typ2={`Exclusively using FDA-approved ingredients, developed in licensed facilities, \n A&M programs offer you only high-quality solutions shown to aid weight loss. `}
                typ3={`Plus, you get access to licensed medical professionals to discuss and \nchoose the best option for your personal needs, so you can have\n the highest chance of success with our weight loss programs.  `}
                typ4={` The next step in your weight loss journey is just one click away. `}
            />
        </Box>
    )
}