const codeSnippets = [
    {
        category: "React",
        snippet: "const element = React.createElement('h1', {className: 'greeting'}, 'Hello world!')",
        description: "Use vanilla JS to create h1 element",
    },
    {
        category: "React",
        snippet: "const element = (<h1 className='greeting'>Hello world!</h1>)",
        description: "Create h1 element using JSX",
    },
    {
        category: "React",
        snippet: "function Button(props) {return <button className={props.className} onClick={props.onClick}>{props.text}</button>;}",
        description: "Use JSX to create a button that takes in props of class, function to run when clicked and text to display on the button",
    },
    {
        category: "SQL",
        snippet: "INSERT INTO users (name, email, username) VALUES ('Tao', 'tao@tao.com', 'BegoniaFan') RETURNING *;",
        description: "Insert values in to a table called 'users', with columns of 'name','email' and 'username'",
    },
    {
        category: "SQL",
        snippet: "SELECT * FROM users WHERE user_id = 126;",
        description: "Select all columns, in the row with user_id of 126",
    },
    {
        category: "SQL",
        snippet: "SELECT email FROM users WHERE user_id = 126;",
        description: "Select the email column, in the row with user_id 126",
    },
]

export default codeSnippets;