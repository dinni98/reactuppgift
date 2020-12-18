import React, { useEffect, useState } from 'react'

export const HomeView = () => {

    useEffect(() => {
        alert("You just entered pepe's home.")
        return () => {
            alert("Do you really want to leave pepe's home?")
        }
    })

    return (
        <div>
            <h1>Welcome to pepe's home.</h1>
        </div>
    )
}