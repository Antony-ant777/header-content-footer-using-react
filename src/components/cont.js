import React from 'react'

function Content() {
  return (
    <div >
        <div class="table">
        <table border="2">
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Roll.no</th>
                <th>Department</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Antony</td>
                <td>720721106027</td>
                <td>ECE</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Subish</td>
                <td>720721110047</td>
                <td>IT</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Sam 10</td>
                <td>72072111039</td>
                <td>IT</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Sabari</td>
                <td>720721103049</td>
                <td>Civil</td>
            </tr>
        </table>
        </div>
        <div class="form">
            <form>
                <label>User Id:</label><br></br>
                <input type='text'></input><br></br>
                <label>Password:</label><br></br>
                <input type='password'></input><br></br>
                <div class="button">
                <button>Submitted</button>
                </div>
            </form>

        </div>
    </div>
    
  )
}

export default Content