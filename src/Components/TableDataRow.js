import React, { Component } from 'react'

export default class TableDataRow extends Component {
    permissionShow = () =>{
        if(this.props.permission === 1){return "Admin ";}
        else if(this.props.permission === 2){return "Morderator ";}
        else {return "Normal"}
    }

    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }

    deleteButtonClick = (idUser) => {
        this.props.deleteButtonClick(idUser);
    }

    render() {
        return (
            <tr>
                <td>{this.props.stt+1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{
                        this.permissionShow()
                    }
                </td>
                <td>
                    <div className="btn-group">
                        <div 
                        onClick={() => this.editClick()} 
                        className="btn btn-warning sua"><i className="fa fa-edit" />Sua</div>
                        <div onClick={(idUser) => this.deleteButtonClick(this.props.id)} className="btn btn-danger xoa"><i className="fa fa-edit" />Xoa</div>
                    </div>
                </td>
            </tr>
        )
    }
}
