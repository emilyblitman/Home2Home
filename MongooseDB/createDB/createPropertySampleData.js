db = db.getSiblingDB('propertySample')
db.createCollection('properties')
propertiesCollection = db.getCollection("properties")
propertiesCollection.remove({})
propertiesCollection.insert(
	{
		propertyId: 123,
		propertyName: "Ryans House",
		description: "Seattle House",
		bedrooms: 3,
		bathrooms: 3,
		sqFeet: 3000,
		address: "123 abc ave",
		averageRating: 5
}
)
propertiesCollection.insert(
	{
		propertyId: 345,
		propertyName: "Jeffs House",
		description: "Seattle House",
		bedrooms: 2,
		bathrooms: 5,
		sqFeet: 2000,
		address: "321 cbd ave",
		averageRating: 3
}
)


db.createCollection('reviews')
reviewsCollection = db.getCollection("reviews")
reviewsCollection.remove({})
reviewsCollection.insert(
	{
		reveiwerId: 111,
		proeprtyId: 123,
		comment: "very nice",
		ratting: 5,
	}
)
reviewsCollection.insert(
	{
		reveiwerId: 222,
		proeprtyId: 345,
		comment: "house",
		ratting: 3,
	}
)

db.createCollection('users')
reviewsCollection = db.getCollection("users")
reviewsCollection.remove({})
reviewsCollection.insert(
	{
		userId: 111,
		fName: "Jeff",
		lName: "Smith",
		password: "pa$$word",
		email: "abc@123.com",
		phoneNumber: "5555555",
		locationPreferences: ["Seattle","London"],
		datePreferences: ['2021-5-5'],
		properties: [345],
	}
)
reviewsCollection.insert(
	{
		userId: 222,
		fName: "Ryan",
		lName: "Smith",
		password: "pa$$word",
		email: "123@abc.com",
		phoneNumber: "5555555",
		locationPreferences: ["Madrid"],
		datePreferences: ['2021-5-5'],
		properties: [123],
	}
)

