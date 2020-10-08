export const Business = (busObj) => {
    return `<h2>${busObj.companyName}</h2>
    <p class="addressStreet">${busObj.addressFullStreet}</p>
    <p class="addressCityState">${busObj.addressCity}, ${busObj.addressStateCode} ${busObj.addressZipCode}</p>
    <hr>`
}