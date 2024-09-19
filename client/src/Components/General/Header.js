import './Header.css'

const Header = (props) => {
    return (
        <div className="header">
            <img src={require("../../Pictures/schoolPhoto.jpg")} alt={"school"}/>
            <div className='header_title'>{"球团运行大数据智能分析系统"}</div>
            <img className="header-exit" src={require("../../Pictures/tuichu.png")} alt={"退出"} onClick={props.deleteToken}/>
        </div>
    )
}

export default Header