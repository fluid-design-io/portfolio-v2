'use client'

import { usePathname } from 'next/navigation'
import React, { useEffect, useRef } from 'react'

// Video timing constants
const VIDEO_CONSTANTS = {
    FPS: 24,
    FRAME_DURATION: 1 / 24 / 10,
    FOREGROUND_TIME: 6.5,    // Time when foreground content appears
    TRANSITION_TIME: 6.5,    // Time for route transition animations
    END_TIME: 16,         // Final frame of the video
} as const

function BackgroundVideo() {
    const pathname = usePathname()
    const videoRef = useRef<HTMLVideoElement>(null)
    const initialPlayDoneRef = useRef(false)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return
        let reverseAnimationFrame: number

        const playInReverse = () => {
            if (!video) return;
            
            const nextTime = video.currentTime - VIDEO_CONSTANTS.FRAME_DURATION;
        
            if (nextTime > VIDEO_CONSTANTS.FOREGROUND_TIME) {
                video.currentTime = nextTime;
                reverseAnimationFrame = requestAnimationFrame(playInReverse);
            } else {
                video.currentTime = VIDEO_CONSTANTS.FOREGROUND_TIME;
                video.pause();
            }
        };

        // Start playing when route changes (if initial animation is done)
        if (initialPlayDoneRef.current) {
            if (pathname === '/' && video.currentTime > VIDEO_CONSTANTS.TRANSITION_TIME) {
                playInReverse()
            } else {
                video.play()
            }
        }

        const handleTimeUpdate = () => {
            if (!initialPlayDoneRef.current && video.currentTime >= VIDEO_CONSTANTS.FOREGROUND_TIME) {
                initialPlayDoneRef.current = true
                video.pause()
            }

            if (initialPlayDoneRef.current) {
                if (pathname === '/') {
                    if (video.currentTime > VIDEO_CONSTANTS.TRANSITION_TIME) {
                        cancelAnimationFrame(reverseAnimationFrame)
                        playInReverse()
                    }
                } else {
                    if (video.currentTime < VIDEO_CONSTANTS.TRANSITION_TIME) {
                        video.currentTime = VIDEO_CONSTANTS.TRANSITION_TIME
                        video.play()
                    } else if (video.currentTime >= VIDEO_CONSTANTS.END_TIME) {
                        video.pause()
                    }
                }
            }
        }

        video.addEventListener('timeupdate', handleTimeUpdate)
        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate)
            cancelAnimationFrame(reverseAnimationFrame)
        }
    }, [pathname])

    return (
        <video
            ref={videoRef}
            src="https://utfs.io/f/WKXGgxQVQnWkA0WCYFsuPTbE04ZksNL3ci6rFQoICadqUXen"
            autoPlay
            muted
            playsInline
        />
    )
}

export default BackgroundVideo