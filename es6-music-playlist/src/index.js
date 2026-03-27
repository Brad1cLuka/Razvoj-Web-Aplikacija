import { getSongs, addSong, updateSong } from "./services/api.js"
import { renderSongs } from "./ui/renderSongs.js"
import { createSearchStream } from "./rx/streams.js"
import { getPlaylists } from "./services/api.js"

let activePlaylistId = null

async function loadPlaylists() {
  const playlists = await getPlaylists()

  const select = document.getElementById("playlistSelect")
  select.innerHTML = ""

  playlists.forEach(p => {
    const option = document.createElement("option")
    option.value = p.id
    option.textContent = p.name
    select.appendChild(option)
  })

  if (playlists.length > 0) {
  activePlaylistId = Number(playlists[0].id)
  select.value = activePlaylistId
}

  const songs = await getSongs()
  const filtered = songs.filter(
    s => s.playlistId === activePlaylistId
  )

  renderSongs(filtered)

  select.addEventListener("change", async () => {
    activePlaylistId = Number(select.value)

    const songs = await getSongs()

    const filtered = songs.filter(
      s => s.playlistId === activePlaylistId
    )

    renderSongs(filtered)
  })
}

async function init() {
  await loadPlaylists()

  createSearchStream(renderSongs, () => activePlaylistId)
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
    duration: Number(duration),
    playlistId: activePlaylistId,
    favorite: false
  }

  const editId = localStorage.getItem("editId")

  if (editId) {
      await updateSong(editId, newSong)
      localStorage.removeItem("editId")
  } else {
      await addSong(newSong)
  }

  document.getElementById("title").value= ""
  document.getElementById("artist").value= ""
  document.getElementById("genre").value= ""
  document.getElementById("duration").value= ""

  addButton.textContent = "Add Song"


  location.reload()
})

const genreFilter = document.getElementById("genreFilter")

genreFilter.addEventListener("change", async () => {
  const songs = await getSongs()
  const selected = genreFilter.value

  let filtered = songs.filter(
    s => s.playlistId === activePlaylistId
  )

  if (selected !== "all") {
    filtered = filtered.filter(
      song => song.genre === selected
    )
  }

  renderSongs(filtered)
})