export default function FoUrlap() {
    const adat = {}
    function adatKuld(event) {
        event.preventDefault();
        console.log(adat);
    }
    function adatValt(event) {
        console.log(event)
    }
    return (
        <form onSubmit={adatKuld}>
            {
                Object.keys(adatLeiras).map(key => {
                    return (
                        <div className="mb-3 mt-3" key = {key}>
                            <label htmlFor={key} className="form-label">
                            {adatLeiro[key].megjelenes}
                            </label>
                            <input type={adatLeiro[key].tipus}
                            className="form-control" 
                            id={key+"id"} 
                            placeholder={adatLeiro[key].placeholder}
                            name="nev" onChange={adatValt}></input>
                        </div>
                    )

                })
            }

        </form>
    )
}