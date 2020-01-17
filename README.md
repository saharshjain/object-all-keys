# Object All Values

It solved my problems, hope it helps you too. It fetches the values from a nested object for a mentioned key.

### Installing

```
npm i object-all-values --save
```

### How to use?

1. Require the module.
2. Create a new object.
3. Call the fetchAllValues function and pass nested JSON and search key as arguments.
4. Return an array of all found values.

```
var fetchObjectValues = require("object-all-values");


var json = {
	"id": "0001",
	"type": "donut",
	"name": "Cake",
	"ppu": 0.55,
	"batters":
		{
			"batter":
				[
					{ "id": "1001", "type": "Regular" },
					{ "id": "1002", "type": "Chocolate" },
					{ "id": "1003", "type": "Blueberry" },
					{ "id": "1004", "type": "Devil's Food" }
				]
		},
	"topping":
		[
			{ "id": "5001", "type": "None" },
			{ "id": "5002", "type": "Glazed" },
			{ "id": "5005", "type": "Sugar" },
			{ "id": "5007", "type": "Powdered Sugar" },
			{ "id": "5006", "type": "Chocolate with Sprinkles" },
			{ "id": "5003", "type": "Chocolate" },
			{ "id": "5004", "type": "Maple" }
		]
};
var finder = new fetchObjectValues.util();
console.log(finder.fetchAllValues(json,"id"));

//Output
//[ '1001',
//  '1002',
//  '1003',
//  '1004',
//  '5001',
//  '5002',
//  '5005',
//  '5007',
//  '5006',
//  '5003',
//  '5004',
//  '0001' ]

```
