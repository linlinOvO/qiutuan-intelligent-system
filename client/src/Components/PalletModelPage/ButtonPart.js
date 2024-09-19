import React from "react";
import '../../Pages/PalletModelPage.css'

const ButtonPart = (props) => {

    return (
        <div className='palletModelPage_buttonPart'>
            <button className='palletModelPage_buttonPart_choose' onClick={props.handleClose}>选择原料</button>
            <button className='palletModelPage_buttonPart_add'>球团入库</button>
            <div className='palletModelPage_buttonPart_1'>
                <label
                    className={props.display === 'concentrated' ? 'palletModelPage_buttonPart_2' : 'palletModelPage_buttonPart_1'}
                    onClick={() => {
                        props.setDisplay('concentrated')
                    }}>集中展示</label>
                <label
                    className={props.display === 'category' ? 'palletModelPage_buttonPart_2' : 'palletModelPage_buttonPart_1'}
                    onClick={() => {
                        props.setDisplay('category')
                    }}>分类展示</label>
            </div>
        </div>
    )
}

export default ButtonPart