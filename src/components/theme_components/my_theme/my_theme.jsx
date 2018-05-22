import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {grey500,grey400, grey200, lightGreen900} from 'material-ui/styles/colors';

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
    palette: {
        textColor: grey500,
        primary1Color: grey200,
        accent1Color: grey400,
        secondaryTextColor: grey500
    },
    appBar: {
        textColor: grey500,
    },
    icon: {
        backgroundColor: lightGreen900,
    },
    button:{
        height: 50,
    },
    textField: {
        focusColor: grey500
    },
    RaisedButton :{
        labelColor: grey500
    },
    floatingLabelStyle: {
        color: grey200,
    },
    floatingLabelFocusStyle: {
        color: grey200,
    }
});


export default muiTheme;



// Below are the different option

// primary1Color: _colors.cyan700,
// primary2Color: _colors.cyan700,
// primary3Color: _colors.grey600,
// accent1Color: _colors.pinkA200,
// accent2Color: _colors.pinkA400,
// accent3Color: _colors.pinkA100,
// textColor: _colors.fullWhite,
// secondaryTextColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.7),
// alternateTextColor: '#303030',
// canvasColor: '#303030',
// borderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
// disabledColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
// pickerHeaderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12),
// clockCircleColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12)