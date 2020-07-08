import React, { Component } from 'react'

export default class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id: "",
            name: "",
            tel: "",
            Permission: ""
        }
    }
    
    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        });
        //var item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.Permission = this.state.Permission;
        // console.log(item);
    }

    kiemTraTrangThai = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div className="col">
                    <form>
                        <div className="card border-primary mb-3 mt-2">
                            <div className="card-header">Them moi user</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.isChange(event)} name="name" className="form-control" placeholder="User name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.isChange(event)}  name="tel" className="form-control" placeholder="Dien thoai" />
                                </div>
                                <div className="form-group">
                                    <select onChange={(event) => this.isChange(event)}  name="Permission" className="custom-select" required>
                                        <option value>Chon quyen mac dinh</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Mordrator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" className="btn btn-block btn-primary" onClick={(name,tel,Permission) => this.props.add(this.state.name, this.state.tel, this.state.Permission)} value="Thêm mới" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }

    render() {
        
        return (
            <div className="card text-left">
                {this.kiemTraTrangThai()}

            </div>
        )
    }
}
