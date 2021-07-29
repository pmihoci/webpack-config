import "../styles/index.scss"
import Recepies from "./Recepies"

const App = () => {
    return(
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <h1>Oh hai, React</h1>
                </section>
            </main>

            <Recepies />
        </>
    )
}

export default App