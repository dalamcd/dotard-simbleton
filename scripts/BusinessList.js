import { Business }  from "./Business.js";
import { useBusinesses } from "./BusinessProvider.js";

export const ListBusiness = () => {
    const businessList = useBusinesses();
    let contentElement = document.querySelector(".businessList");
    let businessHTML = "";

    const NYBusinesses = businessList.filter(business => {
        if(business.addressStateCode === "NY") {
            return true;
        }
        return false;
    })

    const manuBusinesses = businessList.filter(business => {
        if(business.companyIndustry === "Manufacturing" ) {
            return true;
        }
        return false;
    })

    businessList.forEach( busObj => {
        businessHTML += Business(busObj);
    })

    contentElement.innerHTML = `<h1>Active Businesses</h1>
        ${businessHTML}`

    contentElement = document.querySelector(".businessList--newYork");
    businessHTML = "";

    NYBusinesses.forEach( busObj => {
        businessHTML += Business(busObj);
    })

    contentElement.innerHTML = `<h1>New York Businesses</h1>
        ${businessHTML}`
        
    contentElement = document.querySelector(".businessList--manufacturing");
    businessHTML = ""

    manuBusinesses.forEach( busObj => {
        businessHTML += Business(busObj);
    })

    contentElement.innerHTML = `<h1>Manufacturing Businesses</h1>
        ${businessHTML}`
}