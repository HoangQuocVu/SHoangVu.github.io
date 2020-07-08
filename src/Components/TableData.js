import React, { Component } from 'react'
import TableDataRow from './TableDataRow';

export default class TableData extends Component {
    deleteButtonClick = (idUser) => {
       this.props.deleteIdUser(idUser);
    }

    mappingDataUser =  () =>
        this.props.dataUserProps.map((value,key) => (
            <TableDataRow 
            deleteButtonClick={(idUser) => this.deleteButtonClick(idUser)}
            changeEditUserStatus={() => this.props.changeEditUserStatus()} 
            editFunClick={(user) => this.props.editFun(value)} 
            userName={value.name} key={key} stt={key} tel={value.tel} permission={value.Permission} 
            id={value.id}
            />
        ))

    render() {
        
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Ten</th>
                            <th>Dien Thoai</th>
                            <th>Quyen</th>
                            <th>Thao tac</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>

        )
    }
}
