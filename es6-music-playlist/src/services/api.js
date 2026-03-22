const API_URL = "http://localhost:3000/songs"

export const getSongs=async() => {
    const response = await fetch(API_URL)
    return response.json()
}

export const addSong=async (song) =>{
    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(song)
    })
}

export const deleteSong = async (id) => {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
}