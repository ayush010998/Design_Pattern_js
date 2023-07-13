/**
 * The observer pattern lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing. Basically, it's like having an event listener on a given object, and when that object performs the action we're listening for, we do something.

React's useEffect hook might be a good example here. What useEffect does is to execute a given function at the moment we declare.

The hook is divided in two main parts, the executable function and an array of dependencies. If the array is empty, like in the following example, the function gets executed each time the component is rendered.
 */


//useEffect observes and renders only according to given conditions.
useEffect(() => { console.log('The component has rendered') }, [])




//useEffect observes and renders only according to var1 changes.
useEffect(() => { console.log('var1 has changed') }, [var1])

