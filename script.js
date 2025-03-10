document.addEventListener("DOMContentLoaded", function () {
    // Modo oscuro
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
    });

    // Videos recientes de YouTube
    const videoContainer = document.getElementById("video-container");

    const channels = [
        { name: "Videojuegos (Apricot634)", id: "UCXR8YBTR1ruWj4RYXr_gUpw" },
        { name: "Comedia (HJosexxx)", id: "UCXR8YBTR1ruWj4RYXr_gUpw" },
        { name: "Música (J King)", id: "UCXR8YBTR1ruWj4RYXr_gUpw" },
        { name: "ARK (HJ-ark)", id: "UCXR8YBTR1ruWj4RYXr_gUpw" }
    ];

    channels.forEach(channel => {
        fetch(`https://www.googleapis.com/youtube/v3/search?key=TU_API_KEY&type=video&part=snippet&channelId=${channel.id}&order=date&maxResults=1`)
            .then(response => response.json())
            .then(data => {
                if (data.items.length > 0) {
                    const videoId = data.items[0].id.videoId;
                    videoContainer.innerHTML += `
                        <div class="video-card">
                            <h3>${channel.name}</h3>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                        </div>
                    `;
                }
            })
            .catch(error => console.error("Error al cargar videos:", error));
    });
});