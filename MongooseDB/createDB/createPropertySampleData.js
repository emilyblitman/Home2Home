db = db.getSiblingDB('propertySample')
db.createCollection('properties')
listsCollection = db.getCollection("properties")
listsCollection.remove({})
listsCollection.insert(
{
		propertyName: "Ryans House",
		description: "Seattle House",
		bedrooms: 3,
		bathrooms: 3,
		sqFeet: 3000,
		address: "123 abc ave",
		averageRating: 5
}
)
listsCollection.insert(
{
		propertyName: "Jeffs House",
		description: "Seattle House",
		bedrooms: 2,
		bathrooms: 5,
		sqFeet: 2000,
		address: "321 cbd ave",
		averageRating: 3
}
)

