import React from 'react'
import Page from 'react-page-loading'

const Card = ({menuData}) => {
    return (
        <>
        <Page loader={"bar"} color={"white"} size={20} duration={1}>
        <section className="container" style={{display:'flex'}}>
        {
            menuData.map((currElem)=>{
                return (
                    <>
                <div className="card-container" key={currElem.id}> 
                <div className="company-name">Company Name</div>
                <img className="profile" src={currElem.image} alt="" />
                <div className="id-card">ID Card</div>
                <div className="name">{currElem.name}</div>
                <div>{currElem.position}</div>
                <img className="logo" src="https://i.pinimg.com/564x/87/d6/56/87d6568b43e2c215e4287ca1f029cedb.jpg" alt=""/>
            </div>
                    </>
                )
            })
       
        }
        </section>
        </Page>
        </>
    )
}

export default Card
