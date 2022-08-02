import banana from './images/banana.png';
import strawberry from './images/strawberry.png';
import leaves from './images/leaves.png';
import tableLeaves from './images/leaves-2.png';
import vector from './images/main-vector.svg';
// import secondVector from './images/second-vector.svg';
import s from './main-page.module.css';

function MainPage() {
    return (
        <main className={`container ${s.main}`}>
            <div className={s.mainContent}>
                <h1 className={s.mainTitle}>Calculate your daily calorie intake right now</h1>
                <p>DailyCaloriesForm</p>
            </div>

            <div className={s.mainImg}>
                <img src={tableLeaves} className={s.tableLeaves} alt="leaves" />
                <img src={leaves} className={s.leaves} alt="leaves" />
                {/* <div id={s.bananaContainer}> */}
                    <img src={banana} className={s.banana} alt="banana" />
                {/* </div> */}

                <img
                    src={strawberry}
                    className={s.strawberry}
                    alt="strawberry"
                />
                <img
                    src={vector}
                    className={s.vector}
                    alt="vector"
                />
                {/* <img
                    src={secondVector}
                    className={s.secondVector}
                    alt="vector"
                /> */}
            </div>
        </main>
    )
 };
export default MainPage;