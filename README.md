# Session-JS
Create a JS sessions like PHP sessions

# Initialize Sessions
<code>
var session = new Session(); // default max-time: 3600 (30 minutes)
</code>

# Pass max-time
<code>
var session = new Session(4800); // 1h20m
</code>

# Insert session
<code>
session.set('user-id', 15); // Return session information. e.g. {'user-id': 15};
</code>

# Get session
<code>
session.get('user-id'); // Return user-id from session. e.g. 15;
</code>

# Get countdown time
<code>
session.countdown(); // e.g. 4799 (01:19:59)
</code>

# Destroy session
<code>
session.destroy(); // destroy all session information
</code>

# e.g.

```html
<head>
    <title>Session JS</title>
</head>
<body>

    <p>Nome: <span id="nome"></span></p>
    <p>Usuário: <span id="user"></span></p>
    <p>Idade: <span id="age"></span></p>
    <p>Estado: <span id="state"></span></p>
    <p>Cidade: <span id="city"></span></p>

    <script type="text/javascript" src="session.js"></script>
    <script type="text/javascript" src="index.js"></script>

</body>
```


