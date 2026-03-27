import { deleteSong, updateSong } from "../services/api.js"

export const renderSongs = (songs) => {

  const list = document.getElementById("songList")
  list.innerHTML = ""

  const oldStats = document.getElementById("totalDuration")
  if (oldStats) oldStats.remove()

  songs.forEach(song => {

    const li = document.createElement("li")

    const text = document.createElement("span")
    text.textContent = `${song.title} - ${song.artist}`

    li.appendChild(text)

    const favBtn = document.createElement("button")
    favBtn.textContent = song.favorite ? "★" : "☆"

    favBtn.onclick = async () => {

      await updateSong(song.id, {
        ...song,
        favorite: !song.favorite
      })

      location.reload()

    }

    li.appendChild(favBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"

    deleteBtn.onclick = async () => {

      await deleteSong(song.id)

      location.reload()

    }

    li.appendChild(deleteBtn)

    const editBtn = document.createElement("button")
    editBtn.textContent = "Edit"

    editBtn.onclick = () => {
      document.getElementById("title").value = song.title
      document.getElementById("artist").value = song.artist
      document.getElementById("genre").value = song.genre
      document.getElementById("duration").value = song.duration
      localStorage.setItem("editId", song.id)
      const addButton = document.getElementById("addSong")
      addButton.textContent= "Update Song"
    }
    li.appendChild(editBtn)
    list.appendChild(li)

  })

  const totalDuration = songs.reduce(
    (sum, song) => sum + song.duration,
    0
  )

  const stats = document.createElement("p")
  stats.id = "totalDuration"
  stats.textContent = `Total playlist duration: ${totalDuration} seconds`

  list.before(stats)

}