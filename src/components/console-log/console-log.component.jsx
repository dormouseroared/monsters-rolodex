export const ConsoleLog = (props) => {
    console.log("%c ConsoleLog", "color:yellow; background-color:blue")
    console.log("array?", Array.isArray(props.children))
    console.log(props.children)
    if (props.stringify) {
        console.log(JSON.stringify(props.children))
    }
    return false // component must return something
}

// https://javascript.plainenglish.io/can-you-console-log-in-jsx-732f2ad46fe1
// We have to remember that JSX is not vanilla JavaScript, nor is it HTML.
// It is a syntax extension.
//
// This component is adapted from the article to allow the item to be dumped out
// if the props stringify={true} are included
// also note that a component must return something or there will be an error, so in this case we return false
// it should be possible to use this component elsewhere
//
// https://camunda.com/blog/2021/02/be-careful-with-console-log-when-using-react-strictmode/

// experimenting with the buttons and strict mode it does look as if 
// using console.log directly is stopped by react strict mode