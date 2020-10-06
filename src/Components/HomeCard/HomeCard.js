import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeCard.module.css';


const HomeCard = (props) => {
    const {_id,name,image} = props.task;
    return (
        <div>
            <Link style={{textDecoration: 'none'}} to='/registration'>
                <div className={styles.zoom}>
                    <div className={styles.box}>
                    <img style={{width:200, height: 250,}} src={image} alt='image of house' />
                        <div className={styles.text}>
                        {name}

                        </div>

                    </div>
                </div>
            </Link>       
               
        </div>
    );
};

export default HomeCard;