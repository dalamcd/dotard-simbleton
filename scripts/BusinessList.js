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

const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */

            const foundBusiness = useBusinesses().find(busObj => {
                if(busObj.companyName.includes(keyPressEvent.target.value)) {
                    return busObj;
                }
            })

            if(foundBusiness) {
                companySearchResultArticle.innerHTML = `
                    <h2>
                    ${foundBusiness.companyName}
                    </h2>
                    <section>
                    ${foundBusiness.addressFullStreet}

                    </section>
                    <section>
                    ${foundBusiness.addressCity},
                    ${foundBusiness.addressStateCode}
                    ${foundBusiness.addressZipCode}
                    </section>
                `;
            } else {
                companySearchResultArticle.innerHTML = `<h2>Business not found</h2>`
            }
        }
    });