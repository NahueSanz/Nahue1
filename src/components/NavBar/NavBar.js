import logo from '../../assets/SyrianskaIcon.PNG'
import './NavBar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Cart from '../../Cart/Cart';

function NavBar() {
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [categories, setCategories]= useState([
    {
      name:'OPM',
      id:'1'
    },
    {
      name:'DBZ',
      id:'2'
    },
    {
      name:'DS',
      id:'3'
    },
  ]);
    
//   useEffect(()=>{
//     new Promise((resolve)=>{
//         setTimeout(() => {
//             resolve(data);
//         },);
//     })

//     .then((res)=>{
        
//       setCategories(res.Data);
//     })
// },[])
// console.log(categories.id)
  return (
 
      <AppBar position="static" className="main-navbar">
        <Toolbar >
          
          <Typography className="container-logo">
                <img src={logo} className='logo' alt={'logo principal'}/>
          </Typography>
          
          <div className="nav-bar-menu">
            <div>              
              <ButtonGroup className="button-group">
                <Link className="link-button" to="/"><Button className="button-navbar">Inicio</Button></Link>
                
                <Link className="link-button" to="/"><Button className="button-navbar" >Productos
                  <IconButton onClick={handleClick}><ArrowDropDownIcon color="primary"/></IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    {categories.map((category) => (
                      <Link className="link-button" to={`category/${category.name}`}><MenuItem key={category.id} onClick={handleClose}>
                        {category.name}
                      </MenuItem></Link>
                    ))}
                  </Menu>
                </Button></Link>
               
                <Link className="link-button" to="/contacto"><Button className="button-navbar">Contacto</Button></Link>
                <Button className="button-navbar">Alumnos</Button>     
                <Button className="login-button">Iniciar Sesion</Button>
                <Cart/>
                {/* <ShoppingCartIcon  className="cart" fontSize="medium" /> */}
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