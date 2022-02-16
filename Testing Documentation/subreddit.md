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
        <td>Check system behavior when join is pressed on community group</td>
        <td>
          Goto website <br />
          Click join <br />
        </td>
        <td>r/Jobbatical</td>
      </tr>
      <tr>
        <td>Check system behavior when r/Jobbatical is clicked.</td>
        <td>
          Goto website <br />
          Search r/Jobbatical <br />
          Click r/Jobbatical <br />
        </td>
        <td>Search field: 'r/Jobbatical'</td>
      </tr>
      <tr>
        <td>Check system behavior when creating post with title and text</td>
        <td>
          Click create a post <br />
          Type title <br />
          Type text <br />
          Click post <br />
        </td>
        <td>Title: Test Text: learne2e</td>
      </tr>
      <tr>
        <td>Check system behavior when creating post without title</td>
        <td>
          Click create a post <br />
          Type name <br />
          Type text <br />
          Click post <br />
        </td>
        <td>
          Title: '' <br />
          Text: anyText <br />
        </td>
      </tr>
      <tr>
        <td>Check system behavior when writing a comment</td>
        <td>
          Click comments under post section <br />
          Type text <br />
          Click comment button <br />
        </td>
        <td>Text: anyText</td>
      </tr>
      <tr>
        <td>Check system behavior when writing a comment with spaces only</td>
        <td>
          Click comments under post section <br />
          Press spaces <br />
          Click comment button <br />
        </td>
        <td>Text: ' '</td>
      </tr>
      <tr>
        <td>Check system behavior when sharing post</td>
        <td>
          Click share under post section <br />
          Choose specified action <br />
        </td>
        <td>Share to Chat</td>
      </tr>
      <tr>
        <td>Check system behavior when sharing post</td>
        <td>
          Click share under post section <br />
          Choose specified action <br />
        </td>
        <td>Copy link</td>
      </tr>
      <tr>
        <td>Check system behavior when sharing post</td>
        <td>
          Click share under post section <br />
          Choose specified action <br />
        </td>
        <td>Crosspot</td>
      </tr>
      <tr>
        <td>Check system behavior when sharing post</td>
        <td>
          Click share under post section <br />
          Choose specified action <br />
        </td>
        <td>Embed <br /></td>
      </tr>
    </table>
  </body>
</html>
