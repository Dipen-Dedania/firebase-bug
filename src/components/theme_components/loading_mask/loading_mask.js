import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import './loading_mask.css'

var styles = {
    isVisible: {
        display: 'block'
    },
    notVisible: {
        display: 'none'
    }
};

class LoadingMask extends React.Component {
    render() {
        return (
            <CircularProgress color="#00BCD4"  size={40} thickness={3} className="loadingMask" style={this.props.isVisible ? styles.isVisible : styles.notVisible}/>
        )
    }
}


export default LoadingMask