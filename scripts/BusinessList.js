import { Business }  from "./Business.js";
import { useBusinesses } from "./BusinessProvider.js";

export const ListBusiness = () => {
    const businessList = useBusinesses();
    const contentElement = document.querySelector("body");
    let businessHTML = "";

    businessList.forEach( busObj => {
        businessHTML += Business(busObj);
    })

    contentElement.innerHTML = `<h1>Active Businesses</h1>
        ${businessHTML}`
}