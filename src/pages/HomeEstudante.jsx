import styles from "../styles/Home.module.css";
import CardProfile from "../components/CardProfile";

function Home() {

    
    return (
        <>
            <section
                className = {styles.screen}>
                    <header
                        className = {styles.header}>
                            <div
                                className = {styles.containerImage}>
                                    <img
                                        className={styles.logo} 
                                        src="src/assets/logos/fullBranca.png"
                                        alt="" />
                                    <h1> Gestão Pedagógica </h1>
                                    <h2> Tela Inicial </h2>
                            </div>
                            <CardProfile />
                    </header>
            </section>
        </>
    )

}


export default Home;