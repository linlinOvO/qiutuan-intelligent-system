import React from "react";
import '../../../Pages/MaterialListPage.css'

class ListBody extends React.Component {
    constructor(props) {
        super(props);
        this.content = React.createRef();
        this.state = {
            materials: {}
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidUpdate() {
        this.content.current.scrollTop = this.props.scrollTop;
        this.content.current.scrollLeft = this.props.scrollLeft;
    }

    handleScroll() {
        this.props.setScrollTop(this.content.current.scrollTop);
        this.props.setScrollLeft(this.content.current.scrollLeft);
    }

    render() {

        return (
            <div className='materialList_body' ref={this.content} onScroll={this.handleScroll}>
                <table>
                    <tbody>
                    {this.props.materials.map((material, index) => (
                        <tr key={index}>
                            <td className='checkBox'>
                                <input
                                    className='checkBox'
                                    type='checkbox'
                                    checked={material?.isChecked || false}
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
                            <td className='name'>{material.materialOriginal}</td>
                            <td className='name'>{material.companyName}</td>
                            <td>{material.testDate.slice(0, 10)}</td>
                            <td>{material.materialPrice.toFixed(2)}</td>
                            <td>{material.TFe.toFixed(3)}</td>
                            <td>{material.FeO.toFixed(3)}</td>
                            <td>{material.SiO2.toFixed(3)}</td>
                            <td>{material.CaO.toFixed(3)}</td>
                            <td>{material.MgO.toFixed(3)}</td>
                            <td>{material.Al2O3.toFixed(3)}</td>
                            <td>{material.K2O.toFixed(3)}</td>
                            {material.hasOwnProperty('Cl') ? <td>{material.Cl.toFixed(3)}</td> : null}
                            {material.hasOwnProperty('Mn') ? <td>{material.Mn.toFixed(3)}</td> : null}
                            {material.hasOwnProperty('F') ? <td>{material.F.toFixed(3)}</td> : null}
                            {material.hasOwnProperty('P') ? <td>{material.P.toFixed(3)}</td> : null}
                            {material.hasOwnProperty('Na2O') ? <td>{material.Na2O.toFixed(3)}</td> : null}
                            {material.hasOwnProperty('MnO') ? <td>{material.MnO.toFixed(3)}</td> : null}
                            {material.hasOwnProperty('ZnO') ? <td>{material.ZnO.toFixed(3)}</td> : null}
                            {material.hasOwnProperty('TiO2') ? <td>{material.TiO2.toFixed(3)}</td> : null}
                            {material.hasOwnProperty('P2O5') ? <td>{material.P2O5.toFixed(3)}</td> : null}
                            {material.hasOwnProperty('S') ? <td>{material.S.toFixed(3)}</td> : null}
                            {material.hasOwnProperty('Zn') ? <td>{material.Zn.toFixed(3)}</td> : null}
                            <td>{material.water.toFixed(3)}</td>
                            <td>{material.burningLoss.toFixed(3)}</td>
                            {material.hasOwnProperty('colloidIndex') ?
                                <td>{material.colloidIndex.toFixed(3)}</td> : null}
                            {material.hasOwnProperty('blueAbsorption') ?
                                <td>{material.blueAbsorption.toFixed(3)}</td> : null}
                            {material.hasOwnProperty('montmorilloniteContent') ?
                                <td>{material.montmorilloniteContent.toFixed(3)}</td> : null}
                            {material.hasOwnProperty('expansionCapacity') ?
                                <td>{material.expansionCapacity.toFixed(3)}</td> : null}
                            <td>{material.O_15.toFixed(3)}</td>
                            <td>{material.O_15ToO_124.toFixed(3)}</td>
                            <td>{material.O_124ToO_O98.toFixed(3)}</td>
                            <td>{material.O_O98ToO_O74.toFixed(3)}</td>
                            <td>{material.O_O74ToO_O48.toFixed(3)}</td>
                            <td>{material.O_O48.toFixed(3)}</td>
                            <td>{material.lessThan0_074.toFixed(3)}</td>
                            <td>{material.lessThan0_045.toFixed(3)}</td>
                            <td>{material.averageDiameter.toFixed(3)}</td>
                            <td>{material.specificSurfaceArea.toFixed(3)}</td>
                            {material.hasOwnProperty('maxMolecularWater') ?
                                <td>{material.maxMolecularWater.toFixed(3)}</td> : null}
                            {material.hasOwnProperty('maxCapillaryWater') ?
                                <td>{material.maxCapillaryWater.toFixed(3)}</td> : null}
                            {material.hasOwnProperty('ballingIndex') ?
                                <td>{material.ballingIndex.toFixed(3)}</td> : null}
                            {material.hasOwnProperty('less200Mesh') ? <td>{material.less200Mesh.toFixed(3)}</td> : null}
                            {material.hasOwnProperty('less300Mesh') ? <td>{material.less300Mesh.toFixed(3)}</td> : null}
                            {material.hasOwnProperty('ash') ? <td>{material.ash.toFixed(3)}</td> : null}
                            {material.hasOwnProperty('volatiles') ? <td>{material.volatiles.toFixed(3)}</td> : null}
                            {material.hasOwnProperty('calorificValue') ?
                                <td>{material.calorificValue.toFixed(3)}</td> : null}
                            {material.hasOwnProperty('flammability') ?
                                <td>{material.flammability.toFixed(3)}</td> : null}
                            {material.hasOwnProperty('ashFusionPoint') ?
                                <td>{material.ashFusionPoint.toFixed(3)}</td> : null}
                            {material.hasOwnProperty('reactivity') ? <td>{material.reactivity.toFixed(3)}</td> : null}
                            {material.hasOwnProperty('grindability') ?
                                <td>{material.grindability.toFixed(3)}</td> : null}
                            {material.hasOwnProperty('explosibility') ?
                                <td>{material.explosibility.toFixed(3)}</td> : null}
                            <td>{material.updateDate.slice(0, 10)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListBody