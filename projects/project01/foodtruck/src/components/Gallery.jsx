import FoodStand from './FoodStand.jsx';
import GreenBay from '../assets/GreenBay_HouseAd_ROS_Restaurants_23MAR2022_c3c4259f-68ef-4ddb-b674-837b2fe08c94.jpg'
import gugl from '../assets/guglhupf-cafe.jpg' 
import juju from '../assets/juju-asian-tapas-bar.jpg' 
import shutterstock from '../assets/shutterstock_1678594945-1880x880-1.jpg' 

const Gallery = () => {
    return (
        <table className="food-stand">
            <tbody>
                <tr>
                    <FoodStand image={GreenBay} name="Birria-Landia" location="Mexico" link="https://www.birria-landia.com/"/>
                    <FoodStand image={gugl} name="Mysttik Masala" location="India" link="https://www.mysttikmasala.com/"/>
                    <FoodStand image={juju} name="The Halal Guys" location="Middle East" link="https://www.thehalalguys.com/"/>
                    <FoodStand image={shutterstock} name="NY Dosas" location="India" link="https://www.nydosas.com/"/>
                </tr>
                <tr>
                    <FoodStand image={shutterstock} name="Birria-Landia" location="Mexico" link="https://www.birria-landia.com/"/>
                    <FoodStand image={GreenBay} name="Mysttik Masala" location="India" link="https://www.mysttikmasala.com/"/>
                    <FoodStand image={gugl} name="The Halal Guys" location="Middle East" link="https://www.thehalalguys.com/"/>
                    <FoodStand image={juju} name="NY Dosas" location="India" link="https://www.nydosas.com/"/>
                </tr>
                <tr>
                    <FoodStand image={juju} name="Birria-Landia" location="Mexico" link="https://www.birria-landia.com/"/>
                    <FoodStand image={gugl} name="Mysttik Masala" location="India" link="https://www.mysttikmasala.com/"/>
                    <FoodStand image={GreenBay} name="The Halal Guys" location="Middle East" link="https://www.thehalalguys.com/"/>
                    <FoodStand image={shutterstock} name="NY Dosas" location="India" link="https://www.nydosas.com/"/>
                </tr>
            </tbody>
        </table>
    )

}

export default Gallery
