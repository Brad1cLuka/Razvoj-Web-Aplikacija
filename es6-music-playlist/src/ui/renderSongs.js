export const renderSongs = (songs) => {
    const list = document.getElementById("songList")
    list.innerHTML = ""

    // ukloni stari stats ako postoji
    const oldStats = document.getElementById("totalDuration")
    if (oldStats) oldStats.remove()

    songs.forEach(song => {
        const li = document.createElement("li")
        li.textContent = `${song.title} - ${song.artist}`

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        deleteBtn.onclick = async () => {
            await deleteSong(song.id)
            location.reload()
        }

        li.appendChild(deleteBtn)
        list.appendChild(li)
    })

    const totalDuration = songs.reduce((sum, song) => sum + song.duration, 0)

    const stats = document.createElement("p")
    stats.id = "totalDuration" // bitno!
    stats.textContent = `Total playlist duration: ${totalDuration} seconds`

    list.before(stats)
}