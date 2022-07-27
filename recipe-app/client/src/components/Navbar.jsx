export default function Navbar() {
    function helper(event) {
        event.preventDefault();
        alert("You're already on the home page :) this button is just for looks");
    }

    return (
        <div className="navigation">
            <a href="/" onClick={(event) => helper(event)}>Home</a> 
        </div>
    );
}