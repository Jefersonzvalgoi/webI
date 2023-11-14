import './Nav.css'

function Nav(){
    return(
        <section className="d-flex justify-content-between m-4">
            <img src='./react.svg'/>
            <nav>
                <a href="#">Learn</a>
                <a href="#">Reference</a>
                <a href="#">Community</a>
                <a href="#">Blog</a>

            </nav>
        </section>
    )
}
export default Nav