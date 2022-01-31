<!DOCTYPE html>
<html>
  <head>
    <style>
      table {
        font-family: arial, sans-serif;
        width: 100%;
      }

      td,
      th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }

      tr:nth-child(even) {
        background-color: #dddddd;
      }
    </style>
  </head>
  <body>
    <h2>Markdown</h2>

    <table>
      <tr>
        <th>Test Case Description</th>
        <th>Test Steps</th>
        <th>Test Data</th>
      </tr>
      <tr>
        <td>
          Check system behavior when valid username and password is entered.
        </td>
        <td>
          Enter username <br> 
          Enter password <br>
          Press Log In
        </td>
        <td>
          Username: learne2playwright <br>
          Password: VDQy2dntG8TM263 <br>
        </td>
      </tr>
      <tr>
        <td>
          Check system behavior when valid username and invalid password is entered.
        </td>
        <td>
          Enter username <br>
          Enter password <br>
          Press Log In <br>
        </td>
        <td>
          Username: learne2playwright <br>
          Password: incorrectPassword <br>
        </td>
      </tr>
      <tr>
        <td>
          Check system behavior when invalid username and invalid password is entered.
        </td>
        <td>
          Enter username <br>
          Enter password <br>
          Press Log In <br>
        </td>
        <td>
          Username: invalidUsername <br>
          Password: incorrectPassword <br>
        </td>
      </tr>
      <tr>
        <td>
          Check system behavior when username and password are left blank and Sign in entered.
        </td>
        <td>
          Enter username <br>
          Enter password <br>
          Press Log In <br>
        </td>
        <td>
          Username: '' <br>
          Password: '' <br>
        </td>
      </tr>
      <tr>
        <td>
          Check Forgot your password is working as expected
        <td>
          Click forgot password
        </td>
        <td>
          Username: learne2eplaywright <br>
        </td>
      </tr>
      <tr>
        <td>
          Check Forgot your username is working as expected
        <td>
          Click forgot password
        </td>
        <td>
          Password: VDQy2dntG8TM263 <br>
        </td>
      </tr>
    </table>
  </body>
</html>
