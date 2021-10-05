import React,{useState} from 'react';
import './Project.css';
import Card from './Card';
import Api from './Card_api'
import useVisiblityToggler from './Toggler';

const Main = () => {
    const [menuData,setmenuData] = useState(Api);
    console.log(setmenuData)

    const [ContactCardComponent, toggleCardVisiblity] = useVisiblityToggler(
        <Card menuData={menuData}/>,
        false
    );

    return (
        <>
            <nav>
                <ol className="list">
                    <li className="heading">Employee Details</li>
                    <li ><button className="button" onClick={toggleCardVisiblity}>Get User</button></li>
                </ol>
            </nav>
            {ContactCardComponent}
        </>
    )
}

export default Main
