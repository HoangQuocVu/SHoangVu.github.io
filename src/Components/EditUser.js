import React, { Component } from 'react'

export default class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.editUserOfject.id,
            name: this.props.editUserOfject.name,
            tel: this.props.editUserOfject.tel,
            Permission: this.props.editUserOfject.Permission,

        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });
    }

    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.Permission = this.state.Permission;
 
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();
        
    }

    render() {

        return (
            <div className="row">
                <div className="col-12">
                    <form>
                        <div className="card border-primary mb-3 mt-2">
                            <div className="card-header">Sua thong tin</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input onChange={(event) =>this.isChange(event)} defaultValue={this.props.editUserOfject.name} type="text" name="name" className="form-control" placeholder="User name" />
                                </div>
                                <div className="form-group">
                                    <input defaultValue={this.props.editUserOfject.tel} onChange={(event) =>this.isChange(event)}  type="text" name="tel" className="form-control" placeholder="Dien thoai" />
                                </div>
                                <div className="form-group">
                                    <select onChange={(event) =>this.isChange(event)} defaultValue={this.props.editUserOfject.Permission} name="Permission" className="custom-select" required>
                                        <option value>Chon quyen mac dinh</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Mordrator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="button" className="btn btn-block btn-primary" value="Luu"
                                        onClick={() => this.saveButton()} />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
