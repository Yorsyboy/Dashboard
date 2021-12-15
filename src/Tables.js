import { Input, Table } from 'antd'
import React, { useState } from 'react'
import Dashboard from './Dashboard'
import moment from 'moment'

function Tables() {

    const studentColumn = [
        {
            title: 'FirstName',
            dataIndex: 'firstName',
            sorter: (a, b) => a.firstName.localeCompare(b.firstName)
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            sorter: (a, b) => a.lastName.localeCompare(b.lastName)
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            filters: [
                {
                    text: "male",
                    value: "male",
                },
                {
                    text: "female",
                    value: "female",
                },
            ],
            onFilter: (value, record) => record.gender === value,
        },
        {
            title: 'Date of Birth',
            dataIndex: 'dob',
            sorter : (a,b)=>moment(a.dob , 'DD-MM-YYYY') - moment(b.dob , 'DD-MM-YYYY')
        },
        {
            title: 'Marks',
            dataIndex: 'marks',
            sorter: (a, b) => a.marks - b.marks,
        },
        {
            title: 'Country',
            dataIndex: 'country',
            sorter: (a, b) => a.country.localeCompare(b.country)
        },
    ]

    var studentsData = [
        {
            firstName: "sathya",
            lastName: "reddy",
            gender: "male",
            dob: "08-07-2000",
            marks: 94,
            country: "United States",
        },
        {
            firstName: "john",
            lastName: "bas",
            gender: "male",
            dob: "01-07-2000",
            marks: 75,
            country: "United States",
        },
        {
            firstName: "dany",
            lastName: "malp",
            gender: "female",
            dob: "05-11-1999",
            marks: 72,
            country: "India",
        },
        {
            firstName: "beemla",
            lastName: "nayak",
            gender: "male",
            dob: "05-12-1999",
            marks: 62,
            country: "India",
        },
        {
            firstName: "sneha",
            lastName: "latha",
            gender: "female",
            dob: "11-10-2000",
            marks: 62,
            country: "India",
        },
        {
            firstName: "indra",
            lastName: "sena",
            gender: "male",
            dob: "05-10-1999",
            marks: 88,
            country: "Australia",
        },

        {
            firstName: "samara",
            lastName: "simha",
            gender: "male",
            dob: "05-10-2000",
            marks: 88,
            country: "Australia",
        },
    ];


    const [tableData, setTabledata] = useState(studentsData)
    function searchTable(searchKey) {

        var tempdata = studentsData.filter(student => JSON.stringify(student).toLocaleLowerCase().includes(searchKey.toLocaleLowerCase()))

        setTabledata(tempdata)

    }


    return (
        <Dashboard>
            <div className="tables">
                <h3>Tables</h3>

                <Input placeholder="search table" style={{ width: '40%' }} onChange={(e) => { (searchTable(e.target.value)) }} />
                <Table columns={studentColumn} dataSource={tableData} />
            </div>
        </Dashboard>
    )
}

export default Tables
