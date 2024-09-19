import React from "react";
import '../../../Pages/MaterialListPage.css'

class ListHead extends React.Component {
    constructor(props) {
        super(props);
        this.content = React.createRef();
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidUpdate() {
        this.content.current.scrollLeft = this.props.scrollLeft;
    }

    handleScroll() {
        this.props.onScroll(this.content.current.scrollLeft);
    }

    render() {
        return (
            <div className="materialList_head"
                 ref={this.content} onScroll={this.handleScroll}>
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
                        {this.props.secondHeaders.map((header, index) => (
                            <th
                                className={header === '原料产地' || header === '公司' ? 'name' : 'tablePart'}
                                key={index}>{header}
                            </th>
                        ))}
                    </tr>
                    </thead>
                </table>
            </div>
        )
    }
}

export default ListHead