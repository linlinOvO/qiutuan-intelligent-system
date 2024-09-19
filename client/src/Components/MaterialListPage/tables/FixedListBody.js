import React from "react";
import '../../../Pages/MaterialListPage.css'

class FixedListBody extends React.Component {
    constructor(props) {
        super(props);
        this.content = React.createRef();
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidUpdate() {
        this.content.current.scrollTop = this.props.scrollTop;
    }

    handleScroll() {
        this.props.onScroll(this.content.current.scrollTop);
    }

    render() {
        return (
            <div className='materialList_fixed_body' ref={this.content} onScroll={this.handleScroll}>
                <table>
                    <tbody>
                    {this.props.materials.map((material, index) => (
                        <tr key={index}>
                            <td className='checkBox'>
                                <input
                                    className='checkBox'
                                    type='checkbox'
                                    checked={this.props.materialChosen === undefined ?
                                        this.props.checkbox[this.props.listId].indexOf(material.materialId) !== -1 :
                                        this.props.materialChosen[this.props.listId].filter((m) => m.materialId === material.materialId).length === 1}
                                    name={'single'}
                                    onChange={(e) => {
                                        this.props.toggleCheckbox(e, material)
                                        this.props.handleChange(e, material.materialId)
                                    }}
                                /></td>
                            <td className='state'>
                                <button
                                    className='operation'
                                    onClick={() => {
                                        this.props.togglePopup()
                                        this.props.setMaterialId(material.materialId)
                                        this.props.setId(index)
                                    }}
                                >详情
                                </button>
                            </td>
                            <td className='check'>
                                <div className={material.ifCheck ? 'state2' : 'state1'}>
                                    {material.ifCheck ? '已审核' : '未审核'}
                                </div>
                            </td>
                            <td className='id'>{material.materialId}</td>
                            <td className='name'>{material.materialName}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default FixedListBody