import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData:
                [
                    {
                        id: 1,
                        name: "test1",
                        age: "11",
                        gender: "male",
                        email: "test1@gmail.com",
                        phoneNo: "9415346313"
                    },
                    {
                        id: 2,
                        name: "test2",
                        age: "12",
                        gender: "male",
                        email: "test2@gmail.com",
                        phoneNo: "9415346314"
                    },
                    {
                        id: 3,
                        name: "test3",
                        age: "13",
                        gender: "male",
                        email: "test3@gmail.com",
                        phoneNo: "9415346315"
                    },
                    {
                        id: 4,
                        name: "test4",
                        age: "14",
                        gender: "male",
                        email: "test4@gmail.com",
                        phoneNo: "9415346316"
                    },
                    {
                        id: 5,
                        name: "test5",
                        age: "15",
                        gender: "male",
                        email: "test5@gmail.com",
                        phoneNo: "9415346317"
                    },
                    {
                        id: 6,
                        name: "test6",
                        age: "16",
                        gender: "male",
                        email: "test6@gmail.com",
                        phoneNo: "9415346318"
                    }
                ]
        };
    }


    renderTableData() {
        return this.state.userData.map((user, index) => {
            const { id, name, age, gender, email, phoneNo } = user
            return (<TableRow key={id}>
                <TableCell>
                    {id}
                </TableCell>
                <TableCell align="right">{name}</TableCell>
                <TableCell align="right">{age}</TableCell>
                <TableCell align="right">{gender}</TableCell>
                <TableCell align="right">{email}</TableCell>
                <TableCell align="right">{phoneNo}</TableCell>
            </TableRow>
            )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.state.userData[0])
        return <TableHead>
            <TableRow>
                <TableCell>id</TableCell>
                <TableCell align="right">name</TableCell>
                <TableCell align="right">age</TableCell>
                <TableCell align="right">gender</TableCell>
                <TableCell align="right">email</TableCell>
                <TableCell align="right">phoneNo</TableCell>
            </TableRow>
        </TableHead>
    }

    render() {
        return (

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    {this.renderTableHeader()}
                    <TableBody>
                        {this.renderTableData()}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

export default DashBoard;
