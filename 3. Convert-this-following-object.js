//sorry i cant solve this

const obj = {
  "address.street": "jalan sakura",
  "address.provice": "banten",
  "address.city": "tangerang",
  "person.name": "john",
  "person.email": "john@doe.com",
  userType: "admin",
  accessLevel: "QA",
};

function converObj(input) {
  for (const prop in input) {
    let newObj = new Object();
    const keyData = prop.split(".");

    // if (keyData.length > 1) {
    // }
    newObj.keyData[0] = "aku";
    console.log(newObj);
  }
}

converObj(obj);
