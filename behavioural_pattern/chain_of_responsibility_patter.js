/**
 * The Chain of Responsibility passes requests along a chain of handlers. Each handler decides either to process the request or to pass it to the next handler in the chain.

For this pattern we could use the same exact example as before, as middlewares in Express are somehow handlers that either process a request or pass it to the next handler.

Another example, think about any system in which you have certain information to process along many steps. At each step a different entity is in charge of performing an action, and the information only gets passed to another entity if a certain condition is met.

A typical front-end app that consumes an API could work as an example:

We have a function responsible for rendering a UI component.
Once rendered, a another function makes a request to an API endpoint.
If the endpoint response is as expected, the information is passed to another function that sorts the data in a given way and stores it in a variable.
Once that variable stores the needed information, another function is responsible of rendering it in the UI.
 */

