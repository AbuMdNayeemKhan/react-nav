import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$29.99",
          "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Limited group fitness classes",
            "Locker room access",
            "Dedicated changing area",
            "Water fountain access",
            "Member discounts at gym store"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": "$49.99",
          "features": [
            "Full access to all equipment and facilities",
            "Unlimited group fitness classes",
            "Access to sauna and steam room",
            "Discounts on personal training sessions",
            "Access to swimming pool",
            "Free WiFi access",
            "Nutritional consultation"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": "$79.99",
          "features": [
            "All features of Standard Membership",
            "Access to exclusive premium equipment",
            "Complimentary towel service",
            "Priority booking for group fitness classes",
            "Discounts on gym merchandise",
            "Personalized workout plan",
            "Access to on-site massage therapist"
          ]
        }
    ]
    return (
        <div>
            <h2 className="text-2xl">Best Prices in the town</h2>
            <div className="grid grid-cols-3">
                {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;