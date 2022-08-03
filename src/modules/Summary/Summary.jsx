import SummaryList from "./SummaryList";

import styles from './summary.module.css';

function Summary() { 

    const formatDate = () => {
        const d = new Date();
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        let year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [day, month, year ].join('/');
    };

    const date = formatDate();
    const items = [];
    const elements = [].map(el => <li></li>);

    return (
        <div className={styles.wrapper}>
            <div>
                <h3 className={styles.title}>Summary for {date}</h3>
                <SummaryList items={items} />
            </div>
            <div>
                <h3 className={styles.title}>Food not recommended</h3>
                <p className={styles.foodList}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ab asperiores qui fugiat sint nisi odit placeat, ad ipsa tempora vero repellendus molestiae assumenda sequi voluptatum quisquam! Hic, ratione unde? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ab asperiores qui fugiat sint nisi odit placeat, ad ipsa tempora vero repellendus molestiae assumenda sequi voluptatum quisquam! Hic, ratione unde? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ab asperiores qui fugiat sint nisi odit placeat, ad ipsa tempora vero repellendus molestiae assumenda sequi voluptatum quisquam! Hic, ratione unde?</p>
                <ul>{elements}</ul>
            </div>
        </div>
    )
};

export default Summary;