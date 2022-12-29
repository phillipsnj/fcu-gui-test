import { defineStore } from "pinia"
/*import io from "socket.io-client"

const host = window.location.hostname
const port = "5552"

const socket = io(`http://${host}:${port}`)

socket.on("connect", () => {
    console.log(`Socket Connect`)
    //socket.emit('QUERY_ALL_NODES')
})*/

export const useCbusStore = defineStore("CbusStore", {
    state: () => ({
            title : "WebFCU GUI Development",
            version : "0.0.2",
            connected : false
        })
})

