import React, {useState} from "react";
import './MenuList.css'


const Choice = (props) => {

    const [isSubMenuShow, setIsSubMenuShow] = useState(false);
    const handleClick = (name) => {
        if(props.openedPages.indexOf(name) === -1){
            const l = props.openedPages
            l.push(name)
            props.setOpenedPages(l)
        }
        props.setCurrentPage(name)
    }

    if(props.length !== "long"){
        return(
            <div className="menuList_choice1">
                <div className='menuList_choice'
                     onClick={() => {
                         if(props.submenus.length === 0){
                             handleClick(props.name)
                         }

                         setIsSubMenuShow(!isSubMenuShow)
                     }}
                >
                    <div className='icon'>
                        <img src={props.address} className="icon" alt="箭头"/>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="menuList_choice1">
            <div className='menuList_choice'
                 onClick={() => {
                     if(props.submenus.length === 0){
                         handleClick(props.name)
                     }

                     setIsSubMenuShow(!isSubMenuShow)
                 }}
            >
                <div className='icon'>
                    <img src={props.address} className="icon" alt="箭头"/>
                </div>
                <div className='menuList_choice_words'>{props.name}</div>
                {
                    props.submenus.length === 0 ?
                        null:
                        <div className='icon'>
                            <img src={require("../../Pictures/jiantou.png")} className="icon" alt="箭头"/>
                        </div>
                }
            </div>
            {props.submenus.length > 0 && isSubMenuShow && <SubMenu dropDownItem={props.submenus} handleClick={handleClick}/>}


        </div>
    )
}

const SubMenu = ({ dropDownItem, handleClick }) => {
    return (
        <div className="submenu">
            {dropDownItem.map((item) => {
                return <div
                    key={item}
                    onClick={() => {handleClick(item)}}
                    className="subChoice"
                >
                    {item}
                </div>;
            })}
        </div>
    );
};


const MenuList = (props) => {

    // let navigate = useNavigate();
    const [choices, setChoices] = useState([
        [require('../../Pictures/jiashicang.png'), '炉况监控', [], true],
        [require('../../Pictures/iconfonttubiao_fenxi.png'), '氧势监控', [], true],
        [require('../../Pictures/jisuanmoxing.png'), '能势监控', [/**"链篦机系统", "回转窑系统", "环冷机系统",*/ '链回环系统', "预设值参数", "离线计算"], false],
        [require('../../Pictures/jiashicang.png'), '喷煤监控', [], true],
        [require('../../Pictures/shujuku.png'), '系统数据', ["原料管理"/**, "生产数据", "预警消息"*/], true],
        [require('../../Pictures/jisuanmoxing.png'), '配料计算', [], true],
        [require('../../Pictures/sheding.png'), '阈值管理', [], true],
        [require('../../Pictures/yuce.png'), '系统说明', ["说明书", "帮助反馈"], true],
        [require('../../Pictures/yuce.png'), '系统总览', [], true],
    ])


    return (
        <div className={props.length === "long" ? 'menuList' : 'menuList1'}>
                {props.length === "long" ? <div className='menuList_title'>{"菜单栏"}</div>: null}
                <img src={props.length === "long" ? require("../../Pictures/xiangzuo.png")
                    : require("../../Pictures/xiangyou.png")}
                     alt={"箭头"}
                     className={props.length === "long" ? 'menuList_button' : 'menuList_button1'}
                     onClick={() => {
                    if (props.length === "long") {
                        props.setLength("short")
                    } else {
                        props.setLength("long")
                    }
                }}>{}</img>
            <div className='menuList_list'>
                {choices.map((choice, index) => (
                    <Choice openedPages={props.openedPages} name={choice[1]} address={choice[0]}
                            setOpenedPages={props.setOpenedPages} setCurrentPage={props.setCurrentPage}
                            length={props.length} titles={choice[2]} submenus={choice[2]}
                            setChoices={setChoices} choices={choices} index={index} key={index}/>
                ))}

            </div>

        </div>
    )
}

export default MenuList