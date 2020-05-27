const fs = require("fs");
const { promises: fsPromises } = fs;
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
  await fs.readFile(
    contactsPath,
    {
      encoding: "utf-8",
    },
    (err, data) => {
      try {
        const parsedData = JSON.parse(data);
        console.table(parsedData);
      } catch (err) {
        console.log("err", err);
      }
    }
  );
}

async function getContactById(id) {
  await fs.readFile(contactsPath, { encoding: "utf-8" }, (err, data) => {
    try {
      const parsedData = JSON.parse(data);
      const getById = parsedData.find((elem) => {
        if (elem.id === id) console.log("elem.id", id);
      });
    } catch (err) {
      console.log("err", err);
    }
  });
}

async function removeContact(id) {
  await fs.readFile(contactsPath, { encoding: "utf-8" }, (err, data) => {
    try {
      const parsedData = JSON.parse(data);

      const deleteContact = parsedData.filter((item) => item.id !== id);
      console.log("Contact was removed:", deleteContact);
      return deleteContact;
    } catch (error) {
      console.log(" error:", err);
    }
  });
}
async function addContact(name, email, phone) {
  await fs.readFile(contactsPath, { encoding: "utf-8" }, (err, data) => {
    try {
      const parsedData = JSON.parse(data);
      newContact = { name, email, phone };
      addContactData = [...parsedData, newContact];
      fs.writeFile(contactsPath, JSON.stringify(addContactData), () => {
        console.log("Contact was added", newContact);
      });
    } catch (error) {
      console.log(" error:", err);
    }
  });
}
 
module.exports={
    listContacts,
    addContact,
    removeContact,
    getContactById
}