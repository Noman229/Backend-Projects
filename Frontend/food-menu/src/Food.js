const foodItems = [
    { name: "biryani", image: require('./assets/images/biryani.jpg'), description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", remainingItem: "30" },
    { name: "Korma", image: require('./assets/images/korma.jpg'), description: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie.", remainingItem: "32" },
    { name: "Karhai", image: require('./assets/images/white-karhai.jpg'), description: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)", remainingItem: "05" },
    { name: "Malai Boti", image: require('./assets/images/malai-boti.jpg'), description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.", remainingItem: "12" },
    { name: "Pizza", image: require('./assets/images/pizza.jpg'), description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", remainingItem: "0" },
    { name: "Icecream", image: require('./assets/images/ice-cream.jpg'), description: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie.", remainingItem: "50" }
];

export default function Food() {
    return (
        <div className='food-items'>
            {foodItems.map((item) => {
             return <div className="food-item">
                <img src={item.image} className="item-image" alt="item-image" />
                <div className="food-item-details">
                    <h3 className="food-item-title">{item.name}</h3>
                    <p className="food-item-description">{item.description}</p>
                    <p className="remaning-items">{item.remainingItem}</p>
                </div>
            </div>
            })}
        </div>
    )
}