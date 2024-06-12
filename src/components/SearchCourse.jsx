import React, { useState } from 'react'
import NavCourse from './NavCourse'
import axios from 'axios'

const SearchCourse = () => {
  const [data, setData] = useState(
    {
      "title": ""
    }
  )
  const [result, setResult] = useState(
    []
  )
  const inputHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }
  const readValue = () => {
    console.log(data)
    axios.post("http://localhost:8084/search", data).then(
      (response) => {
        setResult(response.data)
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    ).finally()
  }
  return (
    <div>
      <NavCourse />
      <div className="container">
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <label htmlFor="" className="form-label">Course title:</label>
            <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />

          </div>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <button className="btn btn-info" onClick={readValue}>Search</button>

          </div>
        </div>
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Date</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Venue</th>
                  <th scope="col">Trainer Name</th>
                </tr>
              </thead>
              <tbody>
                {
                  result.map(
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

export default SearchCourse