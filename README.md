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
