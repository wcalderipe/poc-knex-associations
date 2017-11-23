## What is the problem?

Nest child associations into their parents.

```
-- Application
---- Features
------ Parameters
```

- **Given:** An application ID
- **When:** I make a query to find the application by ID
- **Then:** I want all application's features children nested into it as an array
- **And:** All feature's parameters children nested into each feature as an array
