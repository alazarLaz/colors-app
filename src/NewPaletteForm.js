import React, { Component } from 'react'
import { styled, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar';
import MuiAppBar from '@material-ui/core/AppBar'
import './styles/NewPaletteFormStyles.js'
import classNames from "classnames";
import { arrayMove } from "react-sortable-hoc";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import seedColors from "./colorSeed";
import styles from "./styles/NewPaletteFormStyles";
import { ChromePicker } from 'react-color';
import  uuid from 'uuid/dist/v4'
import DragableColorBox from './DragableColorBox.js';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';



const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      height: 'calc(100vh-64px)', 
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );
  
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

class NewPaletteForm extends Component {
    constructor(props)
    {
        super(props);
        this.state = { 
            open: false,
            currentColor:"",
            newName:"",
            colors:[{color:"blue", name:"blue"}]
         }
         this.hanndleColorSave = this.hanndleColorSave.bind(this)
         this.updateCurrentColor = this.updateCurrentColor.bind(this)
         this.onChangeNewName = this.onChangeNewName.bind(this)
    }
    componentDidMount()
    {
        ValidatorForm.addValidationRule('isNameUnique', value => 
            this.state.colors.every( ({ name }) => name.toLowerCase() !==value.toLowerCase() )
        );
        ValidatorForm.addValidationRule('isColorUnique', value => 
            this.state.colors.every( ({ color }) => color !== this.state.currentColor )
        );
    }
    handleDrawerOpen = () => {
        this.setState({ open: true })
      };
    
    handleDrawerClose = () => {
        this.setState({ open: false })
      };
    hanndleColorSave()
    {
        console.log(this.state.newName,this.state.currentColor)
        const newColor = {
            name: this.state.newName,
            color: this.state.currentColor
        }
        this.setState({
            colors:[...this.state.colors, newColor]
        })
    }
    updateCurrentColor(color)
    {
        this.setState({
            currentColor: color.hex
        })
    }
    onChangeNewName(evt)
    {
        this.setState({
            newName: evt.target.value
        })
    }
  render() {
    const { classes, theme } = this.props;
    const { open,currentColor,colors, newName } = this.state;
    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar 
        position="fixed"
         open={open}
         className = {classNames(classes.appBar,{
            [classes.appBarShift]: open
         })}
         >
          <Toolbar disableGutters = {!open}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              edge="start"
            className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Persistent drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <h1>Design Your Palette</h1>
          <div>
            <Button variant='contained' color='secondary'>Clear Palette</Button>
            <Button variant='contained' color='primary'>Random Color</Button>
          </div>
          <ChromePicker
           onChangeComplete={(crntColor)=>this.updateCurrentColor(crntColor)}
            color={currentColor}>
            </ChromePicker>
            <ValidatorForm onSubmit={this.hanndleColorSave} ref="form">
                <TextValidator 
                onChange={ this.onChangeNewName }
                value = {newName}
                validators={['required', 'isUniqueName', 'isUniqueColor']}
                errorMessages = {[
                    'The field is required',
                    'The name already exists',
                    'Select a new color']}
                />
                <Button 
                color='primary'
                style={{backgroundColor: `${currentColor}`}}
                type='submit'
                variant='contained'
                 >
                    Add Color
                    </Button>                
            </ValidatorForm>
        </Drawer>
        <Main 
        open={open}
        className = {classNames(classes.content,{
            [classes.contentShift]: open
        })}
        style={{marginLeft:400 }}
        >
          <div className={classes.drawerHeader} />
          {colors.map(color=><DragableColorBox key={uuid()} color = {color}></DragableColorBox>)}
        </Main>
      </div>
    )
  }
}


export default withStyles(styles, { withTheme: true })(NewPaletteForm);

