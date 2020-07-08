import React, { Component } from 'react'
import EditUser from './EditUser';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            userOfj: {}
        }
    }

    getUserEditInfo = (info) => {
        this.setState({
            userOfj : info
        });   
        this.props.getUserEditInfoApp(info); 
    }

    isShowEditForm = () => {
        if (this.props.editUserStatus === true) {
            return <EditUser 
            getUserEditInfo={(info) => this.getUserEditInfo(info)}
            editUserOfject={this.props.editUserOfject}
            changeEditUserStatus={() => this.props.changeEditUserStatus()} />
        }
    }

    isChange = (event) => {
        this.setState({
            tempValue: event.target.value
        });
        this.props.checkConnectProps(this.state.tempValue);
    }

    hienThiNut = () => {
        if (this.props.hienThiForm === true) {
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketNoi()}> Dong lai</div>
        }
        else {
            return <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()}> Them moi</div>
        }
    }
    render() {
        return (
            <div className="col-12">
                {this.isShowEditForm()}
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" onChange={(event) => this.isChange(event)} placeholder="Nhap tu khoa...." style={{ width: '600px' }} />
                        <div className="btn btn-info" onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}>Tìm</div>
                    </div>
                    <div className="btn-group1">
                        {this.hienThiNut()}
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}
