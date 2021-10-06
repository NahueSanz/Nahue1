import logo from '../../assets/SyrianskaIcon.PNG'
import './NavBar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
 
       <AppBar position="static" className="main-navbar">
        <Toolbar >
          <Typography className="container-logo">
            
                <img src={logo} className='logo' alt={'logo principal'}/>
                

          </Typography>
          
          <div className="nav-bar-menu">
            <div>
              
              <ButtonGroup className="button-group">
                <Link to="/"><Button className="button-navbar">Inicio</Button></Link>
                <Button className="button-navbar">Productos</Button>
                <Link to="/contacto"><Button className="button-navbar">Contacto</Button></Link>
                <Button className="button-navbar">Alumnos</Button>     
                <Button className="login-button">Iniciar Sesion</Button> 
                <Badge badgeContent={3} color="error">
                <ShoppingCartIcon  className="cart" fontSize="medium" />
                </Badge>
                </ButtonGroup>
            </div>
            <div>
              <ButtonGroup className="button-group">
                <Button className="button-navbar">Que es el crossfit</Button>
                <Button className="button-navbar">WoDs</Button>
                <Button className="button-navbar">Movimientos</Button>
                <Button className="button-navbar">Preguntas frecuentes</Button>

              </ButtonGroup>
            </div>

          </div>
        </Toolbar>
      </AppBar> 
  );
}

export default NavBar;