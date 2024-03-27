$("#startButton").click(async (e) => {
    const promptId = $("#random-prompt-id").text();
    const participantName = $("#participantName").val()
    window.location.replace(`/helpcenter?pid=${btoa(promptId)}&participantName=${participantName}`);
});
