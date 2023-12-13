
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

const compra = () => {
    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            height="100%"
        >
            <Card sx={{ minWidth: 50, minHeight: 50 }}>
                <CardContent>

                    <Typography variant="h1" sx={{ fontSize: 20, color: "#000000" }}>
                        Pedido
                    </Typography>
                    <Typography variant="h5" component="div">

                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        <br />
                        Descripción de productos
                    </Typography>
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                        BORRAR
                    </Button>
                    <Typography variant="body2" sx={{ textAlign: 'left' }} >

                        <br />
                        {'Total:...'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Finalizar compra</Button>
                    <Button size="small">Cancelar </Button>
                </CardActions>
            </Card>
        </Stack>
    )
}

export default compra