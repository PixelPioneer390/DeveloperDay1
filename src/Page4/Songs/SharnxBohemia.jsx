"use client"

import { useState, useRef, useEffect } from "react"
import { Pause, Play, SkipBack, SkipForward, Rewind, FastForward, X } from "lucide-react"

export default function SharnxBohemia() {
  const [showPlayer, setShowPlayer] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef(null)
  const playerRef = useRef(null)

  // Format time in MM:SS
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  // Handle play button click
  const handlePlayNow = () => {
    setShowPlayer(true)
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }, 100)
  }

  // Handle close
  const handleClose = () => {
    setShowPlayer(false)
    setIsPlaying(false)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }

  // Handle play/pause
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (playerRef.current && !playerRef.current.contains(event.target) && showPlayer) {
        handleClose()
      }
    }

    if (showPlayer) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showPlayer])

  // Handle audio events
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const handleEnded = () => setIsPlaying(false)

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [])

  // Handle progress bar click
  const handleProgressClick = (e) => {
    if (audioRef.current && duration) {
      const rect = e.currentTarget.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const newTime = (clickX / rect.width) * duration
      audioRef.current.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  // Skip functions
  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 10, duration)
    }
  }

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 10, 0)
    }
  }

  const restart = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
    }
  }

  return (
    <div className="relative">
      {/* Play Now Button */}
      <button
        onClick={handlePlayNow}
        className="border-2 border-red-600 text-red-600 hover:cursor-pointer px-4 py-2 rounded flex items-center text-sm font-semibold hover:bg-red-50 transition"
      >
        PLAY NOW <Play className="ml-2 h-4 w-4 font-bold" />
      </button>

      {/* Audio Element */}
      <audio ref={audioRef} src="/SharnxBohemia.mp3" />

      {/* Music Player Popup */}
      {showPlayer && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div ref={playerRef} className="bg-black rounded-3xl p-8 w-full max-w-sm mx-4 relative">
            {/* Close Button */}
            <button onClick={handleClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X size={20} />
            </button>

            <div className="flex flex-col items-center">
              {/* Album Art */}
              <div className="rounded-2xl   w-48 h-48 flex items-center justify-center mb-6">
               <img src="/SharnxBohemia.jpg" alt="" />
              </div>

              {/* Song Info */}
              <h2 className="text-white text-xl font-medium">Sharn X Bohemia</h2>
              <p className="text-gray-400 text-sm mb-6">Mi Amor Mashup</p>

              {/* Waveform Visualization */}
              <div className="w-full h-10 mb-4 flex items-center justify-between">
                {Array.from({ length: 40 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 bg-blue-500"
                    style={{
                      height: `${Math.random() * 24 + 4}px`,
                      opacity: duration > 0 && i / 40 < currentTime / duration ? 1 : 0.3,
                    }}
                  ></div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="w-full mb-4">
                <div
                  className="relative w-full h-1 bg-gray-700 rounded-full cursor-pointer"
                  onClick={handleProgressClick}
                >
                  <div
                    className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                    style={{ width: duration > 0 ? `${(currentTime / duration) * 100}%` : "0%" }}
                  >
                    <div className="absolute -right-2 -top-1.5 w-4 h-4 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-400">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between w-full mt-2">
                <button className="text-gray-400 hover:text-white" onClick={restart}>
                  <Rewind size={20} />
                </button>
                <button className="text-gray-400 hover:text-white" onClick={skipBackward}>
                  <SkipBack size={24} />
                </button>
                <button
                  className="bg-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition"
                  onClick={togglePlayPause}
                >
                  {isPlaying ? (
                    <Pause size={24} className="text-black" />
                  ) : (
                    <Play size={24} className="text-black ml-1" />
                  )}
                </button>
                <button className="text-gray-400 hover:text-white" onClick={skipForward}>
                  <SkipForward size={24} />
                </button>
                <button className="text-gray-400 hover:text-white" onClick={skipForward}>
                  <FastForward size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
