import { Audio } from 'expo-av';
import { PlaybackSource } from 'expo-av/build/AV';
import { useEffect, useRef, useState } from 'react';

interface State {
  isPlaying: Boolean
  isLoading: Boolean
  error: string
}

const initialState: State = {
  isPlaying: false,
  isLoading: true,
  error: null,
}

export interface UseSoundPlayback extends State {
  play: () => void
  stop: () => void
  pause: () => void
}

const useSoundPlayback = (songPath: PlaybackSource): UseSoundPlayback => {
  const sound = useRef<Audio.Sound>(null)
  const [state, setState] = useState<State>(initialState)

  const loadSong = async () => {
    try {
      const { sound: soundObject } = await Audio.Sound.createAsync(songPath, {
        shouldPlay: false,
        isLooping: true,
      })
      sound.current = soundObject
      setState({ isLoading: false, isPlaying: false, error: null })
    } catch (error) {
      setErrorState(error)
    }
  }

  useEffect(() => {
    loadSong()
    return () => {
      sound.current && sound.current.unloadAsync()
    }
  }, [])

  const setErrorState = (error: string) => {
    setState({ isLoading: false, isPlaying: false, error })
  }

  const play = async () => {
    try {
      sound.current && (await sound.current.playAsync())
      setState({ isLoading: false, isPlaying: true, error: null })
    } catch (error) {
      setErrorState(error)
    }
  }

  const pause = async () => {
    try {
      sound.current && (await sound.current.pauseAsync())
      setState({ isLoading: false, isPlaying: false, error: null })
    } catch (error) {
      setErrorState(error)
    }
  }

  const stop = async () => {
    try {
      sound.current && (await sound.current.stopAsync())
      setState({ isLoading: false, isPlaying: false, error: null })
    } catch (error) {
      setErrorState(error)
    }
  }

  return {
    ...state,
    play,
    pause,
    stop,
  }
}

export default useSoundPlayback
