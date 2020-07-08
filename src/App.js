import './App.css';
import Header from './Components/Header';
import Search from './Components/Search';
import TableData from './Components/TableData';
import AddUser from './Components/AddUser';
import React, { Component } from 'react';
import DataUser from './Components/Data.json';

const uuidv1 = require('uuid/v1');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      hienThiForm: false,
      data: DataUser,
      searchText: '',
      editUserStatus: false,
      editUserOfject: {},
    }
  }

  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value,key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
      }
    });
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl   
    });
    
  }
  
  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }

  getNewUser = (name,tel,Permission) => {
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;
    
    var items = this.state.data;
    items.push(item);
    this.setState({
      data: items,
    });

   
  }

  editUser = (user) => {
   
    this.setState({
      editUserOfject:user,
    })
  
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus,
    });
  }

  deleteIdUser = (idUser) => {
    var tempData = this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data: tempData
    });
  }

  render(){
    var ketqua = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketqua.push(item);
      }
    })
    // console.log(ketqua);
    return (
      <div > 
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)} 
                editUserOfject={this.state.editUserOfject}
                checkConnectProps={(dl) => this.getTextSearch(dl)} 
                ketNoi = {() => this.doiTrangThai()} 
                hienThiForm = {this.state.hienThiForm} 
                changeEditUserStatus={() => this.changeEditUserStatus()}
                editUserStatus={this.state.editUserStatus}
              />
              <TableData
                deleteIdUser={(idUser) => this.deleteIdUser(idUser)} 
                editFun={(user) => this.editUser(user)} 
                dataUserProps = {ketqua} 
                changeEditUserStatus={() => this.changeEditUserStatus()}

              />
              <AddUser add={(name,tel,Permission) => this.getNewUser(name,tel,Permission)} hienThiForm = {this.state.hienThiForm}/>
            </div>
          </div>
        </div>
      </div>
    );
  } 
}

