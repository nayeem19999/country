
const Country = ({country,handleDetails,images}) => {
    const {name,flags,cca3,languages}=country;
    return (
        <div style={{border:'2px solid black',borderRadius:'15px'}}>
            <img height={'100px'} width={'200px'} src={flags.png} alt="" />
            <h5>{name.common}</h5>
            <p>{languages?.eng}</p>
            <button onClick={()=>handleDetails(country)}>Country Details</button>
            <button onClick={()=>images(country)}>show img</button>
        </div>
    );
};

export default Country;