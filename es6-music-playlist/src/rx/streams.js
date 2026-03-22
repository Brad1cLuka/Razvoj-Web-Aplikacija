import { fromEvent, merge, zip } from "rxjs"
import { map, debounceTime, switchMap, take, takeUntil } from "rxjs/operators"

import { getSongs } from "../services/api.js"
import { renderSongs } from "../ui/renderSongs.js"

export const createSearchStream = (renderSongs) => {

  const searchInput = document.getElementById("search")

  fromEvent(searchInput, "keyup")
    .pipe(
      debounceTime(300),

      map(event => event.target.value.toLowerCase()),

      switchMap(async (searchValue) => {

        const songs = await getSongs()

        return songs.filter(song =>
          song.title.toLowerCase().includes(searchValue)
        )

      })
    )
    .subscribe(filteredSongs => {

      renderSongs(filteredSongs)

    })

}

export const createAddSongStream = (addSongHandler) => {

    const button = document.getElementById("addSong")
    const titleInput = document.getElementById("title")

    const click$ = fromEvent(button, "click")
    const enter$ = fromEvent(titleInput, "keyup")

    marge(click$, enter$).subscribe(event => {
        
        if(event.type === "click" || event.key === "Enter") {
            addSongHanlder()
        }
    })
}

export const logFirstSearch = () => {
    
    const searchInput = document.getElementById("search")

    fromEvent(searchInput, "keyup")
        .pipe(take(1))
        .subscribe(() => {
            console.log("User started searching")
        })
}


export const createCancelableSearch = (renderSongs) => {

    const searchInput = document.getElementById("search")
    const stopButton = document.getElementById("stopSearch")

    const stop$ = fromEvent(stopButton, "click")

    fromEvent(searchInput, "keyup")
        .pipe(
            takeUntil(stop$)
        )
        .subscribe(()=>{
            console.log("Searching...")
        })
}

export const zipExample = () => {

    const searchInput = document.getElementById("search")
    const addButton = document.getElementById("addSong")

    zip(
        fromEvent(searchInput, "keyup"),
        fromEvent(addButton, "click")
    ).subscribe(()=> {
        console.log("Search + Add event happened")
    })
}