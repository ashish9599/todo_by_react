import { Link } from 'react-router-dom';
import styles from './home.module.css'

function Home(){

    return(
        <div className={styles.homecontainer}>
            <Link to="/todo" className="btn btn-warning link">
                To Do App
            </Link>
            <Link to="/notes" className="btn btn-warning link">
                Note Keeper
            </Link>
        </div>
    )
}

export default Home;