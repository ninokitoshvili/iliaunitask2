const dataAraay = [
	{
		userId: 1,
		userName: "სახელი 1",
		userLastName: "გვარი 1",
		userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
		userAge: 20,
		userAddresses: ["address 1", "address 2", "address 3"],
	},
	{
		userId: 2,
		userName: "სახელი 2",
		userLastName: "გვარი 2",
		userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
		userAge: 30,
		userAddresses: ["address 1", "address 2", "address 3"],
	},
	{
		userId: 3,
		userName: "სახელი 3",
		userLastName: "გვარი 3",
		userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
		userAge: 35,
		userAddresses: ["address 1", "address 2", "address 3"],
	},
	{
		userId: 4,
		userName: "სახელი 4",
		userLastName: "გვარი 4",
		userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
		userAge: 29,
		userAddresses: ["address 1", "address 2", "address 3"],
	},
	{
		userId: 5,
		userName: "სახელი 5",
		userLastName: "გვარი 5",
		userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
		userAge: 49,
		userAddresses: ["address 1", "address 2", "address 3"],
	},
	{
		userId: 6,
		userName: "სახელი 6",
		userLastName: "გვარი 6",
		userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
		userAge: 31,
		userAddresses: ["address 1", "address 2", "address 3"],
	},
	{
		userId: 7,
		userName: "სახელი 7",
		userLastName: "გვარი 7",
		userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
		userAge: 31,
		userAddresses: ["address 1", "address 2", "address 3"],
	},
];

const pagebody = document.getElementById("body");
for (let i = 0; i < dataAraay.length; i++) {
	console.log(i);
	console.log(dataAraay[i].userId);
	const maincontainer = document.createElement("div");
	const itemsContainer = document.createElement("div");
	const item = document.createElement("div");
	const itemIdContainer = document.createElement("div");
	const itemImgContainer = document.createElement("div");
	const itemInfo = document.createElement("div");
	const img = document.createElement("img");
	const h2 = document.createElement("h2");
	const h3 = document.createElement("h3");
	const h4 = document.createElement("h4");
	const h5 = document.createElement("h5");

	itemsContainer.className = "items_container";
	item.className = "item";
	itemIdContainer.className = "item_id_container";
	itemImgContainer.className = "item_img_container";
	itemInfo.className = "item_info";
	img.src = dataAraay[i].userImage;

	const IDinformation = document.createTextNode(dataAraay[i].userId);
	const h2info = document.createTextNode(dataAraay[i].userName);
	const h3info = document.createTextNode(dataAraay[i].userLastName);
	const h4info = document.createTextNode(dataAraay[i].userAge + " : years old");
	const h5info = document.createTextNode(
		"address : " +
			dataAraay[i].userAddresses[0] +
			dataAraay[i].userAddresses[1] +
			dataAraay[i].userAddresses[2]
	);

	item.appendChild(itemIdContainer);
	itemIdContainer.appendChild(IDinformation);
	item.appendChild(itemImgContainer);
	itemImgContainer.appendChild(img);
	item.appendChild(itemInfo);
	itemInfo.appendChild(h2);
	h2.appendChild(h2info);
	itemInfo.appendChild(h3);
	h3.appendChild(h3info);
	itemInfo.appendChild(h4);
	h4.appendChild(h4info);
	itemInfo.appendChild(h5);
	h5.appendChild(h5info);
	itemsContainer.appendChild(item);
	maincontainer.appendChild(itemsContainer);
	pagebody.appendChild(maincontainer);

	item.onclick = () => {
		console.log(i);
		item.classList.add("hover");
	};
}
console.log("asdas");
