import s from './Button.module.css';

const Button = ({ loadmore }) => {
    return (
        <button className={s.Button} type="button" onClick={loadmore}>Load more</button>
    )
}

export default Button;