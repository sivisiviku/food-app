import { useRef, useState } from "react"

const isEmpty = value => value.trim() === ''
const isFiveChars = value => value.trim().length === 5

const Checkout = props => {
    const nameRef = useRef()
    const streetRef = useRef()
    const postalRef = useRef()
    const cityRef = useRef()
    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        city: true,
        postal: true
    })

    const confirmHandler = event => {
        event.preventDefault()
        const enteredName = nameRef.current.value
        const enteredStreet = streetRef.current.value
        const enteredPostal = postalRef.current.value
        const enteredCity = cityRef.current.value

        const enteredNameIsValid = !isEmpty(enteredName)
        const enteredStreetIsValid = !isEmpty(enteredStreet)
        const enteredCityIsValid = !isEmpty(enteredCity)
        const enteredPostalIsValid = isFiveChars(enteredPostal)

        setFormInputValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postal: enteredPostalIsValid
        })

        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalIsValid

        if(!formIsValid) {
            return
        }
    }

    return <form onSubmit={confirmHandler}>
        <div className="mb-2 mt-4">
            <label htmlFor="name">Your Name</label>
            <input ref={nameRef} className="ml-2 border-2 border-black" type="text" id="name"/>
            {!formInputValidity.name && <small>Please enter a valid name</small>}
        </div>
        <div className="mb-2">
            <label htmlFor="street">Street</label>
            <input ref={streetRef} className="ml-2 border-2 border-black" type="text" id="street"/>
            {!formInputValidity.street && <small>Please enter a valid street</small>}
        </div>
        <div className="mb-2">
            <label htmlFor="postal">Postal Code</label>
            <input ref={postalRef} className="ml-2 border-2 border-black" type="text" id="postal"/>
            {!formInputValidity.postal && <small>Please enter a valid postal code</small>}
        </div>
        <div className="mb-2">
            <label htmlFor="city">City</label>
            <input ref={cityRef} className="ml-2 border-2 border-black" type="text" id="city"/>
            {!formInputValidity.city && <small>Please enter a valid city</small>}
        </div>
        <button className="bg-orange-600 text-white px-2 py-1 rounded-md mr-2">Confirm</button>
        <button className="bg-orange-600 text-white px-2 py-1 rounded-md" type="button" onClick={props.onCancel}>Cancel</button>
    </form>
}

export default Checkout