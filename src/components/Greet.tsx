type GreetProps = {
    name: string
    messageCount?: number   // ? means optional
    isLoggedIn: boolean
}
const Greet = (props: GreetProps) => {
    const welcomeGuest = <h1>Welcome Guest!</h1>
    // const { messageCount = 0 } = props   | set default value
    return (
        <div>
            {
                props.isLoggedIn ? `Welcome ${props.name}! You have ${props.messageCount} unread messages.`
                    : welcomeGuest
            }
        </div>
    )
}
export default Greet;
