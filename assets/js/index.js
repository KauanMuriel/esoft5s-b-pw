import { updateLocalStorageWithVisitorData, insertVisitorDataOnFooter } from "./visitor.js";

window.onload = () => {
    const visitorData = updateLocalStorageWithVisitorData();
    insertVisitorDataOnFooter(visitorData);
}