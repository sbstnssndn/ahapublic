import React, { Component } from 'react';
import axios from 'axios';
import styles from './App.module.css';


class Prueba extends Component {


    state = {
        users: [],
        usersPage: {},
        total: 0,
        usersByPage: 10,
        pages: 0,
        currentPage: 1,
        pageNumbers: [],
        charged: false
    }

    componentDidMount () {
        axios.get("http://localhost:8080/api/user/all")
        .then(response => {
            this.setState({
                users: response.data,
                total: response.data.length,
                pages: Math.trunc(response.data.length  / this.state.usersByPage + 1)
            });
            this.paginar();
            this.setState({
                charged: true
            })
        })
        .catch(function(error){
            console.log(error);
        })
    }

    paginar() {

        let usersAux = [];

        for(let i = 0; i < this.state.pages ; i++){
            
            let page = {
                id: i + 1,
                users: []
            };

            for(let j = 0; j < this.state.usersByPage; j++){
                if(this.state.users[i*this.state.usersByPage + j] != null){
                    page.users.push(this.state.users[i*this.state.usersByPage + j]);
                }
            }
            this.state.pageNumbers.push(i + 1);
            usersAux.push(page);
        }

        this.setState({
            users: usersAux,
            usersPage: usersAux[0]
        });
        console.log("TODOS", this.state.users);
        console.log("Actuales", this.state.usersPage);
    }

    cambiaPagina(number){
        
        let aux = this.state.users[number - 1];

        this.setState({
            currentPage: number,
            usersPage: aux
        });
    }

    printUsers(){
        if(this.state.charged){
            console.log(this.state.usersPage.users);
            for(let i = 0; i < this.state.usersByPage; i++){
                return (
                    <React.Fragment>
                        <br></br><br></br>
                        {this.state.usersPage.users.map(user => {
                            return (
                                <li key={user.id}> {user.email} </li>
                            )
                        })}
                    </React.Fragment>
                )
            }
        }
    }

    render() {
        if(this.state.users != null || this.state.usersPage.users != null){
            return (
                <div className={styles.app}>
                    <label> Usuarios: {this.state.total} </label> <br></br>
                    <label> Pages: {this.state.pages} </label> <br></br>

                    <div className={styles.pagination}>
                        {this.state.pageNumbers.map(number => {
                        
                            //Evalúa si el numero recorrido es la pagina actual para señalar como activa
                            let classes = this.state.currentPage === number ? styles.active : '';
                            return (
                                <span key={number} className={classes} onClick={() => this.cambiaPagina(number)}>{number+" "}</span>
                            )
                        })}
                    </div>
                    {this.printUsers()}
                </div>
            )
        }
    }
}

export default Prueba;