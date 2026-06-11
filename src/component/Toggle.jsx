import { useState } from 'react'; // bring in useState

export default function Toggle() {
    const [isOpen, setIsOpen] = useState(false); // starts hidden (false)

    return (
        <div>
            {/* clicking flips isOpen: false → true → false ... */}
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Hide' : 'Show'} {/* label changes with state */}
            </button>

            {/* this <p> only appears when isOpen is true */}
            {isOpen && <p>Now you can see me!</p>}
        </div>
    );
}