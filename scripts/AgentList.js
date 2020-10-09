import { agent } from "./Agent.js"
import { useBusinesses } from "./BusinessProvider.js"

export const AgentList = () => {

    const contentElement = document.querySelector(".agents");
    let agentHTML = "";

    const agentList = useBusinesses().map( busObj => {
        const name = busObj.purchasingAgent.nameFirst + " " + busObj.purchasingAgent.nameLast;
        return { fullName: name, company: busObj.companyName, phoneNumber: busObj.phoneWork };
    })

    agentList.forEach( agentObj =>{
        agentHTML += agent(agentObj)
    })

    contentElement.innerHTML += `<h1>Purchasing Agents</h1>
    ${agentHTML}`;
}