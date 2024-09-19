import React from "react";
import "../../Pages/HeatBalanceModel.css"


const MenuBar = (props) => {
    const menuList = ["链篦机", "回转窑", "环冷机", '链回环能源', "设备参数设置", "离线计算"]

    return (
        <div className="hb-menuList">
            {menuList.map((m, index) => (
                <div key={index} className={index === props.window ? "selected" : null}
                     onClick={() => {
                         props.setWindow(index)
                     }}>{m}</div>
            ))}
        </div>
    )
}

export default MenuBar
