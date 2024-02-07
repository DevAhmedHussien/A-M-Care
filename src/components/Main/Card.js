    import * as React from 'react';
    import Card from '@mui/material/Card';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import Typography from '@mui/material/Typography';
    import { Button, CardActionArea, CardActions } from '@mui/material';
    import mainPhoto from '../../images/doctor-nurses-special-equipment.jpg'

    export default function MultiActionAreaCard() {
    return (
        <Card sx={{ width: '80vw' , height:350}}>
        <CardActionArea sx={{display:'flex',}}>
            <CardMedia
            component="img"
            height="300"
            image={mainPhoto}
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Weight Management
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" sx={{textTransform:'capitalize'}}>
                Lets Start
            </Button>
        </CardActions>
        </Card>
    );
    }