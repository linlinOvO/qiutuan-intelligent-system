import React, {useState} from "react";
import '../../Pages/MaterialListPage.css'
import AddMaterialPopup from "./PostMaterialForm";

const ButtonsPart = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const deleteAllSelected = () => {
        if (window.confirm('确定删除?')) {
            // console.log(props.checkBox)
            fetch('/api/v1/delete_all_selected', {
                'method': 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({//request message
                    checkBox: props.checkBox
                })
            }).then(() => {
                fetch('/api/v1/materials/' + props.listId)
                    .then(response => response.json())
                    .then(data => props.setMaterials(data))
            })
        }
    }

    const checkAllSelected = () => {
        // console.log(props.checkBox)
        fetch('/api/v1/check_all_selected', {
            'method': 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({//request message
                checkBox: props.checkBox
            })
        }).then(() => {
            fetch('/api/v1/materials/' + props.listId)
                .then(response => response.json())
                .then(data => props.setMaterials(data))
        })

    }

    return (
        <div className='materialListPage_functions'>
            <button
                className='Button1'
                onClick={togglePopup}
            >新增原料
            </button>
            <button
                className='Button2'
                onClick={checkAllSelected}
            >原料审核
            </button>
            <button
                className='Button3'
                onClick={deleteAllSelected}
            >批量删除
            </button>
            {isOpen && <AddMaterialPopup
                handleClose={togglePopup}
                setMaterials={props.setMaterials}
                listId={props.listId}
            />}
        </div>
    )
}

export default ButtonsPart