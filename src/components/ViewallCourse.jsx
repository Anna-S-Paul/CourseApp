import React, { useEffect, useState } from 'react'
import NavCourse from './NavCourse'
import axios from 'axios'

const ViewallCourse = () => {
        const [data, changeData] = useState([])
        const fetchData = () => {
            axios.get("http://localhost:8084/viewall").then(
                (response) => {
                    changeData(response.data)
                }
            ).catch().finally()
        }
        useEffect(() => { fetchData() }, [])
        return (
            <div>
                <NavCourse/>
                <div className="container">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">DESCRIPTION</th>
                                        <th scope="col">DATE</th>
                                        <th scope="col">DURATION</th>
                                        <th scope="col">VENUE</th>
                                        <th scope="col">TRAINER NAME</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    data.map(
                                        (value, index) => {
                                            return <tr>
                                                <td>{value.title}</td>
                                                <td>{value.description}</td>
                                                <td>{value.date}</td>
                                                <td>{value.duration}</td>
                                                <td>{value.venue}</td>
                                                <td>{value.name}</td>

                                            </tr>
                                        }
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

export default ViewallCourse