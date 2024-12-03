import "./Input.scss"

function Input({name}) {

    return (
        <div className="InputField">
            {name}
            <input/>
        </div>
    )
}

export default Input
