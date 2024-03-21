$("#startButton").click(async (e) => {
    const promptId = $("#random-prompt-id").text();
    window.location.replace(`/helpcenter?pid=${btoa(promptId)}`);
});
