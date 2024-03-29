import './app-info.css';

const AppInfo = (props) => {
    const {total, increase} = props;
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {total}</h2>
            <h2>Премию получат: {increase}</h2>
        </div>
    )
}

export default AppInfo;