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
          Check system behavior when valid email is entered
        </td>
        <td>
          Enter email <br> 
          Press Continue <br>
        </td>
        <td>
          Email: test@learne2e.com
        </td>
      </tr>
      <tr>
        <td>
          Check system behavior when in username symbols other than {Letters, numbers, dashes, underscores} are used.
        </td>
        <td>
          Enter username <br>
          Enter password <br>
          Check I'm not a robot <br>
          Press Sign Up <br>
        </td>
        <td>
          Username: [/|\] <br>
          Password: anyPassword <br>
        </td>
    </tr>
      <tr>
        <td>
          Check system behavior when username and password are left blank and Sign Up is entered.
        </td>
        <td>
          Enter username <br>
          Enter password <br>
          Check I'm not a robot <br>
          Press Sign Up <br>
        </td>
        <td>
          Username: '' <br>
          Password: '' <br>
        </td>
      </tr>
      <tr>
        <td>
          Check system behavior when I'm not a robot is unchecked and Sign Up is entered.
        <td>
          Don't check I'm not a robot <br>
          Click Sign Up <br>
        </td>
        <td>
          Username: correctUsername <br>
          Password: correctPassword <br>
        </td>
      </tr>
    </table>
  </body>
</html>
