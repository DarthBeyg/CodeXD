"use client"

import { useState, useEffect, useRef } from 'react'
import { PlusCircle, Play, Pause, StopCircle, Edit2, Bell, BellOff } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface Activity {
  id: number
  name: string
  time: number
  isRunning: boolean
  color: string
  alertEnabled: boolean
  alertTime: number
  lastUpdate: number
}

interface categoryColors {
  [key: string]: string;
  Entertainment: string;
  Learning: string;
  Working: string;
  "Social Media": string;
  default: string;
}

const categoryColors: { [key: string]: string } = {
  "Entertainment": "from-pink-400 to-red-400",
  "Learning": "from-blue-400 to-indigo-400",
  "Working": "from-green-400 to-teal-400",
  "Social Media": "from-yellow-400 to-orange-400",
  "default": "from-purple-400 to-pink-400"
}

export default function TimeTracker() {
  const [activities, setActivities] = useState<Activity[]>([
    { id: 1, name: "Entertainment", time: 0, isRunning: false, color: categoryColors["Entertainment"], alertEnabled: false, alertTime: 15 * 60, lastUpdate: 0 },
    { id: 2, name: "Learning", time: 0, isRunning: false, color: categoryColors["Learning"], alertEnabled: false, alertTime: 15 * 60, lastUpdate: 0 },
    { id: 3, name: "Working", time: 0, isRunning: false, color: categoryColors["Working"], alertEnabled: false, alertTime: 15 * 60, lastUpdate: 0 },
    { id: 4, name: "Social Media", time: 0, isRunning: false, color: categoryColors["Social Media"], alertEnabled: false, alertTime: 15 * 60, lastUpdate: 0 },
  ])

  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const updateTimers = (timestamp: number) => {
      setActivities(prevActivities =>
        prevActivities.map(activity => {
          if (activity.isRunning) {
            const elapsed = timestamp - activity.lastUpdate
            const newTime = activity.time + elapsed / 1000

            if (activity.alertEnabled && newTime >= activity.alertTime) {
              toast.info(`Alert: You've been ${activity.name} for ${formatTime(activity.alertTime)}!`)
              return { ...activity, time: newTime, alertEnabled: false, lastUpdate: timestamp }
            }

            return { ...activity, time: newTime, lastUpdate: timestamp }
          }
          return activity
        })
      )

      animationFrameRef.current = requestAnimationFrame(updateTimers)
    }

    animationFrameRef.current = requestAnimationFrame(updateTimers)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  const toggleTimer = (id: number) => {
    const now = performance.now()
    setActivities(prevActivities =>
      prevActivities.map(activity => {
        if (activity.id === id) {
          if (!activity.isRunning) {
            // Starting the timer
            return { ...activity, isRunning: true, lastUpdate: now }
          } else {
            // Stopping the timer
            return { ...activity, isRunning: false }
          }
        } else if (activity.isRunning) {
          // Pause any other running timers
          return { ...activity, isRunning: false }
        }
        return activity
      })
    )
  }

  const resetTimer = (id: number) => {
    setActivities(prevActivities =>
      prevActivities.map(activity =>
        activity.id === id ? { ...activity, time: 0, isRunning: false, lastUpdate: 0 } : activity
      )
    )
  }

  const renameActivity = (id: number, newName: string) => {
    setActivities(prevActivities =>
      prevActivities.map(activity =>
        activity.id === id ? { 
          ...activity, 
          name: newName, 
          color: (newName in categoryColors) ? categoryColors[newName] : categoryColors.default 
        } : activity
      )
    )
  }

  const addNewActivity = () => {
    const newId = Math.max(...activities.map(a => a.id)) + 1
    setActivities([...activities, { id: newId, name: "New Activity", time: 0, isRunning: false, color: categoryColors.default, alertEnabled: false, alertTime: 15 * 60, lastUpdate: 0 }])
  }

  const toggleAlert = (id: number) => {
    setActivities(prevActivities =>
      prevActivities.map(activity =>
        activity.id === id ? { ...activity, alertEnabled: !activity.alertEnabled } : activity
      )
    )
  }

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-8">
        <style jsx global>{`
          @keyframes subtle-shake {
            0% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(1px, 1px) rotate(0.5deg); }
            50% { transform: translate(0, -1px) rotate(-0.5deg); }
            75% { transform: translate(-1px, 0) rotate(0.5deg); }
            100% { transform: translate(0, 0) rotate(0deg); }
          }
          .shake-animation {
            animation: subtle-shake 0.5s infinite;
          }
        `}</style>
        <h1 className="text-4xl font-bold text-white text-center mb-8">Activity Time Tracker</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activities.map(activity => (
            <Card 
              key={activity.id} 
              className={`bg-gradient-to-br ${activity.color} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${activity.isRunning ? 'shake-animation' : ''}`}
            >
              <CardHeader className="pb-2">
                <CardTitle className="flex justify-between items-center">
                  <Input
                    value={activity.name}
                    onChange={(e) => renameActivity(activity.id, e.target.value)}
                    className="text-lg font-semibold bg-transparent border-none focus:ring-0 text-white placeholder-white/70"
                  />
                  <Edit2 className="w-4 h-4 text-white/70" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-4xl font-bold text-center my-4 font-mono ${activity.isRunning ? 'text-red-500' : 'text-white'}`}>
                  {formatTime(activity.time)}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center space-x-2">
                <Button
                  onClick={() => toggleTimer(activity.id)}
                  variant="secondary"
                  size="icon"
                  className="bg-white/20 hover:bg-white/30 text-white"
                >
                  {activity.isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <Button
                  onClick={() => resetTimer(activity.id)}
                  variant="secondary"
                  size="icon"
                  className="bg-white/20 hover:bg-white/30 text-white"
                >
                  <StopCircle className="h-4 w-4" />
                </Button>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={() => toggleAlert(activity.id)}
                      variant="secondary"
                      size="icon"
                      className={`${activity.alertEnabled ? 'bg-white/40' : 'bg-white/20'} hover:bg-white/30 text-white`}
                    >
                      {activity.alertEnabled ? <Bell className="h-4 w-4" /> : <BellOff className="h-4 w-4" />}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Alert after: {formatTime(activity.alertTime)}</p>
                  </TooltipContent>
                </Tooltip>
              </CardFooter>
            </Card>
          ))}
          <Card 
            className="bg-gradient-to-br from-gray-200 to-gray-600 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center p-6 transform hover:scale-105" 
          >
            <PlusCircle className="w-12 h-12 text-gray-800 mb-4" />
            <Button
              onClick={addNewActivity}
              variant="secondary"
              className="bg-gray-800 hover:bg-gray-700 text-white w-full"
            >
              Add New Activity
            </Button>
          </Card>
        </div>
        <ToastContainer position="bottom-right" autoClose={5000} />
      </div>
    </TooltipProvider>
  )
}