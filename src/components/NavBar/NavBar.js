import logo from '../../assets/SyrianskaIcon.PNG'
import './NavBar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


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
                <Button className="button-navbar">Inicio</Button>
                <Button className="button-navbar">Productos</Button>
                <Button className="button-navbar">Contactenos</Button>
                <Button className="button-navbar">Alumnos</Button>     
                <Button className="login-button">Iniciar Sesion</Button>    
                <ShoppingCartIcon  className="cart" fontSize="small" />
                <p className="elUno">1</p>
       
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