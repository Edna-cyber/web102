const FoodStand = (props) => {
    return (
        <td className="food-stand">
            <img src={props.image} alt="Restaurant Image"></img>
            <h2>{props.name}</h2>
            <h3>{props.location}</h3>
            <a href={props.link} className="button">View Menu</a>
        </td>
    )
}
export default FoodStand