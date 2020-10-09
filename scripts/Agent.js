export const agent = (agentObj) => {
    return `<div class="agent">
        <p>${agentObj.fullName}</p>
        <p>${agentObj.company}</p>
        <p>${agentObj.phoneNumber}</p>
        <hr>
    </div>`
}