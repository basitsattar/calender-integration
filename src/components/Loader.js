import React from 'react';
import Spinner from '../images/Spinner.svg'
const Loader = () => {
    return (
        <div style={styles.loader}>
            <img
                src={Spinner}
            />
        </div>
    );
}

export default Loader;
const styles  = {
    loader:{
        position:'absolute',
        width:'100%',
        height:'100%',
        zIndex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        opacity:0.7
    }
}