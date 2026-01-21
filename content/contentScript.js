function onAccepted() {
    console.log("Solution Accepted!");
}

const observer = new MutationObserver(() => {
    const resultNode = document.querySelector('[data-e2e-locator="submission-result"]');

    if(resultNode && resultNode.innerHTML.includes("Accepted")) {
        observer.disconnect();
        onAccepted();
    }
});

observer.observe(document.body, {
    childList : true,
    subtree : true
});