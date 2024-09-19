import React from "react";
import '../../../Pages/MaterialListPage.css'

class FixedListHead extends React.Component {

    render() {
        return (
            <div className='materialList_fixed_head'>
                <table>
                    <thead>
                    <tr className='tablePart'>
                        <th className='checkBox'>
                            <input
                                className='checkBox'
                                type='checkbox'
                                name={'selectAll'}
                                checked={this.props.materials.filter((material) => material?.isChecked !== true).length < 1}
                                onChange={(e) => {
                                    this.props.handleChange(e, 0)
                                    this.props.toggleCheckbox(e, 0)
                                }}
                            /></th>
                        <th className='state'>操作</th>
                        <th className='check'>审核状态</th>
                        <th className='id'>原料id</th>
                        <th className='name'>原料名称</th>
                    </tr>
                    </thead>
                </table>
            </div>
        )
    }
}

export default FixedListHead