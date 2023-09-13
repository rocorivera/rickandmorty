import { useEffect } from "react"
import useFetch from "../hooks/useFetch"

const Residentcard = ({url}) => {

    const [ resident,getResident]=useFetch(url)

    useEffect(()=>{
        getResident()
    },[])

    
  return (
    
    <article className="resident">
        <header className="resident_header">
            <img  className="residen_img" src={resident?.image} alt="" />
            <div className="resident_status">
                <span className={`resident_status_circle ${resident?.status}`}></span>
                <span className="resident_status_value">{resident?.status}</span>
            </div>
        </header>
        <section className="resident_body">
            <h3 className="resident_h3">{resident?.name}</h3>
            <hr className="resident separador"/>
            <ul className="resident_list">
                <li className="resident_item">
                    <span className="resident_label">Specie: </span>
                    <span className="resident_value">{resident?.species}</span>
                </li>
                <li className="resident_item">
                    <span className="resident_label">Origin: </span>
                    <span className="residet_value">{resident?.origin.name}</span>
                </li>
                <li>
                    <span className="resident_label">Episodes where appear: </span>
                    <span className="resident_value">{resident?.episode.length}</span>
                </li>
            </ul>
        </section>
    </article>
  )
}

export default Residentcard