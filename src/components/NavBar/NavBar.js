import logo from '../../assets/SyrianskaIcon.PNG'
import './NavBar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


function NavBar() {
  return (

       <AppBar position="static" className="main-navbar">
        <Toolbar >
          <Typography>
            <div className='container-logo'>
                <img src={logo} className='logo' alt={'logo principal'}/>
            </div>
          </Typography>
          <ul>
          <li><Button color="inherit">Inicio</Button></li>
          <li><Button color="inherit">Productos</Button></li>
          <li><Button color="inherit">Preguntas frecuentes</Button></li>
          <li><Button color="inherit">Contacto</Button></li>
          </ul>
        </Toolbar>
      </AppBar>
  );
}

export default NavBar;
