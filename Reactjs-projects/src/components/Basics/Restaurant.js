import React ,{useState}from 'react'
import './style.css'
import Menu from './menuApi.js'
import MenuCard from './MenuCard'
import Navbar from './Navbar'
const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    
    const uniqueList =[
        ...new Set(
            Menu.map((currElem)=>
            {
                return currElem.category
            }
            )
            ),
            'All'
        ]
        const [menuList,setMenuList]=useState(uniqueList);

        const fitler=(category)=>{

            if(category==="All"){
                setMenuData(Menu);
                return ;
            }

            const updatedList=Menu.filter((currElem)=>{
                return currElem.category===category;
            })

            setMenuData(updatedList);
        }


    return (

        <>
            <Navbar menuList={menuList} filterItem={fitler}/>
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurant
