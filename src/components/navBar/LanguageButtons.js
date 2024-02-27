import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import { GlobalContext } from "../../Context/GlobalContext"
import { useTheme } from '@mui/material';
import { useContext } from 'react';
import { tokens} from '../../Context/ThemeContext'
const actions = [
{ icon: <FileCopyIcon />, name: 'English',value:'en' },
{ icon: <SaveIcon />, name: 'عربي' ,value:'ar'},
];
export default function LanguageButtons() {
const theme = useTheme();
const colors = tokens(theme.palette.mode);
const context = useContext(GlobalContext)
const { language, setLanguage} = context
return (
    <Box sx={{  transform: 'translateZ(0px)', flexGrow: 1, 
    position:'fixed',
    }}>
    <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', 
        top:0, left:language==='en'? '1180px': '20px',opacity:0.6 }}
        icon={<SpeedDialIcon />}
    >
        {actions.map((action) => (
        <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={()=>{
                setLanguage(action.value)
            }}
        />
        ))}
    </SpeedDial>
    </Box>
);
}