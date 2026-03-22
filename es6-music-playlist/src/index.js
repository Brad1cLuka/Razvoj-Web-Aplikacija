import { getSongs, addSong } from "./services/api.js"
import { renderSongs } from "./ui/renderSongs.js"
import { createSearchStream } from "./rx/streams.js"

async function init() {

  const songs = await getSongs()

  renderSongs(songs)

  createSearchStream(renderSongs)

}

init()

const addButton = document.getElementById("addSong")

addButton.addEventListener("click", async () => {

  const title = document.getElementById("title").value
  const artist = document.getElementById("artist").value
  const genre = document.getElementById("genre").value
  const duration = document.getElementById("duration").value

  const newSong = {
    title,
    artist,
    genre,
    duration: Number(duration)
  }

  await addSong(newSong)

  location.reload()

})