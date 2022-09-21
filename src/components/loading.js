import LoadingLogo from "../img/compendio-loading.svg"

const Loading = () => {
    return(
        <>
        <div className="container collunm">
            <img className="logo" src={LoadingLogo} alt="logo de carregamento do game" />
            <button>Play</button>
        </div>
        </>
    )
}

export default Loading; 