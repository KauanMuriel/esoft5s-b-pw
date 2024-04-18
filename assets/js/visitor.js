function updateLocalStorageWithVisitorData() {
    const currentDate = new Date();
    let currentVisitorData = localStorage.getItem("visitorData");
    let currentVisitorDataJson;

    if (currentVisitorData !== 'null') {
        currentVisitorDataJson = JSON.parse(currentVisitorData);
        currentVisitorDataJson.lastVisit = currentDate;
        currentVisitorDataJson.count++;
    } else {
        currentVisitorDataJson = { count: 1, lastVisit: currentDate };
    }
    currentVisitorData = JSON.stringify(currentVisitorDataJson);
    localStorage.setItem("visitorData", currentVisitorData);
    return currentVisitorData;
}

function insertVisitorDataOnFooter(visitorData) {
    const paragraphElement = document.createElement('p');
    const footerElement = document.querySelector('footer');
    paragraphElement.textContent = createVisitorDataText(visitorData);
    footerElement.appendChild(paragraphElement);
}

function createVisitorDataText(visitorData) {
    const visitorDataObject = JSON.parse(visitorData);
    const lastVisitRaw = new Date(visitorDataObject.lastVisit);
    const lastVisitFormated = formatDate(lastVisitRaw);
    return `Esta página foi visitada ${visitorDataObject.count} vezes.
    A última visita foi: ${lastVisitFormated}.`;
}

function formatDate(date) {
    return Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
    }).format(date);
}

export { updateLocalStorageWithVisitorData, insertVisitorDataOnFooter };